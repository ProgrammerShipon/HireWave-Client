import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import GetAgoTime from '../Components/GetAgoTime';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';

// react icons
import { BsCurrencyDollar } from 'react-icons/bs';
import { GiLevelEndFlag } from 'react-icons/gi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { LiaIndustrySolid } from 'react-icons/lia';
import { SlLocationPin } from 'react-icons/sl';
import Swal from 'sweetalert2';

const ApplyJobForm = ({ jobData }) => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { _id, title, companyName, companyLogo, category, location, postedDate, overview, skills, experience, salary, open, jobType } = jobData;
    console.log(jobData)

    const { register, handleSubmit, reset } = useForm();
    const [attachments, setAttachments] = useState([{ id: 1, value: "" }]);
    const [maximumWarning, setMaximumWarning] = useState(false)
    const handleIncreaseInputField = () => {
        if (attachments.length < 5) {
            const newId = attachments.length + 1;
            setAttachments([...attachments, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };

    const onApplyJobSubmit = (data) => {
        const cover_letter = data.cover_letter;
        const expected_salary = data.expected_salary;
        const attachment = data.attachment;

        const appliedInfo = {
            appliedJobId: _id,
            companyName,
            companyLogo,
            title,
            jobType,
            cover_letter,
            expected_salary,
            attachment,
            applicantEmail: user?.email
        }

        console.log(appliedInfo)

        axiosSecure.post(`/appliedCandidate`, appliedInfo)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Applied successfully',
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Already Applied',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <section className='py-20 md:py-[120px]'>
            <div className="container">
                <form onSubmit={handleSubmit(onApplyJobSubmit)} className='max-w-5xl mx-auto'>

                    {/* Job Details */}
                    <div className='border border-gray/40 hover:border-green rounded-md px-5 md:px-10 py-3 md:py-5 mt-8 shadow-lg hover:shadow-4xl hover:shadow-green/20 duration-300 group'>
                        <div className='flex items-start justify-between'>
                            <h1 className='text-green text-2xl font-medium mt-2 mb-5 drop-shadow-xl'>Job Details</h1>

                            <p className={`font-medium px-3 rounded-md ${open ? "bg-green/20 text-green" : "bg-red-400/20 text-red-400"}`}>{open ? " Open to Apply" : "Closed"}</p>
                        </div>

                        <div className='md:flex justify-between items-center gap-2 md:gap-5 lg:gap-8 mb-2'>
                            <div>
                                <h2 className='text-2xl mb-2 text-dark drop-shadow-xl'>{title}</h2>
                                <div className='flex gap-3 mb-5'>
                                    <p className='bg-purple/20 text-purple px-4 rounded-full shadow-lg shadow-purple/30'>{category}</p>
                                    <GetAgoTime datetime={postedDate} />
                                </div>

                                <p className='mb-4 text-lightGray text-lg'>{overview}</p>

                                <Link to={`/job_details/${_id}`} className='text-blue-500 hover:underline'>View Job Posting</Link>
                            </div>

                            {/* experience, salary, company name, location */}
                            <div className='w-72 md:border-s border-gray/40 group-hover:border-green/40 md:pl-3 md:pr-2 py-2 md:my-0 duration-300'>
                                {/* experience */}
                                <div className='flex items-start gap-2 mb-2'>
                                    <GiLevelEndFlag size={20} className="text-purple mt-[2px]" />
                                    <div>
                                        <p>Experience,</p>
                                        <p className="text-sm text-lightGray ml-2">{experience}</p>
                                    </div>
                                </div>

                                {/* salary */}
                                <div className='flex items-start gap-2 mb-2'>
                                    <BsCurrencyDollar size={20} className="text-purple mt-[2px]" />
                                    <div>
                                        <p>Salary,</p>
                                        <p className="text-sm text-lightGray ml-2">${salary}</p>
                                    </div>
                                </div>

                                {/* company name */}
                                <div className='flex items-start gap-2 mb-2'>
                                    <LiaIndustrySolid size={20} className="text-purple mt-[2px]" />
                                    <div>
                                        <p>Company,</p>
                                        <p className="text-sm text-lightGray ml-2">{companyName}</p>
                                    </div>
                                </div>

                                {/* location */}
                                <div className='flex items-start gap-2'>
                                    <SlLocationPin size={18} className="text-purple mt-[2px]" />
                                    <div>
                                        <p>Location,</p>
                                        <p className="text-sm text-lightGray ml-2">{location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <h2 className='border-t border-gray/40 group-hover:border-green/40 mb-2 pt-3 duration-300'>Skills and Expertise</h2>
                        <div className='flex gap-2 items-center'>
                            {
                                skills.map(skill => <p key={skill} className='bg-green/10 text-green px-4 rounded-full'>{skill}</p>)
                            }
                        </div>
                    </div>

                    {/* additional details */}
                    <div className='border border-gray/40 hover:border-green rounded-md px-5 md:px-10 py-3 md:py-5 mt-8 shadow-lg hover:shadow-4xl hover:shadow-green/20 duration-300 group'>
                        <h1 className='text-green text-2xl font-medium mt-2 mb-5 drop-shadow-xl'>Additional Details</h1>

                        <div className='mb-2 mt-5'>
                            <label className='text-dark block mb-1 text-base'>Cover letter</label>
                            <textarea
                                rows={5}
                                className='w-full px-3 py-2 border border-gray/40 focus:outline-none focus:border-green rounded-md'
                                placeholder='Write within 300 words'
                                {...register("cover_letter")}
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className='col-span-1'>
                                <label htmlFor='salary' className='text-dark block mb-1 text-base'>Expected Salary</label>
                                <input
                                    id='salary'
                                    className='w-full px-3 py-2 border border-gray/40 focus:outline-none focus:border-green rounded-md'
                                    type="number"
                                    placeholder='Enter a range (in USD)'
                                    {...register("expected_salary")}
                                />
                            </div>
                            <div className='lg:col-span-2'>
                                <label className='text-dark block mb-1 text-base'>Important Links</label>
                                {attachments.map((attachment, index) => (
                                    <div key={attachment.id} className='flex items-center gap-5 mb-3'>
                                        <input
                                            type='text'
                                            className='w-full px-3 py-2 border border-gray/40 focus:outline-none focus:border-green rounded-md max-w-5xl'
                                            placeholder='e.g. https://www.portfolio.com/forid32832'
                                            {...register(`attachment[${index}]`)}
                                        />
                                        {index === attachments.length - 1 && (
                                            <button onClick={handleIncreaseInputField}
                                                className='bg-green/10 h-10 w-10 rounded-lg flex items-center justify-center'
                                            >
                                                <IoMdAddCircleOutline
                                                    className='text-green'
                                                    size={24}
                                                />
                                            </button>
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
                        <Button >Submit</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ApplyJobForm;