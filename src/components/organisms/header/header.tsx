import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { LoginButton } from '../../atoms/login-button/login-button';
import { UserButton } from '@clerk/clerk-react';
import { Logo } from '../../atoms/logo/logo';

export const Header = () => {
  return (
    <header className="w-[calc(100%-4rem)] max-w-6xl mx-auto my-4 bg-bg-secondary bg-opacity-60 backdrop-blur-md rounded-xl sticky top-4 z-50 shadow-lg">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="auth-buttons flex items-center space-x-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <LoginButton />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};