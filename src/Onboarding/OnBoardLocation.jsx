import React from 'react';
import useHookForm from '../Components/useHookForm';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

const OnBoardLocation = () => {
    const { onHookFormSubmit }= useHookForm("put")
    const { handleSubmit, register, formState: { errors } } = useForm();

    return (
        <div className='w-96 md:w-[600px] border border-green rounded mt-10 px-10 py-10'>
            <h1 className='font-semibold text-2xl text-green mb-2'>Where are you located?</h1>
            <p className='text-sm mb-8'>This helps match you with nearby jobs</p>
            <form onSubmit={handleSubmit(onHookFormSubmit)}>
                {/* Country */}
                <div>
                    <label className='text-dark block mb-1 mt-5'>Country <sup className='text-red-500'>*</sup></label>
                    <input
                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                    type="text"
                    {...register("country", { required: true })}
                    />
                </div>
                {errors.country?.type === 'required' && <span className='text-red-500 duration-300'>This field is required</span>}

                {/* Full address */}
                <div>
                    <label className='text-dark block mb-1 mt-5'>Full Address</label>
                    <input
                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                    type="text"
                    placeholder='e.g. 45 West Sandore, Sector-5'
                    {...register("address")}
                    />
                </div>

                {/* Phone number */}
                <div>
                    <label className='text-dark block mb-1 mt-5'>Phone number</label>
                    <input
                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                    type="text"
                    {...register("phone")}
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

export default OnBoardLocation;