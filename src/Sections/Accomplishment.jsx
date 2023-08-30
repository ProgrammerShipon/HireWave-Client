import React from 'react';
import { MdDoneAll } from 'react-icons/md';
import AccomplishmentDiv from '../Components/AccomplishmentDiv';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Components/Modal';
import Button from '../Components/Button';

const Accomplishment = () => {

    const [isAccomplishmentModalOpen, setIsAccomplishmentModalOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onAccomplishmentSubmit = data => {
        console.log(data)
        const updatedAccomplishment= {
            institution: data.institution,
            starting_year: data.starting_year,
            ending_year: data.ending_year,
            degree: data.degree,
            subject: data.subject,
            performance_scale: data.performance_scale,
            performance: data.performance,
        }
        console.log(updatedAccomplishment)

        //TODO: Update Accomplishment data
        setIsAccomplishmentModalOpen(false)
        reset();
    }

    const handleAccomplishmentModal =(e) => {
        if(e == "edit") setIsAccomplishmentModalOpen(true)
        else if (e == "cancel") setIsAccomplishmentModalOpen(false)
     }

    const accomplishments= [
        {
            "id"  : 1,
            "accomplishment" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non porro quasi dolorum similique ipsa. Accusamus facilis explicabo repudiandae suscipit obcaecati ratione iste magnam illo, perferendis maiores quos dolore modi sunt libero cupiditate, beatae vero! Soluta pariatur ad cum. Totam, iure amet ipsum est doloribus tempore iusto facere perspiciatis ex?"
        },
        {
            "id"  : 2,
            "accomplishment" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non porro quasi dolorum similique ipsa. Accusamus facilis explicabo repudiandae suscipit obcaecati ratione iste magnam illo, perferendis maiores quos dolore modi sunt libero cupiditate, beatae vero! Soluta pariatur ad cum. Totam, iure amet ipsum est doloribus tempore iusto facere perspiciatis ex?"
        }
    ]
    return (
        <div className='bg-white px-5 rounded-lg mb-10 flex-1 pb-5 shadow-xl'>
            {/* Heading */}
            <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5'>
                <MdDoneAll fill='green' size={20}/>
                <p className='text-dark text-xl'>Accomplishment / Additional Details</p>
            </h2>

            {/* All Accomplishments */}
            <div className='w-fit mx-auto'>
            {
                accomplishments.map(accomplished => <AccomplishmentDiv key={accomplished.id} accomplished={accomplished}></AccomplishmentDiv>)
            }
            </div>

            {/* Add Accomplishment Button */}
            <div className='flex justify-center'>
                {
                    accomplishments.length < 3? 
                    <button onClick={() => handleAccomplishmentModal("edit")} className='text-blue-600'>+ Add Accomplishment / Additional Details</button> :
                    <p className='text-sm'>Maximum Language limit reached</p>
                }
            </div>

            {
                isAccomplishmentModalOpen &&
                <Modal isModalOpen={isAccomplishmentModalOpen} setIsModalOpen={setIsAccomplishmentModalOpen} handleModal={handleAccomplishmentModal}>

                    {/* Modal content */}
                    <form onSubmit={handleSubmit(onAccomplishmentSubmit)}>
                        {/* Modal Heading */}
                        <h2 className='px-2 pt-4 pb-2 flex items-center gap-2 border-b border-dark/20 mb-5 -mt-3'>
                            <MdDoneAll fill='green' size={20}/>
                            <p className='text-dark text-xl'>Add Accomplishment</p>
                        </h2>
                        {/* Accomplishment */}
                        <div>
                            <label className='text-dark block mb-1 mt-5'>Accomplishment</label>
                            <textarea
                            className='rounded outline-none h-32 border border-dark/20 w-full px-3' 
                            type="text" 
                            placeholder='e.g: Dhaka University'
                            {...register("institution")}
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

export default Accomplishment;