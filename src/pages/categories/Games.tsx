import React, { useState } from 'react';
import { Gamepad2, Clock, Users, Ticket, Heart, Share2, Filter, Dessert as SortDesc, Zap, Star, Joystick, Monitor, TowerControl as Controller } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useParallax } from '../../hooks/useParallax';

const Games = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');
  const navigate = useNavigate();
  const { balance, purchaseTicket } = useUser();
  const parallaxOffset = useParallax(0.2);

  const gameLotteries = [
    {
      id: 'game-1',
      title: 'PlayStation 5 Pro Bundle',
      description: 'Консоль нового покоління PS5 Pro з геймпадом, гарнітурою та п\'ятьма найновішими хітами',
      image: 'https://images.pexels.com/photos/3797517/pexels-photo-3797517.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 250,
      totalTickets: 800,
      soldTickets: 567,
      endDate: '2025-02-02T20:00:00',
      brand: 'Sony PlayStation',
      type: 'Консолі',
      specs: 'PS5 Pro 1TB',
      featured: true
    },
    {
      id: 'game-2',
      title: 'Xbox Series X Ultimate',
      description: 'Найпотужніша консоль Xbox Series X з Game Pass Ultimate та грою Starfield',
      image: 'https://images.pexels.com/photos/8191318/pexels-photo-8191318.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 200,
      totalTickets: 1000,
      soldTickets: 789,
      endDate: '2025-02-05T14:00:00',
      brand: 'Microsoft Xbox',
      type: 'Консолі',
      specs: 'Xbox Series X',
      featured: true
    },
    {
      id: 'game-3',
      title: 'Nintendo Switch OLED Premium',
      description: 'Портативна консоль Nintendo Switch OLED з екраном 7" та двома джойстиками',
      image: 'https://images.pexels.com/photos/8679363/pexels-photo-8679363.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 150,
      totalTickets: 1200,
      soldTickets: 834,
      endDate: '2025-02-08T18:00:00',
      brand: 'Nintendo',
      type: 'Консолі',
      specs: 'Switch OLED 64GB',
      featured: false
    },
    {
      id: 'game-4',
      title: 'Gaming PC RTX 4090',
      description: '高-end ігровий комп\'ютер з відеокартою RTX 4090, процесором Intel i9 та 32GB ОЗП',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 400,
      totalTickets: 600,
      soldTickets: 334,
      endDate: '2025-02-12T15:00:00',
      brand: 'Custom Builder',
      type: 'ПК & Комплектуючі',
      specs: 'RTX 4090, i9, 32GB',
      featured: true
    },
    {
      id: 'game-5',
      title: 'Corsair Gaming Setup',
      description: 'Повний ігровий набір: монітор 144Hz, клавіатура механічна, мишка з 12000 DPI, килимок',
      image: 'https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 180,
      totalTickets: 950,
      soldTickets: 612,
      endDate: '2025-02-10T12:00:00',
      brand: 'Corsair',
      type: 'Ігрові периферійні пристрої',
      specs: '144Hz монітор',
      featured: false
    },
    {
      id: 'game-6',
      title: 'Steelseries Gaming Headset',
      description: 'Професійна гарнітура Steelseries з 7.1 об\'ємним звуком, мікрофоном та активним шумозниженням',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 120,
      totalTickets: 1100,
      soldTickets: 756,
      endDate: '2025-02-07T16:00:00',
      brand: 'Steelseries',
      type: 'Ігрові периферійні пристрої',
      specs: '7.1 Surround Sound',
      featured: false
    },
    {
      id: 'game-7',
      title: 'Valve Index VR Headset',
      description: 'Премія VR гарнітура Valve Index з контролерами, сумісна з усіма основними VR іграми',
      image: 'https://images.pexels.com/photos/5632409/pexels-photo-5632409.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 280,
      totalTickets: 700,
      soldTickets: 423,
      endDate: '2025-02-15T14:00:00',
      brand: 'Valve',
      type: 'VR & Гарнітури',
      specs: '2K Resolution',
      featured: true
    },
    {
      id: 'game-8',
      title: 'Meta Quest 3 Pro',
      description: 'Передова VR гарнітура Meta Quest 3 Pro з трекінгом очей та можливістю AR/VR змішування',
      image: 'https://images.pexels.com/photos/8688526/pexels-photo-8688526.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 220,
      totalTickets: 850,
      soldTickets: 567,
      endDate: '2025-02-13T17:00:00',
      brand: 'Meta',
      type: 'VR & Гарнітури',
      specs: 'Full Color Passthrough',
      featured: false
    },
    {
      id: 'game-9',
      title: 'Collection Latest AAA Games',
      description: 'Набір із 30 найновіших ААА-гідів: Baldur\'s Gate 3, Cyberpunk 2077, Dragon\'s Dogma 2 та інші',
      image: 'https://images.pexels.com/photos/2254065/pexels-photo-2254065.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 110,
      totalTickets: 1400,
      soldTickets: 923,
      endDate: '2025-02-11T13:00:00',
      brand: 'Multi Publisher',
      type: 'Ігри',
      specs: '30 AAA Titles',
      featured: false
    },
    {
      id: 'game-10',
      title: 'Gaming Chair Pro Gamer',
      description: 'Ергономічне ігрове крісло з регульованою висотою, підлокітниками та поясничною підтримкою',
      image: 'https://images.pexels.com/photos/7974407/pexels-photo-7974407.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 140,
      totalTickets: 1050,
      soldTickets: 678,
      endDate: '2025-02-09T11:00:00',
      brand: 'SecretLab',
      type: 'Меблі для геймерів',
      specs: 'Чорна шкіра',
      featured: false
    },
    {
      id: 'game-11',
      title: 'Gaming Desk RGB',
      description: 'Просторий ігровий стіл з вбудованим RGB підсвітленням, місцем для кабелів та цільним стеклом',
      image: 'https://images.pexels.com/photos/8688525/pexels-photo-8688525.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 160,
      totalTickets: 900,
      soldTickets: 534,
      endDate: '2025-02-14T15:00:00',
      brand: 'Gaming Furniture',
      type: 'Меблі для геймерів',
      specs: 'RGB Lighting',
      featured: true
    },
    {
      id: 'game-12',
      title: 'RTX 4080 Super Graphics Card',
      description: 'Вища відеокарта NVIDIA RTX 4080 Super з 16GB GDDR6X пам\'яті для ультра гейміфікації',
      image: 'https://images.pexels.com/photos/4666567/pexels-photo-4666567.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 320,
      totalTickets: 750,
      soldTickets: 456,
      endDate: '2025-02-16T12:00:00',
      brand: 'NVIDIA',
      type: 'ПК & Комплектуючі',
      specs: '16GB GDDR6X',
      featured: false
    }
  ];

  const types = ['all', 'Консолі', 'ПК & Комплектуючі', 'Ігрові периферійні пристрої', 'VR & Гарнітури', 'Ігри', 'Меблі для геймерів'];

  const filteredGames = gameLotteries.filter(item =>
    selectedFilter === 'all' || item.type === selectedFilter
  );

  const handlePurchase = (item: any, type: 'participate' | 'buy-now') => {
    if (balance >= item.ticketPrice) {
      purchaseTicket(item.ticketPrice);
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
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-indigo-900/40 backdrop-blur-[1px]" />

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-16 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute top-64 right-24 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"
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
                <Gamepad2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ігри
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Вигравай найновіші консолі, ПК, VR гарнітури та геймерське обладнання для вашого ідеального кімнати геймера!
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
              <div className="text-4xl font-bold text-blue-400 mb-2">{gameLotteries.length}</div>
              <div className="text-white/80">Доступних предметів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">₴{gameLotteries.reduce((sum, item) => sum + (item.ticketPrice * item.soldTickets), 0).toLocaleString()}</div>
              <div className="text-white/80">Загальна вартість призів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">{Math.round(gameLotteries.reduce((sum, item) => sum + (item.soldTickets / item.totalTickets), 0) / gameLotteries.length * 100)}%</div>
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
                <span className="text-sm font-medium text-white/90">Категорія:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedFilter(type)}
                    className={`px-3 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                      selectedFilter === type
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white/20 text-white/80 hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {type === 'all' ? 'Усі' : type}
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

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:scale-105 hover:rotate-1"
                style={{
                  animation: 'cardSlideIn 0.8s ease-out forwards',
                  animationDelay: `${0.7 + index * 0.1}s`,
                  opacity: 0
                }}
              >
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                    <Zap className="h-3 w-3 fill-current" />
                    <span>Хіт гейма</span>
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
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        {item.brand}
                      </span>
                      <span className="text-cyan-300 font-bold text-sm">{item.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{item.description}</p>

                  {/* Item Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Monitor className="h-3 w-3" />
                        <span>Характеристики</span>
                      </div>
                      <div className="text-white font-medium text-xs">{item.specs}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Joystick className="h-3 w-3" />
                        <span>Категорія</span>
                      </div>
                      <div className="text-white font-medium text-xs">{item.type}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-white/80">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{getTimeLeft(item.endDate)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{item.soldTickets}/{item.totalTickets}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/80">Продано квитків</span>
                      <span className="text-sm font-bold text-white">{Math.round((item.soldTickets / item.totalTickets) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(item.soldTickets / item.totalTickets) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-2xl font-bold text-white">{item.ticketPrice} ₴</span>
                      <span className="text-white/60 text-sm ml-1">/ квиток</span>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handlePurchase(item, 'participate')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Ticket className="h-4 w-4" />
                        <span>Взяти участь</span>
                      </button>

                      <button
                        onClick={() => handlePurchase(item, 'buy-now')}
                        className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Gamepad2 className="h-4 w-4" />
                        <span>Грати ЗАРАЗ</span>
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

export default Games;
