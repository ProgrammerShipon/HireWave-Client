import moment from "moment";
import { Link } from "react-router-dom";

// react icons
import { FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageJobTable = ({ job, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { _id, title, postedDate, applied, category, status } = job;

  const statusChanges = (data) => {
    const statusData = {
      status: data,
    };

    if (data != status) {
      axiosSecure
        .patch(`/allJobs/${_id}`, statusData)
        .then((res) => {
          if (res.status == 200) {
            toast.success(`Update Success`);
            refetch();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group">
      <td className="px-3 py-4 font-medium text-dark w-72 md:w-[340px]">
        <div className="flex items-center w-full">
          <FaRegStar className="mr-2 text-purple" />
          <Link
            to={`/job_details/${_id}`}
            className="font-medium group-hover:text-green duration-300 w-full line-clamp-1"
          >
            {title}
          </Link>
        </div>
      </td>
      <td className="px-3 py-4 text-lightGray">{category}</td>
      <td className="px-3 py-4 text-lightGray">
        {moment(postedDate).format("MMM Do YYYY")}
      </td>
      <td className="py-3 text-center font-medium text-dark">{applied}</td>
      <td className="px-3 py-4">
        <div
          className={`relative flex gap-1 items-center justify-center px-2 rounded-full text-sm capitalize w-fit mx-auto ${
            status === "approved" &&
            "bg-green/10 text-green font-medium shadow-lg shadow-green/20"
          } ${status === "pending" && "bg-orange-300/10 text-orange-300"} ${
            status === "rejected" && "bg-red-500/10 text-red-500"
          }`}
        >
          <select
            name="status"
            id="status"
            defaultValue={status}
            className="focus:outline-none bg-transparent"
            onChange={(e) => {
              statusChanges(e.target.value);
            }}
          >
            <option value="approved">Approve</option>
            <option value="pending">Pending</option>
            <option value="rejected">Denied</option>
          </select>
        </div>
      </td>
    </tr>
  );
};

export default ManageJobTable;
