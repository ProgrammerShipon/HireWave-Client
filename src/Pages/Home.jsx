import Divider from '../Components/Divider';
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
      {/* border */}
      <Divider />

      <SpecialFeatures />
      {/* border */}
      <Divider />

      <TopEmployee />
      {/* border */}
      <Divider />

      <JobByLocation />
      {/* border */}
      <Divider />

      <Partners />
      {/* border */}
      <Divider />

      <Reviews />
    </>
  );
};

export default Home;
