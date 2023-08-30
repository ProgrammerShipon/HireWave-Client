import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import LanguageDiv from '../Components/LanguageDiv';
import { useState } from 'react';
import Modal from '../Components/Modal';
import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

const LanguageProficiency = () => {
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onLanguageSubmit = data => {
        console.log(data)

        const updatedLanguage= {
            language: data.language,
            level: data.level
        }
        console.log(updatedLanguage)

        // ToDo: make logic for saving skill info here and create alert for success
        setIsLanguageModalOpen(false)
        reset();
    }

    const handleLanguageModal =(e) => {
       if(e == "edit") setIsLanguageModalOpen(true)
       else if (e == "cancel") setIsLanguageModalOpen(false)
    }

    const languages = [
        {
            "name" : "Bengali",
            "level" : "Native"
        },
        {
            "name" : "English",
            "level" : "Conversational"
        },
        {
            "name" : "Hindi",
            "level" : "Conversational"
        }
    ]

    return (
        <div className='bg-white px-5 rounded-lg mb-10 flex-1 pb-5 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <GrLanguage size={20}/>
                <p className='text-dark text-xl'>Language Proficiency</p>
            </h2>

            <div className='grid xl:grid-cols-2 gap-5 mx-5 mb-5'>
            {
                languages.map(language=> <LanguageDiv key={language.name} language={language}></LanguageDiv>)
            }
            </div>

            {/* Add Language Button */}
            <div className='flex justify-center'>
                {
                    languages.length < 8? 
                    <button onClick={() => handleLanguageModal("edit")} className='text-blue-600'>+ Add Language</button> :
                    <p className='text-sm'>Maximum Language limit reached</p>
                }
            </div>

            {
                isLanguageModalOpen && 
                <Modal isModalOpen={isLanguageModalOpen} setIsModalOpen={setIsLanguageModalOpen} handleModal={handleLanguageModal}>
                    {/* Modal Heading */}
                    <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                        <GrLanguage fill='green' size={20}/>
                        <p className='text-dark text-xl'>Add Languages</p>
                    </h2>
                    
                    {/* Modal content */}
                    <form onSubmit={handleSubmit(onLanguageSubmit)}>
                        {/* Language Name */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Language Name</label>
                            <input 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: French'
                            {...register("language")}
                            />
                        </div>

                        {/* Language level */}
                        <div className='my-2'>
                            <label className='text-dark block mb-1'>Proficiency</label>
                            <select 
                            defaultValue="" 
                            className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                            {...register("level")}
                            >
                                <option value="" disabled>Level</option>
                                <option value="Native">Native</option>
                                <option value="Conversational">Conversational</option>
                                <option value="Basic">Basic</option>
                            </select>
                        </div>

                        <p className='text-sm mt-1'>N.B. You cannot add more than 8 languages</p>

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

export default LanguageProficiency;