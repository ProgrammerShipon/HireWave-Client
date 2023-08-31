import React, { useState } from 'react';
import { AiFillProject } from 'react-icons/ai';
import ProjectDiv from '../Components/ProjectDiv';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';
import Modal from '../Components/Modal';

const Projects = () => {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [workFromHome, setWorkFromHome] = useState(false);
    const [present, setPresent] = useState(false);
    const { register, handleSubmit, reset, watch, setValue } = useForm();

    const onProjectSubmit = data => {
        console.log(data)
        const updatedProject= {
            organization: data.organization,
            starting_date: data.starting_date,
            ending_date: data.ending_date,
            location: data.location,
            description: data.description,
            profile: data.profile
        }
        console.log(updatedProject)

        //TODO: Update Project data
        setIsProjectModalOpen(false)
        reset();
    }
    
    const handleProjectModal =(e) => {
        if(e == "edit") setIsProjectModalOpen(true)
        else if (e == "cancel") setIsProjectModalOpen(false)
    }

    const projects = [
        {
            "id" : 1,
            "title" : "Apex sports",
            "starting_date" : "2022-02-01",
            "ending_date" : "2022-02-21",
            "description" : "A sports academy website with variety of classes that contains three user dashboards (admin, instructor, student), each having own functionalities.",
            "project_link" : "https://apex-sports-cc726.web.app/"
        },
        {
            "id" : 2,
            "title" : "Toy Verse",
            "starting_date" : "2023-07-01",
            "ending_date" : "Present",
            "description" : "An online marketplace for action-figure toys where sellers can add, delete, search and update toy data.",
            "project_link" : "https://silly-sprinkles-037140.netlify.app/"
        }
    ]
    return (
        <div className='bg-white px-5 rounded-lg mb-10 flex-1 pb-5 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <AiFillProject fill='green' size={20}/>
                <p className='text-dark text-xl'>Academics / Personal Projects</p>
            </h2>

            {/* All Projects */}
            <div className='w-fit mx-auto'>
            {
                projects.map(project => <ProjectDiv key={project.id} project={project}></ProjectDiv>)
            }
           </div>

            {/* Add Projects Button */}
            <div className='flex justify-center'>
            {
                projects.length < 5 ?
                    <button onClick={() => handleProjectModal("edit")} className='text-blue-600'>+ Add Projects</button> :
                    <p className='text-sm'>Maximum limit reached</p>
            }
            </div>

            {
                isProjectModalOpen &&
                <Modal isModalOpen={isProjectModalOpen} setIsModalOpen={setIsProjectModalOpen} handleModal={handleProjectModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <AiFillProject fill='green' size={20}/>
                        <p className='text-dark text-xl'>Add Project</p>
                    </h2>

                     {/* Modal content */}
                     <form onSubmit={handleSubmit(onProjectSubmit)}>
                        {/* Title */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Title</label>
                            <input
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

                        {/* Project link */}
                        <div>
                            <label className='text-dark block mb-1 mt-2'>Project Link</label>
                            <input
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='Your project link'
                            {...register("project_link")}
                            />
                        </div>

                        <p className='text-sm mt-2'>N.B. You cannot add more than 5 Project details</p>

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

export default Projects;