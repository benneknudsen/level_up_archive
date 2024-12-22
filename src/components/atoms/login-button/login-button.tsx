import React, { useContext } from 'react';
import { AuthModalContext } from '../../../main';

interface LoginButtonProps {
  className?: string;
  backgroundClassName?: string;
  textClassName?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ 
  className = '',
  backgroundClassName = '',
  textClassName = ''
}) => {
  const { openAuthModal } = useContext(AuthModalContext);

  return (
    <button 
      onClick={openAuthModal}
      className={`
        px-4 py-2 
        rounded-lg 
        hover:bg-opacity-90 
        transition-all duration-300 ease-in-out
        bg-[var(--current-color)]
        text-black
        ${backgroundClassName}
        ${textClassName}
        ${className}
      `}
    >
      Login
    </button>
  );
};

export default LoginButton;