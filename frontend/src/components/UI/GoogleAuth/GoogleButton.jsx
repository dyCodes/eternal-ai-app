import { GoogleLogo } from '@/components/icons/GoogleLogo.icon';
import { GoogleLogin } from '@react-oauth/google';

export const GoogleButton = ({ onLoginSuccess, onLoginError }) => {
  return (
    <GoogleLogin
      theme='outline'
      text='continue_with'
      size='large'
      cancel_on_tap_outside={true}
      onSuccess={onLoginSuccess}
      onError={onLoginError}
    />
  );
};

export const GoogleSignedInButton = ({ user }) => {
  return (
    <button className='flex items-center bg-white border border-[#dadce0] rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-50'>
      <div className='flex items-center gap-x-2'>
        <img
          className='w-6 rounded-full'
          src={user?.picture}
          alt='user profile image'
        />

        <div className='text-left leading-none'>
          <div className='text-[12px] font-medium mb-[4px]'>
            Signed in as {user?.given_name}
          </div>
          <div className='text-[11px] font-normal'>{user?.email}</div>
        </div>

        <div className='googleLogo ml-2'>
          <GoogleLogo className='w-6' />
        </div>
      </div>
    </button>
  );
};
