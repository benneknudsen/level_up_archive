import React, { useState } from 'react';
import { searchVideoGames, VideoGame } from '../../../lib/rawg/video-game-api';

export const VideoGameSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<VideoGame[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    setError(null);

    if (searchQuery.length > 2) {
      setIsLoading(true);
      try {
        const results = await searchVideoGames(searchQuery);
        setSuggestions(results);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch game suggestions');
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for video games..."
          className="
            w-full 
            pl-10 
            pr-4 
            py-3 
            rounded-xl 
            bg-white/20 
            backdrop-blur-md 
            border 
            border-gray-300/50 
            text-white 
            placeholder-gray-300 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500/50 
            transition-all 
            duration-300 
            shadow-lg
          "
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="
            absolute 
            left-3 
            top-1/2 
            -translate-y-1/2 
            w-5 
            h-5 
            text-gray-400
            stroke-current
            stroke-2
          "
          fill="none"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        
        {isLoading && (
          <div className="
            absolute 
            right-3 
            top-1/2 
            -translate-y-1/2 
            w-5 
            h-5 
            border-2 
            border-t-2 
            border-white/50 
            border-t-white 
            rounded-full 
            animate-spin
          "></div>
        )}
      </div>
      
      {error && (
        <div className="
          mt-2 
          text-red-400 
          bg-white/10 
          backdrop-blur-md 
          rounded-xl 
          p-3 
          text-center
        ">
          {error}
        </div>
      )}
      
      {suggestions.length > 0 && (
        <ul className="
          absolute 
          z-10 
          w-full 
          bg-white/20 
          backdrop-blur-md 
          rounded-xl 
          mt-2 
          shadow-lg 
          max-h-64 
          overflow-y-auto 
          border 
          border-gray-300/50
        ">
          {suggestions.map((game) => (
            <li 
              key={game.id} 
              className="
                px-4 
                py-2 
                hover:bg-white/30 
                cursor-pointer 
                flex 
                items-center 
                space-x-3 
                transition 
                duration-200
              "
            >
              {game.cover && (
                <img 
                  src={game.cover.url.replace('t_thumb', 't_cover_small')} 
                  alt={`${game.name} cover`} 
                  className="w-12 h-16 object-cover rounded-md"
                />
              )}
              <span className="text-white">{game.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};