import React, { useState } from "react";
import Button from "./Button";

export default function ManageUserTable({ manageuser }) {
  const { name, images, category } = manageuser;
  const [showDropdown, setShowDropdown] = useState(false);
  const [status, setStatus] = useState("Pending");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setShowDropdown(false);
  };

  return (
    <tr className="bg-white text-slate-600 border-b-2 border-slate-50">
      <td className="px-3 py-4 font-medium text-dark flex items-center relative">
        <img
          className="w-12 h-12 object-cover rounded-full mr-3"
          src={images}
          alt={name}
        />
        {name}
      </td>

      <td className="px-5 py-4">{category}</td>
      <td className="px-5 py-4">example@gmail.com</td>
      <td className="px-5 py-4">user</td>
      <td className="px-5 py-4">
        {status}
        {/* dropdown option */}

        {status === "Pending" && (
          <button
            type="button"
            className="ml-2 text-primary-500 focus:outline-none"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <svg
              className="h-5 w-5"
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
          <div className="absolute w-32 rounded-md shadow-lg bg-white  ring-black ring-opacity-5 z-10">
            <div className="py-1" role="none">
              <button
                onClick={() => handleStatusChange("Active")}
                className="block px-4 py-2 text-sm text-left text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                role="menuitem"
              >
                Active
              </button>
              <button
                onClick={() => handleStatusChange("Online")}
                className="block px-4 py-2 text-sm text-left text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                role="menuitem"
              >
                Pending
              </button>
              <button
                onClick={() => handleStatusChange("Offline")}
                className="block px-4 py-2 text-sm text-left text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                role="menuitem"
              >
                Suspend
              </button>
            </div>
          </div>
        )}
      </td>
      <td className="px-5 py-4">
        <Button>Apply</Button>
      </td>
    </tr>
  );
}
