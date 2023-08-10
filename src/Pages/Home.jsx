import FeaturedJobs from '../Sections/FeaturedJobs';
import HeroBanner from '../Sections/HeroBanner';
import JobByLocation from '../Sections/JobByLocation';
import Partners from '../Sections/Partners';
import Reviews from '../Sections/Reviews';
import SpecialFeatures from '../Sections/SpecialFeatures';
import TopCategories from '../Sections/TopCategories';
import TopEmployee from '../Sections/TopEmployee';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <TopCategories />
      <FeaturedJobs />
      <SpecialFeatures />
      <TopEmployee />
      <JobByLocation />
      <Partners />
      <Reviews />
    </>
  );
};

export default Home;
