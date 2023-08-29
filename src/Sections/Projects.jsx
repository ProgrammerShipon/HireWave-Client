import React from 'react';
import { AiFillProject } from 'react-icons/ai';

const Projects = () => {
    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <AiFillProject fill='green' size={20}/>
                <p className='text-dark text-xl'>Academics / Personal Projects</p>
            </h2>

            <div className=''>



                {/* Add Portfolio Button */}
                <div className='flex justify-center'>
                    <button className='text-blue-600'>+ Add Academics / Personal Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;