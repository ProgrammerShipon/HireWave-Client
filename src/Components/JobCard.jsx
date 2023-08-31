import { Link } from "react-router-dom";
import GetAgoTime from "./GetAgoTime";

// react icons
import { BiHeart, BiSolidCrown, BiMap } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";

const JobCard = ({ job, setJobDetails }) => {
    const { _id, title, companyName, companyLogo, category, location, jobType, applied, salary, postedDate } = job;
    return (
        <div className="sticky top-28 bg-white border border-purple p-4 rounded-lg hover:shadow-4xl hover:shadow-green/20 duration-300 cursor-pointer"
            onClick={() => setJobDetails(job)}
        >
            <div className="flex items-start justify-between">
                <div className="flex flex-col md:flex-row items-start gap-2">
                    <div>
                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-xl">
                            <img
                                className="w-full object-cover object-center"
                                src={companyLogo}
                                alt={companyName}
                            />
                        </div>
                    </div>
                    <div className="mt-1">
                        <Link to={`/job_details/${_id}`} className="text-dark text-xl font-medium drop-shadow-lg hover:text-green duration-300 line-clamp-2">{title}</Link>
                        <p className="text-gray flex items-center flex-wrap gap-1">
                            by
                            <Link to={`/job_details/${_id}`} className="text-dark hover:text-green duration-300">{companyName}</Link>
                            in
                            <Link to={`/recruiters_details/${_id}`} className="text-dark hover:text-green duration-300">{category}</Link>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <BiSolidCrown title="Featured" size='22px' className="text-yellow-500" />
                    <IoIosFlash title="Urgent" size='22px' className="text-red-500" />
                    <BiHeart size='22px' className="text-green" />
                </div>
            </div>

            <div className="flex items-center flex-wrap gap-2 mt-5">
                <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                    {jobType}
                </p>

                <p className="text-dark bg-dark/10 px-4 py-[2px] rounded-full shadow-lg shadow-dark/10 flex items-center gap-1">
                    <BiMap /> {location}
                </p>

                <p className="text-green bg-green/10 px-4 py-[2px] rounded-full shadow-lg shadow-green/20">
                    ${salary}
                </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <p className="ml-2 text-lightGray mt-5">
                        Applied: {applied}+
                    </p>
                    <p className="ml-2 italic text-gray mt-5">
                        Posted <GetAgoTime datetime={postedDate} />
                    </p>
                </div>

                <Link to='/' className="lg:hidden bg-green text-white px-5 py-2 rounded-lg border border-green shadow-xl shadow-green/20 text-center">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default JobCard;