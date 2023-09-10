import React from 'react';
import { Link } from 'react-router-dom';
import { BsCameraVideo } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import CustomModal from '../Components/CustomModal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

const ApplicationFormDetails = ({candidateDetails}) => {
    const { _id, name, image } = candidateDetails;
    const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
    const [isHireModalOpen, setIsHireModalOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleInterviewModal =(e) => {
        if(e == "edit") setIsInterviewModalOpen(true)
        else if (e == "cancel") setIsInterviewModalOpen(false)
    }

    const handleHireModal =(e) => {
        if(e == "edit") setIsHireModalOpen(true)
        else if (e == "cancel") setIsHireModalOpen(false)
    }

    const onInterviewSubmit = data => {
        console.log(data)
        const interviewData= {
            interviewDate: data.date,
            interviewTime : data.time,
            interviewDetails : data.details
        }
        console.log(interviewData)

        //TODO: Update education data
        setIsInterviewModalOpen(false)
        reset();
    }

    const onHireSubmit = data => {
        console.log(data)
        const hireData= {
            message: data.message
        }
        console.log(hireData)

        //TODO: Update education data
        setIsHireModalOpen(false)
        reset();
    }

    //TODO: Change following data according to 

    const letter= 
    `<div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
            <div>
                Md Bakhtiar Fahim<br />
                React Developer<br />
                Dhaka, Bangladesh-1230<br />
                Email: bakhtiarfahim360@gmail.com<br />
                Phone: +8801879379797<br />
                <a href="https://github.com/yourgithub" target="_blank">GitHub</a> | 
                <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank">LinkedIn</a>
            </div>
            <div>
                23 June 2023 <br />
                Mr. Jubayer Ahmed<br />  
                Hiring Manager  Mahitech Ltd. <br /> 
                Sector-12, Uttara, Dhaka
            </div>
        </div>

        <div>
            <p>Dear Jubayer,</p>
            <p>As a passionate and ambitious developer, I am excited to apply for the position of React Developer at Mahitech Ltd which I came to know from bdjobs.com. I am genuinely impressed by your company's commitment to innovation, exceptional customer experiences, and attention to detail. I got interested in the position right away because I believe I can provide a meaningful contribution to your team as my skills are concurrent with the requirements you are looking for.</p>
            <p>I am currently studying computer science and advancing my skills in web development. I claim to be a consistent and fast learner as I have learned useful technologies like HTML, CSS, React, Express, MongoDB, and Node.js within 6 months. In my learning process, I have also developed a basic understanding of making applications visually appealing and more interactive. I always prioritize making the interface user-friendly which should make customers feel satisfied.</p>
            <p>Mahitech Ltd. will discover a hard-working and passionate web developer in me as I have constantly demonstrated both unwavering patience and a genuine interest in development. If you go through my projects, you will see that I am concerned about every little detail in my designs. I am hungry for success and always try to exceed expectations.</p>
            <p>Besides web development skills, I have experience in handling customers as I managed a small online business in college life. The company will also get a quality team member hiring me as I have worked as a team on several university projects and know how to deal with a team.</p>
            <p>Thank you for considering my application. I am confident that my passion for the field will be beneficial to your company and I can contribute to the ongoing success of Mahipal Ltd. I will be waiting for the chance to further discuss my skills and qualifications and how they align with your company’s goal and initiative in detail.</p>
            <p>Sincerely,<br />Md Bakhtiar Fahim</p>
        </div>
    </div>`

    const links =[
        "Facebook: https://www.facebook.com",
        "Twitter: https://www.twitter.com",
        "Twitter: https://www.youtube.com"
    ]

    return (
        <section className='py-20 md:py-[120px] max-w-5xl mx-auto'>
            <div className="container">
                <div className='md:flex justify-between gap-5 items-center'>
                    {/* Image & Name */}
                    <div className='flex items-center gap-8 mb-5 md:mb-0'>
                        <img className='w-20 h-20 rounded-full border border-green shadow-lg overflow-hidden object-cover object-center' src={image} alt="" />
                        <div>
                            <h3 className='text-green text-2xl font-semibold my-auto'>{name}</h3>
                            <p>Expected Salary: 30k - 50k $</p>
                        </div>
                    </div>

                    {/* Details Button */}
                    <Link  to={`/candidate_details/${_id}`} className='bg-purple text-white py-1 px-3 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 cursor-pointer'>See Details</Link>
                </div>

                {/* Cover Letter */}
                <div className='rounded-lg border border-green p-5 md:p-10 mt-8 shadow-lg'>
                    <p dangerouslySetInnerHTML={{ __html: letter }}></p>
                </div>

                {/* Important Links */}
                <div className='rounded-lg border border-green p-5 md:p-10 mt-8 shadow-lg'>
                    <h2 className='text-green text-xl mb-3'>Provided Links</h2>
                    {
                        links.map(link => <div className='text-dark'>{link}</div>)
                    }
                </div>

                {/* Buttons */}
                <div className='md:flex gap-5 items-center mt-8'>
                    <div onClick={() => handleHireModal("edit")} className='bg-purple text-white py-3 px-5 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 cursor-pointer flex items-center gap-3 w-fit mb-5 md:mb-0'><FaRegHandshake />Hire Now</div>
                    <div onClick={() => handleInterviewModal("edit")} className='bg-purple text-white py-3 px-5 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 cursor-pointer flex items-center gap-3 w-fit mb-5 md:mb-0'><BsCameraVideo />Set Interview</div>
                    <div className='bg-purple text-white py-3 px-5 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 cursor-pointer flex items-center gap-3 w-fit mb-5 md:mb-0'><AiOutlineMessage />Contact Now</div>
                </div>

                {
                isInterviewModalOpen &&
                <CustomModal isModalOpen={isInterviewModalOpen} setIsModalOpen={setIsInterviewModalOpen} handleModal={handleInterviewModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <BsCameraVideo fill='green' size={20} />
                        <p className='text-dark text-xl'>Set Interview</p>
                    </h2>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onInterviewSubmit)}>
                        <div className='flex items-center gap-5'>
                            {/* Interview Date */}
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Interview Date</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="date" 
                                {...register("date", { required: true })}
                                />
                                {errors.date && (
                                    <span className="text-red-700">Date is required</span>
                                )}
                            </div>

                            {/* Interview Time */}
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Interview Time</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type='time'
                                {...register("time", { required: true })}
                                />
                                {errors.time && (
                                    <span className="text-red-700">Time is required</span>
                                )}
                            </div>
                        </div>

                        {/* Details */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Additional Details</label>
                            <textarea
                            className='rounded outline-none h-32 border border-dark/20 w-full px-3' 
                            {...register("details")}
                            />
                        </div>

                        {/* Save changes */}
                        <div className='flex justify-end mt-5'>
                            <Button type='submit'>Send Request</Button>
                        </div>
                    </form>
                </CustomModal>
                }

                {
                isHireModalOpen &&
                <CustomModal isModalOpen={isHireModalOpen} setIsModalOpen={isHireModalOpen} handleModal={handleHireModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <AiOutlineMail fill='green' size={20} />
                        <p className='text-dark text-xl'>Send Message</p>
                    </h2>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onHireSubmit)}>

                        {/* Message body */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Message Body</label>
                            <textarea
                            className='rounded outline-none h-32 border border-dark/20 w-full px-3' 
                            {...register("message")}
                            />
                        </div>

                        {/* Save changes */}
                        <div className='flex justify-end mt-5'>
                            <Button type='submit'>Send Mail</Button>
                        </div>
                    </form>
                </CustomModal>
                }

            </div>
        </section>
    );
};

export default ApplicationFormDetails;