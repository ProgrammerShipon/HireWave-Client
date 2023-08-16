import {
  BiHeart,
  BiSolidCrown,
  BiSolidStar,
  BiSolidShow,
} from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsCalendar4, BsPersonFillCheck } from "react-icons/bs";
import { HiOutlineCurrencyDollar, HiOutlineFilter } from "react-icons/hi";
import { PiNotepad } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import Button from "./../Components/Button";

export default function BrowseJobs({ data }) {
  return (
    <section className="">
      <div className="grid lg:grid-cols-12 justify-items-center md:gap-2">
        {/* here is left side  */}
        <div className="lg:col-span-4">
          <div className="filter--jobs flex justify-between py-8">
            <div className="filter flex items-center ">
              <span className="ml-2 text-slate-500 ">
                <HiOutlineFilter />
              </span>
              <h3 className="ml-2 text-slate-500 ">Filter</h3>
              <h3 className="ml-2">70 jobs</h3>
            </div>
            <div className="newest flex  items-center">
              <h3 className="text-slate-500 ">Sort by</h3>
              <select
                className="ml-3 border-none text-gray cursor-pointer"
                name="Newest"
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Features</option>
              </select>
            </div>
          </div>
          <div className="bg-green-300 hover:shadow-md duration-300 cursor-pointer rounded-2xl py-6 pl-2 pr-8 border-green  bg-[#ffffff] border">
            <div className="flex items-center justify-between">
              <div className=" flex items-center ">
                <img
                  className="w-16 h-16  object-cover rounded-full"
                  src={data.company_image}
                  alt="company-images"
                />
                <div>
                  <h1 className="text-lg text-dark font-semibold ">
                    {data.job_title}
                  </h1>
                  <h4 className="text-"> {data.short_title}</h4>
                </div>
              </div>

              <div className="icon text-xl  mb-5 flex ">
                <p className=" text-yellow-500">
                  <BiSolidCrown />
                </p>
                <p className="ml-2 text-red-500">
                  <IoIosFlash />
                </p>
                <p className="ml-2 text-red-500">
                  <BiHeart />
                </p>
              </div>
            </div>

            <div className="py-4">
              <span className="bg-blue-100   text-blue-500 rounded-full text-sm ml-2 p-1">
                {data.job_time}
              </span>

              <span className="  bg-emerald-100 text-dark rounded-full text-sm ml-2 p-1">
                {data.location}
              </span>

              <span className="bg-emerald-100 text-dark rounded-full text-sm ml-2 p-1">
                {data.salary}
              </span>
            </div>

            <p className="text-sm font-semibold ml-2 text-dark ">
              {data.application_deadline}
            </p>
          </div>
        </div>
        {/* here is right side */}
        <div className="col-span-8 hidden lg:block">
          <div className=" rounded-2xl overflow-hidden bg-[#ffffff] bg-green-300 shadow-md duration-300">
            <img
              className="object-cover w-[100%] h-52"
              src={data.company_cover}
              alt=""
            />

            <div className="job-details py-5 px-5">
              <div className="job-heading justify-between flex items-center ">
                <div className="flex items-center">
                  <img
                    className="w-20 h-20  object-cover rounded-full"
                    src={data.company_image}
                    alt="company-images"
                  />

                  <div className="">
                    <div className="flex items-center">
                      <span className="text-3xl text-dark font-semibold ">
                        {data.job_title}
                      </span>

                      <span className="ml-1 text-2xl  text-yellow-500">
                        <BiSolidCrown className="mt-2 ml-2" />
                      </span>
                    </div>

                    <div className="flex text-lg items-center">
                      <h4 className="text-"> {data.short_title}</h4>
                      <p className="flex items-center text-xl text-gray">
                        <span className="ml-2 ">
                          <BiSolidShow />
                        </span>
                        <span className="ml-2">{data.view}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="icon cursor-pointer text-gray flex text-3xl">
                  <p className="mr-3 ">
                    <AiOutlineShareAlt />
                  </p>
                  <p className="ml-1 ">
                    <BiHeart />
                  </p>
                </div>
              </div>

              <div className="apply py-5 items-center flex justify-between">
                <div className="text-base mt-3">
                  <span className="bg-emerald-100 text-dark rounded-full mr-2 p-1">
                    {data.location}
                  </span>
                  <span className="bg-blue-100   text-blue-500 rounded-full mr-2 p-1">
                    {data.job_time}
                  </span>
                </div>

                <div>
                  <Button>Apply Now</Button>
                </div>
              </div>

              <div className="details">
                <h1 className="text-xl py-2 mt-4">Job Details</h1>
                <hr className="border-b-0 border-zinc-200" />
                <h2 className="text-2xl font-semibold py-8">
                  Job role insights
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-5">
                  <div className="flex ">
                    <div className="icon">
                      <p className="bg-slate-100 p-2  rounded-full">
                        <BsCalendar4 className="text-2xl  text-lightGray " />
                      </p>
                    </div>
                    <div className="ml-2">
                      <h3 className="text-lg text-dark ">Date posted</h3>
                      <p className="text-sm text-gray">{data.date_posted}</p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="icon">
                      <p className="bg-slate-100 p-2  rounded-full">
                        <BsCalendar4 className=" text-2xl  text-lightGray " />
                      </p>
                    </div>

                    <div className="ml-2">
                      <h3 className="text-lg text-dark ">Closing date</h3>
                      <p className="text-sm text-gray">{data.closing_date}</p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div>
                      <p className="bg-slate-100 p-2  rounded-full">
                        <GrLocation className="text-2xl  text-lightGray " />
                      </p>
                    </div>

                    <div className="ml-2">
                      <h3 className="text-lg text-dark ">Hiring location</h3>
                      <p className="text-sm text-gray"> {data.location}</p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div>
                      <p className="bg-slate-100 p-2  rounded-full">
                        <HiOutlineCurrencyDollar className="text-2xl  text-lightGray " />
                      </p>
                    </div>

                    <div className="ml-2">
                      <h3 className="text-lg text-dark ">Offered salary</h3>
                      <p className="text-sm text-gray">{data.offered_salary}</p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div>
                      <p className="bg-slate-100 p-2  rounded-full">
                        <PiNotepad className="text-2xl  text-lightGray" />
                      </p>
                    </div>

                    <div className="ml-2">
                      <h3 className="text-lg text-dark ">Career level</h3>
                      <p className="text-sm text-gray">{data.career_level}</p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div>
                      <p className="bg-slate-100 p-2  rounded-full">
                        <BiSolidStar className=" text-2xl  text-lightGray " />
                      </p>
                    </div>

                    <div className="ml-2">
                      <h3 className="text-lg  text-dark ">Qualification</h3>
                      <p className="text-sm text-gray">{data.qualification}</p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div>
                      <p className="bg-slate-100 p-2  rounded-full">
                        <BiHeart className="text-2xl  text-lightGray " />
                      </p>
                    </div>

                    <div className="ml-2">
                      <h3 className="text-lg text-dark ">Experience</h3>
                      <p className="text-sm text-gray">{data.experience}</p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div>
                      <p className="bg-slate-50 p-2  rounded-full">
                        <BsPersonFillCheck className=" text-2xl  text-lightGray " />
                      </p>
                    </div>

                    <div className="ml-2">
                      <h3 className="text-lg text-dark ">Quantity</h3>
                      <p className="text-sm text-gray">{data.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-b-0 border-zinc-200 mt-8" />

              <div className="description py-4">
                <h1 className="text-2xl font-semibold py-4">Description</h1>
                <h3 className="text-xl py-2">Overview</h3>
                <p className="text-lightGray">{data.description}</p>
              </div>

              <div className="requirement">
                <h1 className="text-xl py-2">Requirements</h1>

                {data.requirements.map((requirement, index) => (
                  <li key={index} className="text-lightGray py-2">
                    {requirement}
                  </li>
                ))}
              </div>

              <div className="skill--experience">
                <h1 className="text-xl py-2 mt-2">Skill & Experience</h1>

                {data.skill_experience.map((skill_experience, index) => (
                  <li key={index} className="text-lightGray py-2  ">
                    {skill_experience}
                  </li>
                ))}
              </div>

              <div className="skill">
                <h1 className="py-2 mt-2">Skills</h1>
                {data.skills.map((skills, index) => (
                  <span
                    key={index}
                    className="text-lightGray   bg-emerald-100 mr-2  rounded-full text-sm p-1 "
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
