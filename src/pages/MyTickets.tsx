import React, { useState } from 'react';
import { Ticket, Calendar, Clock, Trophy, Filter, Search, Eye, Download, Share2 } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useUser } from '../contexts/UserContext';
import type { UserTicket } from '../types/navigation';

const MyTickets = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const parallaxOffset = useParallax(0.2);
  const { totalTickets, totalSpent } = useUser();

  const tickets: UserTicket[] = [
    {
      id: '1',
      lotteryId: 'lot-001',
      lotteryTitle: 'iPhone 15 Pro Max 256GB',
      lotteryImage: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
      ticketNumber: 'LH-2024-001847',
      purchaseDate: '2024-12-20T10:30:00',
      status: 'active',
      drawDate: '2024-12-31T23:59:59',
      ticketPrice: 100,
      category: 'Електроніка'
    },
    {
      id: '2',
      lotteryId: 'lot-002',
      lotteryTitle: 'BMW X5 2024',
      lotteryImage: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=400',
      ticketNumber: 'LH-2024-002156',
      purchaseDate: '2024-12-18T15:45:00',
      status: 'won',
      drawDate: '2024-12-19T20:00:00',
      ticketPrice: 500,
      category: 'Автомобілі'
    },
    {
      id: '3',
      lotteryId: 'lot-003',
      lotteryTitle: 'MacBook Pro 16" M3 Max',
      lotteryImage: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      ticketNumber: 'LH-2024-001923',
      purchaseDate: '2024-12-15T09:20:00',
      status: 'lost',
      drawDate: '2024-12-16T18:00:00',
      ticketPrice: 250,
      category: 'Електроніка'
    },
    {
      id: '4',
      lotteryId: 'lot-004',
      lotteryTitle: 'Тур на Мальдіви на 7 днів',
      lotteryImage: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
      ticketNumber: 'LH-2024-003421',
      purchaseDate: '2024-12-22T14:10:00',
      status: 'active',
      drawDate: '2024-12-28T18:00:00',
      ticketPrice: 200,
      category: 'Подорожі'
    },
    {
      id: '5',
      lotteryId: 'lot-005',
      lotteryTitle: 'PlayStation 5 Pro',
      lotteryImage: 'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=400',
      ticketNumber: 'LH-2024-002847',
      purchaseDate: '2024-12-10T11:30:00',
      status: 'active',
      drawDate: '2024-12-29T12:00:00',
      ticketPrice: 75,
      category: 'Ігри'
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'Всі квитки', color: 'gray' },
    { value: 'active', label: 'Активні', color: 'blue' },
    { value: 'won', label: 'Виграшні', color: 'green' },
    { value: 'lost', label: 'Програшні', color: 'red' }
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = selectedStatus === 'all' || ticket.status === selectedStatus;
    const matchesSearch = ticket.lotteryTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-blue-100 text-blue-800 border-blue-300',
      won: 'bg-green-100 text-green-800 border-green-300',
      lost: 'bg-red-100 text-red-800 border-red-300'
    };
    
    const labels = {
      active: 'Активний',
      won: 'Виграш!',
      lost: 'Програш'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const getTimeLeft = (drawDate: string) => {
    const now = new Date().getTime();
    const end = new Date(drawDate).getTime();
    const distance = end - now;
    
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      return `${days}д ${hours}г`;
    }
    return 'Завершено';
  };

  const activeTickets = tickets.filter(t => t.status === 'active').length;
  const wonTickets = tickets.filter(t => t.status === 'won').length;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-emerald-100/60 via-teal-50/60 to-cyan-100/60"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-32 left-16 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute top-64 right-24 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
      </div>

      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-full shadow-lg">
                <Ticket className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Мої квитки
              </h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Відстежуй свої лотерейні квитки, переглядай результати та керуй своїми участями
            </p>
          </div>

          {/* Stats Dashboard */}
          <div className="grid md:grid-cols-4 gap-6 mb-12" style={{ perspective: '1000px' }}>
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200 transform hover:scale-105 transition-all duration-500"
              style={{ 
                animation: 'slideInFromLeft 0.8s ease-out forwards',
                animationDelay: '0.1s',
                opacity: 0,
                transform: 'translateX(-50px) rotateY(-15deg)'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Ticket className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">{totalTickets}</div>
                  <div className="text-gray-600 text-sm">Всього квитків</div>
                </div>
              </div>
            </div>
            
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 transform hover:scale-105 transition-all duration-500"
              style={{ 
                animation: 'slideInFromTop 0.8s ease-out forwards',
                animationDelay: '0.2s',
                opacity: 0,
                transform: 'translateY(-50px) rotateX(15deg)'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{activeTickets}</div>
                  <div className="text-gray-600 text-sm">Активних</div>
                </div>
              </div>
            </div>
            
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200 transform hover:scale-105 transition-all duration-500"
              style={{ 
                animation: 'slideInFromBottom 0.8s ease-out forwards',
                animationDelay: '0.3s',
                opacity: 0,
                transform: 'translateY(50px) rotateX(-15deg)'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{wonTickets}</div>
                  <div className="text-gray-600 text-sm">Виграшів</div>
                </div>
              </div>
            </div>
            
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200 transform hover:scale-105 transition-all duration-500"
              style={{ 
                animation: 'slideInFromRight 0.8s ease-out forwards',
                animationDelay: '0.4s',
                opacity: 0,
                transform: 'translateX(50px) rotateY(15deg)'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-purple-600 font-bold">₴</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">₴{totalSpent}</div>
                  <div className="text-gray-600 text-sm">Витрачено</div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-12 shadow-lg border border-gray-200 transform hover:shadow-2xl transition-all duration-500"
            style={{ 
              animation: 'fadeInScale 0.8s ease-out forwards',
              animationDelay: '0.5s',
              opacity: 0,
              transform: 'scale(0.9)'
            }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Пошук квитків..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Статус:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedStatus(option.value)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedStatus === option.value
                        ? 'bg-emerald-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tickets Grid */}
          <div className="space-y-6">
            {filteredTickets.map((ticket, index) => (
              <div 
                key={ticket.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group hover:scale-[1.02] hover:rotate-1"
                style={{ 
                  animation: 'cardSlideIn 0.8s ease-out forwards',
                  animationDelay: `${0.6 + index * 0.1}s`,
                  opacity: 0,
                  transform: 'translateX(-100px) rotateY(-20deg)'
                }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Lottery Image */}
                    <div className="lg:w-48 h-32 lg:h-auto rounded-xl overflow-hidden">
                      <img 
                        src={ticket.lotteryImage} 
                        alt={ticket.lotteryTitle}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Ticket Info */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{ticket.lotteryTitle}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">{ticket.category}</span>
                            <span className="font-mono">{ticket.ticketNumber}</span>
                          </div>
                        </div>
                        {getStatusBadge(ticket.status)}
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <div>
                            <div className="text-xs text-gray-500">Дата покупки</div>
                            <div className="font-medium">{new Date(ticket.purchaseDate).toLocaleDateString('uk-UA')}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <div>
                            <div className="text-xs text-gray-500">
                              {ticket.status === 'active' ? 'До розіграшу' : 'Дата розіграшу'}
                            </div>
                            <div className="font-medium">
                              {ticket.status === 'active' 
                                ? getTimeLeft(ticket.drawDate)
                                : new Date(ticket.drawDate).toLocaleDateString('uk-UA')
                              }
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-emerald-600 font-bold">₴</span>
                          <div>
                            <div className="text-xs text-gray-500">Вартість квитка</div>
                            <div className="font-medium">₴{ticket.ticketPrice}</div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors">
                          <Eye className="h-4 w-4" />
                          <span>Переглянути</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Завантажити</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>Поділитися</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTickets.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Ticket className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Квитків не знайдено</h3>
              <p className="text-gray-500 mb-6">Спробуйте змінити фільтри або купіть свій перший квиток</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Переглянути лотереї
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) rotateY(-15deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px) rotateY(15deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(-15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateX(-100px) rotateY(-20deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MyTickets;