import Banner from '@/Components/Banner';
import Featured from '@/Components/Featured';
import FeaturedOpportunities from '@/Components/FeaturedOpportunities';
import SuccessStories from '@/Components/SuccessStories';
import WhyJoin from '@/Components/WhyJoin';
import React, { Suspense } from 'react';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<div className="w-full h-64 bg-zinc-900 animate-pulse rounded-2xl my-24 mx-auto max-w-7xl" />}>
         <Featured></Featured>
      </Suspense>
     
     <Suspense fallback={<div className="w-full h-64 bg-zinc-900 animate-pulse rounded-2xl my-24 mx-auto max-w-7xl" />}>
       <FeaturedOpportunities></FeaturedOpportunities>
     </Suspense>
    <WhyJoin></WhyJoin>
    <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
