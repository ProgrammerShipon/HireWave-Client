import React from 'react';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { formatDate } from './FormatDate';

const TrainingOrCoursesDiv = ({ training }) => {
    const { id, program, organization, location, starting_date, ending_date, description }= training
    const [trainingDiv, setTrainingDiv]= useState(false)
    const [online, setOnline] = useState(false);
    const [present, setPresent] = useState(false);
    const { register, handleSubmit, setValue, watch, reset } = useForm();

    const onTrainingSubmit = data => {
        console.log(data)
        const updatedTraining= {
            organization: data.organization,
            starting_date: data.starting_date,
            ending_date: data.ending_date,
            location: data.location,
            description: data.description,
            program: data.program
        }
        console.log(updatedTraining)

        //TODO: Update Training data
        setTrainingDiv(false)
        reset();
    }

    const handleDelete= () =>{
        //ToDo: Delete operation with confirmation message
    }

    const handleEdit= (e)=> {
        if(e == "edit") setTrainingDiv(true)
        else if (e == "cancel") setTrainingDiv(false)
    }
    return (
        <div className='border border-green/60 hover:shadow-lg hover:shadow-green/20 duration-300 rounded-lg px-5 py-3 mb-5 flex gap-8 items-start justify-between'>
            <div className=''>
                <h4 className='font-semibold text-xl mb-1'>{program}</h4>
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
                trainingDiv &&
                <Modal isModalOpen={trainingDiv} setIsModalOpen={setTrainingDiv} handleModal={handleEdit}>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onTrainingSubmit)}>
                        {/* program */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Program</label>
                            <input
                            defaultValue={program}
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Front-End Developer'
                            {...register("program")}
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
                                readOnly={watch("location") === 'Online'}
                                />
                            </div>
                        </div>

                        {/* Checkbox for Online */}
                        <div className='flex justify-end items-center mt-1'>
                            <label className=''>Online</label>
                            <input 
                            className='ml-2' 
                            type="checkbox"
                            onChange={e => {
                                setOnline(e.target.checked);
                                if (e.target.checked) setValue('location', 'Online')
                                else setValue('location', '')
                            }}
                            defaultChecked={location === 'Online'}
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

                        {/* Checkbox for currently working */}
                        <div className='flex justify-end items-center mt-1'>
                            <label className=''>Currently Ongoing</label>
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
                        <div>
                            <label className='text-dark block mb-1'>Description (optional)</label>
                            <textarea
                            defaultValue={description}
                            className='rounded outline-none h-32 border border-dark/20 w-full px-3 py-2'  
                            placeholder='Write within 250 words'
                            {...register("description")}
                            />
                        </div>


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

export default TrainingOrCoursesDiv;