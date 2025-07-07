import React from 'react';
import Hero from '../components/Hero';
import FeaturedLotteries from '../components/FeaturedLotteries';
import Categories from '../components/Categories';
import AllLotteries from '../components/AllLotteries';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;