import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedLotteries from './components/FeaturedLotteries';
import Categories from './components/Categories';
import AllLotteries from './components/AllLotteries';
import HowItWorks from './components/HowItWorks';
import Winners from './components/Winners';
import MyTickets from './components/MyTickets';
import Profile from './components/Profile';
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
      <div id="featured-lotteries">
        <FeaturedLotteries />
      </div>
      <div id="categories">
        <Categories />
      </div>
      <AllLotteries />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Winners />
      <MyTickets />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;