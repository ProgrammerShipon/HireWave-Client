import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs';
import { Helmet } from 'react-helmet';
import useAllJobs from '../Hooks/useAllJobs';
import { useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

const ApplyJob = () => {
    const { register, handleSubmit, reset } = useForm();

    const onApplyJobSubmit = data => {
        console.log(data)
        const applyJobData= {
            cover_letter: data.cover_letter,
            expected_salary: data.expected_salary,
            attachments: attachments.map(attachment => attachment.value),
        }
        console.log(applyJobData)

        //TODO: Update in the back end
        reset();
    }

    // const [singleJob, setSingleJob]= useState()
    // const [allJobsData, loading] = useAllJobs();
    // const { title }= useParams()


    // useEffect(() => {
    //     const appliedJob = allJobsData.find(job => job.title === title)
    //     setSingleJob(appliedJob)
    // }, [loading, title])

    const singleJob= 
        {
            "title": "Web Development Internship Opportunity",
            "postedDate": "2023-08-15 09:30 AM",
            "companyName": "Numeric",
            "companyLogo": "https://media.licdn.com/dms/image/C560BAQFHEC-DJzR0Gg/company-logo_100_100/0/1663442902561?e=1700092800&v=beta&t=VUNfHrYIXCLxwi3D15wymPsQfvBly73INvLAsOIPwlA",
            "category": "Technology",
            "location": "New York",
            "jobType": "in-person",
            "salary": "Paid internship",
            "closingDate": "2023-09-15",
            "experience": "Internship",
            "quantity": 5,
            "applied": 40,
            "overview": "CodeCrafters is offering an exciting web development internship opportunity for aspiring programmers. Join us to gain hands-on experience in building dynamic and responsive web applications.",
            "requirements": [
                "Basic knowledge of HTML, CSS, and JavaScript.",
                "Passion for learning and problem-solving.",
                "Strong communication skills and ability to work in a team."
            ],
            "skillsExperience": [
                "Experience with front-end frameworks such as React or Vue.",
                "Understanding of version control (e.g., Git).",
                "Familiarity with UI/UX design principles."
            ],
            "benefits": [
                "Real-world project experience that will enhance your portfolio.",
                "Mentorship from experienced developers in the field.",
                "Networking opportunities with industry professionals."
            ],
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Git"
            ]
        }
    
    const [attachments, setAttachments] = useState([{ id: 1, value: "" }]); 
    const [maximumWarning, setMaximumWarning]= useState(false)

    const handleIncreaseInputField = () => {
        if (attachments.length < 5) {
        const newId = attachments.length + 1;
        setAttachments([...attachments, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };

    return (
        
        <div>

            {/* page title */}
            <Helmet>
                <title>Apply Job - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Apply Job" />

            {/* Main content */}
            <form onSubmit={handleSubmit(onApplyJobSubmit)}className='container'>

                {/* Job Details */}
                <div className='rounded border border-dark/40 px-5 md:px-10 py-3 md:py-5 mt-8 hover:shadow-lg'>
                    <h1 className='text-green text-2xl font-semibold mt-2 mb-5'>Job Details</h1>

                    <div className='md:flex justify-between items-center gap-2 md:gap-5 lg:gap-8 mb-2'>
                        <div>
                            <p className='text-xl mb-2'>{singleJob.title}</p>
                            <div className='flex gap-3 mb-5'>
                                <p className='bg-green/10 px-3 rounded-full'>{singleJob.category}</p>
                                <p>{singleJob.postedDate}</p>
                            </div>

                            <p className='mb-2'>{singleJob.overview}</p>

                            <p className='text-blue-500 hover:underline cursor-pointer w-fit'>View Job Posting</p>
                        </div>

                        {/* Location, job type and Category */}
                        <div className='md:border-l md:pl-5 md:pr-2 border-dark/40 my-4 md:my-0'>
                            <div className='flex items-center gap-2 mb-3'>
                                <BiCurrentLocation fill='green' size={20} />
                                <p className='flex items-center gap-2'><span>Location: </span>{singleJob.location}</p>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <BsPersonWorkspace fill='green' size={20}/>
                                <p className='flex items-center gap-2'><span>Job Type: </span>{singleJob.jobType}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdOutlineWorkOutline fill='green' size={20}/>
                                <p className='flex items-center gap-2'><span>Category: </span>{singleJob.category}</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <h2 className='border-t border-dark/40 mb-2 pt-3'>Skills and Expertise</h2>
                    <div className='flex gap-2 items-center'>   
                        {
                            singleJob.skills.map(skill => <p key={skill} className='bg-green/10 px-3 rounded-full'>{skill}</p>)
                        }
                    </div>
                </div>

                {/* Additional Details */}
                <div className='rounded border border-dark/40 px-5 md:px-10 py-3 md:py-5 mt-8 hover:shadow-lg'>
                    <h1 className='text-green text-2xl font-semibold mt-2 mb-5'>Additional Details</h1>

                    <div className='mb-2 mt-5'>
                        <label className='text-dark block mb-1'>Cover letter</label>
                        <textarea 
                        className='rounded outline-none h-32 border border-dark/20 w-full px-3 py-2' 
                        placeholder='Write within 300 words'
                        {...register("cover_letter")}
                        />
                    </div>   

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='col-span-1'>
                            <label className='text-dark block mb-1'>Expected Salary (yearly)</label>
                            <input 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                            type="number" 
                            placeholder='Enter a range (in USD)'
                            {...register("expected_salary")}
                            />
                        </div> 
                        <div className='lg:col-span-2'>
                            <label className='text-dark block mb-1'>Important Links</label>
                            {attachments.map((attachment, index) => (
                                <div key={attachment.id} className='flex items-center gap-5 mb-3'>
                                <input
                                    type='text'
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3 py-2 max-w-5xl'
                                    placeholder='e.g. Portfolio'
                                    {...register(`attachment[${index}]`)} // Use array syntax for form data
                                />
                                {index === attachments.length - 1 && (
                                    <IoMdAddCircleOutline
                                    onClick={handleIncreaseInputField}
                                    className='cursor-pointer hover:bg-green/10 rounded-full p-1'
                                    fill='green'
                                    size={32}
                                    />
                                )}
                                </div>
                            ))}
                            {
                                maximumWarning && <p className='text-red-500'>Maximum link field reached</p>
                            }
                        </div>   
                    </div> 
                        
                </div>

                <div className='flex justify-end mt-5'>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default ApplyJob;