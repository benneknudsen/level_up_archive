import React from 'react';
import backgroundImage from '../assets/welcome.png'; // You'll need to add this image

export const Welcome: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Floating Text Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 flex items-center">
        {/* Text Content */}
        <div className="w-1/2 bg-bg-secondary bg-opacity-80 backdrop-blur-md p-12 rounded-xl shadow-lg animate-float">
          <h1 className="text-4xl font-bold text-accent-blue mb-6">Welcome to LevelUpArchive</h1>
          <p className="text-xl text-white mb-8">
            Embark on a journey of gaming discovery. Track your progress, 
            explore new challenges, and level up your gaming experience.
          </p>
          <button className="bg-success-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
            Start Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
};