import React, { useState } from 'react';
import LotteryCard from './LotteryCard';
import { Filter, SortDesc } from 'lucide-react';

const AllLotteries = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('ending-soon');

  const lotteries = [
    {
      id: '4',
      title: 'MacBook Pro 16" M3 Max',
      description: 'Потужний ноутбук для професіоналів з 64GB RAM та 2TB SSD',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 250,
      totalTickets: 800,
      soldTickets: 456,
      endDate: '2024-12-27T15:30:00',
      category: 'Електроніка'
    },
    {
      id: '5',
      title: 'PlayStation 5 Pro',
      description: 'Найпотужніша ігрова консоль з підтримкою 8K та ray tracing',
      image: 'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 75,
      totalTickets: 1200,
      soldTickets: 892,
      endDate: '2024-12-29T12:00:00',
      category: 'Ігри'
    },
    {
      id: '6',
      title: 'Rolex Submariner',
      description: 'Класичний швейцарський годинник з автоматичним механізмом',
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 300,
      totalTickets: 600,
      soldTickets: 234,
      endDate: '2025-01-05T16:00:00',
      category: 'Розкіш'
    },
    {
      id: '7',
      title: 'Курс з веб-розробки',
      description: 'Повний курс від початківця до професіонала з сертифікатом',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 25,
      totalTickets: 2000,
      soldTickets: 1543,
      endDate: '2024-12-26T10:00:00',
      category: 'Послуги'
    },
    {
      id: '8',
      title: 'Tesla Model Y',
      description: 'Електричний кросовер з автопілотом та запасом ходу 500 км',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 800,
      totalTickets: 1500,
      soldTickets: 678,
      endDate: '2025-01-10T14:00:00',
      category: 'Автомобілі'
    },
    {
      id: '9',
      title: 'Набір професійної косметики',
      description: 'Повний набір преміум косметики від відомих брендів',
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 50,
      totalTickets: 1000,
      soldTickets: 723,
      endDate: '2024-12-25T20:00:00',
      category: 'Подарунки'
    }
  ];

  const categories = ['all', 'Електроніка', 'Автомобілі', 'Розкіш', 'Ігри', 'Подарунки', 'Послуги'];

  const filteredLotteries = lotteries.filter(lottery => 
    selectedCategory === 'all' || lottery.category === selectedCategory
  );

  return (
    <section className="py-16 bg-amber-50/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Усі активні лотереї
          </h2>
          <p className="text-xl text-amber-700">
            Знайди ідеальну лотерею для себе серед {lotteries.length} варіантів
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Категорія:</span>
          </div>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-800 ease-in-out${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white/80 text-amber-800 hover:bg-amber-100 border border-amber-300 backdrop-blur-sm'
              }`}
            >
              {category === 'all' ? 'Всі' : category}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <SortDesc className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Сортувати:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-amber-300 rounded-lg px-3 py-1 text-sm bg-white/80 backdrop-blur-sm text-amber-800 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="ending-soon">Скоро завершуються</option>
              <option value="price-low">Дешевші спочатку</option>
              <option value="price-high">Дорожчі спочатку</option>
              <option value="popular">Популярні</option>
            </select>
          </div>
          <div className="text-sm text-amber-600">
            Знайдено {filteredLotteries.length} лотерей
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLotteries.map((lottery) => (
            <LotteryCard key={lottery.id} {...lottery} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllLotteries;