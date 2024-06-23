import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

interface FilePickerProps {
	file: File | string;
	setFile: (file: File) => void;
	readFile: (type: string) => void;
}

const FilePicker: React.FC<FilePickerProps> = ({ file, setFile, readFile }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleFileChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const selectedFile = e.target.files![0];
			if (selectedFile && selectedFile.type.startsWith('image/')) {
				setFile(selectedFile);
				setError('');
			} else {
				setError('Please select a valid image file.');
			}
		},
		[setFile]
	);

	const handleReadFile = useCallback(
		async (type: string) => {
			setIsLoading(true);
			try {
				await readFile(type);
			} catch (err) {
				setError('Failed to read the file.');
			} finally {
				setIsLoading(false);
			}
		},
		[readFile]
	);

	return (
		<div className='filepicker-container p-4 bg-white rounded-lg shadow-md'>
			<div className='flex-1 flex flex-col items-center'>
				<input
					id='file-upload'
					type='file'
					accept='image/*'
					onChange={handleFileChange}
					className='hidden'
					aria-label='File upload'
				/>
				<label
					htmlFor='file-upload'
					className='filepicker-label cursor-pointer py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out'
					aria-label='Upload File'
				>
					Upload File
				</label>
				<p className='mt-2 text-gray-700 text-sm truncate w-full text-center'>
					{file === '' ? 'No file selected' : (file as File).name}
				</p>
				{error && <p className='mt-2 text-red-500 text-sm'>{error}</p>}
			</div>
			<div className='mt-4 flex flex-wrap gap-3 justify-center'>
				<CustomButton
					type='outline'
					title='Logo'
					handleClick={() => handleReadFile('logo')}
					customStyles='text-xs'
					disabled={isLoading}
				/>
				<CustomButton
					type='filled'
					title='Full'
					handleClick={() => handleReadFile('full')}
					customStyles='text-xs'
					disabled={isLoading}
				/>
			</div>
			{isLoading && <p className='mt-2 text-blue-500 text-sm'>Loading...</p>}
		</div>
	);
};

FilePicker.propTypes = {
	file: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)])
		.isRequired,
	setFile: PropTypes.func.isRequired,
	readFile: PropTypes.func.isRequired,
};

export default FilePicker;
