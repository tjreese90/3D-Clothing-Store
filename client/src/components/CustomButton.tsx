import React, { useMemo } from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

interface CustomButtonProps {
	type: 'filled' | 'outline';
	title: string;
	customStyles: string;
	handleClick: () => void;
	disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	type,
	title,
	customStyles,
	handleClick,
	disabled = false,
}) => {
	const snap = useSnapshot(state);

	const generateStyle = useMemo(() => {
		if (type === 'filled') {
			return {
				backgroundColor: snap.color,
				color: getContrastingColor(snap.color),
				opacity: disabled ? 0.6 : 1,
				cursor: disabled ? 'not-allowed' : 'pointer',
			};
		} else {
			return {
				borderWidth: '1px',
				borderColor: snap.color,
				color: snap.color,
				opacity: disabled ? 0.6 : 1,
				cursor: disabled ? 'not-allowed' : 'pointer',
			};
		}
	}, [type, snap.color, disabled]);

	return (
		<button
			className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
			style={generateStyle}
			onClick={handleClick}
			disabled={disabled}
		>
			{title}
		</button>
	);
};

export default React.memo(CustomButton);
