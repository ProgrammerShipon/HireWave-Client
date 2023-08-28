import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrUserExpert } from 'react-icons/gr';
import { FiEdit } from 'react-icons/fi';

const Experiences = () => {
    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <GrUserExpert size={18}/>
                <p className='text-dark text-xl'>Experiences</p>
            </h2>

            {/* All Experiences */}
            <div className='flex gap-10 mb-5 mx-auto w-fit rounded-lg bg-green/10 px-8 py-4'>
                <div className=''>
                    <h4 className='font-semibold text-xl'>Front-end developer, Mahitech</h4>
                    <p className='mb-1'>2023 - 2024</p>
                </div>
                
                {/* Edit and Delete Buttons */}
                <div className='flex gap-3 justify-center'>
                    <button className='hover:text-green'><FiEdit size={20} /></button>
                    <button className='hover:text-red-500'><AiOutlineDelete size={24} /></button>
                </div>
            </div>

            {/* Add Education Button */}
            <div className='flex justify-center'>
                <button className='text-blue-600'>+ Add Experiences</button>
            </div>
        </div>
    );
};

export default Experiences;