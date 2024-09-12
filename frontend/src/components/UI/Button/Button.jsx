import React from 'react';

const Button = ({ children, bg, onClick, type = 'button', className, disabled = false }) => {
	const styles = `btn flex items-center gap-x-2 text-[15px] ${className}`;

	return (
		<button className={styles} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
