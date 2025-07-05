import React, { useState, useEffect } from 'react';
import { Clock, Users, Ticket, Heart, Share2 } from 'lucide-react';

interface LotteryCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  ticketPrice: number;
  totalTickets: number;
  soldTickets: number;
  endDate: string;
  category: string;
  featured?: boolean;
}

const LotteryCard: React.FC<LotteryCardProps> = ({
  title,
  description,
  image,
  ticketPrice,
  totalTickets,
  soldTickets,
  endDate,
  category,
  featured = false
}) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(endDate).getTime();
      const distance = end - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft(`${days}д ${hours}г ${minutes}хв`);
      } else {
        setTimeLeft('Завершено');
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [endDate]);

  const progress = (soldTickets / totalTickets) * 100;

  return (
    <div className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-200/50 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-amber-400 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          ⭐ Рекомендовано
        </div>
      )}
      
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-amber-600 hover:bg-white'}`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>
        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-amber-600 hover:bg-white transition-all duration-200">
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-amber-800 px-3 py-1 rounded-full text-sm font-semibold border border-amber-200">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        <p className="text-amber-700 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-amber-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{timeLeft}</span>
          </div>
          <div className="flex items-center space-x-2 text-amber-600">
            <Users className="h-4 w-4" />
            <span className="text-sm">{soldTickets}/{totalTickets}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-amber-800">Продано квитків</span>
            <span className="text-sm font-bold text-amber-700">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-amber-500 to-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-amber-700">{ticketPrice} ₴</span>
            <span className="text-amber-600 text-sm ml-1">/ квиток</span>
          </div>
          <button className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
            <Ticket className="h-4 w-4" />
            <span>Купити</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LotteryCard;