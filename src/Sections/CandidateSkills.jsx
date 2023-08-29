import React from 'react';
import { GiSkills } from 'react-icons/gi';
import SkillDiv from '../Components/SkillDiv';
import Modal from '../Components/Modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

const CandidateSkills = () => {

    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSkillSubmit = data => {
        console.log(data)

        const updatedSkill= {
            skill: data.skill,
            level: data.level
        }
        console.log(updatedSkill)

        //TODO: Update skill data
        setIsSkillModalOpen(false)
        reset();
    }

    const handleSkillModal =(e) => {
       if(e == "edit") setIsSkillModalOpen(true)
       else if (e == "cancel") setIsSkillModalOpen(false)
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
        }
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
                {
                    skills.length < 15 ?
                        <button onClick={() => handleSkillModal("edit")} className='text-blue-600'>+ Add Skills</button> :
                        <p className='text-sm'>Maximum skill limit reached</p>

                }
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
                    <form onSubmit={handleSubmit(onSkillSubmit)}>
                        {/* Skill Name */}
                        <div>
                            <label className='text-dark block mb-1'>Skill Name</label>
                            <input 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Front-End Developer'
                            {...register("skill")}
                            />
                        </div>

                        {/* Skill level */}
                        <div className='my-2'>
                            <label className='text-dark block mb-1'>Skill Level</label>
                            <select 
                            defaultValue="" 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                            {...register("level")}
                            >
                                <option value="" disabled>Level</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Beginner">Beginner</option>
                            </select>
                        </div>

                        <p className='text-sm mt-1'>N.B. Maximum skill limit is 15</p>

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

export default CandidateSkills;