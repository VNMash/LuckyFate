import React from 'react';

const Logo = () => {
  return (
    <div className="fixed top-4 left-4 z-[60]">
      <img 
        src="/50bb1bac-7ed1-40bf-9f2a-5e80e3762c45.jpg" 
        alt="LuckyFate Logo"
        className="h-24 w-auto object-contain opacity-100 drop-shadow-2xl"
        style={{
          filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 1))'
        }}
      />
    </div>
  );
};

export default Logo;