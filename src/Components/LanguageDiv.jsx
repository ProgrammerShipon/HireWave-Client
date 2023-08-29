import React from 'react';
import { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { ImCancelCircle } from 'react-icons/im';

const LanguageDiv = ({ language }) => {
    const {name, level}= language
    const [languageDiv, setLanguageDiv]= useState(false)

    const handleDelete= () =>{
        //ToDo: Delete operation with confirmation message
    }

    const handleEdit= (e)=> {
        if(e == "edit") setLanguageDiv(true)
        else if (e == "cancel") setLanguageDiv(false)
        else if (e== "save") {
            // ToDo: make logic for saving Language info here and create alert for success
            setLanguageDiv(false)
        }
    }
    return (
        <div className='border border-green/60 hover:shadow-lg hover:shadow-green/20 duration-300 rounded-lg px-5 py-3 flex justify-between items-center gap-5'>
            <div>
                <h6>{name}</h6>
                {
                    !languageDiv?
                    <>
                        <p className='text-sm'>{level}</p>
                    </>: <>
                        <select defaultValue="" className='rounded outline-none h-8 border border-dark/20 w-full px-3 mt-2'>
                            <option value="" disabled>Level</option>
                            <option value="full-time">Native</option>
                            <option value="part-time">Conversational</option>
                            <option value="freelance">Basic</option>
                        </select>
                    </>
                }
            
            </div>

            {/* Edit and Delete Buttons */}
            <div className='flex gap-0 justify-center'>
                {
                    !languageDiv?
                    <>
                        <button onClick={()=> handleEdit("edit")} className='hover:text-green cursor-pointer duration-300 mr-3'><FiEdit  /></button>
                        <button onClick={()=> handleDelete(_id)} className='hover:text-red-500 cursor-pointer duration-300'><AiOutlineDelete /></button>
                    </>:
                    <>
                        <div onClick={()=> handleEdit("save")} className='text-green cursor-pointer duration-300 hover:bg-green/10 rounded-full p-2'><BsCheckCircle /></div>
                        <div onClick={()=> handleEdit("cancel")} className='text-red-500 cursor-pointer duration-300 hover:bg-red-100 rounded-full p-2'><ImCancelCircle /></div>
                    </>
                }
            </div>
        </div>
    );
};

export default LanguageDiv;