import React from 'react';
import { Inter } from 'next/font/google';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
	return (
		<div className={inter.className}>
			<Header />
			<main className='mt-8'>{children}</main>
		</div>
	);
};

export default Layout;
