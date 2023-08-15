// React Icons 
import {  FaPhoneAlt, FaRupeeSign } from 'react-icons/fa';
import {  MdLocationPin, MdMarkEmailRead } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const Job_Details = () => {
    const data = useLocation();
    const jobData = data.state;
    console.log(jobData)

    const { job_description, job_responsibility, skills, educational_requirements, experiences, job_title, contact_information, benefits, weekend, salary } = jobData;

    return (
        <section className='mt-40 lg:mt-12 container mx-auto'>
            <h1 className='text-4xl mt-10 font-semibold'>Job Details</h1>
            <hr className='hr' />
            <div className='flex flex-col lg:flex-row gap-5 justify-center p-5'>
                <div className='w-full lg:w-3/5 mx-auto  flex flex-col gap-6 h-[70vh] overflow-y-scroll'>
                    <p>
                        <span className='font-bold '>Job Description:</span> <br />
                        <span className='opacity-80 font-medium '>{job_description}</span>
                    </p>
                    <p>
                        <span className='font-bold'>Job Responsibility:</span> <br />
                        <span className='opacity-80 font-medium'>{job_responsibility}</span>
                    </p>
                    <p>
                        <span className='font-bold'>Basic Knowledge:</span> <br />
                        <span className='opacity-80 font-medium'>{skills}</span>
                    </p>
                    <p>
                        <span className='font-bold'>Educational Requirements:</span> <br />
                        <span className='opacity-80 font-medium'>{educational_requirements}</span>
                    </p>
                    <p>
                        <span className='font-bold'>Experiences:</span> <br />
                        <span className='opacity-80 font-mono'> {experiences}</span>
                    </p>
                    <p>
                        <span className='text-xl font-semibold'> Benefits:</span>  {benefits?.map(benefit => <li>{benefit}</li>)}
                    </p>
                    <p>
                        <span className='font-bold'>Holiday :</span>
                        <span className='opacity-80 font-mono'> {weekend}</span>
                    </p>
                </div>
                <div>
                    <div className='p-8  h-[460px] bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 rounded-md '>
                        <h3 className='text-2xl font-bold '></h3> <hr className='hr' />
                        <p className='flex items-center mb-2'>
                            <span className='font-semibold mr-1'>Role : </span>
                            <span className='font-medium  font-mono opacity-90 text-xl'>{job_title}</span>
                        </p>
                        <p className='flex items-center mb-2'>
                            <span className='font-semibold mr-2'> Stipend :</span>
                            <span className='opacity-90 font-medium font-mono text-flex'><FaRupeeSign /> {salary}/Months</span>
                        </p>


                        <h3 className='text-xl font-bold '>Contact Info :</h3>
                        <hr className='hr' />
                        <p className='flex items-center  mb-2'>
                            <FaPhoneAlt className='w-4 mr-1' />
                            <span className='font-semibold mx-2'> Phone :</span>
                            <span className='opacity-90 font-medium font-mono'>{contact_information?.phone} </span>
                        </p>
                        <p className='flex items-center  mb-2'>
                            <MdMarkEmailRead />
                            <span className='font-semibold mx-2'> Email :</span>
                            <span className='opacity-90 font-medium font-mono'>{contact_information?.email} </span>
                        </p>
                        <p className='flex items-center  mb-2'>
                            <MdLocationPin />
                            <span className='opacity-90 font-medium font-mono'>{contact_information?.address} </span>
                        </p>
                    </div>
                    <button
                        type='button'
                        // onClick={() => applyJob(findJobDeatils)} 
                        className='px-4 py-2   rounded-md bg-dark text-white outline-none focus:ring-4  shadow-lg transform active:scale-x-95 transition-transform   w-full text-xl mt-2'  >Apply </button>
                </div>
            </div>

            <div>
                <h2 className='text-4xl font-semibold'>These jobs may fit you</h2>

            </div>
        </section>
    );
};

export default Job_Details;