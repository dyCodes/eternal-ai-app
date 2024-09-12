import React from 'react';

const TextAreaBox = ({ name, value, label, onChange, ...rest }) => {
	return (
		<div className='inputBox'>
			<label htmlFor={name}>{label}</label>
			<div className='inputBox__inner'>
				<textarea
					name={name}
					value={value}
					id={name}
					onChange={(event) => onChange(event)}
					className='text-gray-900 text-sm block w-full p-2.5 bg-transparent'
					{...rest}></textarea>
			</div>
		</div>
	);
};

export default TextAreaBox;
