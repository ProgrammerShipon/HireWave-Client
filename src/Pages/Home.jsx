import HeroBanner from '../Sections/HeroBanner';
import Job_Post from '../Sections/Job_Post';
import TopCategories from '../Sections/TopCategories';
import Reviews from '../Sections/Reviews/Reviews';
import SpecialFeatures from '../Sections/SpecialFeatures';
import JobByLocation from '../Sections/JobByLocation';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <TopCategories />

      <Job_Post />
      <JobByLocation></JobByLocation>

      {/* <Special_Featurs /> */}
      <SpecialFeatures></SpecialFeatures>

      {/* 
        full bugs no change
      <TopEmployee /> */}

      {/*
      full bugs
       <TopRecruiters /> */}

      {/* <Partners /> */}

      <Reviews />
    </>
  );
}

export default Home;
