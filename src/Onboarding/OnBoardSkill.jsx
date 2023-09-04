import React from 'react';
import Button from '../Components/Button';
import useHookForm from '../Components/useHookForm';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const OnBoardSkill = () => {
    const { onHookFormSubmit }= useHookForm("put")
    const { handleSubmit, register } = useForm();
    const [skills, setSkills] = useState([{ id: 1, value: "" }]); 
    const [maximumWarning, setMaximumWarning]= useState(false)

    const handleIncreaseSkillField = () => {
        if (skills.length < 10) {
        const newId = skills.length + 1;
        setSkills([...skills, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };

    return (
        <div className='w-96 md:w-[600px] border border-green rounded mt-10 px-10 py-10'>
            <h1 className='font-semibold text-2xl text-green mb-2'>What are some of your Skills</h1>
            <p className='text-sm mb-8'>We recommend adding at least six skills for better recommendations</p>

            <form onSubmit={handleSubmit(onHookFormSubmit)}>


            {/* Skill field */}
            <div>
                <label className='text-dark block mb-1'>Add a Skill</label>
                {skills.map((skill, index) => (
                    <div key={skill.id} className='flex items-center gap-5 mb-3'>
                    <input
                        type='text'
                        className='rounded outline-none h-10 border border-dark/20 w-full px-3 py-2 max-w-5xl'
                        {...register(`skill[${index}]`)} // Use array syntax for form data
                    />
                    {index === skills.length - 1 && (
                        <IoMdAddCircleOutline
                        onClick={handleIncreaseSkillField}
                        className='cursor-pointer hover:bg-green/10 rounded-full p-1'
                        fill='green'
                        size={32}
                        />
                    )}
                    </div>
                ))}
                {
                    maximumWarning && <p className='text-red-500'>Maximum skill field reached</p>
                }
            </div> 

            {/* Divider */}
            <p className='border border-green mt-10 mb-6'></p>

            {/* Suggested skills */}
            <div>
                <h2 className='text-xl text-green mb-5'>Do you want to add one of these fields?</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className='flex items-center gap-3 px-5 py-2 border border-dark hover:border-green hover:shadow-lg rounded-lg cursor-pointer group'>
                        <AiOutlinePlus className='group-hover:text-green'/> 
                        <p>Customer Service</p>
                    </div>

                    <div className='flex items-center gap-3 px-5 py-2 border border-dark hover:border-green hover:shadow-lg rounded-lg cursor-pointer group'>
                        <AiOutlinePlus className='group-hover:text-green'/> 
                        <p>Communication skills</p>
                    </div>

                    <div className='flex items-center gap-3 px-5 py-2 border border-dark hover:border-green hover:shadow-lg rounded-lg cursor-pointer group'>
                        <AiOutlinePlus className='group-hover:text-green'/> 
                        <p>Leadership</p>
                    </div>

                    <div className='flex items-center gap-3 px-5 py-2 border border-dark hover:border-green hover:shadow-lg rounded-lg cursor-pointer group'>
                        <AiOutlinePlus className='group-hover:text-green'/> 
                        <p>Maintenance</p>
                    </div>
                </div>
            </div>


            {/* Save changes */}
            <div className='flex justify-end mt-5'>
                <Button type='submit'>Save changes</Button>
            </div>
        </form>
    </div>
    );
};

export default OnBoardSkill;