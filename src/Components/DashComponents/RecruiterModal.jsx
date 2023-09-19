import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsCamera, BsThreeDotsVertical } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const RecruiterModal = ({ recruitersData, refetchRecruiters }) => {
    const { _id, image, email, name, banner } = recruitersData;
    const [axiosSecure] = useAxiosSecure();
    // console.log(recruitersData)
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [newName, setNewName] = useState(name);
    const [newImage, setNewImage] = useState(image);
    const [newBanner, setNewBanner] = useState(banner);
    // console.log(newName)


    const updateProfile = (data) => {
        const updateData = {
            name: newName,
            email: email,
            image: newImage,
            banner: newBanner
        }
        // console.log(updateData)
        axiosSecure.patch(`/recruiters/profile/${_id}`, updateData)
            .then(res => {
                console.log(res.data)
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
                        {/* image */}
                        <div className=' w-56'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='w-48 h-48 rounded-full overflow-hidden shadow-xl shadow-gray/40'>
                                    <img
                                        className='w-full h-full object-cover object-center'
                                        src={image} alt="" />
                                </div>

                                {/* <button type='submit'
                                    className='flex items-center justify-center gap-1 mt-2 text-lg text-lightGray w-full'>
                                    <BsCamera size='24' /> Upload
                                </button> */}
                            </div>


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
                                    onChange={(e) => setNewName(e.target.value)}
                                    className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                                />

                                <input
                                    {...register("photoURL")}
                                    onChange={(e) => setNewImage(e.target.value)}
                                    placeholder='Provide Your Photo Url'
                                    className='w-full border border-gray/40 py-1 px-2 mt-2 rounded-md focus:outline-none focus:border-green'
                                />
                                <input
                                    {...register("bannerURL")}
                                    onChange={(e) => setNewBanner(e.target.value)}
                                    placeholder='Provide Your Banner Url'
                                    className='w-full border border-gray/40 py-1 px-2 mt-2 rounded-md focus:outline-none focus:border-green'
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