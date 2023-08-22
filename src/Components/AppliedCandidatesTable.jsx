import React from 'react';
import Button from './Button';

const AppliedCandidatesTable = ({ appliedCandidates, selectedSort }) => {
    return (
        <>
            {/* Table for bigger devices */}
            <div className='hidden md:block duration-300 col-span-3'>
                <table className='text-center border border-purple/40'>
                    <thead className='border-b border-purple/50 bg-green/20'>
                        <tr>
                        <th className='px-2 py-3'></th>
                        <th className='px-5'></th>
                        <th className='px-2 py-3'>Applicant</th>
                        <th className='px-2 py-3'>Job Applied</th>
                        <th className='px-2 py-3'>Hourly Rate</th>
                        <th className='px-2 py-3'>Rating</th>
                        <th className='px-10 py-3'>Location</th>
                        <th className='px-2 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appliedCandidates.map((sortedData, index)=><tr key={sortedData.id} className='border-b border-purple/40'>
                            <td className='px-5 py-3 text-green'>{index+1}</td>
                            <td><img className='w-10 rounded-full' src={sortedData.applicantImage} alt="" /></td>
                            <td className='px-5 py-3'>{sortedData.applicantName}</td>
                            <td className='px-5 py-3'>{sortedData.jobTitle}</td>
                            <td className='px-10 py-3'>{sortedData.applicantHourlyRate}$</td>
                            <td className='px-5 py-3'>{sortedData.applicantRating}</td>
                            <td className='px-5 py-3'>{sortedData.applicantLocation}</td>
                            <td className='px-2 py-3'><div className='w-32'><Button>View Details</Button></div></td>
                        </tr>)
                        }
                    </tbody>
                </table> 
            </div>  

            {/* Table for smaller devices */}
            <div className='block md:hidden'>
                {
                    appliedCandidates.map((sortedData, index)=> <div key={sortedData.id} className='border border-purple hover:border-green rounded hover:shadow-xl hover:shadow-green/20 duration-300 mb-2'>

                        {/* Index + image */}
                        <div className='flex items-center justify-between gap-5 px-5 pt-5'>
                            <p className='text-purple hover:text-green border px-3 py-1 w-fit rounded-full'>{index+1}</p>
                            <img className='w-20 rounded-full' src={sortedData.applicantImage} alt="" />
                        </div>

                        {/* Applicant Name */}
                        <div className='flex items-center justify-between gap-5 px-5 py-3'>
                            <p>Applicant</p>
                            <p>{sortedData.applicantName}</p>
                        </div>

                        {/* Job Title */}
                        <div className='flex items-center justify-between gap-5 px-5 py-3'>
                            <p>Job Applied</p>
                            <p>{sortedData.jobTitle}</p>
                        </div>

                        {/* Hourly Rate */}
                        <div className='flex items-center justify-between gap-5 px-5 py-3'>
                            <p>Hourly Rate</p>
                            <p>{sortedData.applicantHourlyRate}</p>
                        </div>

                        {/* Rating */}
                        <div className='flex items-center justify-between gap-5 px-5 py-3'>
                            <p>Rating</p>
                            <p>{sortedData.applicantRating}</p>
                        </div>

                        {/* Applicant Location */}
                        <div className='flex items-center justify-between gap-5 px-5 py-3'>
                            <p>Location</p>
                            <p>{sortedData.applicantLocation}</p>
                        </div>

                        {/* View Details */}
                        <div className='flex items-center justify-end pr-5 py-3'>
                            <p><Button>View Details</Button></p>
                        </div>
                    </div>)
                }

            </div>
        </>
    );
};

export default AppliedCandidatesTable;