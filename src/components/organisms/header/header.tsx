import { useState, useEffect } from 'react';
import { LoginButton } from '../../atoms/login-button/login-button';
import Logo from '@/components/atoms/logo/logo';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        w-[calc(100%-4rem)] max-w-6xl mx-auto my-4 
        backdrop-blur-sm rounded-full 
        sticky top-4 z-50 shadow-lg position-absolute 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-[var(--current-color)] border-2 border-black bg-opacity-20' 
          : 'bg-bg-secondary border-2 border-bg-[var(--current-color)] bg-opacity-20'}
      `}
    >
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <Logo 
            logoClassName={`
              transition-colors duration-300 ease-in-out
              ${isScrolled 
                ? 'text-black' 
                : 'text-[var(--current-color)]'}
            `}
            textClassName={`
              transition-colors duration-300 ease-in-out
              ${isScrolled 
                ? 'text-black' 
                : 'text-[var(--current-color)]'}
            `}
          />
        </div>
        <div className="flex items-center space-x-4">
          <LoginButton 
            backgroundClassName={`
              ${isScrolled 
                ? '!bg-black' 
                : '!bg-[var(--current-color)]'}
            `}
            textClassName={`
              ${isScrolled 
                ? '!text-[var(--current-color)]' 
                : '!text-black'}
            `}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;