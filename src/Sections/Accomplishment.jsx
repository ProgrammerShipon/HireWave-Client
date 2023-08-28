import React from 'react';
import { MdDoneAll } from 'react-icons/md';

const Accomplishment = () => {
    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <MdDoneAll fill='green' size={20}/>
                <p className='text-dark text-xl'>Accomplishment / Additional Details</p>
            </h2>

            <div className=''>



                {/* Add Portfolio Button */}
                <div className='flex justify-center'>
                    <button className='text-blue-600'>+ Add Accomplishment / Additional Details</button>
                </div>
            </div>
        </div>
    );
};

export default Accomplishment;