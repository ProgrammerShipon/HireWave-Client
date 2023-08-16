import React from 'react';
import Divider from './Divider';

const CategoryList = ({ allCategory }) => {
    const { category, vacancy, relatedJobs1, relatedJobs2, relatedJobs3 } = allCategory;
    return (
        <div>
            <div className=' bg-white  border border-green lg:border-0 hover:shadow-3xl lg:hover:border-white rounded-lg lg:rounded-none hover:rounded-lg overflow-hidden lg:hover:scale-105 hover:z-20 p-5  duration-300 group'>
                <div className='pb-3 grid grid-cols-1 md:grid-cols-12'>
                    <div className=' w-72 mx-auto mb-2 col-span-1 md:col-span-4'>
                        <h2 className='text-4xl font-semibold text-center'> {category} </h2>
                        <p className='text-gray font-semibold mt-3 text-center'>({vacancy})</p>
                    </div>
                    <div className="col-span-1 md:col-span-8">
                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
                            <div >
                                {
                                    relatedJobs1?.map(job => <p className='hover:text-green  cursor-pointer'>{job}</p>)
                                }
                            </div>
                            <div >
                                {
                                    relatedJobs2?.map(job => <p className='hover:text-green  cursor-pointer'>{job}</p>)
                                }
                            </div>
                            <div >
                                {
                                    relatedJobs3?.map(job => <p className='hover:text-green cursor-pointer'>{job}</p>)
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Divider />
        </div>

    );
};

export default CategoryList;