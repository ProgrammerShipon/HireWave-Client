import moment from "moment";
import { Link } from "react-router-dom";

// react icons
import { FaRegStar } from "react-icons/fa";

const PostedJobTableRow = ({ job }) => {
    const { _id, title, postedDate, applied, category } = job;
    const status = 'close';
    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group">
            <td className="px-3 py-4 font-medium text-dark w-72 md:w-[340px]">
                <div className="flex items-center w-full">
                    <FaRegStar className="mr-2 text-purple" />
                    <Link to={`/jobDetails/${_id}`}
                        className="font-medium group-hover:text-green duration-300 w-full line-clamp-1"
                    >{title}</Link>
                </div>
            </td>
            <td className="px-3 py-4 text-lightGray">{category}</td>
            <td className="px-3 py-4 text-lightGray">{moment(postedDate).format("MMM Do YYYY")}</td>
            <td className="py-3 text-center font-medium text-dark">{applied}</td>
            <td className="px-3 py-4">
                <div className={`relative flex gap-1 items-center justify-center px-4 rounded-full capitalize w-fit mx-auto ${status === 'open' && 'bg-green/10 text-green font-medium shadow-lg shadow-green/20'} ${status === 'close' && 'bg-orange-300/10 text-orange-400'}`}
                >
                    <select name="status" id="status" defaultValue={status}
                        className="focus:outline-none bg-transparent"
                    >
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default PostedJobTableRow;