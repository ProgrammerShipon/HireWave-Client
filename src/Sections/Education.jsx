import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const Education = () => {
    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <FaGraduationCap fill='purple' size={20}/>
                <p className='text-dark text-xl'>Education</p>
            </h2>

            {/* All Educations */}
            <div className='flex gap-10 mb-5 mx-auto w-fit rounded-lg bg-green/10 px-8 py-4'>
                <div className=''>
                    <h4 className='font-semibold text-xl'>Bachelor of Science (B.Sc), Computer Science & Engineering</h4>
                    <p className='mb-2'>International University Of Business Agriculture & Technology</p>
                    <p className='mb-1'>2021 - 2025</p>
                    <p className=''>CGPA: 3.88/4</p>
                </div>
                
                {/* Edit and Delete Buttons */}
                <div className='flex gap-3 justify-center'>
                    <button className='hover:text-green'><FiEdit size={20} /></button>
                    <button className='hover:text-red-500'><AiOutlineDelete size={24} /></button>
                </div>
            </div>

            {/* Add Education Button */}
            <div className='flex justify-center'>
                <button className='text-blue-600'>+ Add Eduction</button>
            </div>
        </div>
    );
};

export default Education;