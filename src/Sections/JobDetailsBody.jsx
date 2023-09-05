import { Link } from "react-router-dom";
import Button from "../Components/Button";
import GetAgoTime from "../Components/GetAgoTime";
import Divider from "../Components/Divider";

// react icons
import { BiHeart, BiMap } from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";
import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineShareAlt, AiOutlineCalendar } from "react-icons/ai";

const JobDetailsBody = ({ jobDetails }) => {
    const {
        _id,
        title,
        companyName,
        companyLogo,
        category,
        location,
        jobType,
        salary,
        postedDate,
        closingDate,
        experience,
        quantity,
        overview,
        requirements,
        skillsExperience,
        benefits,
        skills,
    } = jobDetails;

    return (
        <section className='py-20 md:py-[120px] max-w-5xl mx-auto'>
            <div className="container">
                <div className="p-8 border rounded-lg border-purple shadow-4xl shadow-gray/40">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-2xl font-medium text-dark">{title}</h1>
                            <p className="text-sm italic text-gray">
                                Posted <GetAgoTime datetime={postedDate} />
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <AiOutlineShareAlt size="24px" className="text-green" />
                            <BiHeart size="24px" className="text-green" />
                        </div>
                    </div>

                    {/* company details */}
                    <div className="flex items-center gap-2 mt-6">
                        <div className="w-16 h-16 overflow-hidden rounded-lg shadow-xl">
                            <img
                                className="object-cover object-center w-full"
                                src={companyLogo}
                                alt={companyName}
                            />
                        </div>
                        <div className="mt-1">
                            <Link
                                to="/"
                                className="text-xl font-medium duration-300 text-dark drop-shadow-lg hover:text-green line-clamp-2"
                            >
                                {companyName}
                            </Link>
                            <p className="text-gray">{category}</p>
                        </div>
                    </div>

                    {/* job details */}
                    <div className="flex flex-col items-start justify-between gap-2 mt-4 duration-300 sm:flex-row sm:items-end">
                        <div className="flex items-center gap-2">
                            <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                                {jobType}
                            </p>

                            <p className="text-purple bg-purple/10 px-4 py-[2px] rounded-full shadow-lg shadow-purple/20 flex items-center gap-1">
                                <BiMap /> {location}
                            </p>
                        </div>
                        <Link to={`/apply_job/${_id}`}>
                            <Button>Apply Now</Button>
                        </Link>
                    </div>

                    <div className="flex flex-col items-start mb-6 md:flex-row md:gap-8">
                        <div className="mt-5">
                            <p className="flex items-center gap-1 text-dark">
                                <HiOutlineCurrencyDollar /> Salary:{" "}
                                <span className="ml-1 text-gray">${salary}/month</span>
                            </p>
                            <p className="flex items-center gap-1 mt-1 text-dark">
                                <AiOutlineCalendar /> Closing date:{" "}
                                <span className="ml-1 text-gray">{closingDate}</span>
                            </p>
                        </div>
                        <div className="mt-1 md:mt-5">
                            <p className="flex items-center gap-1 text-dark">
                                <BsBuildingGear /> Experience:{" "}
                                <span className="ml-1 text-gray">{experience}</span>
                            </p>
                            <p className="flex items-center gap-1 mt-1 text-dark">
                                <HiOutlineUserGroup /> Quantity:{" "}
                                <span className="ml-1 text-gray">{quantity} Person</span>
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
                            <ul className="flex flex-col gap-2 list-disc text-lightGray pl-7">
                                {requirements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Skill & Experience */}
                        <div className="mt-5">
                            <h4 className="text-xl">Skill & Experience:</h4>
                            <ul className="flex flex-col gap-2 list-disc text-lightGray pl-7">
                                {skillsExperience.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mt-5">
                            <h4 className="text-xl">Benefits:</h4>
                            <ul className="flex flex-col gap-2 list-disc text-lightGray pl-7">
                                {benefits.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
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
                                >
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetailsBody;