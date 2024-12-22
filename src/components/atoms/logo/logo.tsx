import React from 'react';

interface LogoProps {
  logoClassName?: string;
  textClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  logoClassName = '', 
  textClassName = '' 
}) => {
  return (
    <div className={`text-3xl animate-logo-glow font-sans ${logoClassName}`}>
      <span className={`text-[var(--current-color)] ${textClassName}`}>
        LevelUpArchive
      </span>
    </div>
  );
};

export default Logo;