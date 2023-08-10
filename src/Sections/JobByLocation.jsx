import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobByLocation = () => {
    const [jobLocation, setJobLocation] = useState([]);

    // fetch data

    useEffect(() => {
        fetch('JobByLocation.json')
            .then(res => res.json())
            .then(data => setJobLocation(data))

    }, []);
    return (
        <section>
            <div className="container p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobLocation?.map((location) => (

                        <div key={location._id} className='' >
                            <Link>
                                <div className='w-96 mx-auto relative border-2 border-gray border-opacity-40 p-2 rounded-2xl hover:shadow-xl hover:shadow-green hover:duration-300'>
                                    <img src={location.image} className='h-48 w-full rounded-xl ' alt="" />
                                    <span className='  absolute top-5 left-5  px-3 rounded-lg bg-blue-200 text-blue-700'>{location.status}</span>
                                    <div className='
                                   
                                     my-2 p-2 rounded-md '>
                                        <h3 className='text-xl font-semibold'>{location.name}</h3>
                                        <div className='flex justify-between px-1 opacity-70'>
                                            <p>{location.vacancy} Vacancy</p>
                                            <p>{location.companies} companies</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobByLocation;