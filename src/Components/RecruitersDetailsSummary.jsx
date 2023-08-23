import React from "react";
// react icons
import { BiMap } from "react-icons/bi";
import { BsBookmarkPlus, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

import { MdAccessTime } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { LuTimerOff } from "react-icons/lu";
import Button from "./Button";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegCalendarAlt,
  FaShareSquare,
} from "react-icons/fa";
import { GoShare } from "react-icons/go";
import { PiBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";

// react rating
// import { rating, Star } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// react icons
// import { BiHeart, BiMap } from "react-icons/bi";

export default function RecruitersDetailsSummary({ recruiters }) {
  return (
    <div>
      {/* recruiters profile */}
      <div className="flex flex-col justify-between max-w-5xl px-6 mx-auto duration-300 border lg:flex-row shadow-4xl shadow-gray/30 border-purple/40 hover:border-green/40 sm:px-8 md:px-12">
        <div className="flex flex-col items-start gap-10 md:flex-row group">
          {/* image & rating */}
          <div className="relative -top-8">
            <div className="relative w-64 h-64 p-3 mx-auto overflow-hidden duration-300 bg-white border border-green/50 shadow-4xl shadow-gray/40 group-hover:shadow-green/20">
              <img
                src={recruiters.profileImage}
                className="object-cover object-center w-full h-full animate-pulse"
                alt={"recruiters-images"}
              />

              {/* <span
                className={`absolute top-1 right-1 text-white px-3 rounded-full text-sm capitalize ${
                  status == "online" ? "bg-green" : "bg-red-400"
                }`}
              >
                {status}
              </span> */}
            </div>

            {/* rating */}
            {/* <div className="flex items-center justify-center gap-1 mt-5">
              <p className="px-2 text-purple bg-purple/30">{rating}</p>

              <Rating
                className="max-w-[110px]"
                readOnly
                value={rating}
                itemStyles={myStyles}
              />

              <span className="text-gray">(0{recentReview.length})</span>
            </div> */}
          </div>

          {/* content */}
          <div className="duration-300 -mt-14 md:mt-6">
            <h1 className="text-4xl font-medium text-dark">
              {recruiters.name}
            </h1>
            <h3 className="text-xl font-light text-lightGray">
              {recruiters.industry}
            </h3>
            <div className="text-sm font-light text-lightGray">
              <span>{recruiters.location}</span>
              <span>{recruiters.followers}</span>
              <span>{recruiters.candidates}</span>
              <p className="text-sm text-gray">
                Member since {recruiters.joinDate}
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 duration-300 max-w-48 sm:flex-row lg:flex-col sm:items-end sm:gap-0 lg:mt-0">
          {/* social links */}
          <div className="flex items-center gap-2 ">
            <Link
              to="/"
              className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
            >
              <FaShareSquare size="20px" />
            </Link>

            <Link
              to="/"
              className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
            >
              <FaTwitter size="20px" />
            </Link>

            <Link
              to="/"
              className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
            >
              <FaLinkedin size="20px" />
            </Link>

            <Link
              to="/"
              className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
            >
              <FaGithub size="20px" />
            </Link>

            {/* button */}
          </div>

          {/* button */}
          <div className="">
            <button className="flex items-center justify-center w-full gap-2 px-5 py-3 capitalize duration-300 bg-transparent border rounded-lg shadow-xl text-dark hover:text-white border-green hover:bg-green hover:shadow-green/20 group">
              View More
              <GoShare
                size="22"
                className="text-green group-hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>

      {/* recruiters content */}
      <div className="grid grid-cols-1 gap-10 mt-16 duration-300 lg:grid-cols-10">
        {/* left side content*/}
        <div className="lg:col-span-6">
          {/* recruiters description */}
          <div>
            <h2 className="py-3 mt-5 text-3xl font-medium text-gray">
              Overview
            </h2>
            <p>{recruiters.about}</p>
          </div>
          {/* top talent */}
          <div>
            <h2 className="py-3 mt-5 text-xl font-medium text-gray">
              some of Our Few Ways to Attract Top Talent
            </h2>
            <p>
              {recruiters.WaysToAttractTopTalent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </p>
          </div>
          {/* Certifications */}
          <div>
            <h2 className="py-3 mt-5 text-xl font-medium text-gray">
              Certifications:
            </h2>
            <p>
              <ul>
                {recruiters.Certifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </div>
          {/* office location */}
          <div>
            <h2 className="py-3 mt-5 text-xl font-medium text-gray">
              Office Locations:
            </h2>
            <p>
              <ul>
                {recruiters.LocationsOffice.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </div>
          {/* Company size */}
          <div>
            <h2 className="py-3 mt-5 text-xl font-medium text-gray">
              companySize
            </h2>

            <ul>
              {recruiters.companySize.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Headquarters */}
          <div>
            <h2 className="py-3 mt-5 text-xl font-medium text-gray">
              Headquarters
            </h2>
            <p>{recruiters.Headquarters}</p>
          </div>
          {/* Founded */}
          <div>
            <h2 className="py-3 mt-5 text-xl font-medium text-gray">Founded</h2>
            <p>{recruiters.Founded}</p>
          </div>
          {/* Specialties */}
          <div>
            <h2 className="py-3 mt-5 text-xl font-medium text-gray">
              Specialties
            </h2>
            <p>{recruiters.Specialties}</p>
          </div>

          <hr className="w-auto mt-5 text-slate-300" />
          {/* latest job */}
          <h2 className="py-3 mt-5 text-3xl font-medium text-gray">
            Latest Job
          </h2>
          <div className="sticky p-4 duration-300 bg-white border rounded-lg cursor-pointer top-28 shadow-gray/30 border-purple/40 hover:border-green/40 ">
            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start gap-2 md:flex-row">
                <div>
                  <div className="w-16 h-16 overflow-hidden rounded-full shadow-xl">
                    <img
                      className="object-cover object-center w-full"
                      src={recruiters.profileImage}
                      alt="recruiter-images"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <h2 className="text-xl font-medium duration-300 text-dark drop-shadow-lg hover:text-green line-clamp-2">
                    UI/UX Designer
                  </h2>
                  <p className="flex items-center gap-1 text-dark">
                    <BiMap />

                    {recruiters.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                  Adobe XD
                </p>
                <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                  Figma
                </p>

                <IoIosFlash
                  title="Urgent"
                  size="22px"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="">
              <h2 className="mt-2 text-2xl">Engineering Recruitment Manager</h2>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                  remote
                </p>

                <p className="text-green flex items-center bg-green/10 px-4 py-[2px] rounded-full shadow-lg shadow-green/20">
                  <MdAccessTime /> <span className="ml-1">5minutes ago</span>
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between gap-4">
                <p className="mt-5 ml-2 text-lightGray">
                  $800/<span className="text-sm text-lightGray">Hour</span>
                </p>
                <Link
                  to="/"
                  className="px-5 py-2 text-center text-white border rounded-lg shadow-xl bg-green border-green shadow-green/20"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right side content*/}
        <div className="border lg:col-span-4 shadow-gray/30 border-purple/40 hover:border-green/40 sm:px-8">
          {/* allThemes */}
          <div>
            <h2 className="py-3 mt-5 text-2xl font-medium text-dark">
              All Themes
            </h2>
            <hr className="w-auto mt-5 text-slate-300" />
            <iframe
              className="mt-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58313.32936238924!2d89.208406036506!3d24.010495144173714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84d98fa5bf3d%3A0xb038902617eb9884!2sPabna!5e0!3m2!1sen!2sbd!4v1692681736855!5m2!1sen!2sbd"
              width="100%"
              height="200"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <hr className="w-auto mt-5 text-slate-300" />
          {/* details */}
          <div>
            <div className="flex mt-5">
              <span className="mt-1 mr-3">
                <PiBagBold size={25} className=" text-gray" />
              </span>
              <div>
                <h2 className="text-lg text-lightGray">company</h2>
                <p className="text-xl text-dark">Adroit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
