import React, { useState } from 'react';
import { User, Settings, Trophy, Ticket, Calendar, Star, Edit, Camera, Shield, Bell, CreditCard, Gift } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useUser } from '../contexts/UserContext';
import type { UserProfile, Achievement } from '../types/navigation';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const parallaxOffset = useParallax(0.15);
  const { totalTickets, totalSpent } = useUser();

  const userProfile: UserProfile = {
    id: '1',
    name: 'Володимир Іванович',
    email: 'vladimirkosovetskiy@gmail.com',
    avatar: 'public/Waldemar.png',
    joinDate: '2025-05-29',
    totalTickets,
    totalWins: 3,
    totalSpent,
    favoriteCategories: ['Сауна', 'Приколи', 'Подорожі'],
    achievements: [
      {
        id: '1',
        title: 'Перший крок',
        description: 'Купив свій перший лотерейний квиток',
        icon: '🎫',
        unlockedDate: '2023-03-15',
        rarity: 'common'
      },
      {
        id: '2',
        title: 'Щасливчик',
        description: 'Виграв свою першу лотерею',
        icon: '🍀',
        unlockedDate: '2023-05-22',
        rarity: 'rare'
      },
      {
        id: '3',
        title: 'Колекціонер',
        description: 'Купив квитки в 10 різних категоріях',
        icon: '🏆',
        unlockedDate: '2023-08-10',
        rarity: 'epic'
      },
      {
        id: '4',
        title: 'Великий виграш',
        description: 'Виграв приз вартістю понад ₴100,000',
        icon: '💎',
        unlockedDate: '2023-11-03',
        rarity: 'legendary'
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Огляд', icon: User },
    { id: 'achievements', label: 'Досягнення', icon: Trophy },
    { id: 'settings', label: 'Налаштування', icon: Settings }
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: 'from-gray-400 to-gray-600',
      rare: 'from-blue-400 to-blue-600',
      epic: 'from-purple-400 to-purple-600',
      legendary: 'from-yellow-400 to-orange-500'
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const getRarityBorder = (rarity: string) => {
    const borders = {
      common: 'border-gray-300',
      rare: 'border-blue-300',
      epic: 'border-purple-300',
      legendary: 'border-yellow-300'
    };
    return borders[rarity as keyof typeof borders] || borders.common;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-indigo-100/60 via-purple-50/60 to-pink-100/60"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-24 left-12 w-20 h-20 bg-indigo-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.7}px) rotate(${parallaxOffset * 0.2}deg)` }}
        />
        <div 
          className="absolute top-48 right-16 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
      </div>

      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full shadow-lg">
                <User className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Мій профіль
              </h1>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div 
              className="lg:col-span-1"
              style={{ 
                animation: 'slideInFromLeft 0.8s ease-out forwards',
                animationDelay: '0.1s',
                opacity: 0,
                transform: 'translateX(-50px)'
              }}
            >
              {/* Profile Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 p-6 mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={userProfile.avatar} 
                      alt={userProfile.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-indigo-300"
                    />
                    <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{userProfile.name}</h3>
                  <p className="text-gray-600 mb-4">{userProfile.email}</p>
                  <div className="text-sm text-gray-500">
                    Учасник з {new Date(userProfile.joinDate).toLocaleDateString('uk-UA')}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                {tabs.map(tab => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-700 hover:bg-indigo-50'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Content */}
            <div 
              className="lg:col-span-3"
              style={{ 
                animation: 'slideInFromRight 0.8s ease-out forwards',
                animationDelay: '0.2s',
                opacity: 0,
                transform: 'translateX(50px)'
              }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid md:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
                    <div 
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 hover:scale-105 hover:rotate-2 transition-all duration-500"
                      style={{ 
                        animation: 'bounceInLeft 0.8s ease-out forwards',
                        animationDelay: '0.3s',
                        opacity: 0
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Ticket className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{totalTickets}</div>
                          <div className="text-gray-600 text-sm">Квитків куплено</div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200 hover:scale-105 hover:-rotate-2 transition-all duration-500"
                      style={{ 
                        animation: 'bounceInUp 0.8s ease-out forwards',
                        animationDelay: '0.4s',
                        opacity: 0
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Trophy className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">{userProfile.totalWins}</div>
                          <div className="text-gray-600 text-sm">Виграшів</div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200 hover:scale-105 hover:rotate-2 transition-all duration-500"
                      style={{ 
                        animation: 'bounceInDown 0.8s ease-out forwards',
                        animationDelay: '0.5s',
                        opacity: 0
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <span className="text-purple-600 font-bold text-lg">₴</span>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">₴{totalSpent.toLocaleString()}</div>
                          <div className="text-gray-600 text-sm">Витрачено</div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200 hover:scale-105 hover:-rotate-2 transition-all duration-500"
                      style={{ 
                        animation: 'bounceInRight 0.8s ease-out forwards',
                        animationDelay: '0.6s',
                        opacity: 0
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Star className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">{Math.round((userProfile.totalWins / totalTickets) * 100)}%</div>
                          <div className="text-gray-600 text-sm">Успішність</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Favorite Categories */}
                  <div 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    style={{ 
                      animation: 'fadeInScale 0.8s ease-out forwards',
                      animationDelay: '0.7s',
                      opacity: 0
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Улюблені категорії</h3>
                    <div className="flex flex-wrap gap-3">
                      {userProfile.favoriteCategories.map(category => (
                        <span 
                          key={category}
                          className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    style={{ 
                      animation: 'fadeInScale 0.8s ease-out forwards',
                      animationDelay: '0.8s',
                      opacity: 0
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Остання активність</h3>
                    <div className="space-y-4">
                      <div 
                        className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                        style={{ 
                          animation: 'slideInFromLeft 0.6s ease-out forwards',
                          animationDelay: '0.9s',
                          opacity: 0
                        }}
                      >
                        <div className="relative">
                          <img 
                            src="https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=100" 
                            alt="BMW X5 2024"
                            className="w-12 h-12 rounded-lg object-cover border-2 border-green-300"
                          />
                          <div className="absolute -top-1 -right-1 bg-green-500 p-1 rounded-full">
                            <Trophy className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Виграв BMW X5 2024</div>
                          <div className="text-sm text-gray-600">3 дні тому</div>
                        </div>
                      </div>
                      
                      <div 
                        className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                        style={{ 
                          animation: 'slideInFromLeft 0.6s ease-out forwards',
                          animationDelay: '1.0s',
                          opacity: 0
                        }}
                      >
                        <div className="relative">
                          <img 
                            src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=100" 
                            alt="iPhone 15 Pro Max"
                            className="w-12 h-12 rounded-lg object-cover border-2 border-blue-300"
                          />
                          <div className="absolute -top-1 -right-1 bg-blue-500 p-1 rounded-full">
                            <Ticket className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Купив квиток на iPhone 15 Pro Max</div>
                          <div className="text-sm text-gray-600">1 тиждень тому</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 p-6 hover:shadow-2xl transition-all duration-500"
                  style={{ 
                    animation: 'fadeInScale 0.8s ease-out forwards',
                    animationDelay: '0.3s',
                    opacity: 0
                  }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Досягнення</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {userProfile.achievements.map((achievement, index) => (
                      <div 
                        key={achievement.id}
                        className={`p-6 rounded-2xl border-2 ${getRarityBorder(achievement.rarity)} bg-gradient-to-br ${getRarityColor(achievement.rarity)} bg-opacity-10 hover:scale-110 hover:rotate-3 transition-all duration-500 hover:shadow-2xl`}
                        style={{ 
                          animation: 'achievementBounce 0.8s ease-out forwards',
                          animationDelay: `${0.4 + index * 0.1}s`,
                          opacity: 0
                        }}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-3">{achievement.icon}</div>
                          <h4 className="font-bold text-gray-800 mb-2">{achievement.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                          <div className="text-xs text-gray-500">
                            Отримано: {new Date(achievement.unlockedDate).toLocaleDateString('uk-UA')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    style={{ 
                      animation: 'slideInFromTop 0.8s ease-out forwards',
                      animationDelay: '0.3s',
                      opacity: 0
                    }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-800">Особиста інформація</h3>
                      <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
                        <Edit className="h-4 w-4" />
                        <span>Редагувати</span>
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я</label>
                        <input 
                          type="text" 
                          value={userProfile.name}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          value={userProfile.email}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security Settings */}
                  <div 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    style={{ 
                      animation: 'slideInFromLeft 0.8s ease-out forwards',
                      animationDelay: '0.4s',
                      opacity: 0
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Безпека</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5 w-5 text-gray-600" />
                          <div>
                            <div className="font-medium text-gray-800">Двофакторна автентифікація</div>
                            <div className="text-sm text-gray-600">Додатковий захист вашого акаунту</div>
                          </div>
                        </div>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                          Увімкнути
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Bell className="h-5 w-5 text-gray-600" />
                          <div>
                            <div className="font-medium text-gray-800">Сповіщення</div>
                            <div className="text-sm text-gray-600">Отримувати повідомлення про виграші</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    style={{ 
                      animation: 'slideInFromRight 0.8s ease-out forwards',
                      animationDelay: '0.5s',
                      opacity: 0
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Способи оплати</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-5 w-5 text-gray-600" />
                          <div>
                            <div className="font-medium text-gray-800">**** **** **** 1234</div>
                            <div className="text-sm text-gray-600">Visa • Закінчується 12/26</div>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                          Редагувати
                        </button>
                      </div>
                      
                      <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                        + Додати новий спосіб оплати
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: translateX(10px) scale(1.05);
          }
          70% {
            transform: translateX(-5px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes bounceInRight {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: translateX(-10px) scale(1.05);
          }
          70% {
            transform: translateX(5px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes bounceInUp {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
          }
          70% {
            transform: translateY(5px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes bounceInDown {
          0% {
            opacity: 0;
            transform: translateY(-100px) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: translateY(10px) scale(1.05);
          }
          70% {
            transform: translateY(-5px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes achievementBounce {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-180deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(-90deg);
          }
          70% {
            transform: scale(0.9) rotate(-45deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;