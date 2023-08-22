import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import useAllJobs from "../Hooks/useAllJobs";
import SectionTitle from "../Components/SectionTitle";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import FeaturedJobCard from "../Components/FeaturedJobCard";
import SavedJobsCard from "./SavedJobsCard";
import { IoIosArrowDown } from "react-icons/io";

const SavedJobs = () => {
    const [allJobsData] = useAllJobs();
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Saved Jobs - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Saved Jobs" />

            {/* section here */}
            {/* border */}
            <Divider />
            <section className="py-20 md:py-[120px] duration-300">
                <div className="container">


                    {/* Saved jobs content */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-0 pt-12 md:pt-16 lg:max-w-4xl mx-auto duration-300 relative">
                        {allJobsData.length > 0 &&
                            allJobsData?.slice(0, 4)
                                .map((job, index) => <SavedJobsCard key={index} job={job} />)}
                    </div>

                </div>
            </section>


        </>
    );
};

export default SavedJobs;