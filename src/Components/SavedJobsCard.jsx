import { Link } from "react-router-dom";

// react icons
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import useAxiosSecure from "../Hooks/useAxiosSecure";


const SavedJobsCard = ({ job, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const { _id, selectJob, companyLogo, title, companyName, location, salary } = job;

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
        <div className=" bg-white border border-gray/40 flex flex-col sm:flex-row gap-3 rounded-lg shadow-xl overflow-hidden relative">
            {/* image  */}
            <div className="w-44 h-32 rounded-s-lg overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={companyLogo} alt={companyName} />
            </div>

            {/* title or Image  */}
            <div className="flex flex-col py-1">
                <div className="ml-3 sm:ml-0">
                    <Link to='/' className="text-xl md:text-2xl text-dark group-hover:text-green duration-300 sm:mr-3 lg:mr-0 sm:line-clamp-1">{title}</Link>

                    <p><span className="text-gray mt-3">${salary}/month</span></p>
                    <p className="text-lightGray flex items-center gap-1"><HiOutlineLocationMarker />{location}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 absolute bottom-32 sm:bottom-2 right-2 duration-300">
                    <Link to={`/job_details/${selectJob}`}
                        className="border border-green rounded-md px-3 py-1 hover:bg-green hover:text-white shadow-lg duration-300"
                    >
                        View details
                    </Link>
                    <Link to={`/apply_job/${selectJob}`}
                        className="border border-green rounded-md px-3 py-1 bg-green hover:bg-transparent text-white hover:text-dark shadow-lg duration-300"
                    >
                        Apply Now
                    </Link>
                </div>

                <button onClick={handleRemoveSavedJob} className="absolute top-1 right-1 border border-red-400 rounded-md px-2 py-1 hover:bg-red-400 text-red-400 hover:text-white shadow-lg duration-300">
                    <RiDeleteBin6Line size='20' />
                </button>
            </div>
        </div>
    );
};

export default SavedJobsCard;