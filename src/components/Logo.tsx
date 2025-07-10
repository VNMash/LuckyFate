import React from 'react';

const Logo = () => {
  return (
    <div className="fixed top-2 left-6 z-[60]">
      <img 
        src="/98fb14e9-136d-428e-8f57-adda526352f6-removebg-preview.png" 
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