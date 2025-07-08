import React, { useState, useEffect } from 'react';
import { Search, User, Bell, Menu, X, Trophy, Ticket, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { balance } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Calculate opacity based on scroll position (0-100)
  const scrollProgress = Math.min(scrollY / 300, 1);

  const navigationItems = [
    { label: 'Головна', href: '/' },
    { label: 'Переможці', href: '/winners' },
    { label: 'Профіль', href: '/profile' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-red-700/10 shadow-lg overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Base transparent background */}
        <div className="absolute inset-0 bg-red-500/5 backdrop-blur-md"></div>
        
        {/* Top edge animation */}
        <div 
          className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-cyan-500/90 via-cyan-900/70 to-transparent backdrop-blur-md transition-all duration-700 ease-out"
          style={{
            clipPath: scrollDirection === 'down' 
              ? `polygon(0 0, 100% 0, 100% ${scrollProgress * 50}%, 0 ${scrollProgress * 50}%)`
              : `polygon(0 ${(1 - scrollProgress) * 50}%, 100% ${(1 - scrollProgress) * 50}%, 100% 0, 0 0)`,
            opacity: scrollProgress
          }}
        ></div>
        
        {/* Bottom edge animation */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-cyan-500/90 via-cyan-900/70 to-transparent backdrop-blur-md transition-all duration-700 ease-out"
          style={{
            clipPath: scrollDirection === 'down'
              ? `polygon(0 ${100 - scrollProgress * 50}%, 100% ${100 - scrollProgress * 50}%, 100% 100%, 0 100%)`
              : `polygon(0 100%, 100% 100%, 100% ${100 - (1 - scrollProgress) * 50}%, 0 ${100 - (1 - scrollProgress) * 50}%)`,
            opacity: scrollProgress
          }}
        ></div>
        
        {/* Center fill animation */}
        <div 
          className="absolute inset-0 bg-cyan-300/85 backdrop-blur-md transition-all duration-500 ease-out"
          style={{
            clipPath: scrollDirection === 'down'
              ? `polygon(0 ${scrollProgress * 50}%, 100% ${scrollProgress * 50}%, 100% ${100 - scrollProgress * 50}%, 0 ${100 - scrollProgress * 50}%)`
              : `polygon(0 ${50 - (1 - scrollProgress) * 50}%, 100% ${50 - (1 - scrollProgress) * 50}%, 100% ${50 + (1 - scrollProgress) * 50}%, 0 ${50 + (1 - scrollProgress) * 50}%)`,
            opacity: scrollProgress > 0.3 ? scrollProgress : 0
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div 
              className="p-2 rounded-lg shadow-lg transition-all duration-500"
              style={{
                background: scrollProgress > 0.2 
                  ? 'linear-gradient(135deg, #dc2626, #991b1b)' 
                  : 'linear-gradient(135deg, #dc2626, #ffffff)'
              }}
            >
              <Trophy className="h-6 w-6 text-cyan-300" />
            </div>
            <span 
              className="text-xl font-bold transition-all duration-500"
              style={{
                background: scrollProgress > 0.2
                  ? 'linear-gradient(135deg, #fef3c7, #fbbf24)'
                  : 'linear-gradient(135deg, #e0f2fe, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              LuckyHub
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-12">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.href ? 'border-b-2 border-yellow-400' : ''
                }`}
                style={{
                  color: scrollProgress > 0.2 ? '#fef3c7' : '#f0f9ff',
                  textShadow: scrollProgress > 0.2 ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-6">
            <div className="relative w-full">
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300"
                style={{ color: scrollProgress > 0.2 ? '#fbbf24' : '#fbbf24' }}
              />
              <input
                type="text"
                placeholder="Пошук лотерей..."
                className="w-full pl-10 pr-4 py-2 rounded-lg text-amber-100 placeholder-amber-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                style={{
                  backgroundColor: scrollProgress > 0.2 
                    ? 'rgba(146, 64, 14, 0.7)' 
                    : 'rgba(146, 64, 14, 0.5)',
                  borderColor: scrollProgress > 0.2 
                    ? 'rgba(217, 119, 6, 0.6)' 
                    : 'rgba(217, 119, 6, 0.5)',
                  backdropFilter: 'blur(8px)'
                }}
              />
            </div>
          </div>

          {/* User Balance Widget */}
          <div className="hidden md:flex items-center mr-4">
            <div 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: scrollProgress > 0.2 
                  ? 'rgba(146, 64, 14, 0.7)' 
                  : 'rgba(146, 64, 14, 0.5)',
                borderColor: scrollProgress > 0.2 
                  ? 'rgba(217, 119, 6, 0.6)' 
                  : 'rgba(217, 119, 6, 0.5)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Wallet 
                className="h-4 w-4 transition-colors duration-300"
                style={{ color: scrollProgress > 0.2 ? '#fbbf24' : '#fbbf24' }}
              />
              <span 
                className="font-semibold text-sm transition-colors duration-300"
                style={{ color: scrollProgress > 0.2 ? '#fef3c7' : '#f0f9ff' }}
              >
                ₴{balance.toLocaleString()}
              </span>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/my-tickets"
              className="hidden md:flex items-center space-x-2 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                background: scrollProgress > 0.2
                  ? 'linear-gradient(135deg, #d97706, #f59e0b)'
                  : 'linear-gradient(135deg, #d97706, #f59e0b)'
              }}
            >
              <Ticket className="h-4 w-4" />
              <span>Мої квитки</span>
            </Link>
            <button 
              className="md:hidden p-2 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                color: scrollProgress > 0.2 ? '#fde68a' : '#fde68a' 
              }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden border-t backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: scrollProgress > 0.2 
              ? 'rgba(14, 116, 144, 0.95)' 
              : 'rgba(14, 116, 144, 0.95)',
            borderColor: scrollProgress > 0.2 
              ? 'rgba(6, 182, 212, 0.3)' 
              : 'rgba(6, 182, 212, 0.3)'
          }}
        >
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-all duration-300 hover:bg-amber-700/30 rounded ${
                  location.pathname === item.href ? 'bg-amber-700/50' : ''
                }`}
                style={{
                  color: scrollProgress > 0.2 ? '#fef3c7' : '#f0f9ff'
                }}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Balance */}
            <div className="px-3 py-2 bg-amber-700/50 rounded border border-amber-600/50 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Wallet className="h-4 w-4 text-amber-300" />
                <span className="text-amber-100 font-semibold text-sm">₴{balance.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;