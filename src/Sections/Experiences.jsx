import React from 'react';
import { GrUserExpert } from 'react-icons/gr';
import ExperienceDiv from '../Components/ExperienceDiv';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from '../Components/Modal';
import Button from '../Components/Button';

const Experiences = () => {
    const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
    const [workFromHome, setWorkFromHome] = useState(false);
    const [present, setPresent] = useState(false);
    const { register, handleSubmit, reset, watch, setValue } = useForm();

    const onExperienceSubmit = data => {
        console.log(data)
        const updatedExperience= {
            organization: data.organization,
            starting_date: data.starting_date,
            ending_date: data.ending_date,
            location: data.location,
            description: data.description,
            profile: data.profile
        }
        console.log(updatedExperience)

        //TODO: Update Experience data
        setIsExperienceModalOpen(false)
        reset();
    }
    
    const handleExperienceModal =(e) => {
        if(e == "edit") setIsExperienceModalOpen(true)
        else if (e == "cancel") setIsExperienceModalOpen(false)
    }

    const experiences= [
        {
            "id" : 1,
            "profile" : "Software Developer",
            "organization" : "SupraIT Ltd",
            "location" : "Work from home",
            "starting_date" : "2022-02-01",
            "ending_date" : "2023-02-02",
            "description" : "It is my first ever work experience and I have learned a lot of thing working in this organization. My basic introduction to work environment started from here.",
        },
        {
            "id" : 2,
            "profile" : "Front-End Developer",
            "organization" : "Mahitech Ltd",
            "location" : "Dhaka, Bangladesh",
            "starting_date" : "2023-03-03",
            "ending_date" : "Present",
            "description" : "It is my first ever work experience and I have learned a lot of thing working in this organization. My basic introduction to work environment started from here.",
        }
    ]
    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5 flex-1 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <GrUserExpert size={18}/>
                <p className='text-dark text-xl'>Experiences</p>
            </h2>

            {/* All Experiences */}
           <div className='w-fit mx-auto'>
            {
                experiences.map(experience => <ExperienceDiv key={experience.id} experience={experience}></ExperienceDiv>)
            }
           </div>

            {/* Add Experience Button */}
            <div className='flex justify-center'>
                {
                    experiences.length < 5 ?
                        <button onClick={() => handleExperienceModal("edit")} className='text-blue-600'>+ Add Experiences</button> :
                        <p className='text-sm'>Maximum limit reached</p>
                }
            </div>

            {
                isExperienceModalOpen &&
                <Modal isModalOpen={isExperienceModalOpen} setIsModalOpen={setIsExperienceModalOpen} handleModal={handleExperienceModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <GrUserExpert fill='green' size={20}/>
                        <p className='text-dark text-xl'>Add Experience</p>
                    </h2>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onExperienceSubmit)}>
                        {/* Profile */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Profile</label>
                            <input
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Front-End Developer'
                            {...register("profile")}
                            />
                        </div>

                        {/* organization & Location */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Organization</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g: Mahitech Ltd'
                                {...register("organization")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Location (optional)</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                {...register("location")}
                                readOnly={watch("location") === 'Work from home'}
                                />
                                
                            </div>
                        </div>

                        {/* Checkbox for work from home */}
                        <div className='flex justify-end items-center mt-1'>
                            <label className=''>Work from home</label>
                            <input 
                            className='ml-2' 
                            type="checkbox"
                            onChange={e => {
                                setWorkFromHome(e.target.checked);
                                if (e.target.checked) setValue('location', 'Work from home')
                                else setValue('location', '')
                            }}
                            />
                        </div>
                        
                        {/* Starting & Ending date */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1'>Start date</label>
                                <input 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                type="date"
                                {...register("starting_date")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1'>End date</label>
                                {present ? (
                                    <input
                                        className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                        type='text'
                                        value='Present'
                                        readOnly
                                    />
                                ) : (
                                    <input
                                        className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                        type='date'
                                        {...register('ending_date')}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Checkbox for presently working */}
                        <div className='flex justify-end items-center mt-1'>
                            <label className=''>Currently working here</label>
                            <input 
                            className='ml-2' 
                            type="checkbox"
                            onChange={e => {
                                setPresent(e.target.checked);
                                if (e.target.checked) setValue('ending_date', 'Present')
                                else setValue('ending_date', '')
                            }}
                            />
                        </div>

                        {/* Description */}
                        <label className='text-dark block mb-1'>Description (optional)</label>
                        <div className='border border-dark rounded mb-3 px-3 py-2 bg-dark/5'>
                            <p className='font-semibold mb-2'>Pro tip:</p>
                            <ul className="list-disc ml-5">
                                <li>Mention key job responsibilities, measurable impact or results you helped deliver</li>
                                <li>Use action verbs: Built, Led, Drove, Conceptualized, Learnt, etc.</li>
                                <li>Use numbers and percentages wherever possible</li>
                            </ul>
                        </div>
                           
                        <textarea
                        className='rounded outline-none h-32 border border-dark/20 w-full px-3 py-2'  
                        placeholder='Write within 250 words'
                        {...register("description")}
                        />

                        <p className='text-sm'>N.B. You cannot add more than 5 Experience details</p>

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

export default Experiences;