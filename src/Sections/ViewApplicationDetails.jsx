import { Link } from "react-router-dom";
import GetAgoTime from "../Components/GetAgoTime";

// react icons
import { GiLevelEndFlag } from 'react-icons/gi';
import { BsLink45Deg, BsCurrencyDollar } from 'react-icons/bs';
import { LiaIndustrySolid } from 'react-icons/lia';
import { SlLocationPin } from 'react-icons/sl';

const ViewApplicationDetails = ({ jobData, appliedJob }) => {
    const { title, companyName, category, location, postedDate, description, skills, experience, salary, open } = jobData;

    const { jobId, cover_letter, attachment, expected_salary, appliedDate } = appliedJob;

    const formattedCoverLetter = cover_letter.map(pa => pa === "" ? "\u00A0" : pa);

    return (
        <section className='py-20 md:py-[120px]'>
            <div className="container">
                <div className='max-w-5xl mx-auto'>

                    {/* cover letter */}
                    <div className='border border-gray/40 hover:border-green rounded-md px-5 md:px-10 py-3 md:py-5 shadow-lg hover:shadow-4xl hover:shadow-green/20 duration-300 group'>
                        <div className="flex items-start justify-between">
                            <h1 className='text-green text-2xl font-medium mt-2 mb-5 drop-shadow-xl'>Cover Letter</h1>

                            <p className="bg-purple/20 px-2 text-purple font-medium rounded-md"><span className="text-lightGray">Submitted:</span> <GetAgoTime datetime={appliedDate} /></p>
                        </div>

                        <div>
                            {
                                formattedCoverLetter.length > 0 && formattedCoverLetter.map((ab, index) => <p key={index} className="text-lightGray tracking-wide">
                                    {ab}
                                </p>)
                            }



                            <div className="mt-10">
                                <p className="text-lightGray mb-3">Offer Price: ${expected_salary}</p>

                                <h2 className="text-xl text-lightGray">Attachment</h2>
                                {
                                    attachment.map((lnk, index) => <a key={index} href={lnk} target="_black" referrerPolicy="no-referrer"
                                        className="text-purple flex items-center hover:underline mb-1"
                                    >
                                        <BsLink45Deg />    {lnk}
                                    </a>)
                                }
                            </div>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className='border border-gray/40 hover:border-green rounded-md px-5 md:px-10 py-3 md:py-5 mt-8 shadow-lg hover:shadow-4xl hover:shadow-green/20 duration-300 group'>
                        <div className='flex items-start justify-between'>
                            <h1 className='text-green text-2xl font-medium mt-2 mb-5 drop-shadow-xl'>Job Details</h1>

                            <p className={`font-medium px-3 rounded-md ${open ? "bg-green/20 text-green" : "bg-red-400/20 text-red-400"}`}>{open ? " Open to Apply" : "Closed"}</p>
                        </div>

                        <div className='md:flex justify-between items-start gap-2 md:gap-5 lg:gap-8 mb-2'>
                            <div>
                                <h2 className='text-2xl mb-2 text-dark drop-shadow-xl'>{title}</h2>
                                <div className='flex gap-3 mb-5'>
                                    <p className='bg-purple/20 text-purple px-4 rounded-full shadow-lg shadow-purple/30'>{category}</p>
                                    <GetAgoTime datetime={postedDate} />
                                </div>

                                <div className="jobId" dangerouslySetInnerHTML={{ __html: description }}></div>

                                <Link to={`/job_details/${jobId}`} className='text-blue-500 hover:underline'>View Job Posting</Link>
                            </div>

                            {/* experience, salary, company name, location */}
                            <div className='relative md:top-16 w-80 md:w-96 md:border-s border-gray/40 group-hover:border-green/40 md:pl-3 md:pr-2 py-2 md:my-0 duration-300'>
                                {/* experience */}
                                <div className='flex items-start gap-3 mb-2'>
                                    <GiLevelEndFlag size={20} className="text-purple mt-[2px]" />
                                    <div className="flex flex-wrap">
                                        <p>Experience,</p>
                                        <p className="text-sm text-lightGray ml-2">{experience}</p>
                                    </div>
                                </div>

                                {/* salary */}
                                <div className='flex items-start gap-3 mb-2'>
                                    <BsCurrencyDollar size={20} className="text-purple mt-[2px]" />
                                    <div className="flex flex-wrap">
                                        <p>Salary,</p>
                                        <p className="text-sm text-lightGray ml-2">${salary}</p>
                                    </div>
                                </div>

                                {/* company name */}
                                <div className='flex items-start gap-3 mb-2'>
                                    <LiaIndustrySolid size={20} className="text-purple mt-[2px]" />
                                    <div className="flex flex-wrap">
                                        <p>Company,</p>
                                        <p className="text-sm text-lightGray ml-2">{companyName}</p>
                                    </div>
                                </div>

                                {/* location */}
                                <div className='flex items-start gap-3'>
                                    <SlLocationPin size={18} className="text-purple mt-[2px]" />
                                    <div className="flex flex-wrap">
                                        <p>Location,</p>
                                        <p className="text-sm text-lightGray ml-2">{location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <h2 className='border-t border-gray/40 group-hover:border-green/40 mb-2 pt-3 duration-300'>Skills and Expertise</h2>
                        <div className='flex gap-2 items-center'>
                            {
                                skills?.map(skill => <p key={skill} className='bg-green/10 text-green px-4 rounded-full'>{skill}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewApplicationDetails;