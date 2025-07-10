import React from 'react';

const Logo = () => {
  return (
    <div className="fixed top-1 left-2 z-[60]">
      <img 
        src="/a54698d3-75c3-457a-9b74-7ac25ca4580a-removebg-preview.png" 
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