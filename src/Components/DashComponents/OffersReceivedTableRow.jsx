import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const OffersReceivedTableRow = ({offer}) => {
    const { name, image, status, _id, title, position, salary } = offer
    const [isChange, setIsChange] = useState(false);
    const [statusUpdate, setStatusUpdate] = useState();
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
            confirmButtonText: 'Save Status'
          }).then((result) => {
            if (result.isConfirmed) {
              console.log("Offer Status is being updated");
            //   axiosSecure
            //   .patch(`//${_id}`, statusData) // Just Add Api Here
            //   .then((data) => {
            //     if (data.status == 200) {
            //       Swal.fire({
            //         icon: 'success',
            //         title: 'Updated Successfully!',
            //         showConfirmButton: false,
            //         timer: 1500
            //       })
            //     }
            //   })
            //   .catch((err) => console.log(err));
            }
          })
        }
      };

    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">

            <td className='py-3'>
                <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                    <img className='w-full object-cover object-center' src={image} alt={name} />
                </div>
            </td>

            <td><Link to={`/recruiters_details/${_id}`} className="font-medium text-purple hover:underline duration-300">{name}</Link></td>

            <td>{title}</td>

            <td>{position}</td>

            <td>{salary}$</td>

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

export default OffersReceivedTableRow;