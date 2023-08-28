import React from "react";
import { FaRegStar } from "react-icons/fa";
import moment from "moment";

export default function ManageJobTable({ index, managejobs }) {
  const { title, postedDate, applied, jobType, category } = managejobs;

  return (
    <tr className="bg-white  text-slate-600  border-b-2 border-slate-50">
      <td className="px-3 py-4 font-medium text-dark flex items-center ">
        <FaRegStar className="mr-2 text-green" />
        {title}
      </td>
      <td className="px-5 py-4">{category}</td>
      <td className="px-5 py-4">{moment(postedDate).format("MMM Do YYYY")}</td>
      <td className="py-4 text-center">{applied}</td>
      <td className="px-5 py-4">{jobType}</td>

      {/* <td className="px-2 py-3">

        <Link
          state={candidate}
          title="View Details"
          to={`/candidate_details/${_id}`}
          className="bg-purple text-white py-3 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 flex items-center justify-center"
        >
          <HiOutlineExternalLink size="20px" />
        </Link>
      </td> */}
    </tr>
  );
}
