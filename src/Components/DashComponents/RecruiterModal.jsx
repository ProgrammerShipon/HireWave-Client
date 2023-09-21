import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

// react Icons 
import { BsThreeDotsVertical } from 'react-icons/bs';

const RecruiterModal = ({ recruitersData, refetchRecruiters }) => {
    const { _id, email, name, } = recruitersData;
    const [axiosSecure] = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false);
    const [newName, setNewName] = useState(name);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();



    const updateProfile = () => {
        const updateData = {
            name: newName,
            email: email,
        }
        axiosSecure.patch(`/recruiters/name/${_id}`, updateData)
            .then(res => {
                if (res.status === 200) {
                    refetchRecruiters()
                    setIsOpen(!isOpen)
                }
            })
            .catch(error => {
                console.log(error);
            })


    };


    return (
        <>
            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-dark/30 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className='bg-white rounded-md'>
                    <div className='flex items-center gap-8 p-6'>


                        {/* content */}
                        <form onSubmit={handleSubmit(updateProfile)}>
                            <div
                                className='flex flex-col gap-2 w-80' >
                                <input
                                    {...register("name")}
                                    defaultValue={name}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                                />


                                <div className='flex items-end justify-end gap-3 mt-3'>
                                    <div
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                    >
                                        Cancel
                                    </div>
                                    <button type='submit'
                                        className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* edit button */}
            <Tooltip id="edit__profile" />
            <button
                onClick={() => setIsOpen(!isOpen)}
                data-tooltip-id="edit__profile" data-tooltip-content="Edit Profile!"
                className='absolute top-5 right-5 h-9 w-9  text-green border-2 border-gray/40 rounded-full flex items-center justify-center'>
                <BsThreeDotsVertical size='22' />
            </button>
        </>
    );
};

export default RecruiterModal;