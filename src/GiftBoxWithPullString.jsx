import React from 'react';

const DancingDog = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {/* Dancing Dog Container */}
      <div className="relative">
        {/* Dog Animation */}
        <div className="w-32 h-32 text-center text-5xl animate-dance">
          🐕
        </div>
        
        {/* Dance Animation using Tailwind's custom animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse text-4xl text-yellow-500">
          <div className="animate-bounce text-5xl">🎶</div>
        </div>
      </div>
    </div>
  );
};

export default DancingDog;
