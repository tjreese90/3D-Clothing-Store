import React from 'react';
import CustomButton from './CustomButton';

interface AIPickerProps {
	prompt: string;
	setPrompt: (prompt: string) => void;
	generatingImg: boolean;
	handleSubmit: (type: string) => void;
}

const AIPicker = ({
	prompt,
	setPrompt,
	generatingImg,
	handleSubmit,
}: AIPickerProps) => {
	return (
		<div className='aipicker-container'>
			<textarea
				placeholder='Ask AI...'
				rows={5}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				className='aipicker-textarea'
			/>
			<div className='flex flex-wrap gap-3'>
				{generatingImg ? (
					<CustomButton
						type='outline'
						title='Asking AI...'
						customStyles='text-xs'
						handleClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
				) : (
					<>
						<CustomButton
							type='outline'
							title='AI Logo'
							handleClick={() => handleSubmit('logo')}
							customStyles='text-xs'
						/>

						<CustomButton
							type='filled'
							title='AI Full'
							handleClick={() => handleSubmit('full')}
							customStyles='text-xs'
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default AIPicker;
