import { Link } from "react-router-dom";
import moment from "moment";


const AppliedJobTableRow = ({ job }) => {
    const { _id, appliedJobId, companyLogo, companyName, title, status, appliedDate } = job;
    console.log(job)
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
                {companyName}
            </td>
            <td className="px-3 py-3 w-56">
                <Link to={`/jobDetails/${_id}`} className="w-full line-clamp-2 font-medium group-hover:text-green duration-300">
                    {title}
                </Link>
            </td>
            <td className="px-3 py-3 text-center">{moment(appliedDate).format("MMM Do YYYY")}</td>
            <td className="px-3 py-3 text-center text-lg text-dark font-medium">20</td>

            <td className="px-3 py-3">
                {
                    status ? <span className="bg-green/10 text-green font-medium px-3 rounded-full text-sm shadow-lg shadow-green/20">Open</span> : <span className="bg-red-400/10 text-red-400 px-3 rounded-full text-sm">Close</span>
                }
            </td>
            <td className="px-3 py-3 text-center">
                <Link to={`/job_details/${appliedJobId}`} className="border border-green px-4 rounded-md hover:bg-green hover:text-white duration-300">View</Link>
            </td>
        </tr>
    );
};

export default AppliedJobTableRow;