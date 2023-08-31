import { Link } from "react-router-dom";
import FeaturedJobCard from "../Components/FeaturedJobCard";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";
import useAllJobs from "../Hooks/useAllJobs";

const FeaturedJobs = () => {
  const [allJobsData, loading] = useAllJobs();

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        {/* section title */}
        <SectionTitle title="Featured Jobs" para="Your dream company" />

        {/* featured jobs content */}
        {
          !loading ? <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-0 pt-12 md:pt-16 lg:max-w-4xl mx-auto duration-300 relative">
            {
              allJobsData.slice(0, 4)
                .map(job => <FeaturedJobCard key={job._id} job={job} />)
            }
          </div> : <h1>Loading ...</h1>
        }

        {/* button */}
        <div className="text-center mt-16">
          <Link to="/browse_jobs">
            <Button>View More Jobs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;