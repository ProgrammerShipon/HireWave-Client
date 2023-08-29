import { Link } from "react-router-dom";
import RecentReviewSlider from "../Components/RecentReviewSlider";

// react icons
import { BiMap } from "react-icons/bi";
import { BsBookmarkPlus, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaRegCalendarAlt,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// react rating
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CandidateDetailsContent = ({ candidateDetails }) => {
    const {
        name,
        images,
        location,
        status,
        hourlyRate,
        joinDate,
        category,
        recommendations,
        rating,
        recentReview,
        languages,
        about,
        education,
        experience,
        skills,
    } = candidateDetails;

    // rating style
    const myStyles = {
        itemShapes: Star,
        activeFillColor: "#ffb33e",
        inactiveFillColor: "#a78f6d",
    };

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                {/* candidate profile */}
                <div className="flex flex-col justify-between max-w-5xl px-6 mx-auto duration-300 border lg:flex-row shadow-4xl shadow-gray/30 border-purple/40 hover:border-green/40 sm:px-8 md:px-12">
                    <div className="flex flex-col items-start gap-10 md:flex-row group">
                        {/* image & rating */}
                        <div className="relative -top-8">
                            <div className="relative w-64 h-64 p-3 mx-auto overflow-hidden duration-300 bg-white border border-green/50 shadow-4xl shadow-gray/40 group-hover:shadow-green/20">
                                <img
                                    src={images}
                                    className="object-cover object-center w-full h-full animate-pulse"
                                    alt={name}
                                />

                                <span
                                    className={`absolute top-1 right-1 text-white px-3 rounded-full text-sm capitalize ${status == "online" ? "bg-green" : "bg-red-400"
                                        }`}
                                >
                                    {status}
                                </span>
                            </div>

                            {/* rating */}
                            <div className="flex items-center justify-center gap-1 mt-5">
                                <p className="px-2 text-purple bg-purple/30">{rating}</p>

                                <Rating
                                    className="max-w-[110px]"
                                    readOnly
                                    value={rating}
                                    itemStyles={myStyles}
                                />

                                <span className="text-gray">(0{recentReview.length})</span>
                            </div>

                            <p className="mt-1 text-sm text-center text-gray">
                                <span className="text-dark">0{recommendations}</span>{" "}
                                Recommendations
                            </p>
                        </div>

                        {/* content */}
                        <div className="duration-300 -mt-14 md:mt-6">
                            <h1 className="text-4xl font-medium text-dark">{name}</h1>
                            <h3 className="text-xl font-light text-lightGray">{category}</h3>

                            <p className="flex items-center mt-4 font-light text-dark">
                                <BsCurrencyDollar className="text-lightGray" />
                                {hourlyRate}/hour
                            </p>

                            <p className="flex items-center gap-[2px] font-light text-dark ">
                                <BiMap className="text-lightGray" /> {location}
                            </p>
                            <p className="text-gray">Member since {joinDate}</p>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="flex flex-col items-center justify-between gap-4 py-6 duration-300 max-w-48 sm:flex-row lg:flex-col sm:items-end sm:gap-0 sm:-mt-16 lg:-mt-0">
                        {/* social links */}
                        <div className="flex items-center gap-2">
                            <Link
                                to="/"
                                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                            >
                                <FaFacebookF size="20px" />
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
                        <div className="flex flex-col items-center gap-3">
                            <button className="flex items-center justify-center w-full gap-2 px-5 py-3 capitalize duration-300 bg-transparent border rounded-lg shadow-xl text-dark hover:text-white border-green hover:bg-green hover:shadow-green/20 group">
                                Add to Favorite{" "}
                                <BsBookmarkPlus
                                    size="21"
                                    className="text-green group-hover:text-white"
                                />
                            </button>

                            <button className="flex items-center justify-center w-full gap-2 px-5 py-3 capitalize duration-300 bg-transparent border rounded-lg shadow-xl text-dark hover:text-white border-green hover:bg-green hover:shadow-green/20 group">
                                Contact With Me{" "}
                                <AiOutlineMessage
                                    size="22"
                                    className="text-green group-hover:text-white"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* candidate about */}
                <div className="grid grid-cols-1 gap-5 mt-10 duration-300 lg:grid-cols-3 lg:gap-10">
                    {/* left part */}
                    <div className="flex flex-col gap-5">
                        {/* recent review */}
                        <div className="p-6 bg-white shadow-4xl shadow-gray/20">
                            <h2 className="mb-4 text-xl font-medium text-dark">
                                Recent Review{" "}
                                <span className="text-gray">(0{recentReview.length})</span>
                            </h2>
                            <RecentReviewSlider recentReview={recentReview} />
                        </div>

                        {/* languages */}
                        <div className="p-6 bg-white shadow-4xl shadow-gray/20">
                            <h2 className="mb-4 text-xl font-medium text-dark">Languages</h2>
                            {languages.map((lng, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1 mb-2 capitalize last:mb-0"
                                >
                                    <p className="text-dark">{lng.name}</p>
                                    <span className="inline-block w-2 border-t border-gray"></span>
                                    <p className="text-gray">{lng.level}</p>
                                </div>
                            ))}
                        </div>

                        {/* skills */}
                        <div className="p-6 bg-white shadow-4xl shadow-gray/20">
                            <h2 className="mb-4 text-xl font-medium text-dark">Skills</h2>

                            <div className="flex flex-wrap items-center justify-start gap-2 mt-4 duration-300">
                                {skills.map((skill, index) => (
                                    <p
                                        key={index}
                                        className="bg-purple/20 hover:bg-white text-purple px-3 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                                    >
                                        {skill}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* right part */}
                    <div className="flex flex-col col-span-2 gap-5 p-6 bg-white shadow-4xl shadow-gray/20">
                        {/* about */}
                        <div>
                            <h2 className="mb-1 text-3xl font-medium text-dark">About</h2>
                            <p>{about}</p>
                        </div>

                        {/* education */}
                        <div>
                            <h2 className="my-4 text-xl font-medium text-dark">Education</h2>
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`border-s pl-6 py-2 ml-3 relative before:absolute before:h-6 before:w-6 before:rounded-full before:top-[10px] before:-left-3 after:absolute after:h-3 after:w-3 after:rounded-full after:top-4 after:-left-[6px] ${edu.currentStudying
                                        ? "before:bg-green/40 after:bg-green border-green/50"
                                        : "before:bg-purple/40 after:bg-purple border-purple/50"
                                        }`}
                                >
                                    <h3
                                        className={`text-lg ${edu.currentStudying ? "text-green" : "text-purple"
                                            }`}
                                    >
                                        {edu.subject}
                                    </h3>
                                    <p className="flex items-center gap-1 text-lightGray">
                                        <LuGraduationCap />
                                        {edu.institute} -
                                        <span className="flex items-center gap-1 ml-1">
                                            <FaRegCalendarAlt /> {edu.startDate.split(",")[1]}
                                        </span>
                                    </p>

                                    {edu.currentStudying ? (
                                        <p className="text-sm text-gray">Currently Studying</p>
                                    ) : (
                                        <p className="flex items-center gap-1 text-sm text-gray">
                                            <FaRegCalendarAlt />
                                            {edu.startDate} - {edu.endDate}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* experience */}
                        <div>
                            <h2 className="my-4 text-xl font-medium text-dark">Experience</h2>
                            {experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 mb-7 last:mb-0"
                                >
                                    <div className="w-16 h-16 overflow-hidden rounded-md shadow-xl shadow-purple/30">
                                        <img
                                            className="object-cover object-center w-full"
                                            src={exp.logo}
                                            alt={exp.companyName}
                                        />
                                    </div>

                                    <div>
                                        <h3
                                            className={`text-xl ${exp.currentWorking ? "text-green" : "text-purple"
                                                }`}
                                        >
                                            {exp.position} -{" "}
                                            <span className="text-sm capitalize text-lightGray">
                                                {exp.jobType}
                                            </span>
                                        </h3>

                                        <p className="text-lightGray">{exp.companyName}</p>

                                        {exp.currentWorking ? (
                                            <p className="flex items-center gap-1 text-sm text-gray">
                                                <FaRegCalendarAlt />
                                                {exp.startDate} - Present
                                            </p>
                                        ) : (
                                            <p className="flex items-center gap-1 text-sm text-gray">
                                                <FaRegCalendarAlt />
                                                {exp.startDate} - {exp.endDate}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CandidateDetailsContent;
