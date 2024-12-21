import React, { useContext } from 'react';
import { AuthModalContext } from '../../../main';

export const LoginButton: React.FC = () => {
  const { openAuthModal } = useContext(AuthModalContext);

  return (
    <button 
      onClick={openAuthModal}
      className="bg-accent-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
    >
      Login
    </button>
  );
};