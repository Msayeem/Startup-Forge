import Banner from '@/Components/Banner';
import Featured from '@/Components/Featured';
import FeaturedOpportunities from '@/Components/FeaturedOpportunities';
import SuccessStories from '@/Components/SuccessStories';
import WhyJoin from '@/Components/WhyJoin';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <FeaturedOpportunities></FeaturedOpportunities>
    <WhyJoin></WhyJoin>
    <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
