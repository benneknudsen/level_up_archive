import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`text-4xl animate-logo-glow font-VT323 ${className}`}>
      <span className="text-success-green">LevelUpArchive</span>
    </div>
  );
};