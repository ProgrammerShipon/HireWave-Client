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
                                <div className='w-96 relative'>
                                    <img src={location.image} className='h-48 w-full rounded-md border border-b-0 border-green' alt="" />
                                    <span className=' text-lg absolute top-2 left-2  px-3 rounded-lg bg-blue-300'>{location.status}</span>
                                    <div className='border border-t-0 border-green  my-2 p-2 rounded-md shadow-green'>
                                        <h3 className='text-2xl font-semibold'>{location.name}</h3>
                                        <div className='flex justify-between px-1'>
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