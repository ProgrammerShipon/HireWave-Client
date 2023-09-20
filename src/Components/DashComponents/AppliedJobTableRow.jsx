import { Link } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import useAllJobs from "../../Hooks/useAllJobs";
import PageLoader from "../PageLoader";


const AppliedJobTableRow = ({ job }) => {
    const { _id, jobId, companyLogo, companyName, title, appliedDate } = job;
    const [allJobsData, loading] = useAllJobs();
    const [appliedJob, setAppliedJob] = useState([]);

    useEffect(() => {
        const findAppliedJob = allJobsData.filter((job) =>
            job._id.includes(jobId)
        );
        setAppliedJob(findAppliedJob)
    }, [jobId, !loading])

    if (!appliedJob.length) {
        return <PageLoader />
    }

    const { applied, open } = appliedJob[0];
    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group">
            <td className="flex items-center gap-2 px-3 py-3 font-medium text-dark">
                <div className="w-12 h-12 rounded-full shadow-xl overflow-hidden">
                    <img
                        className="object-cover object-center w-full"
                        src={companyLogo}
                        alt={companyName}
                    />
                </div>

                <Link to={`/myApplications`} className="line-clamp-2 font-medium group-hover:text-purple duration-300">
                    {companyName}
                </Link>
            </td>
            <td className="px-3 py-3 w-56">
                <Link to={`/job_details/${jobId}`} className="w-full line-clamp-2 font-medium group-hover:text-green duration-300">
                    {title}
                </Link>
            </td>
            <td className="px-3 py-3 text-center">{moment(appliedDate).format("MMM Do YYYY")}</td>
            <td className="px-3 py-3 text-center text-lg text-dark font-medium">{applied}</td>

            <td className="px-3 py-3">
                {
                    open ? <span className="bg-green/10 text-green font-medium px-3 rounded-full text-sm shadow-lg shadow-green/20">Open</span> : <span className="bg-red-400/10 text-red-400 px-3 rounded-full text-sm">Close</span>
                }
            </td>
            <td className="px-3 py-3 text-center">
                <Link to={`/view_application/${jobId}`} className="border border-green px-4 rounded-md hover:bg-green hover:text-white duration-300">View</Link>
            </td>
        </tr>
    );
};

export default AppliedJobTableRow;