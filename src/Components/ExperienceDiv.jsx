import React from 'react';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { formatDate } from './FormatDate';

const ExperienceDiv = ({experience}) => {
    const { id, profile, organization, location, starting_date, ending_date, description }= experience
    const [experienceDiv, setExperienceDiv]= useState(false)
    const [workFromHome, setWorkFromHome] = useState(false);
    const [present, setPresent] = useState(false);
    const { register, handleSubmit,setValue, watch, reset } = useForm();

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
        setExperienceDiv(false)
        reset();
    }
    const handleDelete= () =>{
        //ToDo: Delete operation with confirmation message
    }

    const handleEdit= (e)=> {
        if(e == "edit") setExperienceDiv(true)
        else if (e == "cancel") setExperienceDiv(false)
    }
    return (
        <div className='border border-green/60 hover:shadow-lg hover:shadow-green/20 duration-300 rounded-lg px-5 py-3 mb-5 flex gap-8 items-start justify-between'>
            <div className=''>
                <h4 className='font-semibold text-xl mb-1'>{profile}</h4>
                <p>{organization}{location && " | "} {location}</p>
                <p>{formatDate(starting_date)} - {ending_date == "Present" ? ending_date : formatDate(ending_date)}</p>
                <p className='max-w-lg'>{description}</p>
            </div>
            
            {/* Edit and Delete Buttons */}
            <div className='flex gap-3 justify-center'>
                <button onClick={()=> handleEdit("edit")} className='hover:text-green cursor-pointer duration-300'><FiEdit size={18} /></button>
                <button onClick={handleDelete} className='hover:text-red-500 cursor-pointer duration-300'><AiOutlineDelete size={20} /></button>
            </div>
            
            {
                experienceDiv &&
                <Modal isModalOpen={experienceDiv} setIsModalOpen={setExperienceDiv} handleModal={handleEdit}>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onExperienceSubmit)}>
                        {/* Profile */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Profile</label>
                            <input
                            defaultValue={profile}
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
                                defaultValue={organization}
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g: Mahitech Ltd'
                                {...register("organization")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Location (optional)</label>
                                <input 
                                defaultValue={location}
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
                            defaultChecked={location === 'Work from home'}
                            />
                        </div>
                        
                        {/* Starting & Ending date */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1'>Start date</label>
                                <input 
                                defaultValue={starting_date}
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
                                        defaultValue={ending_date}
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
                            defaultChecked={ending_date === 'Present'}
                            />
                        </div>

                        {/* Description */}
                        <label className='text-dark block mb-1'>Description (optional)</label>
                        {/* Tips */}
                        <div className='border border-dark rounded mb-3 px-3 py-2 bg-dark/5'>
                            <p className='font-semibold mb-2'>Pro tip:</p>
                            <ul className="list-disc ml-5">
                                <li>Mention key job responsibilities, measurable impact or results you helped deliver</li>
                                <li>Use action verbs: Built, Led, Drove, Conceptualized, Learnt, etc.</li>
                                <li>Use numbers and percentages wherever possible</li>
                            </ul>
                        </div>
                        <textarea
                        defaultValue={description}
                        className='rounded outline-none h-32 border border-dark/20 w-full px-3 py-2'  
                        placeholder='Write within 250 words'
                        {...register("description")}
                        />


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

export default ExperienceDiv;