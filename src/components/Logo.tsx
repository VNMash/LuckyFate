import React from 'react';

const Logo = () => {
  return (
    <div className="fixed top-0 left-0 z-[60]">
      <img 
        src="/LogoLF.jpg" 
        alt="LuckyFate Logo"
        className="h-36 w-auto object-contain opacity-100 drop-shadow-2xl"
        style={{
          filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.5))'
        }}
      />
    </div>
  );
};

export default Logo;