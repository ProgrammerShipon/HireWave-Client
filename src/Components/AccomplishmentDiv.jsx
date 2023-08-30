import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import Button from './Button';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const AccomplishmentDiv = ({ accomplished }) => {
    const { id, accomplishment }= accomplished
    const [accomplishmentDiv, setAccomplishmentDiv]= useState(false)
    const { register, handleSubmit, reset } = useForm();

    const onAccomplishmentSubmit = data => {
        console.log(data)
        const updatedAccomplishment= {
            institution: data.institution,
            starting_year: data.starting_year,
            ending_year: data.ending_year,
            degree: data.degree,
            subject: data.subject,
            performance_scale: data.performance_scale,
            performance: data.performance,
        }
        console.log(updatedAccomplishment)

        //TODO: Update Accomplishment data
        setAccomplishmentDiv(false)
        reset();
    }

    const handleDelete= () =>{
        //ToDo: Delete operation with confirmation message
    }

    const handleEdit= (e)=> {
        if(e == "edit") setAccomplishmentDiv(true)
        else if (e == "cancel") setAccomplishmentDiv(false)
    }

    return (
        <div className='border border-green/60 hover:shadow-lg hover:shadow-green/20 duration-300 rounded-lg px-5 py-3 mb-5 flex gap-8 items-start justify-between'>
            <p className='max-w-lg'>{accomplishment}</p>

            {/* Edit and Delete Buttons */}
            <div className='flex gap-3 justify-center'>
                <button onClick={()=> handleEdit("edit")} className='hover:text-green cursor-pointer duration-300'><FiEdit size={18} /></button>
                <button onClick={handleDelete} className='hover:text-red-500 cursor-pointer duration-300'><AiOutlineDelete size={20} /></button>
            </div>

            {
                accomplishmentDiv &&
                <Modal isModalOpen={accomplishmentDiv} setIsModalOpen={setAccomplishmentDiv} handleModal={handleEdit}>

                    {/* Modal content */}
                    <form onSubmit={handleSubmit(onAccomplishmentSubmit)}>
                        {/* Accomplishment */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Accomplishment</label>
                            <textarea 
                            defaultValue={accomplishment} 
                            className='rounded outline-none h-32 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Dhaka University'
                            {...register("institution")}
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

export default AccomplishmentDiv;