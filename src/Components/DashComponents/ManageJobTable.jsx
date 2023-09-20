import moment from "moment";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// react icons
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const ManageJobTable = ({ job, refetch }) => {
  const [isChange, setIsChange] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState();
  const [axiosSecure] = useAxiosSecure();
  const { _id, title, postedDate, applied, category, status } = job;
  let newStatus;

  if (statusUpdate === '' || statusUpdate === undefined) {
    newStatus = status
  } else {
    newStatus = statusUpdate
  }

  const statusChanges = () => {
    const statusData = {
      status: statusUpdate,
    };

    if (statusData != "undefined") {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/allJobs/${_id}`, statusData)
            .then((data) => {
              if (data.status == 200) {
                refetch()
                Swal.fire({
                  icon: 'success',
                  title: 'Updated Successfully!',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
            .catch((err) => console.log(err));
        }
      })
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
          className={`relative flex gap-1 items-center justify-center px-2 rounded-full capitalize w-fit mx-auto ${newStatus === "approved" &&
            "bg-green/10 text-green font-medium shadow-lg shadow-green/20"
            } ${newStatus === "pending" && "bg-orange-300/10 text-orange-300"} ${newStatus === "rejected" && "bg-red-500/10 text-red-500"
            }`}
        >
          <select
            onChange={(e) => {
              setStatusUpdate(e.target.value);
            }}
            name="status"
            id="status"
            defaultValue={newStatus}
            className="focus:outline-none bg-transparent"
          >
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Denied</option>
          </select>
        </div>
      </td>
      <td className="px-3 py-4 text-center">
        <button
          disabled={isChange}
          onClick={() => statusChanges()}
          className={`border border-green text-dark px-4 rounded-md duration-300 ${isChange ? "bg-gray-300" : "hover:bg-green hover:text-white"
            }`}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default ManageJobTable;
