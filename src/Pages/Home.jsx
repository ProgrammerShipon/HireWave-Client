import FeaturedJobs from '../Sections/FeaturedJobs';
import HeroBanner from '../Sections/HeroBanner';
import Job_Post from '../Sections/Job_Post';
import Special_Featurs from '../Sections/Special_Featurs';
import TopCategories from '../Sections/TopCategories';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <TopCategories />
      <FeaturedJobs />
      <Job_Post />
      <Special_Featurs />
    </>
  );
}

export default Home;
