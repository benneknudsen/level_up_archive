// src/pages/welcome.tsx
import React from 'react';
import backgroundImage from '../assets/welcome.png';
import { VideoGameSearch } from '@/components/molecules/search/video-game-search';

export const Welcome: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Search Component */}
      <div className="relative z-10 w-full max-w-md">
        <VideoGameSearch />
      </div>
    </div>
  );
};