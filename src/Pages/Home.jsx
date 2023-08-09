import HeroBanner from '../Sections/HeroBanner';
import Job_Post from '../Sections/Job_Post';
import Special_Featurs from '../Sections/Special_Featurs';
import TopCategories from '../Sections/TopCategories';
import Reviews from '../Sections/Reviews/Reviews';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <TopCategories />

      <Job_Post />

      <Special_Featurs />

      {/* 
        full bugs no change
      <TopEmployee /> */}

      {/*
      full bugs
       <TopRecruiters /> */}

      <Partners />

      <Reviews />
    </>
  );
}

export default Home;
