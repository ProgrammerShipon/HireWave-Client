import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
export default function Recruiters({ recruiter }) {
  return (
    <section className="bg-green-300 hover:shadow-md hover:scale-105 duration-300 cursor-pointer py-1 px-3 rounded-xl bg-[#ffffff] border border-slate-300">
      {/* Company Info */}
      <div className="company rounded-md flex items-center">
        <div className="img">
          {/* Company Logo */}
          <img
            className="w-16 h-16 object-cover text-left rounded-full"
            src={recruiter.companyLogo}
            alt="company--logo"
          />
        </div>

        <div className="inline-block mt-3">
          {/* Company Name */}
          <h3 className="ml-2 hover:text-green">{recruiter.companyName}</h3>

          {/* Star Ratings */}
          <div className="star flex items-center text-sm text-yellow-500 ml-2 mb-1">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStarHalfAlt />
            </span>
            {/* Number of Ratings */}
            <div className="text-slate-500">
              <span className="ml-3 text-xs">{recruiter.number}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary py-3 text-sm text-slate-500 flex items-center justify-between">
        {/* Company Location */}
        <div className="location hover:text-green">
          <h3>{recruiter.companyLocation}</h3>
        </div>

        {/* Number of Open Jobs */}
        <div className="open--jobs hover:text-green">
          <h3>{recruiter.openJobs}</h3>
        </div>
      </div>
    </section>
  );
}
