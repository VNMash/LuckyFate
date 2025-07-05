import React, { useState } from 'react';
import { Search, User, Bell, Menu, X, Trophy, Ticket } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-red-500/5 /*backdrop-blur-md */ border-b border-red-700/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-700 to-white-900 p-2 rounded-lg shadow-lg">
              <Trophy className="h-6 w-6 text-cyan" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-100 to-white-900 bg-clip-text text-transparent">
              LuckyHub
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-amber-100 hover:text-yellow-300 font-medium transition-colors">
              Активні лотереї
            </a>
            <a href="#" className="text-amber-100 hover:text-yellow-300 font-medium transition-colors">
              Категорії
            </a>
            <a href="#" className="text-amber-100 hover:text-yellow-300 font-medium transition-colors">
              Переможці
            </a>
            <a href="#" className="text-amber-100 hover:text-yellow-300 font-medium transition-colors">
              Як це працює
            </a>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Пошук лотерей..."
                className="w-full pl-10 pr-4 py-2 bg-amber-800/50 border border-amber-600/50 rounded-lg text-amber-100 placeholder-amber-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-amber-200 hover:text-yellow-300 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
              <Ticket className="h-4 w-4" />
              <span>Мої квитки</span>
            </button>
            <button className="p-2 text-amber-200 hover:text-yellow-300 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden p-2 text-amber-200 hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyan-300/95 backdrop-blur-md border-t border-sky-500/30">
          <div className="px-4 py-2 space-y-1">
            <a href="#" className="block px-3 py-2 text-amber-100 hover:text-yellow-300 font-medium">
              Активні лотереї
            </a>
            <a href="#" className="block px-3 py-2 text-amber-100 hover:text-yellow-300 font-medium">
              Категорії
            </a>
            <a href="#" className="block px-3 py-2 text-amber-100 hover:text-yellow-300 font-medium">
              Переможці
            </a>
            <a href="#" className="block px-3 py-2 text-amber-100 hover:text-yellow-300 font-medium">
              Як це працює
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;