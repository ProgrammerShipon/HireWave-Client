import React, { useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import { BiCalendar, BiCurrentLocation } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import generatePDF from 'react-to-pdf';
import CustomModal from './CustomModal';


const Resume = ({ candidatesData, refetch }) => {
    console.log(candidatesData);
    const { name, title, location, phone,  languages, education, experience, skills, socialLink, email } = candidatesData;

    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const targetRef = useRef();
    const handleResumeModal = (e) => {
        if (e == "edit") setIsResumeModalOpen(true)
        else if (e == "cancel") setIsResumeModalOpen(false)
    }

    console.log(candidatesData);
    return (
        <div>
            <button onClick={() => handleResumeModal("edit")} className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 flex items-center gap-3 w-fit cursor-pointer">
                <LiaFileDownloadSolid  />
                <p>Generate Resume</p>
            </button>
            {
                isResumeModalOpen && (
                    <CustomModal
                        isModalOpen={isResumeModalOpen}
                        setIsModalOpen={isResumeModalOpen}
                        handleModal={handleResumeModal}
                        larger={true}
                    >
                        {/* Modal Heading */}
                        <div className="overflow-y-hidden">
                           <div className='flex justify-between items-center gap-5 pb-3 border-b border-dark/20'>
                            <div className="pt-2 pb-2 flex items-center gap-3  text-purple">
                                    <AiOutlineEye size={20} />
                                    <h3 className="text-xl">Resume Preview</h3>
                                </div>
                                
                                {/* Download Button */}

                                <button
                                    onClick={() => generatePDF(targetRef, {filename: `${name}'s resume.pdf`})}
                                    className="bg-transparent text-dark hover:text-white px-3 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 flex items-center gap-3 w-fit cursor-pointer mr-16"
                                >
                                    <FiDownload className='text-2xl' />
                                    <p>Download</p>
                                </button>
 
                           </div>
                            

                            {/* Modal content */}
                            <div ref={targetRef} className='p-5'>
                                {/* name and title */}
                                <h3 className='text-4xl mb-2'>{name}</h3>
                                <p>{title}</p>

                                {/* Contact Details */}
                                <div className='flex items-center gap-5 mt-3 mb-5'>
                                    <div className='flex items-center gap-2'>
                                        <AiOutlineMail className='text-green'/>
                                        {email}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <BsTelephone className='text-green'/>
                                        <p>{phone}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <BiCurrentLocation className='text-green'/>
                                        <p>{location}</p>
                                    </div>
                                </div>

                                {/* Work Experience */}
                                <div>
                                    <h3 className='text-2xl font-semibold mb-3'>Work Experience</h3>
                                    <p className='border border-dark'></p>
                                    <div className='grid grid-cols-2 gap-5'>
                                    {
                                        experience.map((exp, index)=>
                                            <div key={index} className='p-3'>
                                                <div>
                                                    <h3 className='text-dark font-medium text-xl'>{exp.position} <span className='text-sm text-lightGray'>- {exp.jobType}</span></h3>
                                                    <p className='text-lightGray'>{exp.companyName},{exp.location}</p>
                                                    <p className='flex items-center gap-1 text-gray -mt-1 font-light'>
                                                        <BiCalendar />{exp.startDate} - {exp.endDate !== '' ? exp.startDate : 'Present'}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    </div>
                                </div>

                                {/* Education */}
                                <div>
                                    <h3 className='text-2xl font-semibold mb-3'>Education</h3>
                                    <p className='border border-dark'></p>
                                    <div className='grid grid-cols-2 gap-5'>
                                    {
                                        education.map((edu, index)=>
                                            <div key={index} className='p-3'>
                                                <div>
                                                    <h3 className='text-dark font-medium text-xl'>{edu.subject}</h3>
                                                    <p className='text-lightGray'>{edu.institute}</p>
                                                    <p className='flex items-center gap-1 text-gray mt-1 font-light'>
                                                        <BiCalendar />  {edu.startDate} to  {edu.endDate !== "" ? edu.endDate : 'Present'}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    </div>
                                </div>

                                {/* Languages */}
                                <div>
                                    <h3 className='text-2xl font-semibold mb-3'>Languages</h3>
                                    <p className='border border-dark'></p>
                                    <div className='flex flex-wrap items-center gap-x-5 mt-3'>
                                    {
                                        languages.map((language, index)=> 
                                        <ul key={index} className='ml-5'>
                                            <li className='list-item list-disc'>{language.name}- {language.level}</li>
                                        </ul>)
                                    }
                                    </div>
                                </div>

                                {/* Skills */}
                                <div>
                                    <h3 className='text-2xl font-semibold mb-3'>Skills</h3>
                                    <p className='border border-dark'></p>
                                    <div className='flex flex-wrap items-center gap-x-5  mt-3'>
                                    {
                                        skills.map((skill, index)=> 
                                        <div key={index} className='ml-5'>
                                            <p className='list-item'>{skill}</p>
                                        </div>)
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomModal>
                )
            }
           
        </div>
    );
};

export default Resume;