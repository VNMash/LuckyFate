import React, { useState, useEffect } from 'react';
import { Car, Clock, Users, Ticket, Heart, Share2, Filter, SortDesc, Trophy, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useParallax } from '../hooks/useParallax';

const Cars = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');
  const navigate = useNavigate();
  const { balance, purchaseTicket } = useUser();
  const parallaxOffset = useParallax(0.2);

  const carLotteries = [
    {
      id: 'car-1',
      title: 'BMW X5 2024',
      description: 'Преміум кросовер з повним приводом, панорамним дахом та найсучаснішими технологіями безпеки',
      image: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 500,
      totalTickets: 2000,
      soldTickets: 1245,
      endDate: '2024-12-30T20:00:00',
      brand: 'BMW',
      year: 2024,
      engine: '3.0L Twin Turbo',
      power: '340 к.с.',
      featured: true
    },
    {
      id: 'car-2',
      title: 'Tesla Model Y Performance',
      description: 'Електричний кросовер з автопілотом, запасом ходу 500 км та прискоренням 0-100 за 3.7 сек',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 800,
      totalTickets: 1500,
      soldTickets: 678,
      endDate: '2025-01-10T14:00:00',
      brand: 'Tesla',
      year: 2024,
      engine: 'Електричний',
      power: '534 к.с.',
      featured: true
    },
    {
      id: 'car-3',
      title: 'Mercedes-Benz G-Class',
      description: 'Легендарний позашляховик з неперевершеною прохідністю та розкішним інтер\'єром',
      image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 1200,
      totalTickets: 1000,
      soldTickets: 423,
      endDate: '2025-01-15T16:00:00',
      brand: 'Mercedes',
      year: 2024,
      engine: '4.0L V8 Biturbo',
      power: '585 к.с.',
      featured: false
    },
    {
      id: 'car-4',
      title: 'Audi RS6 Avant',
      description: 'Спортивний універсал з потужним двигуном V8 та системою quattro',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 700,
      totalTickets: 1200,
      soldTickets: 856,
      endDate: '2024-12-28T18:00:00',
      brand: 'Audi',
      year: 2024,
      engine: '4.0L V8 TFSI',
      power: '600 к.с.',
      featured: false
    },
    {
      id: 'car-5',
      title: 'Porsche 911 Turbo S',
      description: 'Іконічний спорткар з турбованим двигуном та легендарною керованістю',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 900,
      totalTickets: 800,
      soldTickets: 567,
      endDate: '2025-01-08T12:00:00',
      brand: 'Porsche',
      year: 2024,
      engine: '3.8L Twin Turbo',
      power: '650 к.с.',
      featured: true
    },
    {
      id: 'car-6',
      title: 'Range Rover Sport',
      description: 'Розкішний позашляховик з неперевершеним комфортом та прохідністю',
      image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 600,
      totalTickets: 1500,
      soldTickets: 934,
      endDate: '2025-01-12T15:00:00',
      brand: 'Land Rover',
      year: 2024,
      engine: '3.0L Supercharged',
      power: '400 к.с.',
      featured: false
    }
  ];

  const brands = ['all', 'BMW', 'Tesla', 'Mercedes', 'Audi', 'Porsche', 'Land Rover'];

  const filteredCars = carLotteries.filter(car => 
    selectedFilter === 'all' || car.brand === selectedFilter
  );

  const handlePurchase = (car: any, type: 'participate' | 'buy-now') => {
    if (balance >= car.ticketPrice) {
      purchaseTicket(car.ticketPrice);
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
      {/* BACKGROUND IMAGE with Parallax */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/Black.jpg')",
          transform: `translateY(${parallaxOffset}px)`
        }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-[1px]" />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-32 left-16 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute top-64 right-24 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
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
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-2xl">
                <Car className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-200 via-cyan-200 to-emerald-400 bg-clip-text text-transparent">
                Автомобілі
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Виграй автомобіль своєї мрії! Преміум авто від найкращих світових брендів
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
              <div className="text-4xl font-bold text-blue-400 mb-2">{carLotteries.length}</div>
              <div className="text-white/80">Доступних автомобілів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">₴{carLotteries.reduce((sum, car) => sum + (car.ticketPrice * car.soldTickets), 0).toLocaleString()}</div>
              <div className="text-white/80">Загальна вартість призів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{Math.round(carLotteries.reduce((sum, car) => sum + (car.soldTickets / car.totalTickets), 0) / carLotteries.length * 100)}%</div>
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
                <span className="text-sm font-medium text-white/90">Бренд:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setSelectedFilter(brand)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedFilter === brand
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white/20 text-white/80 hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {brand === 'all' ? 'Всі бренди' : brand}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 ml-auto">
                <SortDesc className="h-5 w-5 text-white/70" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="ending-soon">Скоро завершуються</option>
                  <option value="price-low">Дешевші спочатку</option>
                  <option value="price-high">Дорожчі спочатку</option>
                  <option value="popular">Популярні</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <div 
                key={car.id}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:scale-105 hover:rotate-1"
                style={{ 
                  animation: 'cardSlideIn 0.8s ease-out forwards',
                  animationDelay: `${0.7 + index * 0.1}s`,
                  opacity: 0
                }}
              >
                {car.featured && (
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
                    src={car.image} 
                    alt={car.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        {car.brand}
                      </span>
                      <span className="text-yellow-300 font-bold">{car.year}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {car.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{car.description}</p>

                  {/* Car Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60">Двигун</div>
                      <div className="text-white font-medium">{car.engine}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60">Потужність</div>
                      <div className="text-white font-medium">{car.power}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-white/80">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{getTimeLeft(car.endDate)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{car.soldTickets}/{car.totalTickets}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/80">Продано квитків</span>
                      <span className="text-sm font-bold text-white">{Math.round((car.soldTickets / car.totalTickets) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(car.soldTickets / car.totalTickets) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-2xl font-bold text-white">{car.ticketPrice} ₴</span>
                      <span className="text-white/60 text-sm ml-1">/ квиток</span>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <button 
                        onClick={() => handlePurchase(car, 'participate')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Ticket className="h-4 w-4" />
                        <span>Взяти участь</span>
                      </button>
                      
                      <button 
                        onClick={() => handlePurchase(car, 'buy-now')}
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

export default Cars;