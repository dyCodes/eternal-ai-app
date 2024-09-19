import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

const Button = ({
  children,
  bg,
  onClick,
  type = 'button',
  className,
  disabled = false,
  loading,
}) => {
  const styles = `btn flex items-center gap-x-2 text-[15px] font-medium shadow-sm ${className}`;

  return (
    <button
      className={styles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <BiLoaderCircle color='#222' className='animate-spin' size={24} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
