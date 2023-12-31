import { Link, Navigate, useNavigate } from "react-router-dom";
import GetAgoTime from "./GetAgoTime";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

// react icons
import { FaRegHeart } from 'react-icons/fa';

const FeaturedJobCard = ({ job }) => {
    const [axiosSecure] = useAxiosSecure();
    const { user, currentUser } = useAuth();
    const { _id, companyLogo, title, companyName, postedDate, location, jobType, industry, salary, skills } = job;
    const jobInfo = { selectJob: _id, companyLogo, title, companyName, postedDate, location, jobType, salary, skills, candidateMail: user?.email }
    const navigate = useNavigate();
    const handleSaveJob = () => {
        axiosSecure.post("/savedjob", jobInfo)
            .then((data) => {
                if (data.status === 200) {
                    toast.success("Saved Successfully", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "light",
                    });
                }
                else {
                    toast.warning("Already Saved", {
                        position: "top-right",
                        autoClose: 2500,
                        theme: "light",
                    });
                    navigate('/saved_jobs', { replace: true })
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="relative w-full bg-white flex items-center justify-between border lg:border-0 lg:border-b border-green/50 lg:last:border-transparent hover:shadow-3xl lg:hover:border-white rounded-lg lg:rounded-none hover:rounded-lg overflow-hidden scale-100 lg:hover:scale-105 clear-both hover:z-20 px-5 py-8 lg:py-6 lg:pr-0 duration-300 group">
            <div className="flex flex-col sm:flex-row items-center gap-10">
                {/* company logo */}
                <div className="w-44 h-44 pt-5 lg:p-6 overflow-hidden">
                    <img className="w-full object-cover object-center" src={companyLogo} alt={companyName} />
                </div>

                {/* card content */}
                <div>
                    <p className="text-green lg:text-purple bg-green/20 px-4 py-1 absolute lg:static top-2 left-2 rounded-md inline-block lg:mb-1 shadow-md shadow-green/10 capitalize">{jobType}</p>

                    <Link to={`/job_details/${_id}`} className="text-xl md:text-2xl text-dark group-hover:text-green duration-300 sm:mr-3 lg:mr-0 sm:line-clamp-1 max-w-lg">{title}</Link>

                    <h5 className="mt-2 hidden lg:block duration-300">{companyName} - <span className="text-gray">
                        <GetAgoTime datetime={postedDate} />
                    </span></h5>

                    <div className="flex flex-col lg:flex-row lg:items-center text-center sm:text-left lg:gap-8 mt-1 duration-300">
                        <p>location: <span className="text-gray">{location}</span></p>

                        <p className="hidden lg:block duration-300">Industry: <span className="text-gray">{industry}</span></p>

                        <p>Salary: <span className="text-gray">${salary}/month</span></p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4 lg:mt-2 duration-300">
                        {
                            skills?.map((item, index) => <p
                                key={index}
                                className="bg-green/20 hover:bg-white text-green px-3 py-[2px] shadow-lg shadow-green/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300"
                            >{item}</p>)
                        }
                    </div>
                </div>
            </div>

            {/* button */}
            {
                user?.email ?
                    <button onClick={currentUser.role === 'candidate' ? handleSaveJob : null} className="absolute lg:relative bg-green text-white p-3 lg:pl-3 lg:pr-5 lg:py-2 rounded-e-md lg:rounded-e-none rounded-s-md top-2 right-2 lg:top-auto md:-right-14 shadow-lg shadow-green/30 md:group-hover:right-2 lg:group-hover:right-0 duration-300 delay-200">
                        <FaRegHeart size='20px' />
                    </button> :
                    <Link to='/login' className="absolute lg:relative bg-green text-white p-3 lg:pl-3 lg:pr-5 lg:py-2 rounded-e-md lg:rounded-e-none rounded-s-md top-2 right-2 lg:top-auto md:-right-14 shadow-lg shadow-green/30 md:group-hover:right-2 lg:group-hover:right-0 duration-300 delay-200">
                        <FaRegHeart size='20px' />
                    </Link>
            }
        </div>
    );
};

export default FeaturedJobCard;