import React, { useState } from 'react';
import { Briefcase, Clock, Users, Ticket, Heart, Share2, Filter, Dessert as SortDesc, Trophy, Star, TrendingUp, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useParallax } from '../../hooks/useParallax';

const Services = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');
  const navigate = useNavigate();
  const { balance, purchaseTicket } = useUser();
  const parallaxOffset = useParallax(0.2);

  const servicesLotteries = [
    {
      id: 'services-1',
      title: 'Преміум-консультація від топ-коуча',
      description: 'Індивідуальна консультація з експертом з розвитку кар\'єри та особистого росту на 3 години',
      image: 'https://images.pexels.com/photos/3812517/pexels-photo-3812517.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 80,
      totalTickets: 500,
      soldTickets: 287,
      endDate: '2024-12-31T23:59:59',
      provider: 'CareerBoost Pro',
      category: 'Консультації',
      duration: '3 години',
      rating: '4.9',
      featured: true
    },
    {
      id: 'services-2',
      title: 'Онлайн-курс "Кодинг за 30 днів"',
      description: 'Повний курс з Python та веб-розробки з живими сесіями та проектами в портфоліо',
      image: 'https://images.pexels.com/photos/3862357/pexels-photo-3862357.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 120,
      totalTickets: 800,
      soldTickets: 456,
      endDate: '2024-12-27T15:30:00',
      provider: 'TechAcademy',
      category: 'Курси',
      duration: '30 днів',
      rating: '4.8',
      featured: true
    },
    {
      id: 'services-3',
      title: 'Персональна фітнес-програма на 3 місяці',
      description: 'Індивідуальний тренінг план від сертифікованого тренера з видео-демонстраціями та коригуванням',
      image: 'https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 100,
      totalTickets: 600,
      soldTickets: 387,
      endDate: '2025-01-05T18:00:00',
      provider: 'FitnessPro Elite',
      category: 'Спорт & Здоров\'я',
      duration: '3 місяці',
      rating: '4.7',
      featured: false
    },
    {
      id: 'services-4',
      title: 'Премиум юридична консультація (8 годин)',
      description: 'Повна гарантована підтримка досвідченого адвоката по бізнес-питаннях або особистим справам',
      image: 'https://images.pexels.com/photos/3849586/pexels-photo-3849586.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 200,
      totalTickets: 400,
      soldTickets: 178,
      endDate: '2024-12-29T12:00:00',
      provider: 'LawPro Consultants',
      category: 'Юридичні послуги',
      duration: '8 годин',
      rating: '4.9',
      featured: false
    },
    {
      id: 'services-5',
      title: 'Креативна сесія дизайну (10 годин)',
      description: 'Професійна помощь в дизайні логотипу, брендбука або веб-дизайну від топ-дизайнера',
      image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 150,
      totalTickets: 500,
      soldTickets: 267,
      endDate: '2025-01-08T14:00:00',
      provider: 'CreativeStudio',
      category: 'Дизайн',
      duration: '10 годин',
      rating: '4.8',
      featured: true
    },
    {
      id: 'services-6',
      title: 'Курс англійської мови (20 уроків)',
      description: 'Інтенсивний курс з носієм мови - від бізнес-англійської до розмовної практики',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 90,
      totalTickets: 700,
      soldTickets: 453,
      endDate: '2024-12-26T20:00:00',
      provider: 'LanguageLab Pro',
      category: 'Мови',
      duration: '20 уроків',
      rating: '4.9',
      featured: false
    },
    {
      id: 'services-7',
      title: 'Консультація з маркетингу для стартапу',
      description: 'Стратегічне планування, аналіз конкурентів та план просування вашого бізнесу на 3 місяці',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 180,
      totalTickets: 350,
      soldTickets: 156,
      endDate: '2025-01-10T10:00:00',
      provider: 'MarketingGurus',
      category: 'Бізнес',
      duration: '6 годин',
      rating: '4.8',
      featured: true
    },
    {
      id: 'services-8',
      title: 'Сертифікований курс з психології',
      description: 'Онлайн-курс з основ психології особистості та практичних навичок для кар\'єри',
      image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 110,
      totalTickets: 600,
      soldTickets: 334,
      endDate: '2025-01-12T16:00:00',
      provider: 'PsychologyInstitute',
      category: 'Освіта',
      duration: '40 годин',
      rating: '4.7',
      featured: false
    }
  ];

  const categories = ['all', 'Консультації', 'Курси', 'Спорт & Здоров\'я', 'Юридичні послуги', 'Дизайн', 'Мови', 'Бізнес', 'Освіта'];

  const filteredServices = servicesLotteries.filter(item =>
    selectedFilter === 'all' || item.category === selectedFilter
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
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/BlueFon.jpg')",
          transform: `translateY(${parallaxOffset}px)`
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-[1px]" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-16 w-20 h-20 bg-indigo-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute top-64 right-24 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px) rotate(${-parallaxOffset * 0.1}deg)` }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
      </div>

      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            style={{
              animation: 'fadeInUp 1s ease-out forwards',
              opacity: 0
            }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full shadow-2xl">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Професійні послуги
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4">
              Виграй цінні послуги від експертів! Курси, консультації, тренінги та комплексні пакети послуг від топ-фахівців
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8 mb-12"
            style={{
              animation: 'slideInFromBottom 1s ease-out forwards',
              animationDelay: '0.3s',
              opacity: 0
            }}
          >
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{servicesLotteries.length}</div>
              <div className="text-white/80">Доступних послуг</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">₴{servicesLotteries.reduce((sum, item) => sum + (item.ticketPrice * item.soldTickets), 0).toLocaleString()}</div>
              <div className="text-white/80">Загальна вартість послуг</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">{Math.round(servicesLotteries.reduce((sum, item) => sum + (item.soldTickets / item.totalTickets), 0) / servicesLotteries.length * 100)}%</div>
              <div className="text-white/80">Середня заповненість</div>
            </div>
          </div>

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
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedFilter === category
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white/20 text-white/80 hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {category === 'all' ? 'Всі категорії' : category}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 ml-auto">
                <SortDesc className="h-5 w-5 text-white/70" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="ending-soon">Скоро завершуються</option>
                  <option value="price-low">Дешевші спочатку</option>
                  <option value="price-high">Дорожчі спочатку</option>
                  <option value="popular">Популярні</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((item, index) => (
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
                        {item.provider}
                      </span>
                      <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Award className="h-3 w-3" />
                        <span className="text-sm font-semibold">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{item.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Тривалість</span>
                      </div>
                      <div className="text-white font-medium text-xs">{item.duration}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-white/60 flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>Категорія</span>
                      </div>
                      <div className="text-white font-medium text-xs">{item.category}</div>
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
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
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
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
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

export default Services;
