import FeaturedJobs from "../Sections/FeaturedJobs";
import HeroBanner from "../Sections/HeroBanner";
import Job_Post from "../Sections/Job_Post";
import Partners from "../Sections/Partners";
import Reviews from "../Sections/Reviews";
import SpecialFeatures from "../Sections/SpecialFeatures";
import TopCategories from "../Sections/TopCategories";
import TopEmployee from "../Sections/TopEmployee";
import TopRecruiters from "../Sections/TopRecruiters";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <TopCategories />

      <FeaturedJobs />

      <Job_Post />

      <SpecialFeatures />

      <Partners />

      <TopEmployee />

      <TopRecruiters />

      <Reviews />
    </>
  );
};

export default Home;
