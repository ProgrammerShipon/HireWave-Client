import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomModal from './CustomModal';
import useAuth from '../Hooks/useAuth';

const UserManual = () => {
    const { currentUser } = useAuth();
    const location = useLocation()

    //Use manual states and functions
    const [isCandidateManualOpen, setIsCandidateManualOpen] = useState(false);
    const [isRecruiterManualOpen, setIsRecruiterManualOpen] = useState(false);
    const handleCandidateManualModal = (e) => {
        if (e == "cancel") setIsCandidateManualOpen(false)
    }
    const handleRecruiterManualModal = (e) => {
        if (e == "cancel") setIsCandidateManualOpen(false)
    }

    useEffect(() => {
        const from = location.state?.from?.pathname;
        if (from == "/candidate_sign_up") {
            setIsCandidateManualOpen(true);
        }
        else if (from == "/recruiter_sign_up") {
            setIsRecruiterManualOpen(true);
        }
    }, []);

    return (
        <>
            {
                isCandidateManualOpen &&
                <CustomModal
                    isModalOpen={isCandidateManualOpen}
                    setIsModalOpen={setIsCandidateManualOpen}
                    handleModal={handleCandidateManualModal}
                    larger={true}
                >
                    {/* Modal Heading */}
                    <div className="overflow-y-hidden">
                        <div className="pt-2 pb-2 flex flex-col gap-1 border-b border-dark/20 text-green -mt-3">
                        <h3 className="text-3xl">👋 Welcome {currentUser?.name}</h3>
                        </div>

                        {/* Modal content */}
                        <p className="my-6">We're delighted to have you join HireWave. As you sign in, our virtual doors swing open to a world of career opportunities. Take a moment to absorb the warmth of this welcome message, and in just a few clicks, you'll be on your way to discovering your dream job. Inside, you'll find all the guidance and resources you need to make your job search journey a success. Let's get started!</p>

                        <h3 className='font-semibold text-xl mb-1'>✅ Complete your profile!</h3>
                        <p className='mb-5'>To improve your job search experience, we recommend completing your profile. This helps employers understand your qualifications and preferences better. Hover on your profile picture to access your profile settings.</p>

                        <h3 className='font-semibold text-xl mb-1'>💼 Find your dream job!</h3>
                        <p className='mb-5'>Use our powerful search tools to find job listings that match your skills and interests. You can filter by location, industry, job type, and more. Save your favorite jobs for quick access.</p>

                        <h3 className='font-semibold text-xl mb-1'>📝 Apply for jobs!</h3>
                        <p className='mb-5'>When you find a job you'd like to apply for, click the "Apply Now" button. Follow the application instructions provided by the employer carefully. You can track the status of your applications in your dashboard.</p>

                        <h3 className='font-semibold text-xl mb-1'>🔔 Check notification regularly!</h3>
                        <p className='mb-3'>You will receive notification on our platform if the recruiter finds you interesting. He may contact you for submitting a task or offer you for the company. Make sure you do not miss the chance.</p>

                        <p className='text-green'>If you got any suggestion, send us a brief mail. Your feedback is valuable to us.</p>

                        <p className='text-3xl text-purple mt-5 text-center'>Happy Job Hunting!</p>
                    </div>
                </CustomModal>
            }

            {
                isRecruiterManualOpen &&
                <CustomModal
                    isModalOpen={isRecruiterManualOpen}
                    setIsModalOpen={setIsRecruiterManualOpen}
                    handleModal={handleRecruiterManualModal}
                    larger={true}
                >
                    {/* Modal Heading */}
                    <div className="overflow-y-hidden">
                        <div className="pt-2 pb-2 flex flex-col gap-1 border-b border-dark/20 text-purple -mt-3">
                            <h3 className="text-3xl">👋 Welcome to HireWave</h3>
                            <p className='text-dark text-xl italic'>{currentUser?.name} </p>
                        </div>

                        {/* Modal content */}
                        <p className="my-6">We're delighted to have you join HireWave. With us, you have access to a vast pool of candidates, intuitive search capabilities, and seamless communication channels. Whether you're filling vital roles or shaping the workforce of the future, we're here to support your success.</p>

                        <h3 className='font-semibold text-xl mb-1'>✅ Complete company profile!</h3>
                        <p className='mb-5'>To improve your candidate reach experience, we recommend completing your company profile. This helps candidates understand your company overview and preferences better. Hover on the company logo to access company profile settings.</p>

                        <h3 className='font-semibold text-xl mb-1'>📋 Publish job post!</h3>
                        <p className='mb-5'>Go to the 'Post a Job' route to publish your first job in HireWave. Give details of the job like Requirements, Responsibilities, Career development options in a brief way so that candidates get a clear idea about the job.</p>

                        <h3 className='font-semibold text-xl mb-1'>📅 Send tasks and Set interview!</h3>
                        <p className='mb-5'>As we are a complete package as a hiring agency, you can send task to the potential candidates that applied for the job and later sit for an interview. You can also chat with candidates through our chatting system.</p>

                        <h3 className='font-semibold text-xl mb-1'>🤝 Hire candidate!</h3>
                        <p className='mb-3'>You will receive notification on our platform if the recruiter finds you interesting. He may contact you for submitting a task or offer you for the company. Make sure you do not miss the chance.</p>

                        <p className='text-green'>If you got any suggestion, send us a brief mail. Your feedback is valuable to us.</p>

                        <p className='text-3xl text-purple mt-5 text-center'>Happy Candidate Searching!</p>
                    </div>
                </CustomModal>
            }
        </>
    );
};

export default UserManual;