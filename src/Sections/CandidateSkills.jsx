import React from 'react';
import { GiSkills } from 'react-icons/gi';
import SkillDiv from '../Components/SkillDiv';
import Modal from '../Components/Modal';
import { useState } from 'react';

const CandidateSkills = () => {

    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

    const handleSkillModal =(e) => {
       if(e == "edit") setIsSkillModalOpen(true)
       else if (e == "cancel") setIsSkillModalOpen(false)
       else if (e == "save") {
           // ToDo: make logic for saving skill info here and create alert for success
           setIsSkillModalOpen(false)
       }
   }

    const skills= [
        {
            "name": "ReactJs",
            "level": "Beginner"
        },
        {
            "name": "MongoDB",
            "level": "Intermediate"
        },
        {
            "name": "Figma",
            "level": "Beginner"
        },
        {
            "name": "Javascript",
            "level": "Advanced"
        },
        {
            "name": "GitHub",
            "level": "Intermediate"
        },
        {
            "name": "Express.js",
            "level": "Beginner"
        },
    ]

    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <GiSkills fill='green' size={20}/>
                <p className='text-dark text-xl'>Skills</p>
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-5 mx-5 mb-5'>
                {
                    skills.map(skill => <SkillDiv key={skill.name} skill={skill}></SkillDiv>)
                }  
            </div>

            {/* Add Skills Button */}
            <div className='flex justify-center'>
                <button onClick={() => handleSkillModal("edit")} className='text-blue-600'>+ Add Skills</button>
            </div>

            {
                isSkillModalOpen && 
                <Modal isModalOpen={isSkillModalOpen} setIsModalOpen={setIsSkillModalOpen} handleModal={handleSkillModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <GiSkills fill='green' size={20}/>
                        <p className='text-dark text-xl'>Add Skills</p>
                    </h2>
                    
                    {/* Modal content */}
                    <div>
                        {/* Skill Name */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Skill Name</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' type="text" placeholder='e.g: Front-End Developer' />
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default CandidateSkills;