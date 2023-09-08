import { Link, useLocation } from "react-router-dom";

// react icons
import { RiDeleteBin6Line } from 'react-icons/ri';
import Button from "./Button";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const SaveJobsCard = ({ job, refetch }) => {
    const { pathname } = useLocation();
    const [axiosSecure] = useAxiosSecure();
    const { _id, selectJob, companyLogo, title, companyName, postedDate, location, jobType, industry, salary, skills } = job;
    console.log(job)
    const handleRemoveSavedJob = () => {
        axiosSecure.delete(`/savedjob/${_id}`)
            .then(res => {
                if (res.status === 200) {
                    refetch()
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className=" bg-white  border lg:border-0 lg:border-b border-green/50 lg:last:border-transparent hover:shadow-3xl lg:hover:border-white rounded-lg lg:rounded-none hover:rounded-lg overflow-hidden scale-100  clear-both hover:z-20 px-5 py-8 lg:py-6 lg:pr-0 duration-300 group ">

            {/* titel or Image  */}
            <div className="flex flex-col justify-between sm:flex-row  items-center 
                gap-10">
                <div> <p className="text-green lg:text-purple bg-green/20 px-4 py-1 absolute lg:static top-2 left-2 rounded-md inline-block lg:mb-1 shadow-md shadow-green/10 capitalize">{jobType}</p>
                    <Link to='/' className="text-xl md:text-2xl text-dark group-hover:text-green duration-300 sm:mr-3 lg:mr-0 sm:line-clamp-1 max-w-lg">{title}</Link>

                    <p>Salary: <span className="text-gray">${salary}/month</span></p>

                    {/* location company and salary */}
                    <div className="flex flex-col lg:flex-row lg:items-center text-center sm:text-left lg:gap-8 mt-1 duration-300">
                        <p>location: <span className="text-gray">{location}</span></p>




                    </div>

                </div>

                {/* image  */}
                <div className="w-44 h-44 pt-5 lg:p-6 overflow-hidden">
                    <img className="w-full object-cover object-center" src={companyLogo} alt={companyName} />
                </div>
            </div>
            <div className=''>
                <div className="flex justify-between items-center">
                    <div>
                        <button onClick={handleRemoveSavedJob}>
                            <Button ><RiDeleteBin6Line className="text-xl" /></Button>
                        </button>

                    </div>
                    <div className="flex gap-10 mx-5 ">
                        <Link to={`/job_details/${selectJob}`}>
                            <Button> view details </Button>
                        </Link>
                        <Link to={`/apply_job/${selectJob}`}>
                            <Button> Apply Now </Button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SaveJobsCard;