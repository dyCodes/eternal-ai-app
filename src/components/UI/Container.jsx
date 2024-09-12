import React from 'react';

const Container = ({ children, className }) => {
	return <div className={`container mx-auto px-6 lg:px-10 xl:px-16 ${className ?? ''}`}>{children}</div>;
};

export default Container;
