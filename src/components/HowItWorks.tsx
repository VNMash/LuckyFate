import React from 'react';
import { Ticket, Shuffle, Trophy, Gift } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Ticket,
      title: 'Обери лотерею',
      description: 'Переглядай каталог товарів і послуг, обирай те, що тобі подобається'
    },
    {
      step: 2,
      icon: Gift,
      title: 'Купи квитки',
      description: 'Придбай один або кілька квитків для збільшення своїх шансів на виграш'
    },
    {
      step: 3,
      icon: Shuffle,
      title: 'Очікуй розіграш',
      description: 'Розіграш відбувається автоматично після закінчення часу або продажу всіх квитків'
    },
    {
      step: 4,
      icon: Trophy,
      title: 'Отримуй приз',
      description: 'Переможець отримує приз безкоштовно! Ми доставляємо у будь-яку точку України'
    }
  ];

  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Як це працює
          </h2>
          <p className="text-xl text-amber-700">
            Чотири простих кроки до твого виграшу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transform translate-x-1/2" />
              )}
              
              <div className="relative">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-2 border-amber-300 rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-amber-700">{step.step}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {step.title}
              </h3>
              <p className="text-amber-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
            Розпочати зараз
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;