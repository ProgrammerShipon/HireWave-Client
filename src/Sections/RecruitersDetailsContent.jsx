import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecentReviewSlider from "../Components/RecentReviewSlider";
import GetAgoTime from "../Components/GetAgoTime";
import useAllJobs from "../Hooks/useAllJobs";
import JobCard from "../Components/JobCard";

// react rating
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// react icons
import { BiMap } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

export default function RecruitersDetailsContent({ recruiterData }) {
    const [allJobsData, loading] = useAllJobs();
    const [postedJob, setPostedJob] = useState([]);

    const {
        company,
        logo,
        companyBanner,
        location,
        industry,
        about,
        joinDate,
        specialties,
        followers,
        rating,
        recentReview,
        companyEmail
    } = recruiterData[0];

    useEffect(() => {
        const filter = allJobsData.filter(job => job.companyEmail === companyEmail)
        setPostedJob(filter)
    }, [loading])

    // rating style
    const myStyles = {
        itemShapes: Star,
        activeFillColor: "#ffb33e",
        inactiveFillColor: "#a78f6d",
    };
    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-6">

                    {/* left side */}
                    <div className="lg:col-span-8 shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">
                        {/* banner */}
                        <div className="w-full h-40 overflow-hidden">
                            <img
                                src={companyBanner}
                                className="object-cover object-center w-full h-full"
                                alt={company}
                            />
                        </div>

                        {/* image & rating */}
                        <div className="flex flex-row gap-4">
                            <div className="-mt-16 ml-5 md:ml-10 w-40 h-40 rounded-md p-2 border border-purple overflow-hidden duration-300 shadow-4xl shadow-gray/40">
                                <img
                                    src={logo}
                                    className="object-cover object-center w-full h-full shadow-3xl shadow-white rounded-md"
                                    alt={company}
                                />
                            </div>

                            {/* rating */}
                            <div>
                                <div className="flex items-center gap-1 mt-5">
                                    <p className="px-2 text-purple bg-purple/30">{rating}</p>

                                    <Rating
                                        className="max-w-[110px] hidden sm:flex"
                                        readOnly
                                        value={rating}
                                        itemStyles={myStyles}
                                    />

                                    <FaStar size='21' className="text-[#ffb33e] sm:hidden" />

                                    <span className="text-gray">(06)</span>
                                </div>

                                {/* followers */}
                                <p className="mt-1 font-light text-lightGray">
                                    <span>{followers}</span>{" "}
                                    Followers
                                </p>
                            </div>
                        </div>

                        {/* content */}
                        <div className="mx-5 md:mx-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-0 mb-6 mt-4">
                            <div className="duration-300">
                                <h1 className="text-4xl font-medium text-dark drop-shadow-xl">{company}</h1>

                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-light text-lightGray">{industry}</h3>

                                    <p className="hidden md:flex items-center gap-[2px] font-light text-dark">
                                        <BiMap className="text-lightGray" /> {location}
                                    </p>
                                </div>
                            </div>

                            {/* button */}
                            <div className="flex sm:inline-block sm:flex-col items-center justify-between">
                                <Link to='/'
                                    className="flex items-center gap-1 px-5 py-1 text-xl bg-green text-white rounded-md sm:mb-3 hover:bg-dark shadow-lg shadow-green/40 hover:shadow-dark/50 duration-300"
                                >
                                    Website <LuExternalLink size='20' />
                                </Link>
                                <Link to='/'
                                    className="flex items-center gap-1 px-5 py-1 text-xl bg-green text-white rounded-md hover:bg-dark shadow-lg shadow-green/40 hover:shadow-dark/50 duration-300"
                                >
                                    <AiOutlinePlus size='22' /> Follow
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="lg:col-span-3 p-3 shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">
                        <h3 className="text-2xl font-medium text-dark drop-shadow-lg">Locations</h3>
                        <h6 className="text-dark font-medium bg-gray/30 w-fit px-3 rounded-full mt-4">Primary</h6>
                        <p className="text-sm text-lightGray mt-1">{location}</p>
                        <iframe
                            className="mt-5"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58313.32936238924!2d89.208406036506!3d24.010495144173714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84d98fa5bf3d%3A0xb038902617eb9884!2sPabna!5e0!3m2!1sen!2sbd!4v1692681736855!5m2!1sen!2sbd"
                            width="100%"
                            height="200"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* recruiter about */}
                <div className="grid grid-cols-1 gap-5 mt-10 duration-300 lg:grid-cols-3 lg:gap-10">
                    {/* left part */}
                    <div className="flex flex-col gap-5 p-6  shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">

                        {/* Recent Review */}
                        <div>
                            <h3 className="text-xl mb-2">Recent Review (0{recentReview?.length})</h3>
                            <RecentReviewSlider recentReview={recentReview} />
                        </div>

                        {/* Member since */}
                        <div className="mt-3">
                            <h3 className="text-lg">Member since</h3>
                            <p className="text-lightGray tracking-wider">{joinDate}</p>
                        </div>

                        {/* Open Jobs */}
                        <div>
                            <h3 className="text-lg">Open Jobs (02)</h3>
                        </div>

                        {/* Last Jobs Posted */}
                        <div>
                            <h3 className="text-lg">Last Jobs Posted</h3>
                            <p className="text-lightGray tracking-wider">
                                <GetAgoTime datetime={joinDate} />
                            </p>
                        </div>
                    </div>

                    {/* right part */}
                    <div className="col-span-2 p-8 shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">
                        {/* about */}
                        <div>
                            <h2 className="mb-1 text-2xl font-medium text-dark">About</h2>
                            <p className="text-lightGray mt-3">{about}</p>
                        </div>

                        <div className="mt-8">
                            <h2 className="mb-1 text-2xl font-medium text-dark">Specialties</h2>
                            <p className="text-lightGray mt-3">{specialties}</p>
                        </div>

                    </div>
                </div>

                {/* latest jobs */}
                <div className="mt-10">
                    <h2 className="text-3xl text-dark font-medium mb-4 drop-shadow-xl">Latest Jobs</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {postedJob.length > 0 && postedJob.map((job, index) => (
                            <JobCard key={index} job={job} setJobDetails={null} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
