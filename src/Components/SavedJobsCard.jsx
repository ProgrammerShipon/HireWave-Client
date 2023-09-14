import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useMyAppliedJobs from "../Hooks/useMyAppliedJobs";

// react icons
import { FaHeart } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Tooltip } from "react-tooltip";

const SavedJobsCard = ({ job, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const [myAppliedJobs, loading] = useMyAppliedJobs();
    let [alreadyApplied, setAlreadyApplied] = useState(false);
    const { _id, selectJob, companyLogo, title, companyName, location, salary } = job;

    // check already applied
    useEffect(() => {
        const checkExists = myAppliedJobs.filter((job) =>
            job.jobId.includes(selectJob)
        );

        if (checkExists.length) {
            setAlreadyApplied(true)
        } else {
            setAlreadyApplied(false)
        }
    }, [job.selectJob, !loading])

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
        <div className=" bg-white border border-gray/40 hover:border-green flex flex-col sm:flex-row gap-3 rounded-lg shadow-xl overflow-hidden relative pt-4 sm:pt-0 duration-300">
            {/* image  */}
            <div className="w-44 h-44 mx-auto sm:mx-0 rounded-full sm:rounded-none overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={companyLogo} alt={companyName} />
            </div>

            {/* title or Image  */}
            <div className="flex flex-col py-1 mt-1">
                <div className="ml-3 sm:ml-0">
                    <Link to='/' className="text-xl md:text-2xl text-dark group-hover:text-green duration-300 sm:mr-3 lg:mr-0 sm:line-clamp-1 drop-shadow-lg font-medium">{title}</Link>

                    <p className="text-gray mt-3">${salary}/month</p>
                    <p className="text-lightGray flex items-center gap-1"><HiOutlineLocationMarker />{location}
                    </p>
                </div>

                <div className="ml-3 sm:ml-0 mt-2 flex flex-1 items-end justify-between w-ful gap-2 duration-300 mb-2">
                    <Link to={`/job_details/${selectJob}`}
                        className="border border-green rounded-md px-3 py-1 hover:bg-green hover:text-white shadow-lg duration-300 block"
                    >
                        View details
                    </Link>

                    <div className="absolute right-2 bottom-4">
                        {
                            !alreadyApplied ?
                                <Link to={`/apply_job/${selectJob}`} className="border border-green rounded-md px-3 py-1 bg-green hover:bg-transparent text-white hover:text-dark shadow-lg duration-300">
                                    Apply Now
                                </Link> : <Link to={`/view_application/${selectJob}`} className="bg-green text-white px-5 py-1 rounded-lg border border-green shadow-xl shadow-green/20">View Application</Link>
                        }
                    </div>
                </div>

                <Tooltip id="saved" />
                <button onClick={handleRemoveSavedJob}
                    data-tooltip-id="saved" data-tooltip-content="Click to remove!"
                    className="absolute top-2 right-2 border border-red-400 rounded-md px-3 py-1 bg-red-400 hover:bg-transparent text-red-400 hover:text-white shadow-lg duration-300 group">
                    <FaHeart size="22" className="text-white group-hover:text-red-400 duration-300" />
                </button>
            </div>
        </div>
    );
};

export default SavedJobsCard;