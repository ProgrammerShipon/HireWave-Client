import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import Modal from './Modal';
import { ImUserCheck } from 'react-icons/im';

const BasicInformation = () => {
    const [isBasicInfoModalOpen, setIsBasicInfoModalOpen] = useState(false);

     const handleBasicInfoModal =(e) => {
        if(e == "edit") setIsBasicInfoModalOpen(true)
        else if (e == "cancel") setIsBasicInfoModalOpen(false)
        else if (e == "save") {
            // ToDo: make logic for saving basic info info here and create alert for success
            setIsBasicInfoModalOpen(false)
        }
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
                    <div>
                        {/* Full Name */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Full Name</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' type="text" placeholder='Your full name' />
                        </div>

                        {/* Job Title */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Job Title</label>
                            <select defaultValue="" className='rounded outline-none h-10 border border-dark/20 w-full px-3'>
                                <option value="" disabled>Select Job Title</option>
                                <option value="full-time">Front-end Developer</option>
                                <option value="part-time">Back-End Developer</option>
                                <option value="freelance">Sales Manager</option>
                                <option value="freelance">Sales Manager</option>
                                <option value="freelance">Sales Manager</option>
                            </select>
                        </div>

                        {/* Facebook */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Facebook</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' type="text" placeholder='Your facebook id link' />
                        </div>

                        {/* Twitter */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Twitter</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' type="text" placeholder='Your twitter id link' />
                        </div>

                        {/* LinkedIn */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>LinkedIn</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' type="text" placeholder='Your linkedin id link' />
                        </div>

                        {/* GitHub */}
                        <div>
                            <label className='text-dark block mb-1'>GitHub</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' type="text" placeholder='Your github id link' />
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default BasicInformation;