import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useHookForm from '../Components/useHookForm';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

const OnBoardVisibility = () => {
    const { onHookFormSubmit }= useHookForm("put")
    const { handleSubmit, register } = useForm();
    const [visibleChecked, setVisibleChecked] = useState(false);
    const [invisibleChecked, setInvisibleChecked] = useState(false);

    const handleVisibleClick = () => {
        setVisibleChecked(!visibleChecked);
        setInvisibleChecked(false);
    };

    const handleInvisibleClick = () => {
        setInvisibleChecked(!invisibleChecked);
        setVisibleChecked(false);
    };

    const onSubmit = (data) => {
        data.visible = visibleChecked;
        data.invisible = invisibleChecked;
        onHookFormSubmit(data);
    };

    return (
        <div className='w-96 md:w-[600px] border border-green rounded mt-10 px-10 py-10'>
            <h1 className='font-semibold text-2xl text-green mb-2'>Want to allow employers to find you on HireWave?</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Visible */}
                <div 
                className='border border-dark/40 px-5 py-3 rounded-lg hover:shadow-lg mt-5'
                onClick={handleVisibleClick}
                >
                    <p className='bg-dark/5 px-3 rounded w-fit text-sm'>Recommended</p>
                    <div className='flex justify-between items-center gap-2 mt-2 mb-1'>
                        <div>
                            <p className='flex items-center gap-2 text-dark'><AiOutlineEye /> <span className='font-semibold'>Searchable on HireWave</span></p>
                        </div>
                        <input
                            id="visible-checkbox"
                            className='w-4 h-4 rounded-full form-checkbox'
                            type="checkbox"
                            name="visible"
                            {...register('visible')}
                            checked={visibleChecked}
                            onChange={() => {}}
                        />
                    </div>
                    <p className='text-sm'>Employers can find your resume through searches and may contact you about jobs according to our terms</p>
                </div>

                {/* Invisible */}
                <div 
                className='border border-dark/40 px-5 py-3 rounded-lg hover:shadow-lg mt-5'
                onClick={handleInvisibleClick}
                >
                    <div className='flex justify-between items-center gap-2 mb-1 mt-1'>
                        <div>
                            <p className='flex items-center gap-2 text-dark'><AiOutlineEyeInvisible /> <span className='font-semibold'>Not Searchable on HireWave</span></p>
                        </div>
                        <input
                            id="invisible-checkbox"
                            className='w-4 h-4 rounded-full form-checkbox'
                            type="checkbox"
                            name="invisible"
                            {...register('invisible')}
                            checked={invisibleChecked}
                            onChange={() => {}}
                        />
                    </div>
                    <p className='text-sm'>Employers can find your resume through searches and may contact you about jobs according to our terms</p>
                </div>

                {/* Save changes */}
                <div className='flex justify-end mt-5'>
                    <Button type='submit'>Save changes</Button>
                </div>
            </form>
        </div>
    );
};

export default OnBoardVisibility;