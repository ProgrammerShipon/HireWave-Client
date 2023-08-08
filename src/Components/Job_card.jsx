import React from 'react';
import { FaHome, FaRegCalendarAlt, FaRegMoneyBillAlt, FaRegPlayCircle, FaRupeeSign } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from 'react-router-dom';
const Job_card = ({ data }) => {
    const { id, company_logo, job_title, startTime, postTime,
        jobType, duration, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = data
    return (
        <div className='border-2 border-green p-10 rounded-md shadow-2xl shadow-gray-300'>
            <div>
                <h3 className='text-2xl font-semibold mt-5 '>{job_title}</h3>
                <p className='font-semibold opacity-75 mb-2'>{company_name}</p>
                <p className='text-flex my-3' > <FaHome /> {remote_or_onsite}</p>
                <p></p>
                <div className='flex gap-10 my-3'>
                    <div>
                        <p className='text-flex text-gray-600 font-medium'> <FaRegPlayCircle /> Start Date </p>
                        <p className='ml-1'>{startTime}</p>
                    </div>
                    <div>
                        <p className='text-flex text-gray-600 font-medium'> <FaRegCalendarAlt /> Duration</p>
                        <p className=''>{duration}</p>
                    </div>
                    <div>
                        <p className='text-flex text-gray-600 uppercase font-medium '><FaRegMoneyBillAlt /> Stipend</p>
                        <p className='text-flex'><FaRupeeSign className='' />{salary} / month</p>
                    </div>
                </div>
                <div className='flex gap-10 my-3'>
                    <p className='text-flex text-green'> <MdOutlineWatchLater /> {postTime}</p>
                    <p className='text-blue-700'>{jobType}</p>

                </div>
                <div className='border-t-2 my-3 py-3 flex justify-between '>
                    <Link to='/jobdetails' state={data} className='pop-btn '>View Details</Link>
                    <button className='btn'>Apply</button>

                </div>

            </div>

        </div>
    );
};

export default Job_card;