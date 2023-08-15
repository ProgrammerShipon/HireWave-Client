import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Recruiters = () => {

    const [data, setData] = useState([]);
    const [recruiters, setRecruiters] = useState([]);
    const [allChecked, setAllChecked] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState('');
    
    // Fetching data
    useEffect(() => {
        fetch("./recruiters.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setRecruiters(data)
            })
            .catch((err) => console.log(err));
    }, []);


    // Filtering data according to industry
    const handleCheckboxChange= event=> {
        const checked= event.target.checked
        const name= event.target.name
        console.log(checked)
        console.log(name)

        if (name === 'all') {
            setAllChecked(checked);
            if (checked) {
                setRecruiters(data);
            } else {
                setRecruiters([]);
            }
        } else {
            // setAllChecked(false);
            if (checked) {
                setRecruiters((prevRecruiters) => [...prevRecruiters, ...data.filter((d) => d.industry === name)]);
            } else {
                setRecruiters((prevRecruiters) => prevRecruiters.filter((recruiter) => recruiter.industry !== name));
            }
        }

    }

    
    // Filtering data according to industry
    const handleLocationChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedLocation(selectedValue);

        if (selectedValue === '') {
            setRecruiters(data);  
        } else {
            const filteredRecruiters = data.filter(recruiter => recruiter.companyLocation === selectedValue);
            setRecruiters(filteredRecruiters);
        }
    };

    // Get unique locations from data
    const uniqueLocations = [...new Set(data.map(recruiter => recruiter.companyLocation))];

    return (
        <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-20'>

            {/* Sidebar */}
            <div className='sticky top-20 h-screen col-span-1 px-5 py-3 max-w-[300px] mx-auto'>

                {/* Location Dropdown */}
                <div className='my-5'>
                    <select value={selectedLocation} onChange={handleLocationChange} className='rounded w-full px-2 py-1 outline-none border'>
                        <option value="">Select Location</option>
                        {uniqueLocations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>

                <h2 className='text-2xl mb-3'>Industry</h2>
                
                {/* All Checkboxes */}
                <div className='px-5 py-3'>

                    {/* All */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox"
                                    name="all"
                                    id="all"
                                    onChange={handleCheckboxChange}
                                    checked={allChecked}
                                    />
                                <p className='pl-3'>All</p>
                            </div>

                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>{data.length}</p>
                        </div>
                    </div>
                    
                    {/* Software */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox" 
                                    name="Software" 
                                    id="Software"
                                    onChange={handleCheckboxChange}
                                     />
                                <p className='pl-3'>Software</p>
                            </div>
                            
                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>
                                {data.filter(d=> d.industry == "Software").length}
                            </p>
                        </div>
                    </div>

                    {/* Accounting */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox" 
                                    name="Accounting" 
                                    id="Accounting"
                                    onChange={handleCheckboxChange}
                                     />
                                <p className='pl-3'>Accounting</p>
                            </div>

                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>
                                {data.filter(d=> d.industry == "Accounting").length}
                            </p>
                        </div>
                    </div>
                    
                    {/* Agriculture */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox" 
                                    name="Agriculture" 
                                    id="Agriculture"
                                    onChange={handleCheckboxChange}
                                     />
                                <p className='pl-3'>Agriculture</p>
                            </div>

                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>
                                {data.filter(d=> d.industry == "Agriculture").length}
                            </p>
                        </div>
                    </div>
                    
                    {/* Health Care */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox" 
                                    name="Health Care" 
                                    id="Health Care"
                                    onChange={handleCheckboxChange}
                                     />
                                <p className='pl-3'>Health Care</p>
                            </div>

                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>
                            {data.filter(d=> d.industry == "Health Care").length}
                            </p>
                        </div>
                    </div>
                    
                    {/* Legal Service */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox" 
                                    name="Legal Service" 
                                    id="Legal Service"
                                    onChange={handleCheckboxChange}
                                 />
                                <p className='pl-3'>Legal Service</p>
                            </div>

                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>
                                {data.filter(d=> d.industry == "Legal Service").length}
                            </p>
                        </div>
                    </div>
                    
                    {/* Real Estate */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox" 
                                    name="Real Estate" 
                                    id="Real Estate"
                                    onChange={handleCheckboxChange}
                                 />
                                <p className='pl-3'>Real Estate</p>
                            </div>

                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>
                                {data.filter(d=> d.industry == "Real Estate").length}
                            </p>
                        </div>
                    </div>

                    
                    {/* Entertainment */}
                    <div className='mb-4'>
                        <div className='flex gap-5 justify-between'>
                            <div className='flex items-center'>
                                <input 
                                    type="checkbox" 
                                    name="Entertainment" 
                                    id="Entertainment"
                                    onChange={handleCheckboxChange}
                                 />
                                <p className='pl-3'>Entertainment</p>
                            </div>

                            <p className='text-blue-500 bg-blue-200 rounded p-1 text-xs'>
                                {data.filter(d=> d.industry == "Entertainment").length}
                            </p>
                        </div>
                    </div>
                    </div>
            </div>

            {/* Recruiter details */}
            <div className='pt-8 col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5'>
                {
                    recruiters.map(recruiter=> <div className='text-center rounded-sm p-5 border border-green hover:shadow-xl shadow-green/20 max-h-[450px]' key={recruiter.id}>

                        {/* Company image */}
                        <img className='m-auto w-2/3' src={recruiter.companyLogo} alt="" />

                        {/* Company name */}
                        <p className='text-xl'>{recruiter.companyName}</p>

                        {/* Rating and number */}
                        <div className='flex justify-center gap-3 my-2'>
                        <Rating style={{ maxWidth: 100 }} value={Math.round(recruiter.rating || 0)} readOnly />
                        <span>{recruiter.number}</span>
                        </div>

                        {/* Company location */}
                        <div className='flex justify-center items-center gap-2'><CiLocationOn/> {recruiter.companyLocation}</div>

                        {/* Industry */}
                        <p className='my-3'>Industry: {recruiter.industry}</p>

                        {/* Jobs open */}
                        <p className='bg-slate-300 rounded py-4 w-40 mx-auto'>{recruiter.openJobs} Jobs open</p>

                        {/* Visit Company */}
                        <p className='mt-2'>Visit <Link className='text-green' to="">{recruiter.companyName}</Link></p>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recruiters;