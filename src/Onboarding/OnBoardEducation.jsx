import React from 'react';
import { useForm } from 'react-hook-form';
import useHookForm from '../Components/useHookForm';
import Button from '../Components/Button';

const OnBoardEducation = () => {
    const { onHookFormSubmit }= useHookForm("put")
    const { handleSubmit, register, reset } = useForm();

    return (
        <div className='w-96 md:w-[600px] border border-green rounded mt-10 px-10 py-10'>
            <h1 className='font-semibold text-2xl text-green mb-2'>Add an Education Detail</h1>

            <form onSubmit={handleSubmit(onHookFormSubmit)}>
                {/* Institution Name */}
                <div>
                    <label className='text-dark block mb-1 mt-5'>Institution Name</label>
                    <input
                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                    type="text" 
                    placeholder='e.g. Notre Dame College'
                    {...register("institution")}
                    />
                </div>

                {/* Starting & Ending year */}
                <div className='flex gap-5'>
                    <div className='w-full'>
                        <label className='text-dark block mb-1 mt-5'>Start Year</label>
                        <input 
                        className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                        type="number"
                        {...register("starting_year")}
                        />
                    </div>
                    <div className='w-full'>
                        <label className='text-dark block mb-1 mt-5'>End Year</label>
                        <input 
                        className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                        type="number"
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
                        placeholder='e.g. B.Sc (Hons)'
                        {...register("degree")}
                        />
                    </div>
                    <div className='w-full'>
                        <label className='text-dark block mb-1 mt-5'>Subject (optional)</label>
                        <input 
                        className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                        type="text" 
                        placeholder='e.g. Computer Science'
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

                {/* Save changes */}
                <div className='flex justify-end mt-5'>
                    <Button type='submit'>Save changes</Button>
                </div>
            </form>
        </div>
    );
};

export default OnBoardEducation;