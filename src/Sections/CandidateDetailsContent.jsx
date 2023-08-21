// react icons
import { BiMap } from "react-icons/bi";
import { BsBookmarkPlus, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaRegCalendarAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


// react rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
import RecentReviewSlider from "../Components/RecentReviewSlider";

const CandidateDetailsContent = ({ candidateDetails }) => {
    const { name, images, location, status, hourlyRate, joinDate, category, recommendations, rating, recentReview, languages, about, education, experience, skills } = candidateDetails;

    // rating style
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb33e',
        inactiveFillColor: '#a78f6d'
    }

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">

                {/* candidate profile */}
                <div className="flex flex-col lg:flex-row justify-between shadow-4xl shadow-gray/30 border border-purple/40 hover:border-green/40 px-6 sm:px-8 md:px-12 max-w-5xl mx-auto duration-300">

                    <div className='flex flex-col md:flex-row items-start gap-10 group'>

                        {/* image & rating */}
                        <div className="relative -top-8">
                            <div className="relative w-64 h-64 mx-auto p-3 bg-white border border-green/50 shadow-4xl shadow-gray/40 group-hover:shadow-green/20 duration-300 overflow-hidden">
                                <img src={images} className='w-full h-full object-cover object-center animate-pulse' alt={name} />

                                <span className={`absolute top-1 right-1 text-white px-3 rounded-full text-sm capitalize ${status == 'online' ? 'bg-green' : 'bg-red-400'}`}>{status}</span>
                            </div>

                            {/* rating */}
                            <div className="flex items-center justify-center gap-1 mt-5">
                                <p className="px-2 text-purple bg-purple/30">{rating}</p>

                                <Rating className='max-w-[110px]' readOnly value={rating} itemStyles={myStyles} />

                                <span className="text-gray">(0{recentReview.length})</span>
                            </div>

                            <p className="text-center text-gray text-sm mt-1"><span className="text-dark">0{recommendations}</span> Recommendations</p>
                        </div>

                        {/* content */}
                        <div className="-mt-14 md:mt-6 duration-300">
                            <h1 className='text-dark text-4xl font-medium'>{name}</h1>
                            <h3 className='text-xl font-light text-lightGray'>{category}</h3>

                            <p className="flex items-center font-light text-dark mt-4">
                                <BsCurrencyDollar className="text-lightGray" />{hourlyRate}/hour
                            </p>

                            <p className="flex items-center gap-[2px] font-light text-dark ">
                                <BiMap className="text-lightGray" /> {location}
                            </p>
                            <p className="text-gray">
                                Member since {joinDate}
                            </p>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="max-w-48 flex flex-col sm:flex-row lg:flex-col items-center sm:items-end justify-between gap-4 sm:gap-0 py-6 sm:-mt-16 lg:-mt-0 duration-300">
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
                        <div className='flex flex-col items-center gap-3'>
                            <button className="w-full flex items-center justify-center gap-2 bg-transparent text-dark hover:text-white px-5 py-3 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 capitalize group">Add to Favorite <BsBookmarkPlus size='21' className="text-green group-hover:text-white" />
                            </button>

                            <button className="w-full flex items-center justify-center gap-2 bg-transparent text-dark hover:text-white px-5 py-3 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 capitalize group">
                                Contact With Me <AiOutlineMessage size='22' className="text-green group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* candidate about */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 mt-10 duration-300">

                    {/* left part */}
                    <div className="flex flex-col gap-5">
                        {/* recent review */}
                        <div className="bg-white shadow-4xl shadow-gray/20 p-6">
                            <h2 className="text-xl text-dark font-medium mb-4">
                                Recent Review <span className="text-gray">(0{recentReview.length})</span>
                            </h2>
                            <RecentReviewSlider recentReview={recentReview} />
                        </div>

                        {/* languages */}
                        <div className="bg-white shadow-4xl shadow-gray/20 p-6">
                            <h2 className="text-xl text-dark font-medium mb-4">Languages</h2>
                            {
                                languages.map((lng, index) => <div
                                    key={index}
                                    className="flex items-center gap-1 capitalize mb-2 last:mb-0"
                                >
                                    <p className="text-dark">{lng.name}</p>
                                    <span className="border-t border-gray w-2 inline-block"></span>
                                    <p className="text-gray">{lng.level}</p>
                                </div>)
                            }
                        </div>

                        {/* skills */}
                        <div className="bg-white shadow-4xl shadow-gray/20 p-6">
                            <h2 className="text-xl text-dark font-medium mb-4">Skills</h2>

                            <div className="flex flex-wrap items-center justify-start gap-2 mt-4 duration-300">
                                {skills.map((skill, index) => (
                                    <p
                                        key={index}
                                        className="bg-purple/20 hover:bg-white text-purple px-3 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                                    >{skill}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* right part */}
                    <div className="col-span-2 bg-white shadow-4xl shadow-gray/20 p-6 flex flex-col gap-5">
                        {/* about */}
                        <div>
                            <h2 className="text-3xl text-dark font-medium mb-1">About</h2>
                            <p>{about}</p>
                        </div>

                        {/* education */}
                        <div>
                            <h2 className="text-xl text-dark font-medium my-4">Education</h2>
                            {
                                education.map((edu, index) => <div
                                    key={index}
                                    className={`border-s pl-6 py-2 ml-3 relative before:absolute before:h-6 before:w-6 before:rounded-full before:top-[10px] before:-left-3 after:absolute after:h-3 after:w-3 after:rounded-full after:top-4 after:-left-[6px] ${edu.currentStudying ? 'before:bg-green/40 after:bg-green border-green/50' : 'before:bg-purple/40 after:bg-purple border-purple/50'}`}>
                                    <h3 className={`text-lg ${edu.currentStudying ? 'text-green' : 'text-purple'}`}>{edu.subject}</h3>
                                    <p className="text-lightGray flex items-center gap-1">
                                        <LuGraduationCap />
                                        {edu.institute} -
                                        <span className="flex items-center gap-1 ml-1"><FaRegCalendarAlt /> {edu.startDate.split(',')[1]}</span>
                                    </p>

                                    {
                                        edu.currentStudying ? <p className="text-sm text-gray">Currently Studying</p> : <p className="flex items-center gap-1 text-sm text-gray">
                                            <FaRegCalendarAlt />{edu.startDate} - {edu.endDate}
                                        </p>
                                    }
                                </div>)
                            }
                        </div>

                        {/* experience */}
                        <div>
                            <h2 className="text-xl text-dark font-medium my-4">Experience</h2>
                            {
                                experience.map((exp, index) => <div
                                    key={index}
                                    className='flex items-start gap-4 mb-7 last:mb-0'>
                                    <div className="h-16 w-16 shadow-xl shadow-purple/30 overflow-hidden rounded-md">
                                        <img className="w-full object-cover object-center" src={exp.logo} alt={exp.companyName} />
                                    </div>

                                    <div>
                                        <h3 className={`text-xl ${exp.currentWorking ? 'text-green' : 'text-purple'}`}>{exp.position} - <span className="text-sm text-lightGray capitalize">{exp.jobType}</span></h3>

                                        <p className='text-lightGray'>{exp.companyName}</p>

                                        {
                                            exp.currentWorking ? <p className="text-sm text-gray flex items-center gap-1">
                                                <FaRegCalendarAlt />{exp.startDate} - Present
                                            </p> : <p className="flex items-center gap-1 text-sm text-gray">
                                                <FaRegCalendarAlt />{exp.startDate} - {exp.endDate}
                                            </p>
                                        }
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CandidateDetailsContent;