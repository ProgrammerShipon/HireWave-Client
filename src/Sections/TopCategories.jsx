import React, { useEffect, useState } from 'react';
import JobCategoryCard from '../Components/JobCategoryCard';
import SectionTitle from '../Components/SectionTitle';

const TopCategories = () => {
    const [jobCategory, setJobCategory] = useState([])
    useEffect(() => {
        fetch('./jobCategoris.json')
            .then((res) => res.json())
            .then((data) => setJobCategory(data))
    }, [])

    const fifteenCard = jobCategory.slice(0, 15)

    return (
        <section className='bg-[#edf6f7] py-20'>
            {/* section title  */}
            <SectionTitle title='Top Category' para='All Top Category' />

            {/* categories  */}
            <div className='grid grid-cols-1 md:grid-cols-5  pt-16  mx-20'>

                {
                    fifteenCard.map((category) => (
                        <JobCategoryCard
                            key={category._id}
                            category={category}
                        ></JobCategoryCard>
                    ))
                }
            </div>
            <div className='text-center pb-8'>
                <button className=' border px-2 py-2 font-medium text-[#1b0e3d] hover:bg-[#052e35] rounded-md hover:text-white ease-in-out duration-500'> View All Categories </button>
            </div>
        </section>
    );
};

export default TopCategories;