import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formatDate } from './FormatDate';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import Modal from './Modal';
import Button from './Button';

const ProjectDiv = ({project}) => {
    const { title, starting_date, ending_date, description, project_link }= project
    const [projectDiv, setProjectDiv]= useState(false)
    const [present, setPresent] = useState(false);
    const { register, handleSubmit, setValue, reset } = useForm();

    const onProjectSubmit = data => {
        console.log(data)
        const updatedProject= {
            title: data.title,
            starting_date: data.starting_date,
            ending_date: data.ending_date,
            description: data.description,
            project_link: data.project_link
        }
        console.log(updatedProject)

        //TODO: Update Project data
        setProjectDiv(false)
        reset();
    }
    const handleDelete= () =>{
        //ToDo: Delete operation with confirmation message
    }

    const handleEdit= (e)=> {
        if(e == "edit") setProjectDiv(true)
        else if (e == "cancel") setProjectDiv(false)
    }
    return (
        <div className='border border-green/60 hover:shadow-lg hover:shadow-green/20 duration-300 rounded-lg px-5 py-3 mb-5 flex gap-8 items-start justify-between'>
            <div className=''>
                <h4 className='font-semibold text-xl mb-1'>{title}</h4>
                <p>{formatDate(starting_date)} - {ending_date == "Present" ? ending_date : formatDate(ending_date)}</p>
                <a href={project_link} target='_blank' className='cursor-pointer text-blue-500 hover:underline '>{project_link}</a>
                <p className='max-w-lg'>{description}</p>
            </div>
            
            {/* Edit and Delete Buttons */}
            <div className='flex gap-3 justify-center'>
                <button onClick={()=> handleEdit("edit")} className='hover:text-green cursor-pointer duration-300'><FiEdit size={18} /></button>
                <button onClick={handleDelete} className='hover:text-red-500 cursor-pointer duration-300'><AiOutlineDelete size={20} /></button>
            </div>
            
            {
                projectDiv &&
                <Modal isModalOpen={projectDiv} setIsModalOpen={setProjectDiv} handleModal={handleEdit}>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onProjectSubmit)}>
                        {/* Title */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Title</label>
                            <input
                            defaultValue={title}
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='Your project title'
                            {...register("title")}
                            />
                        </div>
                        
                        {/* Starting & Ending date */}
                        <div className='flex gap-5'>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>Start date</label>
                                <input 
                                defaultValue={starting_date}
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                type="date"
                                {...register("starting_date")}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-dark block mb-1 mt-5'>End date</label>
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
                            <label className=''>Currently ongoing</label>
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
                            <label className='text-dark block mb-1 mt-5'>Description (optional)</label>
                            <textarea
                            defaultValue={description}
                            className='rounded outline-none h-32 border border-dark/20 w-full px-3 py-2'  
                            placeholder='Write within 250 words'
                            {...register("description")}
                            />
                        </div>

                        {/* Project link */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Project Link</label>
                            <input
                            defaultValue={project_link}
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='Your project link'
                            {...register("project_link")}
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

export default ProjectDiv;