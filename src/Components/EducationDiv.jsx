import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import Button from './Button';
import useModal from './useModal';
import useHookForm from './useHookForm';
import useHandleDelete from './useHandleDelete';

const EducationDiv = ({ education }) => {
    const { id, degree, institution, subject, starting_year, ending_year, performance_scale, performance } = education
    const { isModalOpen,setIsModalOpen, handleModal } = useModal();
    const { onHookFormSubmit }= useHookForm("put")
    const { handleSubmit, register } = useForm();
    const { handleDelete } =useHandleDelete()
    
    return (
        <div className='border border-green/60 hover:shadow-lg hover:shadow-green/20 duration-300 rounded-lg px-5 py-3 mb-5 flex gap-8 items-start justify-between'>
            <div className=''>
                <h4 className='font-semibold text-xl mb-1'>{degree}{subject && ","} {subject}</h4>
                <p>{institution}</p>
                <p>{starting_year} - {ending_year}</p>
                <p>CGPA: {performance}/{performance_scale}</p>
            </div>
            
            {/* Edit and Delete Buttons */}
            <div className='flex gap-3 justify-center'>
                <button onClick={()=> handleModal("edit")} className='hover:text-green cursor-pointer duration-300'><FiEdit size={18} /></button>
                <button onClick={()=> handleDelete(id)} className='hover:text-red-500 cursor-pointer duration-300'><AiOutlineDelete size={20} /></button>
            </div>

            {
                isModalOpen &&
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleModal={handleModal}>

                    {/* Modal content */}
                    <form onSubmit={handleSubmit(onHookFormSubmit)}>
                        {/* Institution Name */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Institution Name</label>
                            <input 
                            defaultValue={institution} 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Dhaka University'
                            {...register("institution")}
                            />
                        </div>

                        {/* Starting & Ending year */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Start Year</label>
                                <input 
                                defaultValue={starting_year} 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                type="text"
                                {...register("starting_year")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>End Year</label>
                                <input 
                                defaultValue={ending_year} 
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
                                defaultValue={degree} 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g: B.Sc (Hons)'
                                {...register("degree")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Subject (optional)</label>
                                <input 
                                defaultValue={subject} 
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
                                defaultValue={`CGPA (scale of ${performance_scale})`} 
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
                                defaultValue={performance} 
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                {...register("performance")}
                                />
                            </div>

                            {/* 
                            TODO: Validate Performance
                            
                            {
                                performance > performance_scale && <p className='text-red-500'>Please enter a value less than or equal to {performance_scale}</p>
                            } */}
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

export default EducationDiv;