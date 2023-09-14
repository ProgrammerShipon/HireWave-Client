import { useState } from 'react';
import { BsCamera, BsThreeDotsVertical } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Modal = ({ candidatesData }) => {
    const { image, title, name } = candidatesData;
    const [axiosSecure] = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleImageUpload = (data) => {

        const profile = {
            url:data.photoURL
        }
        console.log(profile)
        axiosSecure.patch(`/candidates/profilePhoto/64fde9b326697aabef2730c7`, profile)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setIsOpen(!isOpen)
                }

            })
            .catch(error => {
                console.log(error);
            })

    };
    const updateProfile = (data) => {
        const updateData = {
            title: data.title,
            name: data.name,
            visibility: data.visibility
        }
        console.log(updateData)
        axiosSecure.patch(`/candidates/profile/64fde9b326697aabef2730c7`, updateData)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
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
                        {/* image */}
                        <div className=' w-56'>
                            <div className='w-48 h-48 rounded-full overflow-hidden shadow-xl shadow-gray/40'>
                                <img
                                    className='w-full h-full object-cover object-center'
                                    src={image} alt="" />

                            </div>

                            <form onSubmit={handleSubmit(handleImageUpload)}>
                                <input
                                    {...register("photoURL")}
                                    placeholder='Provide Your Photo Url'
                                    className='w-full border border-gray/40 py-1 px-2 rounded-md focus:outline-none focus:border-green'
                                />
                                <button type='submit'
                                    className='flex items-center justify-center gap-1 mt-2 text-lg text-lightGray w-full'>
                                    <BsCamera size='24' /> Upload
                                </button>
                            </form>


                            {/* <div className='flex flex-col items-center justify-center mt-4'>
                                <div className='flex items-center'>
                                    Profile Photo Upload Via
                                     <div
                                        className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                    >
                                       
                                    </div>
                                </div>
                                <input type="file" className='w-44' onChange={handleImageChange} />
                                
                            </div> */}
                        </div>

                        {/* content */}
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