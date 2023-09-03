import React from 'react';
import Button from '../Components/Button';
import useHookForm from '../Components/useHookForm';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const OnBoardExperience = () => {
    const [present, setPresent] = useState(false);
    const [workFromHome, setWorkFromHome] = useState(false);
    const { onHookFormSubmit }= useHookForm("put")
    const { handleSubmit, register, watch, setValue } = useForm();

    return (
        <div className='w-96 md:w-[600px] border border-green rounded mt-10 px-10 py-10'>
            <h1 className='font-semibold text-2xl text-green mb-2'>Add a Work Experience</h1>
            <form onSubmit={handleSubmit(onHookFormSubmit)}>
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
                        <label className='text-dark block mb-1 mt-5'>Location</label>
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
                <label className='text-dark block mb-1'>Description</label>          
                <textarea
                className='rounded outline-none h-32 border border-dark/20 w-full px-3 py-2'  
                placeholder='Write within 250 words'
                {...register("description")}
                />

                {/* Save changes */}
                <div className='flex justify-end mt-5'>
                    <Button type='submit'>Save changes</Button>
                </div>
            </form>
        </div>
    );
};

export default OnBoardExperience;