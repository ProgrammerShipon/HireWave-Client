import FeaturedJobs from '../Sections/FeaturedJobs';
import HeroBanner from '../Sections/HeroBanner';
import Job_Post from '../Sections/Job_Post';
import TopCategories from '../Sections/TopCategories';
import Reviews from '../Sections/Reviews/Reviews';
import SpecialFeatures from '../Sections/SpecialFeatures';
import JobByLocation from '../Sections/JobByLocation';
import Partners from '../Sections/Partners';
import TopEmployee from '../Sections/TopEmployee';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <TopCategories />

      <FeaturedJobs />

      <Job_Post />
      <JobByLocation></JobByLocation>

      <SpecialFeatures />

      <Partners />

      <TopEmployee />

      <Reviews />
    </>
  );
};

export default Home;
