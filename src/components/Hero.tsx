import React from 'react';
import { ArrowRight, Sparkles, Users, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-300/2 via-red-100/9 to-zink-900/1 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-26">
              <Sparkles className="h-6 w-6 text-pink-900 animate-pulse" />
              <span className="text-sky-900 font-semibold">Лотерейний маркет-плейс #1</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-red-900 animate-pulse">
                Виграй мрію,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-cyan-700 animate-pulse">
                купи квиток
              </span>
            </h1>
            <p className="text-xl mb-18 text-cyan-900">
              Унікальна платформа, де кожен товар чи послуга може стати твоєю за ціною лотерейного квитка. 
              Приєднуйся до тисяч щасливчиків!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-900 to-sky-400 text-pink-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Почати гру</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-amber-300/50 text-amber-100 px-8 py-4 rounded-lg font-semibold hover:bg-amber-700/30 backdrop-blur-sm transition-all duration-200">
                Дізнатися більше
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-800/30 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-cyan-600/30">
                <Users className="h-8 w-8 text-cyan-300 mb-3" />
                <div className="text-2xl font-bold mb-1 text-cyan-100">15K+</div>
                <div className="text-white-200">Видано призів</div>
              </div>
              <div className="bg-cian-800/30 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 mt-8 border border-amber-600/30">
                <Trophy className="h-8 w-8 text-cyan-300 mb-3" />
                <div className="text-2xl font-bold mb-1 text-cyan-100">5M+</div>
                <div className="text-cian-200">Активних гравців</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-cyan-400 text-cyan-900 rounded-full p-4 animate-bounce shadow-lg">
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;