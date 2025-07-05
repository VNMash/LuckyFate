import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedLotteries from './components/FeaturedLotteries';
import Categories from './components/Categories';
import AllLotteries from './components/AllLotteries';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2021/11/05/19/01/cappadocia-6771879_640.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Header />
      <Hero />
      <FeaturedLotteries />
      <Categories />
      <AllLotteries />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;