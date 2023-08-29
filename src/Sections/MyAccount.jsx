import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { ImUserCheck, ImCancelCircle } from 'react-icons/im';
import { BsPersonWorkspace, BsCheckCircle } from 'react-icons/bs';
import 'react-image-crop/dist/ReactCrop.css';
import ImageCrop from '../Components/ImageCrop';
import BasicInformation from '../Components/BasicInformation';

const MyAccount = () => {
    const [aboutTextarea, setAboutTextarea]= useState(false)
    const [jobExpectationsDiv, setJobExpectationsDiv]= useState(false)
    const [locationDiv, setLocationDiv]= useState(false)

    // "About" div handler
    const handleAboutDiv =(e) => {
        if(e == "edit") setAboutTextarea(true)
        else if (e == "cancel") setAboutTextarea(false)
        else if (e== "save") {
            // ToDo: make logic for saving about info here and create alert for success
            setAboutTextarea(false)
        }
    }

    // "Job Expectations" div handler
    const handleJobExpectationsDiv= (e) => {
        if(e == "edit") setJobExpectationsDiv(true)
        else if (e == "cancel") setJobExpectationsDiv(false)
        else if (e== "save") {
            // ToDo: make logic for saving job info here and create alert for success
            setJobExpectationsDiv(false)
        }
    }

    // "Location" div handler
    const handleLocationDiv= (e) => {
        if(e == "edit") setLocationDiv(true)
        else if (e == "cancel") setLocationDiv(false)
        else if (e== "save") {
            // ToDo: make logic for saving location info here and create alert for success
            setLocationDiv(false)
        }
    }

    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5 shadow-xl'>

            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <ImUserCheck fill='green' size={20}/>
                <p className='text-dark text-xl'>Basic Information</p>
            </h2>

            {/* Image and Main Info */}
            <div className='flex items-center gap-8'>
                {/* Image */}
                <ImageCrop />
                
                {/* Basic Information */}
                <BasicInformation />
                
            </div>

            <div className='flex gap-5 my-5 duration-300'>
                {/* Job Expectation */}
                <div className='border border-green/60 rounded-lg flex-1 px-6 py-4 hover:shadow-lg hover:shadow-green/20 duration-300'>
                    <div className='flex justify-between pb-2 items-center gap-2 border-b border-dark/20 mb-5'>
                        <div className='flex items-center gap-3'>
                            <BsPersonWorkspace fill='green' size={20}/>
                            <p className='text-dark text-xl'>Job Expectations</p>
                        </div>
                        {
                            !jobExpectationsDiv?
                            <FiEdit onClick={()=> handleJobExpectationsDiv("edit")} className='cursor-pointer duration-300 hover:text-green' />:
                            <div className='flex items-center'>
                                <div onClick={()=> handleJobExpectationsDiv("save")} className='text-green text-xl cursor-pointer duration-300 hover:bg-green/10 rounded-full p-2'><BsCheckCircle /></div>
                                <div onClick={()=> handleJobExpectationsDiv("cancel")} className='text-red-500 text-xl cursor-pointer duration-300 hover:bg-red-100 rounded-full p-2'><ImCancelCircle /></div>
                            </div>
                        }
                    </div>
                    {
                        !jobExpectationsDiv?
                        <>
                            <p className='mb-1'>Job-Type: Full-Time</p>
                            <p className='mb-1'>Job-Category: Software & IT</p>
                            <p className='mb-1'>Expected Salary: 20-30k $ (per year)</p>
                            <p>Website: https://www.bakhtiarfahim.com/</p>
                        </> : <>
                            {/* Job Type */}
                            <div className='flex items-center gap-2 mb-1'>
                                <p className='w-full'>Job-Type: </p>
                                <select defaultValue="" className='rounded outline-none h-8 border border-dark/20 w-full px-3'>
                                    <option value="" disabled>Select Job Type</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="freelance">Freelance</option>
                                </select>
                            </div>
                            {/* Expected Salary */}
                            <div className='flex items-center gap-2 mb-1'>
                                <p className='w-full'>Expected Salary: </p>
                                <select defaultValue="" className='rounded outline-none h-8 border border-dark/20 w-full px-3'>
                                    <option value="" disabled>Expected Salary</option>
                                    <option value="10-20k $">10-20k $</option>
                                    <option value="20-30k $">20-30k $</option>
                                    <option value="30-40k $">30-40k $</option>
                                    <option value="40-50k $">40-50k $</option>
                                    <option value="50k+ $">50k+ $</option>
                                </select>
                            </div>
                            {/* Website */}
                            <div className='flex items-center gap-2'>
                                <p className='w-full'>Website:</p> 
                                <input className='rounded outline-none h-8 border border-dark/20 w-full px-3' type="text" placeholder='Your Website Link' />
                            </div>
                        </>
                    }
                    
                </div>

                {/* Location */}
                <div className='border border-green/60 rounded-lg flex-1 px-6 py-4 hover:shadow-lg hover:shadow-green/20 duration-300'>  
                    <div className='flex justify-between pb-2 items-center gap-2 border-b border-dark/20 mb-5'>
                        <div className='flex items-center gap-2'>
                            <MdLocationOn fill='green' size={20}/>
                            <p className='text-dark text-xl'>Location</p>
                        </div>
                        {
                            !locationDiv?
                            <FiEdit onClick={()=> handleLocationDiv("edit")} className='cursor-pointer duration-300 hover:text-green' />:
                            <div className='flex items-center'>
                                <div onClick={()=> handleLocationDiv("save")} className='text-green text-xl cursor-pointer duration-300 hover:bg-green/10 rounded-full p-2'><BsCheckCircle /></div>
                                <div onClick={()=> handleLocationDiv("cancel")} className='text-red-500 text-xl cursor-pointer duration-300 hover:bg-red-100 rounded-full p-2'><ImCancelCircle /></div>
                            </div>
                        } 
                    </div>
                    {
                        !locationDiv?
                        <>
                            <p className='mb-1'>Uttara Model Town, 1230</p>
                            <p>Bangladesh</p>
                        </> : <>
                            {/* City */}
                            <div className='flex items-center gap-2 mb-1'>
                                <p className='w-full'>City: </p>
                                <select defaultValue="" className='rounded outline-none h-8 border border-dark/20 w-full px-3'>
                                    <option value="" disabled>Your city</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Cumilla">Cumilla</option>
                                    <option value="Pabna">Pabna</option>
                                    <option value="Chittagong">USA</option>
                                    <option value="Rongpur">Rongpur</option>
                                    <option value="Noakhali">Noakhali</option>
                                </select>
                            </div>
                            {/* Zip Code */}
                            <div className='flex items-center gap-2 mb-1'>
                                <p className='w-full'>Zip Code:</p> 
                                <input className='rounded outline-none h-8 border border-dark/20 w-full px-3' type="text" placeholder='Zip Code' />
                            </div>
                            {/* Country */}
                            <div className='flex items-center gap-2 mb-1'>
                                <p className='w-full'>Country: </p>
                                <select defaultValue="" className='rounded outline-none h-8 border border-dark/20 w-full px-3'>
                                    <option value="" disabled>Your country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Australia">Australia</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="France">France</option>
                                </select>
                            </div>
                        </>  
                    }
                </div>
            </div>

            {/* About Yourself */}
            <div className='border border-green/60 rounded-lg flex-1 px-6 py-4 hover:shadow-lg hover:shadow-green/20 duration-300'>
                <div className='flex pb-2 items-center gap-2 border-b border-dark/20 mb-5'>
                    <AiOutlineUser fill='green' size={20}/>
                    <p className='text-dark text-xl'>About Yourself</p>
                </div>

                <div className='flex gap-5 mb-4'>
                {
                    !aboutTextarea?
                    <>
                        <p className='flex-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quaerat beatae laboriosam autem assumenda soluta modi sint porro provident quidem id perferendis saepe est nobis exercitationem atque dolores architecto officia ipsum. Vitae repellendus deserunt, rerum delectus vero, ratione ipsa eos odit accusamus esse nulla nobis facilis quis odio doloribus rem! Quod possimus tenetur totam! Quidem quam, maiores consequatur dolores corrupti, dolorem doloribus repudiandae placeat id voluptates recusandae quasi animi veniam, cupiditate ea nisi optio illo? Qui quos, omnis maiores cupiditate obcaecati assumenda consequatur odit odio aspernatur vel quod fugiat vitae repudiandae eveniet earum.</p> 

                        <FiEdit onClick={() => handleAboutDiv("edit")} className='cursor-pointer duration-300 hover:text-green' />
                    </> : <>
                        <textarea placeholder='Write within 250 words' className='h-24 w-full border border-green/60 outline-none rounded-lg px-4 py-2' name="about" id="about"></textarea>
                        <div>
                            <div onClick={()=> handleAboutDiv("save")} className='text-green text-2xl cursor-pointer duration-300 hover:bg-green/10 rounded-full p-2'><BsCheckCircle /></div>
                            <div onClick={()=> handleAboutDiv("cancel")} className='text-red-500 text-2xl cursor-pointer duration-300 hover:bg-red-100 rounded-full p-2'><ImCancelCircle /></div>
                        </div>
                    </>
                }
                </div>
                
            </div>
        </div>
    );
};

export default MyAccount;