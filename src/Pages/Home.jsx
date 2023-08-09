import FeaturedJobs from '../Sections/FeaturedJobs';
import HeroBanner from '../Sections/HeroBanner';
import Job_Post from '../Sections/Job_Post';
import Partners from '../Sections/Partners';
import Reviews from '../Sections/Reviews';
import Special_Featurs from '../Sections/Special_Featurs';
import TopCategories from '../Sections/TopCategories';
import TopEmployee from '../Sections/TopEmployee';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <TopCategories />

      <FeaturedJobs />

      <Job_Post />

      <Special_Featurs />

      <Partners />

      <TopEmployee />

      <Reviews />
    </>
  );
};

export default Home;
