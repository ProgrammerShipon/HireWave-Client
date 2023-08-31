import React from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';

const Portfolio = () => {
    return (
        <div className='bg-white px-5 rounded-lg mb-10 flex-1 pb-5 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <AiOutlineFileDone fill='green' size={20}/>
                <p className='text-dark text-xl'>Portfolio</p>
            </h2>

            <div className=''>
                {/* Add Portfolio Button */}
                <div className='flex justify-center'>
                    <button className='text-blue-600'>+ Add Portfolio</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;