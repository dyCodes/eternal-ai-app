import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../ui/Button/Button';
import { MdOutlinePhone } from 'react-icons/md';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useAuthContext } from '@/context/AuthContext';
import {
  GoogleButton,
  GoogleSignedInButton,
} from '../ui/GoogleAuth/GoogleButton';
import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import PopoverContent from '../ui/Popover/Popover';
import { BiLogOut } from 'react-icons/bi';

/**
 * The Header component is responsible for rendering the header section of the application.
 * It displays the application's name and provides navigation buttons based on the current route.
 *
 * @returns {JSX.Element} - The rendered Header component.
 */

function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const { user, onLoginSuccess, onLoginError, logOutUser } = useAuthContext();
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  useEffect(() => {
    // Close the navbar when the route changes
    setOpenNavbar(false);
  }, [pathname]);

  return (
    <header className='py-3.5 bg-gradient shadow-sm'>
      <Container>
        <div className='fx-between'>
          <Link href='/'>
            <h1 className='text-xl lg:text-3xl font-medium'>Eternal AI</h1>
          </Link>

          <div
            className={`md:!block transition-all ${
              openNavbar ? 'mobile_nav md:hidden' : 'hidden'
            }`}
          >
            <div className='buttons md:flex gap-x-3 items-center'>
              {(pathname === '/booking' ||
                pathname === '/booking/appointments') && (
                <Button
                  onClick={() => router.back()}
                  className={'bg-secondary text-white'}
                >
                  <FaArrowLeftLong />
                  <span>Go back</span>
                </Button>
              )}

              {!pathname.includes('/booking') && (
                <Link href='/booking'>
                  <Button className={'bg-secondary text-white'}>
                    <MdOutlinePhone />
                    <span>Book a dermatologist</span>
                  </Button>
                </Link>
              )}

              <div className='googleBtn'>
                {user ? (
                  <Popover className='z-40'>
                    <PopoverTrigger>
                      <GoogleSignedInButton user={user} />
                    </PopoverTrigger>

                    <PopoverContent className={'px-8'} showCloseIcon={false}>
                      <div className='fx-center'>
                        <Button
                          onClick={logOutUser}
                          className='bg-red-700 !px-8 text-white'
                        >
                          <span>Sign out</span>
                          <BiLogOut />
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <GoogleButton
                    onLoginSuccess={onLoginSuccess}
                    onLoginError={onLoginError}
                  />
                )}
              </div>
            </div>
          </div>

          <button
            data-collapse-toggle='navbar-default'
            type='button'
            onClick={toggleNavbar}
            className='md:hidden flex items-center w-8 h-8 justify-center text-sm text-[#000] rounded-md  hover:text-[#444]'
            aria-label='Toggle Navbar'
          >
            <svg
              className='w-5 h-5 text-secondary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
