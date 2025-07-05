import React from 'react';
import LotteryCard from './LotteryCard';

const FeaturedLotteries = () => {
  const featuredLotteries = [
    {
      id: '1',
      title: 'iPhone 15 Pro Max 256GB',
      description: 'Найновіший флагман від Apple з титановим корпусом та потужним чіпом A17 Pro',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 100,
      totalTickets: 1000,
      soldTickets: 743,
      endDate: '2024-12-31T23:59:59',
      category: 'Електроніка',
      featured: true
    },
    {
      id: '2',
      title: 'BMW X5 2024',
      description: 'Преміум кросовер з повним приводом та найсучаснішими технологіями',
      image: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 500,
      totalTickets: 2000,
      soldTickets: 1245,
      endDate: '2024-12-30T20:00:00',
      category: 'Автомобілі',
      featured: true
    },
    {
      id: '3',
      title: 'Тур на Мальдіви на 7 днів',
      description: 'Розкішний відпочинок на райських островах з проживанням у 5-зірковому готелі',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketPrice: 200,
      totalTickets: 500,
      soldTickets: 287,
      endDate: '2024-12-28T18:00:00',
      category: 'Подорожі',
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-amber-50/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Рекомендовані лотереї
          </h2>
          <p className="text-xl text-amber-700">
            Найпопулярніші та найбільш вигідні лотереї цього тижня
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLotteries.map((lottery) => (
            <LotteryCard key={lottery.id} {...lottery} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLotteries;