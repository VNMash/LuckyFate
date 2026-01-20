import React, { useState } from 'react';
import { Home, Clock, Users, Ticket, Heart, Share2, Filter, SortDesc, Trophy, Star, MapPin, Bed, Bath, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useParallax } from '../../hooks/useParallax';

const RealEstate = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');
  const navigate = useNavigate();
  const { balance, purchaseTicket } = useUser();
  const parallaxOffset = useParallax(0.2);

  const realEstateLotteries = [
    {
      id: 'real-1',
      title: 'Квартира в центрі Києва',
      description: '3-кімнатна квартира 120 м² з панорамними вікнами та сучасним ремонтом у престижному районі',
      image: 'https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 1000,
      totalTickets: 3000,
      soldTickets: 1845,
      endDate: '2025-01-20T20:00:00',
      type: 'Квартира',
      location: 'Київ, Печерськ',
      area: 120,
      rooms: 3,
      bathrooms: 2,
      featured: true
    },
    {
      id: 'real-2',
      title: 'Заміський будинок у Буче',
      description: 'Сучасний двоповерховий будинок 250 м² з ділянкою 15 соток, гаражем та басейном',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 1500,
      totalTickets: 2000,
      soldTickets: 876,
      endDate: '2025-02-10T14:00:00',
      type: 'Будинок',
      location: 'Буча, Київська обл.',
      area: 250,
      rooms: 5,
      bathrooms: 3,
      featured: true
    },
    {
      id: 'real-3',
      title: 'Пентхаус у ЖК "Метрополіс"',
      description: 'Розкішний пентхаус 180 м² на 25 поверсі з терасою та неперевершеним видом на місто',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 2000,
      totalTickets: 1500,
      soldTickets: 623,
      endDate: '2025-02-15T16:00:00',
      type: 'Пентхаус',
      location: 'Київ, Поділ',
      area: 180,
      rooms: 4,
      bathrooms: 3,
      featured: false
    },
    {
      id: 'real-4',
      title: 'Студія в новобудові',
      description: 'Сучасна студія 45 м² з панорамними вікнами у новому ЖК з розвиненою інфраструктурою',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 300,
      totalTickets: 2500,
      soldTickets: 1756,
      endDate: '2025-01-28T18:00:00',
      type: 'Студія',
      location: 'Київ, Оболонь',
      area: 45,
      rooms: 1,
      bathrooms: 1,
      featured: false
    },
    {
      id: 'real-5',
      title: 'Таунхаус у Вишневому',
      description: 'Триповерховий таунхаус 200 м² з власним двором, гаражем та сучасним плануванням',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 800,
      totalTickets: 1800,
      soldTickets: 967,
      endDate: '2025-02-08T12:00:00',
      type: 'Таунхаус',
      location: 'Вишневе, Київська обл.',
      area: 200,
      rooms: 4,
      bathrooms: 2,
      featured: true
    },
    {
      id: 'real-6',
      title: 'Комерційне приміщення',
      description: 'Готовий офіс 150 м² у бізнес-центрі класу А з паркінгом та сучасними комунікаціями',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 1200,
      totalTickets: 1000,
      soldTickets: 534,
      endDate: '2025-02-12T15:00:00',
      type: 'Офіс',
      location: 'Київ, Шевченківський',
      area: 150,
      rooms: 6,
      bathrooms: 2,
      featured: false
    }
  ];

  const types = ['all', 'Квартира', 'Будинок', 'Пентхаус', 'Студія', 'Таунхаус', 'Офіс'];

  const filteredRealEstate = realEstateLotteries.filter(property => 
    selectedFilter === 'all' || property.type === selectedFilter
  );

  const handlePurchase = (property: any, type: 'participate' | 'buy-now') => {
    if (balance >= property.ticketPrice) {
      purchaseTicket(property.ticketPrice);
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
          backgroundImage: "url('https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          transform: `translateY(${parallaxOffset}px)`
        }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-cyan-900/40 backdrop-blur-[1px]" />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-32 left-16 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute top-64 right-24 w-32 h-32 bg-teal-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-32 left-1/3 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"
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
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-full shadow-2xl">
                <Home className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Нерухомість
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Виграй нерухомість своєї мрії! Квартири, будинки та комерційні об'єкти у найкращих локаціях
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
              <div className="text-4xl font-bold text-emerald-400 mb-2">{realEstateLotteries.length}</div>
              <div className="text-white/80">Доступних об'єктів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-teal-400 mb-2">₴{realEstateLotteries.reduce((sum, property) => sum + (property.ticketPrice * property.soldTickets), 0).toLocaleString()}</div>
              <div className="text-white/80">Загальна вартість призів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{Math.round(realEstateLotteries.reduce((sum, property) => sum + (property.soldTickets / property.totalTickets), 0) / realEstateLotteries.length * 100)}%</div>
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
                <span className="text-sm font-medium text-white/90">Тип:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedFilter(type)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedFilter === type
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                        : 'bg-white/20 text-white/80 hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {type === 'all' ? 'Всі типи' : type}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 ml-auto">
                <SortDesc className="h-5 w-5 text-white/70" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="ending-soon">Скоро завершуються</option>
                  <option value="price-low">Дешевші спочатку</option>
                  <option value="price-high">Дорожчі спочатку</option>
                  <option value="popular">Популярні</option>
                </select>
              </div>
            </div>
          </div>

          {/* Real Estate Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealEstate.map((property, index) => (
              <div 
                key={property.id}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:scale-105 hover:rotate-1"
                style={{ 
                  animation: 'cardSlideIn 0.8s ease-out forwards',
                  animationDelay: `${0.7 + index * 0.1}s`,
                  opacity: 0
                }}
              >
                {property.featured && (
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
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        {property.type}
                      </span>
                      <div className="flex items-center space-x-1 text-yellow-300">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{property.location.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{property.description}</p>

                  {/* Property Details */}
                  <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Square className="h-4 w-4 mx-auto mb-1 text-white/60" />
                      <div className="text-white font-medium">{property.area} м²</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Bed className="h-4 w-4 mx-auto mb-1 text-white/60" />
                      <div className="text-white font-medium">{property.rooms} кімн.</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Bath className="h-4 w-4 mx-auto mb-1 text-white/60" />
                      <div className="text-white font-medium">{property.bathrooms} с/в</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-2 mb-4 text-white/80">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-white/80">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{getTimeLeft(property.endDate)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{property.soldTickets}/{property.totalTickets}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/80">Продано квитків</span>
                      <span className="text-sm font-bold text-white">{Math.round((property.soldTickets / property.totalTickets) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(property.soldTickets / property.totalTickets) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-2xl font-bold text-white">{property.ticketPrice} ₴</span>
                      <span className="text-white/60 text-sm ml-1">/ квиток</span>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <button 
                        onClick={() => handlePurchase(property, 'participate')}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Ticket className="h-4 w-4" />
                        <span>Взяти участь</span>
                      </button>
                      
                      <button 
                        onClick={() => handlePurchase(property, 'buy-now')}
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

export default RealEstate;