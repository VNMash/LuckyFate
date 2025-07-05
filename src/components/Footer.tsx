import React from 'react';
import { Trophy, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-800/95 backdrop-blur-md text-amber-100 border-t border-amber-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-2 rounded-lg shadow-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-amber-200">LuckyHub</span>
            </div>
            <p className="text-amber-300 mb-6">
              Перший в Україні лотерейний маркет-плейс, де кожен може виграти мрію за ціною лотерейного квитка.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-200">Швидкі посилання</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Про нас</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Як це працює</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Переможці</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Блог</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Партнерство</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-200">Підтримка</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Центр допомоги</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Умови використання</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Політика конфіденційності</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Безпека</a></li>
              <li><a href="#" className="text-amber-300 hover:text-yellow-300 transition-colors">Зв'язок з нами</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-200">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-amber-300">info@luckyhub.ua</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-amber-300">+38 (044) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-amber-300">Київ, Україна</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-amber-200">Підпишись на новини</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Твій email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-amber-800/50 border border-amber-600/50 text-amber-100 placeholder-amber-400 focus:outline-none focus:border-yellow-400 backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-amber-600 to-yellow-500 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all duration-200">
                  ✓
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700/30 mt-12 pt-8 text-center text-amber-300">
          <p>&copy; 2024 LuckyHub. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;