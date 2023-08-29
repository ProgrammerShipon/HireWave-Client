import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import Modal from './Modal';
import { ImUserCheck } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import Button from './Button';

const BasicInformation = () => {
    const [isBasicInfoModalOpen, setIsBasicInfoModalOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const updatedBasicInformation= {
            name: data.name,
            job_title: data.job_title,
            facebook: data.facebook,
            twitter: data.twitter,
            linkedin: data.linkedin,
            github: data.github
        }
        console.log(updatedBasicInformation)

        //TODO: Update education data
        setIsBasicInfoModalOpen(false)
        reset();
    }

     const handleBasicInfoModal =(e) => {
        if(e == "edit") setIsBasicInfoModalOpen(true)
        else if (e == "cancel") setIsBasicInfoModalOpen(false)
    }
    
    return (
        <div className='flex items-start gap-8'>
            <div>
                {/* Name, position, mail & phone */}
                <div>
                    <h2 className='text-2xl text-green font-semibold mb-1'>Md Bakhtiar Fahim</h2>
                    <p className='text-xl text-dark'>Front-End Developer</p>
                    <p className='text-dark'>Email: bakhtiarfahim360@gmail.com</p>
                    <p className='text-dark'>Phone: +880 1879379797</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2 mt-2">
                    <Link
                        to="/"
                        className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                    >
                        <FaFacebookF size="20px" />
                    </Link>

                    <Link
                        to="/"
                        className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                    >
                        <FaTwitter size="20px" />
                    </Link>

                    <Link
                        to="/"
                        className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                    >
                        <FaLinkedin size="20px" />
                    </Link>

                    <Link
                        to="/"
                        className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                    >
                        <FaGithub size="20px" />
                    </Link>
                </div>
            </div>

            {/* Edit button */}
            <button onClick={() => handleBasicInfoModal("edit")} className='cursor-pointer hover:text-green mt-1 duration-300'><FiEdit size={20} /></button>

            {
                isBasicInfoModalOpen && 
                <Modal isModalOpen={isBasicInfoModalOpen} setIsModalOpen={setIsBasicInfoModalOpen} handleModal={handleBasicInfoModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <ImUserCheck fill='green' size={20}/>
                        <p className='text-dark text-xl'>Basic Information</p>
                    </h2>
                    
                    {/* Modal content */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Full Name */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Full Name</label>
                            <input 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='Your full name'
                            {...register("name")}
                            />
                        </div>

                        {/* Job Title */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Job Title</label>
                            <select 
                            defaultValue="Front-end Developer" 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                            {...register("job_title")}
                            >
                                <option value="" disabled>Select Job Title</option>
                                <option value="Banker">Banker</option>
                                <option value="Front-end Developer">Front-end Developer</option>
                                <option value="Sales Manager">Sales Manager</option>
                                <option value="Back-End Developer">Back-End Developer</option>
                                <option value="Psychiatrist">Psychiatrist</option>
                            </select>
                        </div>

                        {/* Facebook */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Facebook</label>
                            <input 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text"
                            placeholder='Your facebook id link'
                            {...register("facebook")}
                            />
                        </div>

                        {/* Twitter */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Twitter</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text"
                            placeholder='Your twitter id link'
                            {...register("twitter")}
                            />
                        </div>

                        {/* LinkedIn */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>LinkedIn</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text"
                            placeholder='Your linkedin id link'
                            {...register("linkedin")}
                            />
                        </div>

                        {/* GitHub */}
                        <div>
                            <label className='text-dark block mb-1'>GitHub</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text"
                            placeholder='Your github id link'
                            {...register("github")}
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

export default BasicInformation;