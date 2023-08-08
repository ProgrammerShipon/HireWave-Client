import React from 'react';

const JobCategoryCard = ({ category }) => {


    return (

        <div className=' cursor-pointer rounded-md shadow-sm hover:ease-in-out duration-300 hover:drop-shadow-xl shadow-[#59c8d4] bg-opacity-50 gap-4 bg-white py-6 mx-5 my-5 flex flex-col items-center justify-center' >
            <div className='text-center'>
                <img className='w-20  border px-6 py-6 bg-[#e0eeef] rounded-full' src={category.img} alt="" />
            </div>
            <p className='text-1xl font-semibold'>{category.category_name}</p>
            <span >Total Jobs: {category.jobs.length}</span>
        </div>
    );
};

export default JobCategoryCard;