import React, { useState } from "react";
import moment from "moment";
export default function PostJobTable({ PostJob }) {
  const { title, postedDate, applied, closingDate, category } = PostJob;
  const [showDropdown, setShowDropdown] = useState(false);
  const [status, setStatus] = useState("Open");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setShowDropdown(false);
  };
  return (
    <tr className="bg-white border-b-2 text-slate-600 border-slate-50">
      <td className="px-5 py-4">{title}</td>
      <td className="px-5 py-4">{category}</td>
      <td className="px-5 py-4">
        {moment(postedDate).format("MMM Do YYYY")}
        <br />
        {moment(closingDate).format("MMM Do YYYY")}
      </td>
      <td className="px-5 py-4">{applied} Candidates</td>
      <td className="px-5 py-4">
        {status}
        {/* dropdown option */}

        {status === "Open" && (
          <button
            type="button"
            className="ml-2 text-primary-500 focus:outline-none"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {showDropdown && (
          <div className="absolute z-10 w-32 bg-white rounded-md shadow-lg ring-black ring-opacity-5">
            <div className="py-1" role="none">
              <button
                onClick={() => handleStatusChange("Close")}
                className="block px-4 py-2 text-sm text-left text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                role="menuitem"
              >
                Close
              </button>
              <button
                onClick={() => handleStatusChange("Edit")}
                className="block px-4 py-2 text-sm text-left text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                role="menuitem"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
}
