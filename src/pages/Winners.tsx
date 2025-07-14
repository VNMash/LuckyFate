import React, { useState } from 'react';
import { Trophy, Calendar, Ticket, Star, Filter, Search, Medal, Crown, Award } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import type { Winner } from '../types/navigation';

const Winners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const parallaxOffset = useParallax(0.3);

  const winners: Winner[] = [
    {
      id: '1',
      name: 'Оле Петренко',
      avatar: 'public/Waldemar.png',
      prize: 'BMW X5 2024',
      prizeImage: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=400',
      winDate: '2024-12-15',
      ticketNumber: 'LH-2024-001847',
      prizeValue: 2500000,
      category: 'Автомобілі',
      testimonial: 'Не вірив до останнього! Дякую LuckyHub за здійснення мрії!'
    },
    {
      id: '2',
      name: 'Марія Коваленко',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      prize: 'iPhone 15 Pro Max',
      prizeImage: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
      winDate: '2024-12-10',
      ticketNumber: 'LH-2024-002156',
      prizeValue: 65000,
      category: 'Електроніка',
      testimonial: 'Купила всього один квиток і виграла! Неймовірно!'
    },
    {
      id: '3',
      name: 'Дмитро Іваненко',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      prize: 'Rolex Submariner',
      prizeImage: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400',
      winDate: '2024-12-08',
      ticketNumber: 'LH-2024-001923',
      prizeValue: 450000,
      category: 'Розкіш',
      testimonial: 'Завжди мріяв про такий годинник. Дякую за шанс!'
    },
    {
      id: '4',
      name: 'Анна Сидоренко',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      prize: 'Тур на Мальдіви',
      prizeImage: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
      winDate: '2024-12-05',
      ticketNumber: 'LH-2024-003421',
      prizeValue: 180000,
      category: 'Подорожі',
      testimonial: 'Найкращий подарунок на день народження! Рекомендую всім!'
    },
    {
      id: '5',
      name: 'Віктор Мельник',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      prize: 'PlayStation 5 Pro',
      prizeImage: 'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=400',
      winDate: '2024-12-03',
      ticketNumber: 'LH-2024-002847',
      prizeValue: 25000,
      category: 'Ігри',
      testimonial: 'Син в захваті! Тепер граємо разом кожен вечір.'
    },
    {
      id: '6',
      name: 'Катерина Бондаренко',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
      prize: 'MacBook Pro M3',
      prizeImage: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      winDate: '2024-12-01',
      ticketNumber: 'LH-2024-004156',
      prizeValue: 120000,
      category: 'Електроніка',
      testimonial: 'Ідеально для моєї роботи дизайнера. Дуже вдячна!'
    }
  ];

  const categories = ['all', 'Автомобілі', 'Електроніка', 'Розкіш', 'Подорожі', 'Ігри'];

  const filteredWinners = winners.filter(winner => {
    const matchesCategory = selectedCategory === 'all' || winner.category === selectedCategory;
    const matchesSearch = winner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         winner.prize.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRarityIcon = (value: number) => {
    if (value >= 1000000) return <Crown className="h-6 w-6 text-purple-500" />;
    if (value >= 500000) return <Medal className="h-6 w-6 text-yellow-500" />;
    if (value >= 100000) return <Award className="h-6 w-6 text-orange-500" />;
    return <Trophy className="h-6 w-6 text-blue-500" />;
  };

  const getRarityBorder = (value: number) => {
    if (value >= 1000000) return 'border-purple-400 bg-purple-50';
    if (value >= 500000) return 'border-yellow-400 bg-yellow-50';
    if (value >= 100000) return 'border-orange-400 bg-orange-50';
    return 'border-blue-400 bg-blue-50';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-purple-100/60 via-blue-50/60 to-cyan-100/60"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
      </div>

      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full shadow-lg">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Наші переможці
              </h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Кожен день хтось стає щасливішим завдяки LuckyHub. Подивіться на історії успіху наших переможців!
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">15,847</div>
              <div className="text-gray-600">Щасливих переможців</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">₴127M</div>
              <div className="text-gray-600">Загальна вартість призів</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">98.7%</div>
              <div className="text-gray-600">Задоволених клієнтів</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-12 shadow-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Пошук переможців або призів..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Категорія:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'Всі' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Winners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWinners.map((winner, index) => (
              <div 
                key={winner.id}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${getRarityBorder(winner.prizeValue)} group hover:scale-105`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Prize Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={winner.prizeImage} 
                    alt={winner.prize}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    {getRarityIcon(winner.prizeValue)}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{winner.prize}</h3>
                    <p className="text-yellow-300 font-semibold">₴{winner.prizeValue.toLocaleString()}</p>
                  </div>
                </div>

                {/* Winner Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={winner.avatar} 
                      alt={winner.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-300"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{winner.name}</h4>
                      <p className="text-sm text-gray-600">{winner.category}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  {winner.testimonial && (
                    <blockquote className="text-gray-700 italic mb-4 text-sm">
                      "{winner.testimonial}"
                    </blockquote>
                  )}

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(winner.winDate).toLocaleDateString('uk-UA')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Ticket className="h-4 w-4" />
                      <span className="font-mono">{winner.ticketNumber}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Показати більше переможців
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Winners;