import React, { useState } from 'react';
import { Gift, Clock, Users, Ticket, Heart, Share2, Filter, SortDesc, Sparkles, Star, Smile, Package, Flower, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useParallax } from '../../hooks/useParallax';

const Gifts = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');
  const navigate = useNavigate();
  const { balance, purchaseTicket } = useUser();
  const parallaxOffset = useParallax(0.2);

  const giftLotteries = [
    {
      id: 'gift-1',
      title: 'Premium Парфумерний набір',
      description: 'Розкішний набір з п\'яти найвідоміших парфумів світу в еліганній коробці з дизайнерською упаковкою',
      image: 'https://images.pexels.com/photos/3407876/pexels-photo-3407876.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 150,
      totalTickets: 1200,
      soldTickets: 856,
      endDate: '2025-01-26T20:00:00',
      brand: 'Luxury Collection',
      type: 'Косметика & Парфумерія',
      material: 'Premium парфуми',
      featured: true
    },
    {
      id: 'gift-2',
      title: 'Шоколадна мініатюра De Luxe',
      description: 'Екзотичне бельгійське шоколадне асорті з 50 видів шоколаду ручної роботи з золотим листом',
      image: 'https://images.pexels.com/photos/8201470/pexels-photo-8201470.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 100,
      totalTickets: 1500,
      soldTickets: 1123,
      endDate: '2025-02-01T14:00:00',
      brand: 'Belgian Master',
      type: 'Солодощі & Подарунки',
      material: 'Благородний шоколад',
      featured: true
    },
    {
      id: 'gift-3',
      title: 'Персоналізована книга',
      description: 'Ексклюзивна видрукована книга з вашою історією, фотографіями та напрацюваннями у шкіряній палітурці',
      image: 'https://images.pexels.com/photos/46185/pexels-photo-46185.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 120,
      totalTickets: 800,
      soldTickets: 567,
      endDate: '2025-01-28T18:00:00',
      brand: 'Custom Print',
      type: 'Персоналізовані подарунки',
      material: 'Шкіра, папір',
      featured: false
    },
    {
      id: 'gift-4',
      title: 'Аромасвіча з есенцій',
      description: 'Елегантна скляна свіча з натуральним воском та ефірними оліями у дизайнерській упаковці',
      image: 'https://images.pexels.com/photos/5291954/pexels-photo-5291954.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 85,
      totalTickets: 1800,
      soldTickets: 1234,
      endDate: '2025-02-05T12:00:00',
      brand: 'Aromatic Luxe',
      type: 'Дом & Декор',
      material: 'Натуральний воск',
      featured: false
    },
    {
      id: 'gift-5',
      title: 'Спа-набір Premium',
      description: 'Повний набір для домашнього спа з органічними маслами, солями та засобами для догляду',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 140,
      totalTickets: 1100,
      soldTickets: 734,
      endDate: '2025-02-08T15:00:00',
      brand: 'Spa Master',
      type: 'Косметика & Парфумерія',
      material: 'Органічні компоненти',
      featured: true
    },
    {
      id: 'gift-6',
      title: 'Вінілова платівка колекція',
      description: 'Колекція вінілових платівок класичної музики з легендарних виконавців у колекційній упаковці',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 95,
      totalTickets: 950,
      soldTickets: 612,
      endDate: '2025-02-10T16:00:00',
      brand: 'Vinyl Classics',
      type: 'Музика & Розваги',
      material: 'Вініл 180g',
      featured: false
    },
    {
      id: 'gift-7',
      title: 'Чайний асорт из світу',
      description: 'Премія колекція рідкісних чаїв з різних країн світу в ексклюзивній коробці з 48 видів',
      image: 'https://images.pexels.com/photos/3807322/pexels-photo-3807322.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 130,
      totalTickets: 1000,
      soldTickets: 678,
      endDate: '2025-02-12T14:00:00',
      brand: 'Tea World',
      type: 'Напої & Смаки',
      material: 'Премій-клас чай',
      featured: true
    },
    {
      id: 'gift-8',
      title: 'Органайзер для хобі',
      description: 'Багатофункціональний органайзер з еко-матеріалів для зберігання речей та творчих матеріалів',
      image: 'https://images.pexels.com/photos/6203/close-up-colorful-gift-present.jpg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 75,
      totalTickets: 1400,
      soldTickets: 923,
      endDate: '2025-02-07T13:00:00',
      brand: 'Eco Living',
      type: 'Дом & Декор',
      material: 'Екобамбук',
      featured: false
    },
    {
      id: 'gift-9',
      title: 'Корзина для пікніка',
      description: 'Вишукана плетена корзина з натурального матеріалу для пікніка з набором сервісу з 4 осіб',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 160,
      totalTickets: 700,
      soldTickets: 423,
      endDate: '2025-02-14T17:00:00',
      brand: 'Picnic Style',
      type: 'Активний відпочинок',
      material: 'Натуральна лоза',
      featured: false
    },
    {
      id: 'gift-10',
      title: 'Гравійований браслет',
      description: 'Срібний браслет з можливістю персоналізації з гравіюванням вашого имені чи дати',
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 110,
      totalTickets: 1100,
      soldTickets: 789,
      endDate: '2025-02-18T11:00:00',
      brand: 'Silver Craft',
      type: 'Персоналізовані подарунки',
      material: 'Срібло 925',
      featured: false
    },
    {
      id: 'gift-11',
      title: 'Картина-опус художника',
      description: 'Оригінальна картина від українського художника з серпня "Природа" в дизайнерській рамці',
      image: 'https://images.pexels.com/photos/3283899/pexels-photo-3283899.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 200,
      totalTickets: 600,
      soldTickets: 345,
      endDate: '2025-02-20T15:00:00',
      brand: 'Local Artist',
      type: 'Мистецтво & Декор',
      material: 'Акварель на полотні',
      featured: true
    },
    {
      id: 'gift-12',
      title: 'Комбо для здоров\'я',
      description: 'Комплект з вітамінів преміум-класу, БАДів та органічних суплементів для здоров\'я та енергії',
      image: 'https://images.pexels.com/photos/3845679/pexels-photo-3845679.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 125,
      totalTickets: 1300,
      soldTickets: 867,
      endDate: '2025-02-16T12:00:00',
      brand: 'Health Plus',
      type: 'Здоров\'я & Благополуччя',
      material: 'Натуральні компоненти',
      featured: false
    }
  ];

  const types = ['all', 'Косметика & Парфумерія', 'Солодощі & Подарунки', 'Персоналізовані подарунки', 'Дом & Декор', 'Музика & Розваги', 'Напої & Смаки', 'Активний відпочинок', 'Мистецтво & Декор', 'Здоров\'я & Благополуччя'];

  const filteredGifts = giftLotteries.filter(item =>
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
      <div className="fixed inset-0 bg-gradient-to-br from-pink-900/40 via-rose-900/30 to-purple-900/40 backdrop-blur-[1px]" />

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-16 w-20 h-20 bg-pink-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute top-64 right-24 w-32 h-32 bg-rose-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-24 h-24 bg-red-400/20 rounded-full blur-xl"
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
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-4 rounded-full shadow-2xl">
                <Gift className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-rose-400 bg-clip-text text-transparent">
                Подарунки
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Знайди ідеальний подарунок для своїх близьких! Унікальні, оригінальні та персоналізовані подарунки на будь-яку нагоду
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
              <div className="text-4xl font-bold text-pink-400 mb-2">{giftLotteries.length}</div>
              <div className="text-white/80">Доступних подарунків</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-rose-400 mb-2">₴{giftLotteries.reduce((sum, item) => sum + (item.ticketPrice * item.soldTickets), 0).toLocaleString()}</div>
              <div className="text-white/80">Загальна вартість призів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-red-400 mb-2">{Math.round(giftLotteries.reduce((sum, item) => sum + (item.soldTickets / item.totalTickets), 0) / giftLotteries.length * 100)}%</div>
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
                        ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg scale-105'
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
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="ending-soon">Скоро завершуються</option>
                  <option value="price-low">Дешевші спочатку</option>
                  <option value="price-high">Дорожчі спочатку</option>
                  <option value="popular">Популярні</option>
                </select>
              </div>
            </div>
          </div>

          {/* Gifts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGifts.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:scale-105 hover:-rotate-1"
                style={{
                  animation: 'cardSlideIn 0.8s ease-out forwards',
                  animationDelay: `${0.7 + index * 0.1}s`,
                  opacity: 0
                }}
              >
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                    <Sparkles className="h-3 w-3 fill-current" />
                    <span>Популярний</span>
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
                      <span className="text-pink-300 font-bold text-sm">{item.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{item.description}</p>

                  {/* Item Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Package className="h-3 w-3" />
                        <span>Матеріал</span>
                      </div>
                      <div className="text-white font-medium text-xs">{item.material}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Smile className="h-3 w-3" />
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
                        className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-300"
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
                        className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Ticket className="h-4 w-4" />
                        <span>Взяти участь</span>
                      </button>

                      <button
                        onClick={() => handlePurchase(item, 'buy-now')}
                        className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Gift className="h-4 w-4" />
                        <span>Придбати ЗАРАЗ</span>
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

export default Gifts;
