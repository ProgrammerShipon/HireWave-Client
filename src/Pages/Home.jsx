import React from 'react';
import HeroBanner from '../Sections/HeroBanner';
import Job_Post from '../Sections/Job_Post';
import Special_Featurs from '../Sections/Special_Featurs';

const Home = () => {
   return (
     <>
       <HeroBanner />
       <Job_Post></Job_Post>
       <Special_Featurs></Special_Featurs>
     </>
   );
};

export default Home;