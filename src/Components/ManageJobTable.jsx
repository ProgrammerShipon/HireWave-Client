import React from "react";
import { FaRegStar } from "react-icons/fa";
import moment from "moment";

export default function ManageJobTable({ managejobs }) {
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
    </tr>
  );
}
