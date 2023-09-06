import React from 'react';
import useHookForm from '../Components/useHookForm';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

const OnBoardJob = () => {
    const { onHookFormSubmit }= useHookForm("put")
    const { handleSubmit, register, formState: { errors } } = useForm();

    return (
        <div className='w-96 md:w-[600px] border border-green rounded mt-10 px-10 py-10'>
            <h1 className='font-semibold text-2xl text-green mb-2'>What are you looking for in your next job?</h1>
            <p className='text-sm mb-8'>Tell us the job details you're interested in to get better recommendations across HireWave</p>

            <form onSubmit={handleSubmit(onHookFormSubmit)}>
                {/* Job Category */}
                <div>
                    <label className='text-dark block mb-1 mt-5'>Job Category <sup className='text-red-500'>*</sup></label>
                    <input
                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                    type="text"
                    placeholder='e.g. Sales and Marketing'
                    {...register("Job_category", { required: true })}
                    />
                </div>
                {errors.Job_category?.type === 'required' && <span className='text-red-500'>This field is required</span>}

                {/* Job title */}
                <div>
                    <label className='text-dark block mb-1 mt-5'>Job Title <sup className='text-red-500'>*</sup></label>
                    <input
                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                    type="text"
                    placeholder='e.g. Digital Marketing Specialist'
                    {...register("job_title", { required: true })}
                    />
                </div>
                {errors.job_title?.type === 'required' && <span className='text-red-500'>This field is required</span>}

                {/* Job Type */}
                <div>
                    <label className='text-dark block mb-1 mt-5'>Job Type</label>
                    <input
                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                    type="text"
                    placeholder='e.g. Full Time'
                    {...register("job_type")}
                    />
                </div>

                 {/* Save changes */}
                <div className='flex justify-end mt-5'>
                    <Button type='submit'>Save changes</Button>
                </div>

            </form>
        </div>
    );
};

export default OnBoardJob;