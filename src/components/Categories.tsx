import React, { useState, useEffect } from 'react';
import { Smartphone, Car, Home, Plane, Gamepad2, Gem, Gift, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('electronics');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();
  const navigate = useNavigate();

  const categories = [
    { 
      id: 'electronics',
      name: 'Електроніка', 
      icon: Smartphone, 
      count: 45,
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Сучасні гаджети, смартфони, ноутбуки та електроніка за привабливими цінами'
    },
    { 
      id: 'cars',
      name: 'Автомобілі', 
      icon: Car, 
      count: 12,
      image: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Преміум автомобілі, мотоцикли та інший транспорт для справжніх цінителів'
    },
    { 
      id: 'real-estate',
      name: 'Нерухомість', 
      icon: Home, 
      count: 8,
      image: 'https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Квартири, будинки та комерційна нерухомість у найкращих локаціях'
    },
    { 
      id: 'travel',
      name: 'Подорожі', 
      icon: Plane, 
      count: 23,
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Екзотичні тури, круїзи та незабутні подорожі по всьому світу для Вас'
    },
    { 
      id: 'games',
      name: 'Ігри', 
      icon: Gamepad2, 
      count: 34,
      image: 'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ігрові консолі, комп\'ютери та аксесуари для справжніх геймерів і любителів IT'
    },
    { 
      id: 'luxury',
      name: 'Розкіш', 
      icon: Gem, 
      count: 15,
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ексклюзивні годинники, ювелірні прикраси та предмети розкоші Вас і Ваших близьких'
    },
    { 
      id: 'gifts',
      name: 'Подарунки', 
      icon: Gift, 
      count: 67,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Унікальні подарунки, сувеніри та сюрпризи для ваших близьких та друзів'
    },
    { 
      id: 'services',
      name: 'Послуги', 
      icon: Briefcase, 
      count: 29,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Професійні курси, консультації, коворкінг, пошук бізнес-партнерів та ексклюзивні послуги'
    }
  ];

  useEffect(() => {
    const images = document.querySelectorAll('.category-card img');
    let loadedCount = 0;
    
    const imageLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setTimeout(() => setImagesLoaded(true), 1500);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded);
      }
    });

    // Auto-rotate categories
    const interval = setInterval(() => {
      setSelectedCategory(prev => {
        const currentIndex = categories.findIndex(cat => cat.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-amber-100/60 via-yellow-50/60 to-orange-100/60 backdrop-blur-sm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
            Категорії лотерей
          </h2>
          <p className="text-xl text-cyan-800">
            Знайди свою мрію серед різноманітних категорій призів
          </p>
        </div>

        {/* Loading Spinner */}
        {!imagesLoaded && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="flex space-x-2 mb-4">
              <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-4 h-4 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-amber-700 font-medium">Завантаження категорій...</p>
          </div>
        )}

        {/* Mobile Category Selector */}
        <div className="md:hidden mb-6">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 border-2 border-amber-300 rounded-lg bg-white/90 backdrop-blur-sm text-amber-900 font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count} активних)
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Cards Container */}
        <div className={`hidden md:flex gap-3 h-96 transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <div
                key={category.id}
                className={`category-card relative cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-2000 ease-in-out ${
                  isSelected 
                    ? 'flex-[8] min-w-[600px] max-w-[600px]' 
                    : 'flex-1 min-w-[75px] max-w-[75px] hover:shadow-xl'
                }`}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 5s ease-in-out infinite'
                }}
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Icon (visible when not selected) */}
                {!isSelected && (
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-100/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <IconComponent className="h-6 w-6 text-blue-900" />
                  </div>
                )}
                
                {/* Title */}
                <div className={`absolute text-white font-bold text-shadow-lg z-10 transition-all duration-500 ${
                  isSelected 
                    ? 'bottom-32 left-36 text-3xl opacity-100 transform rotate-0' 
                    : 'bottom-48 left-12 text-lg opacity-0 transform -rotate-90 origin-left'
                }`}>
                  {category.name}
                </div>
                
                {/* Description (visible when selected) */}
                {isSelected && (
                  <div className="absolute bottom-2 left-8 right-8 text-white opacity-100 transform translate-y-0 transition-all duration-100 delay-50">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-amber-400/30">
                      <p className="text-amber-100 mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-300 font-semibold">{category.count} активних лотерей</span>
                        <button 
                          onClick={() => {
                            if (category.id === 'cars') {
                              navigate('/cars');
                            } else {
                              // Для інших категорій можна додати відповідні маршрути пізніше
                              console.log(`Navigating to ${category.id} category`);
                            }
                          }}
                          className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-2000 flex items-center space-x-2"
                        >
                          <span>Переглянути</span>
                          onClick={() => {
                            if (category.id === 'cars') {
                              navigate('/cars');
                            } else {
                              console.log(`Navigating to ${category.id} category`);
                            }
                          }}
                          className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                        >
                          Переглянути
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Cards */}
        <div className={`md:hidden space-y-4 transition-opacity duration-800 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <div
                key={category.id}
                className={`category-card relative rounded-xl overflow-hidden shadow-lg transition-all duration-1500 ${
                  isSelected ? 'h-80' : 'h-20'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-900/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-amber-200" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{category.name}</h3>
                      <p className="text-amber-200 text-sm">{category.count} активних</p>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <button className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2 rounded-lg font-medium">
                      Переглянути
                    </button>
                  )}
                </div>
                
                {isSelected && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-amber-400/30">
                      <p className="text-amber-100 text-sm">{category.description}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        }
      `}</style>
    </section>
  );
};

export default Categories;