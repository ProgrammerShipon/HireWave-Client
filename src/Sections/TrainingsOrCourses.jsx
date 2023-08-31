import React from 'react';
import { MdWorkOutline } from 'react-icons/md';
import TrainingOrCoursesDiv from '../Components/TrainingOrCoursesDiv';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from '../Components/Modal';
import Button from '../Components/Button';

const TrainingsOrCourses = () => {

    const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
    const [workFromHome, setWorkFromHome] = useState(false);
    const [present, setPresent] = useState(false);
    const { register, handleSubmit, reset, watch, setValue } = useForm();

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
        setIsTrainingModalOpen(false)
        reset();
    }

    const handleTrainingModal =(e) => {
        if(e == "edit") setIsTrainingModalOpen(true)
        else if (e == "cancel") setIsTrainingModalOpen(false)
    }

    const trainings=[
        {
            "id" : 1,
            "program" : "Complete Web Development Course With Jhankar Mahbub",
            "organization" : "Programming Hero",
            "location" : "Online",
            "starting_date" : "2022-02-01",
            "ending_date" : "2023-02-02",
            "description" : "Learned MREN stack from this course from the basic of coding."
        }
    ]
    return (
        <div className='bg-white px-5 rounded-lg mb-10 flex-1 pb-5 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <MdWorkOutline fill='green' size={20}/>
                <p className='text-dark text-xl'>Training / Courses</p>
            </h2>

            {/* All Trainings */}
            <div className='w-fit mx-auto'>
            {
                trainings.map(training => <TrainingOrCoursesDiv key={training.id} training={training}></TrainingOrCoursesDiv>)
            }
           </div>

            {/* Add Training / Courses Button */}
            <div className='flex justify-center'>
                {
                    trainings.length < 5 ?
                        <button onClick={() => handleTrainingModal("edit")} className='text-blue-600'>+ Add Training / Courses</button> :
                        <p className='text-sm'>Maximum limit reached</p>
                }
            </div>

            {
                isTrainingModalOpen &&
                <Modal isModalOpen={isTrainingModalOpen} setIsModalOpen={setIsTrainingModalOpen} handleModal={handleTrainingModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <MdWorkOutline fill='green' size={20}/>
                        <p className='text-dark text-xl'>Add Training / Courses</p>
                    </h2>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onTrainingSubmit)}>
                        {/* Program */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Program</label>
                            <input
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Web Development'
                            {...register("program")}
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
                                setWorkFromHome(e.target.checked);
                                if (e.target.checked) setValue('location', 'Online')
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

                        {/* Checkbox for Currently ongoing */}
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
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className='text-dark block mb-1'>Description (optional)</label>                         
                            <textarea
                            className='rounded outline-none h-32 border border-dark/20 w-full px-3 py-2'  
                            placeholder='Write within 250 words'
                            {...register("description")}
                            />
                        </div>

                        <p className='text-sm'>N.B. You cannot add more than 5 Training / Course details</p>

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

export default TrainingsOrCourses;