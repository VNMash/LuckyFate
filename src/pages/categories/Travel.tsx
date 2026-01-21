import React, { useState } from 'react';
import { Plane, Clock, Users, Ticket, Heart, Share2, Filter, Dessert as SortDesc, Trophy, Star, MapPin, Calendar, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useParallax } from '../../hooks/useParallax';

const Travel = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');
  const navigate = useNavigate();
  const { balance, purchaseTicket } = useUser();
  const parallaxOffset = useParallax(0.2);

  const travelLotteries = [
    {
      id: 'travel-1',
      title: 'Мальдіви - 7 днів у раю',
      description: 'Розкішний відпочинок на приватному острові з проживанням у водних віллах та повним пансіоном',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 200,
      totalTickets: 1000,
      soldTickets: 745,
      endDate: '2025-01-25T20:00:00',
      destination: 'Мальдіви',
      duration: '7 днів',
      type: 'Пляжний',
      hotel: '5 зірок',
      featured: true
    },
    {
      id: 'travel-2',
      title: 'Японія - Сакура тур',
      description: 'Незабутня подорож Японією під час цвітіння сакури з відвідуванням Токіо, Кіото та Осаки',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 400,
      totalTickets: 800,
      soldTickets: 456,
      endDate: '2025-02-10T14:00:00',
      destination: 'Японія',
      duration: '10 днів',
      type: 'Культурний',
      hotel: '4 зірки',
      featured: true
    },
    {
      id: 'travel-3',
      title: 'Швейцарські Альпи - Лижний тур',
      description: 'Активний відпочинок у Швейцарських Альпах з проживанням у гірському шале та ski-pass',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 600,
      totalTickets: 600,
      soldTickets: 234,
      endDate: '2025-02-15T16:00:00',
      destination: 'Швейцарія',
      duration: '8 днів',
      type: 'Гірськолижний',
      hotel: '5 зірок',
      featured: false
    },
    {
      id: 'travel-4',
      title: 'Таїланд - Тропічний рай',
      description: 'Екзотичний відпочинок у Таїланді з відвідуванням Бангкока, Пхукета та островів Пхі-Пхі',
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 300,
      totalTickets: 1200,
      soldTickets: 856,
      endDate: '2025-01-28T18:00:00',
      destination: 'Таїланд',
      duration: '12 днів',
      type: 'Пляжний',
      hotel: '4 зірки',
      featured: false
    },
    {
      id: 'travel-5',
      title: 'Італія - Гастрономічний тур',
      description: 'Кулінарна подорож Італією з дегустаціями, майстер-класами та відвідуванням виноробень',
      image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 500,
      totalTickets: 700,
      soldTickets: 423,
      endDate: '2025-02-08T12:00:00',
      destination: 'Італія',
      duration: '9 днів',
      type: 'Гастрономічний',
      hotel: '4 зірки',
      featured: true
    },
    {
      id: 'travel-6',
      title: 'Норвегія - Північне сяйво',
      description: 'Магічна подорож до Норвегії для спостереження північного сяйва з проживанням у скляних іглу',
      image: 'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 800,
      totalTickets: 500,
      soldTickets: 267,
      endDate: '2025-02-12T15:00:00',
      destination: 'Норвегія',
      duration: '6 днів',
      type: 'Пригодницький',
      hotel: '3 зірки',
      featured: false
    }
  ];

  const types = ['all', 'Пляжний', 'Культурний', 'Гірськолижний', 'Гастрономічний', 'Пригодницький'];

  const filteredTravel = travelLotteries.filter(tour => 
    selectedFilter === 'all' || tour.type === selectedFilter
  );

  const handlePurchase = (tour: any, type: 'participate' | 'buy-now') => {
    if (balance >= tour.ticketPrice) {
      purchaseTicket(tour.ticketPrice);
      navigate('/my-tickets');
    } else {
      alert('Недостатньо коштів на балансі!');
    }
  };

  const getTimeLeft = (endDate: string) => {
    const now = new Date().getTime();
    const end = new Date(endDate).getTime();
    const distance = end - now;
    
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      return `${days}д ${hours}г ${minutes}хв`;
    }
    return 'Завершено';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/BlueFon.jpg')",
          transform: `translateY(${parallaxOffset}px)`
        }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/30 to-indigo-900/40 backdrop-blur-[1px]" />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-32 left-16 w-20 h-20 bg-sky-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute top-64 right-24 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-32 left-1/3 w-24 h-24 bg-indigo-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
      </div>

      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div 
            className="text-center mb-16"
            style={{ 
              animation: 'fadeInUp 1s ease-out forwards',
              opacity: 0
            }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-sky-600 to-blue-600 p-4 rounded-full shadow-2xl">
                <Plane className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Подорожі
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Виграй подорож своєї мрії! Екзотичні тури та незабутні пригоди по всьому світу
            </p>
          </div>

          {/* Stats */}
          <div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            style={{ 
              animation: 'slideInFromBottom 1s ease-out forwards',
              animationDelay: '0.3s',
              opacity: 0
            }}
          >
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-sky-400 mb-2">{travelLotteries.length}</div>
              <div className="text-white/80">Доступних турів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">₴{travelLotteries.reduce((sum, tour) => sum + (tour.ticketPrice * tour.soldTickets), 0).toLocaleString()}</div>
              <div className="text-white/80">Загальна вартість призів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{Math.round(travelLotteries.reduce((sum, tour) => sum + (tour.soldTickets / tour.totalTickets), 0) / travelLotteries.length * 100)}%</div>
              <div className="text-white/80">Середня заповненість</div>
            </div>
          </div>

          {/* Filters */}
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-xl border border-white/20"
            style={{ 
              animation: 'fadeInScale 1s ease-out forwards',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-white/70" />
                <span className="text-sm font-medium text-white/90">Тип туру:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedFilter(type)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedFilter === type
                        ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white/20 text-white/80 hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {type === 'all' ? 'Всі тури' : type}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 ml-auto">
                <SortDesc className="h-5 w-5 text-white/70" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="ending-soon">Скоро завершуються</option>
                  <option value="price-low">Дешевші спочатку</option>
                  <option value="price-high">Дорожчі спочатку</option>
                  <option value="popular">Популярні</option>
                </select>
              </div>
            </div>
          </div>

          {/* Travel Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTravel.map((tour, index) => (
              <div 
                key={tour.id}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:scale-105 hover:rotate-1"
                style={{ 
                  animation: 'cardSlideIn 0.8s ease-out forwards',
                  animationDelay: `${0.7 + index * 0.1}s`,
                  opacity: 0
                }}
              >
                {tour.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Хіт</span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                  <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        {tour.type}
                      </span>
                      <div className="flex items-center space-x-1 text-yellow-300">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{tour.destination}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{tour.description}</p>

                  {/* Tour Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Тривалість</span>
                      </div>
                      <div className="text-white font-medium">{tour.duration}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Sun className="h-3 w-3" />
                        <span>Готель</span>
                      </div>
                      <div className="text-white font-medium">{tour.hotel}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-white/80">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{getTimeLeft(tour.endDate)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{tour.soldTickets}/{tour.totalTickets}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/80">Продано квитків</span>
                      <span className="text-sm font-bold text-white">{Math.round((tour.soldTickets / tour.totalTickets) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-sky-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(tour.soldTickets / tour.totalTickets) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-2xl font-bold text-white">{tour.ticketPrice} ₴</span>
                      <span className="text-white/60 text-sm ml-1">/ квиток</span>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <button 
                        onClick={() => handlePurchase(tour, 'participate')}
                        className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Ticket className="h-4 w-4" />
                        <span>Взяти участь</span>
                      </button>
                      
                      <button 
                        onClick={() => handlePurchase(tour, 'buy-now')}
                        className="bg-gradient-to-r from-red-600 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Trophy className="h-4 w-4" />
                        <span>Купити ЗАРАЗ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
            transform: translateX(-50px) rotateY(-10deg);
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

export default Travel;