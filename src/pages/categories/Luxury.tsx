import React, { useState } from 'react';
import { Gem, Clock, Users, Ticket, Heart, Share2, Filter, SortDesc, Trophy, Star, Watch, Diamond, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useParallax } from '../../hooks/useParallax';

const Luxury = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');
  const navigate = useNavigate();
  const { balance, purchaseTicket } = useUser();
  const parallaxOffset = useParallax(0.2);

  const luxuryLotteries = [
    {
      id: 'luxury-1',
      title: 'Rolex Submariner Date',
      description: 'Легендарний швейцарський годинник з автоматичним механізмом, водонепроникністю 300м та сапфіровим склом',
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 300,
      totalTickets: 600,
      soldTickets: 423,
      endDate: '2025-01-25T20:00:00',
      brand: 'Rolex',
      type: 'Годинники',
      material: 'Нержавіюча сталь',
      features: 'Автоматичний, 300м',
      featured: true
    },
    {
      id: 'luxury-2',
      title: 'Діамантове кольє Tiffany & Co.',
      description: 'Ексклюзивне кольє з природних діамантів загальною вагою 5 карат в оправі з білого золота 18К',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 500,
      totalTickets: 800,
      soldTickets: 567,
      endDate: '2025-02-10T14:00:00',
      brand: 'Tiffany & Co.',
      type: 'Ювелірні прикраси',
      material: 'Біле золото 18К',
      features: 'Діаманти 5 карат',
      featured: true
    },
    {
      id: 'luxury-3',
      title: 'Louis Vuitton Keepall 55',
      description: 'Іконічна дорожня сумка з монограмної канви з шкіряною обробкою та фурнітурою з позолоченої латуні',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 200,
      totalTickets: 1000,
      soldTickets: 745,
      endDate: '2025-01-28T18:00:00',
      brand: 'Louis Vuitton',
      type: 'Аксесуари',
      material: 'Монограмна канва',
      features: 'Класичний дизайн',
      featured: false
    },
    {
      id: 'luxury-4',
      title: 'Cartier Love Bracelet',
      description: 'Легендарний браслет з колекції Love з рожевого золота 18К з фірмовим замком-гвинтиком',
      image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 400,
      totalTickets: 700,
      soldTickets: 456,
      endDate: '2025-02-08T12:00:00',
      brand: 'Cartier',
      type: 'Ювелірні прикраси',
      material: 'Рожеве золото 18К',
      features: 'Іконічний дизайн',
      featured: false
    },
    {
      id: 'luxury-5',
      title: 'Patek Philippe Nautilus',
      description: 'Один з найбільш бажаних годинників у світі, спортивний шик від швейцарського майстра годинникарства',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 800,
      totalTickets: 500,
      soldTickets: 267,
      endDate: '2025-02-15T16:00:00',
      brand: 'Patek Philippe',
      type: 'Годинники',
      material: 'Нержавіюча сталь',
      features: 'Автоматичний, 120м',
      featured: true
    },
    {
      id: 'luxury-6',
      title: 'Hermès Birkin 30',
      description: 'Найбажаніша сумка у світі, виготовлена вручну з шкіри Togo та фурнітурою з паладієвого покриття',
      image: 'https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 600,
      totalTickets: 600,
      soldTickets: 389,
      endDate: '2025-02-12T15:00:00',
      brand: 'Hermès',
      type: 'Аксесуари',
      material: 'Шкіра Togo',
      features: 'Ручна робота',
      featured: true
    },
    {
      id: 'luxury-7',
      title: 'Omega Speedmaster Professional',
      description: 'Легендарний "Moonwatch" - єдиний годинник, схвалений NASA для космічних місій',
      image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 250,
      totalTickets: 900,
      soldTickets: 634,
      endDate: '2025-01-30T14:00:00',
      brand: 'Omega',
      type: 'Годинники',
      material: 'Нержавіюча сталь',
      features: 'Хронограф, 50м',
      featured: false
    },
    {
      id: 'luxury-8',
      title: 'Bulgari Serpenti Forever',
      description: 'Розкішна сумка з натуральної шкіри з іконічною застібкою у вигляді голови змії з емаллю',
      image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 350,
      totalTickets: 800,
      soldTickets: 512,
      endDate: '2025-02-05T18:00:00',
      brand: 'Bulgari',
      type: 'Аксесуари',
      material: 'Натуральна шкіра',
      features: 'Іконічна застібка',
      featured: false
    },
    {
      id: 'luxury-9',
      title: 'Van Cleef & Arpels Alhambra',
      description: 'Елегантне намисто з колекції Alhambra з перламутру та золота 18К з фірмовим клевером',
      image: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 450,
      totalTickets: 650,
      soldTickets: 423,
      endDate: '2025-02-18T12:00:00',
      brand: 'Van Cleef & Arpels',
      type: 'Ювелірні прикраси',
      material: 'Золото 18К',
      features: 'Перламутр, клевер',
      featured: true
    }
  ];

  const types = ['all', 'Годинники', 'Ювелірні прикраси', 'Аксесуари'];

  const filteredLuxury = luxuryLotteries.filter(item =>
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
      <div className="fixed inset-0 bg-gradient-to-br from-amber-900/40 via-yellow-900/30 to-orange-900/40 backdrop-blur-[1px]" />

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-16 w-20 h-20 bg-amber-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute top-64 right-24 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"
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
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 p-4 rounded-full shadow-2xl">
                <Gem className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Розкіш
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Виграй предмети розкоші своєї мрії! Ексклюзивні годинники, ювелірні прикраси та аксесуари від найкращих брендів світу
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
              <div className="text-4xl font-bold text-amber-400 mb-2">{luxuryLotteries.length}</div>
              <div className="text-white/80">Доступних предметів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-2">₴{luxuryLotteries.reduce((sum, item) => sum + (item.ticketPrice * item.soldTickets), 0).toLocaleString()}</div>
              <div className="text-white/80">Загальна вартість призів</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-400 mb-2">{Math.round(luxuryLotteries.reduce((sum, item) => sum + (item.soldTickets / item.totalTickets), 0) / luxuryLotteries.length * 100)}%</div>
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
                        ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg scale-105'
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
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="ending-soon">Скоро завершуються</option>
                  <option value="price-low">Дешевші спочатку</option>
                  <option value="price-high">Дорожчі спочатку</option>
                  <option value="popular">Популярні</option>
                </select>
              </div>
            </div>
          </div>

          {/* Luxury Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLuxury.map((item, index) => (
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
                      <span className="text-yellow-300 font-bold">{item.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{item.description}</p>

                  {/* Item Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Diamond className="h-3 w-3" />
                        <span>Матеріал</span>
                      </div>
                      <div className="text-white font-medium">{item.material}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Crown className="h-3 w-3" />
                        <span>Особливості</span>
                      </div>
                      <div className="text-white font-medium">{item.features}</div>
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
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full transition-all duration-300"
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
                        className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                      >
                        <Ticket className="h-4 w-4" />
                        <span>Взяти участь</span>
                      </button>

                      <button
                        onClick={() => handlePurchase(item, 'buy-now')}
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

export default Luxury;
