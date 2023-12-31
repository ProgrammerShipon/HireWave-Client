import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUserTableRow = ({ user, refetch }) => {
  const { _id, name, email, image, role, status } = user;
  const [statusUpdate, setStatusUpdate] = useState();
  const [axiosSecure] = useAxiosSecure();
  const [isChange, setIsChange] = useState(false);

  const statusChanges = () => {
    const statusData = {
      status: statusUpdate,
      email
    };

    if (statusUpdate != "undefined") {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // updated data send server
          axiosSecure
            .patch(`/users`, statusData)
            .then((res) => {
              if (res.status == 200) {
                refetch();
                Swal.fire({
                  icon: "success",
                  title: "Updated Successfully!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((err) => console.log(err));
          
        }
      });
    }
  };

  return (
    <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group">
      <td className="px-3 py-3 flex gap-2">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover object-center overflow-hidden"
        />
        <div className="flex flex-col">
          <Link
            to={`/candidate_details/${_id}`}
            className="font-medium text-dark group-hover:text-green duration-300"
          >
            {name}
          </Link>
          <p className="text-lightGray">{email}</p>
        </div>
      </td>

      <td className="px-3 py-4 text-center capitalize">{role}</td>

      <td className="px-3 py-4 text-center">
        <div
          className={`relative flex gap-1 items-center justify-center px-2 rounded-full capitalize w-fit mx-auto ${status === "approved" &&
            "bg-green/10 text-green font-medium shadow-lg shadow-green/20"
            } ${status === "pending" && "bg-orange-300/10 text-orange-300"} ${status === "rejected" && "bg-red-500/10 text-red-500"
            }`}
        >
          <select
            onChange={(e) => {
              setStatusUpdate(e.target.value);
            }}
            name="status"
            id="status"
            defaultValue={status}
            className="focus:outline-none bg-transparent"
          >
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Suspend</option>
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

export default ManageUserTableRow;