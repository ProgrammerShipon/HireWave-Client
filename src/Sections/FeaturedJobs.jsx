import { Link } from "react-router-dom";
import FeaturedJobCard from "../Components/FeaturedJobCard";
import SectionTitle from "../Components/SectionTitle";
import useJobData from "../Hooks/useJobData";

const FeaturedJobs = () => {
    const [jobData] = useJobData();
    return (
        <section className="py-16 md:py-20 duration-300">
            <div className="container">
                {/* section title */}
                <SectionTitle title='Featured Jobs' para='Your dream company' />

                {/* featured jobs content */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-0 pt-12 md:pt-16 lg:max-w-5xl mx-auto duration-300 lg:divide-y lg:divide-green/20">
                    {
                        jobData?.slice(0, 4).map((job, index) => <FeaturedJobCard key={index} job={job} />)
                    }
                </div>

                {/* button */}
                <div className="text-center mt-16">
                    <Link to='/' className="border border-green py-2 px-5 text-dark hover:text-green hover:shadow-lg hover:shadow-green/20 duration-300 rounded-lg">View More Jobs</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedJobs;