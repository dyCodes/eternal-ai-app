import React from 'react';
import Container from '../UI/Container';
import Link from 'next/link';
import Button from '../UI/Button/Button';
import { MdOutlinePhone } from 'react-icons/md';

const Header = () => {
	return (
		<header className='py-3.5 bg-gradient'>
			<Container>
				<div className='fx-between'>
					<Link href='/'>
						<h1 className='text-xl lg:text-3xl font-medium'>Eternal AI</h1>
					</Link>

					<Button className={'bg-secondary text-white'}>
						<MdOutlinePhone />
						<span>Book a dermatologist</span>
					</Button>
				</div>
			</Container>
		</header>
	);
};

export default Header;
