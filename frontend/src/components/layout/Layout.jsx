import React from 'react';
import { Inter } from 'next/font/google';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

/**
 * This is a React functional component that serves as a layout for other pages.
 * It wraps the children components with a header and applies the 'inter' font style.
 *
 * @param {Object} props - The component's properties.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 *
 * @returns {React.ReactElement} - The layout component with the applied styles and children components.
 */
function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Header />
      <main className='my-8'>{children}</main>
    </div>
  );
}
export default Layout;
