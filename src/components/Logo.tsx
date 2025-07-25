import React from 'react';

const Logo = () => {
  return (
    <div className="fixed top-3  left-8  z-[60]">
      <img 
        src="/Знімок екрана 2025-07-10 151119.png" 
        alt="LuckyFate Logo"
        className="h-32 w-auto object-contain  opacity-100 drop-shadow-2xl"
        style={{
          filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.5))'
        }}
      />
    </div>
  );
};

export default Logo;