import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import LanguageDiv from '../Components/LanguageDiv';
import { useState } from 'react';
import Modal from '../Components/Modal';

const LanguageProficiency = () => {
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

    const handleLanguageModal =(e) => {
       if(e == "edit") setIsLanguageModalOpen(true)
       else if (e == "cancel") setIsLanguageModalOpen(false)
       else if (e == "save") {
           // ToDo: make logic for saving skill info here and create alert for success
           setIsLanguageModalOpen(false)
       }
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
        },
        {
            "name" : "Arabic",
            "level" : "Basic"
        },
    ]

    return (
        <div className='bg-white px-5 rounded-lg mb-10 pb-5'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <GrLanguage size={20}/>
                <p className='text-dark text-xl'>Language Proficiency</p>
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 mb-5'>
            {
                languages.map(language=> <LanguageDiv key={language.name} language={language}></LanguageDiv>)
            }
            </div>

            {/* Add Language Button */}
            <div className='flex justify-center'>
                <button onClick={() => handleLanguageModal("edit")} className='text-blue-600'>+ Add Language</button>
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
                    <div>
                        {/* Skill Name */}
                        <div className='mb-2'>
                            <label className='text-dark block mb-1'>Language Name</label>
                            <input className='rounded outline-none h-10 border border-dark/20 w-full px-3' type="text" placeholder='e.g: French' />
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default LanguageProficiency;