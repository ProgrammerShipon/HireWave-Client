import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import EducationDiv from '../Components/EducationDiv';
import Modal from '../Components/Modal';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';
import useModal from '../Components/useModal';
import useHookForm from '../Components/useHookForm';

const Education = () => {
    const { isModalOpen,setIsModalOpen, handleModal } = useModal();
    const { onHookFormSubmit }= useHookForm("post")
    const { handleSubmit, register } = useForm();

    const educations= [
        {
            "id" : 1,
            "degree" : "B.Sc (Hons.)",
            "subject" : "Computer Science & Engineering",
            "institution" : "International University Of Business Agriculture & Technology",
            "starting_year" : 2021,
            "ending_year" : 2025,
            "performance" : 3.88,
            "performance_scale" : 4,
        },
        {
            "id" : 2,
            "degree" : "M.Sc",
            "subject" : "Data Science",
            "institution" : "Dhaka University",
            "starting_year" : 2025,
            "ending_year" : 2027,
            "performance" : 3.47,
            "performance_scale" : 4,
        },
        {
            "id" : 3,
            "degree" : "HSC",
            "institution" : "Uttara High School and College",
            "starting_year" : 2017,
            "ending_year" : 2019,
            "performance" : 4.58,
            "performance_scale" : 5,
        }
    ]

    // Sort educations by starting_year in ascending order
    educations.sort((a, b) => a.starting_year - b.starting_year);
    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5 flex-1 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <FaGraduationCap fill='purple' size={20}/>
                <p className='text-dark text-xl'>Education</p>
            </h2>

            {/* All Educations */}
            <div className='w-fit mx-auto'>
            {
                educations.map(education => <EducationDiv key={education.id} education={education}></EducationDiv>)
            }
            </div>

            {/* Add Education Button */}
            <div className='flex justify-center'>
                {
                    educations.length < 5 ?
                        <button onClick={() => handleModal("edit")} className='text-blue-600'>+ Add Educations</button> :
                        <p className='text-sm'>Maximum limit reached</p>

                }
            </div>
            {
                isModalOpen &&
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleModal={handleModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <FaGraduationCap fill='green' size={20}/>
                        <p className='text-dark text-xl'>Add Education</p>
                    </h2>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onHookFormSubmit)}>
                        {/* Institution Name */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Institution Name</label>
                            <input
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Front-End Developer'
                            {...register("institution")}
                            />
                        </div>

                        {/* Starting & Ending year */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Start Year</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                type="text"
                                {...register("starting_year")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>End Year</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                {...register("ending_year")}
                                />
                            </div>
                            {/* 
                            
                            TODO: Validate ending year
                            
                            {
                                starting_year > ending_year && <p className='text-red-500'>Please enter a value greater than or equal to {starting_year}</p>
                            } */}
                        </div>

                        {/* Degree & Subject */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Degree</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g: B.Sc (Hons)'
                                {...register("degree")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Subject (optional)</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g: Computer Science'
                                {...register("subject")}
                                />
                            </div>
                        </div>

                        {/* Performance scale & performance */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Performance scale (optional)</label>
                                <select 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                {...register("performance_scale")}
                                >
                                <option value="" disabled>Performance scale</option>
                                    <option value="10">CGPA (scale of 10)</option>
                                    <option value="9">CGPA (scale of 9)</option>
                                    <option value="8">CGPA (scale of 8)</option>
                                    <option value="7">CGPA (scale of 7)</option>
                                    <option value="5">CGPA (scale of 5)</option>
                                    <option value="4">CGPA (scale of 4)</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Performance (optional)</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                {...register("performance")}
                                />
                            </div>

                            {/* 
                            TODO: validate performance
                            
                            {
                                performance > performance_scale && <p className='text-red-500'>Please enter a value less than or equal to {performance_scale}</p>
                            } */}
                        </div>

                        <p className='text-sm mt-2'>N.B. You cannot add more than 5 Education details</p>

                        {/* Save changes */}
                        <div className='flex justify-end mt-5'>
                            <Button type='submit'>Save changes</Button>
                        </div>
                    </form>
                </Modal>
            }
        </div>
    );
};

export default Education;