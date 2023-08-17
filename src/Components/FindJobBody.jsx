import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Divider from "./Divider";
import JobCard from "./JobCard";
import GetAgoTime from "./GetAgoTime";

// react icons
import { BiHeart, BiMap } from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineCurrencyDollar, HiOutlineFilter, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineShareAlt, AiOutlineCalendar } from "react-icons/ai";


const FindJobBody = ({ allJobsData }) => {
    const [jobDetails, setJobDetails] = useState(allJobsData[0]);

    const { title, companyName, companyLogo, category, location, jobType, salary, postedDate, closingDate, experience, quantity, overview, requirements, skillsExperience, benefits, skills } = jobDetails;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 mt-16">
            {/* left content  */}
            <div className="lg:col-span-4">
                {/* filter bar */}
                <div className="flex justify-between pb-5">
                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-1 text-xl text-gray">
                            <HiOutlineFilter size='22px' /> Filter
                        </button>
                        <h3 className="text-dark text-xl">{allJobsData.length} Jobs</h3>
                    </div>

                    {/* sort */}
                    <div className="flex items-center gap-2 text-gray">
                        <label htmlFor="select">Sort by</label>
                        <select
                            id="select"
                            className="border border-green rounded-md px-2 py-1 focus:outline-none cursor-pointer"
                        >
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Features</option>
                        </select>
                    </div>
                </div>

                {/* job card */}
                <div className="grid grid-cols-1 gap-5">
                    {
                        allJobsData.map((job, index) => <JobCard
                            key={index}
                            job={job}
                            setJobDetails={setJobDetails}
                        />)
                    }
                </div>
            </div>

            {/* right content */}
            <div className="lg:col-span-6 border border-green p-4 rounded-lg">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-medium text-dark">{title}</h1>
                        <p className="text-gray italic text-sm">Posted <GetAgoTime datetime={postedDate} /></p>
                    </div>

                    <div className="flex items-center gap-2">
                        <AiOutlineShareAlt size='24px' className="text-green" />
                        <BiHeart size='24px' className="text-green" />
                    </div>
                </div>

                {/* company details */}
                <div className="flex items-center gap-2 mt-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-xl">
                        <img
                            className="w-full object-cover object-center"
                            src={companyLogo}
                            alt={companyName}
                        />
                    </div>
                    <div className="mt-1">
                        <Link to='/' className="text-dark text-xl font-medium drop-shadow-lg hover:text-green duration-300 line-clamp-2">{companyName}</Link>
                        <p className="text-gray">
                            {category}
                        </p>
                    </div>
                </div>

                {/* job details */}
                <div className="flex items-end justify-between gap-2 mt-4">
                    <div className="flex items-center gap-2">
                        <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                            {jobType}
                        </p>

                        <p className="text-purple bg-purple/10 px-4 py-[2px] rounded-full shadow-lg shadow-purple/20 flex items-center gap-1">
                            <BiMap /> {location}
                        </p>
                    </div>
                    <Button>Apply Now</Button>
                </div>

                <div className="flex items-start gap-8 mb-6">
                    <div className="mt-5">
                        <p className="text-dark flex items-center gap-1">
                            <HiOutlineCurrencyDollar /> Salary: <span className="text-gray ml-1">${salary}/month</span>
                        </p>
                        <p className="text-dark flex items-center gap-1 mt-1">
                            <AiOutlineCalendar /> Closing date: <span className="text-gray ml-1">{closingDate}</span>
                        </p>
                    </div>
                    <div className="mt-5">
                        <p className="text-dark flex items-center gap-1">
                            <BsBuildingGear /> Experience: <span className="text-gray ml-1">{experience}</span>
                        </p>
                        <p className="text-dark flex items-center gap-1 mt-1">
                            <HiOutlineUserGroup /> Quantity: <span className="text-gray ml-1">{quantity} Person</span>
                        </p>
                    </div>
                </div>

                <Divider />

                {/* job description */}
                <div className="my-6">
                    <h2 className="text-3xl font-medium text-dark">Description</h2>

                    {/* Overview */}
                    <div className="mt-5">
                        <h4 className="text-xl">Overview:</h4>
                        <p className="text-gray">{overview}</p>
                    </div>

                    {/* Requirements */}
                    <div className="mt-5">
                        <h4 className="text-xl">Requirements:</h4>
                        <ul className="list-disc text-lightGray pl-7 flex flex-col gap-2">
                            {
                                requirements.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </ul>
                    </div>

                    {/* Skill & Experience */}
                    <div className="mt-5">
                        <h4 className="text-xl">Skill & Experience:</h4>
                        <ul className="list-disc text-lightGray pl-7 flex flex-col gap-2">
                            {
                                skillsExperience.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mt-5">
                        <h4 className="text-xl">Benefits:</h4>
                        <ul className="list-disc text-lightGray pl-7 flex flex-col gap-2">
                            {
                                benefits.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </ul>
                    </div>
                </div>

                <Divider />

                {/* skills */}
                <div className="mt-6">
                    <h2 className="text-3xl font-medium text-dark">Skills</h2>
                    <div className="flex flex-wrap items-center gap-2 mt-4 duration-300">
                        {skills.map((skill, index) => (
                            <p
                                key={index}
                                className="bg-purple/20 hover:bg-white text-purple px-4 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                            >{skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJobBody;