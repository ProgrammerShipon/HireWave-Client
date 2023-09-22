import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const JobOffersTableRow = ({ offer, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const {
    _id,
    applicant,
    jobId,
    company,
    jobType,
    title,
    position,
    salary,
    status,
    offerDetails,
    read,
  } = offer;
  const [isChange, setIsChange] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState(status);
  const statusChanges = () => {
    const statusData = {
      status: statusUpdate,
    };

    if (statusData != "undefined") {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Save Status",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/job_offer/candidate-status/${_id}`, statusData) 
            .then((data) => {
              if (data.status == 200) {
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

  const data = {
    applicant: {
      name: "MSHR Raju",
      email: "mshraju323@gmail.com",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJkL1p5CdYAH4L5vEzNPdlnb5n-Q-KFF7ecNieKxqZzVeU=s96-c",
    },
    company: {
      name: "Programmer Shipon",
      email: "msshipon234@gmail.com",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocLODMjC-YbA8cJGVJgixIsCyEsVmgih8M7aqV72xMdE0oM=s96-c",
    },
    jobId: "6503ea13f4a5cb70eabd7ab4",
    jobType: "Full-Time",
    category: "Programming & Tech",
    title: "Senior Full Stack Developer",
    position: "Senior Full Stack Developer",
    salary: "1500",
    status: "open",
    offerDetails: [
      "My Resume : https://drive.google.com/file/d/1XDa4teT8ERDdYFc1YbYco12Pmn3GbwY-/view",
    ],
    read: true,
    __v: 0,
  };

  return (
    <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
      <td className="py-3">
        <div className="w-12 h-12 mx-auto rounded-full overflow-hidden">
          <img
            className="w-full object-cover object-center"
            src={company?.image}
            alt={company?.name}
          />
        </div>
      </td>

      <td>
        <Link
          to={`/recruiters_details/${jobId}`}
          className="font-medium text-purple hover:underline duration-300"
        >
          {company?.name}
        </Link>
      </td>

      <td>{title}</td>

      <td>{position}</td>

      <td>{salary}$</td>

      <td className="px-3 py-4">
        <div
          className={`relative flex gap-1 items-center justify-center px-2 rounded-full capitalize w-fit mx-auto 
            ${
              status === "accept" &&
              "bg-green/10 text-green font-medium shadow-lg shadow-green/20"
            } ${status === "open" && "bg-orange-300/10 text-orange-300"} 
              ${status === "reject" && "bg-red-500/20 text-red-500"} ${
            status === "expired" && "bg-red-500/10 text-red-500"
          }
            `}
        >
          <select
            onChange={(e) => {
              setStatusUpdate(e.target.value);
            }}
            // disabled={
            //   statusUpdate === "expired" ||
            //   status == "reject" ||
            //   status == "accept"
            // }
            name="status"
            id="status"
            defaultValue={statusUpdate}
            className="focus:outline-none bg-transparent"
          >
            <option value="accept">Accept</option>
            <option value="open">Open</option>
            <option value="reject">Reject</option>
          </select>
        </div>
      </td>

      <td className="px-3 py-4 text-center">
        <button
          // disabled={isChange}
          // disabled={
          //   statusUpdate === "expired" ||
          //   status == "reject" ||
          //   status == "accept"
          // }
          onClick={() => statusChanges()}
          className={`border border-green text-dark px-4 rounded-md duration-300 ${
            isChange ? "bg-gray-300" : "hover:bg-green hover:text-white"
          }`}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default JobOffersTableRow;