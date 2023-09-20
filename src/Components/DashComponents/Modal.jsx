import { useState } from 'react';
import { BsCamera, BsThreeDotsVertical } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Modal = ({ candidatesData, refetch }) => {
    const { _id, image, title, name , email } = candidatesData;
    const [axiosSecure] = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    
    const updateProfile = (data) => {
        const updateData = {
            title: data.title,
            name: data.name,
            email: email,
            visibility: data.visibility
        }
        console.log(updateData)
        axiosSecure.patch(`/candidates/profile/${_id}`, updateData)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setIsOpen(!isOpen)
                    refetch()
                }

            })
            .catch(error => {
                console.log(error);
            })


    };

    return (
        <>
            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-dark/30 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className='bg-white rounded-md py-6 px-12'>
                    
                        <form onSubmit={handleSubmit(updateProfile)}>
                            <div
                                className='flex flex-col gap-2 w-80' >
                                <input
                                    {...register("name")}
                                    defaultValue={name}
                                    className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                                />
                                <input
                                    {...register("title")}
                                    defaultValue={title}
                                    className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                                />

                                <select
                                    {...register("visibility")}
                                    className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                                >
                                    <option value="Available Now">Available Now</option>
                                    <option value="Not Available">Not Available</option>
                                </select>

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

export default Modal;