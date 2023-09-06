import { useState } from 'react';
import { BsCamera, BsThreeDotsVertical } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import { useForm } from 'react-hook-form';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('image', selectedImage);

        // try {
        //   await axios.post('/api/upload', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   });
        //   // Handle success or show a notification
        // } catch (error) {
        //   // Handle error
        // }
    };

    return (
        <>
            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-dark/30 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className='bg-white rounded-md'>
                    <div className='flex items-center gap-8 p-6'>
                        {/* image */}
                        <div>
                            <div className='w-48 h-48 rounded-full overflow-hidden shadow-xl shadow-gray/40'>
                                <img
                                    className='w-full h-full object-cover object-center'
                                    src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/2ad1f54716df5d59667877d07d039551-1664788852632/c28dea6e-85a7-45b9-8b41-79d11b6c2cb2.jpg" alt="" />

                            </div>
                            <div className='flex flex-col items-center justify-center mt-4'>
                                <input type="file" className='w-44' onChange={handleImageChange} />

                                <button onClick={handleImageUpload}
                                    className='flex items-center justify-center gap-1 mt-2 text-lg text-lightGray w-full'>
                                    <BsCamera size='24' /> Upload
                                </button>
                            </div>
                        </div>

                        {/* content */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='flex flex-col gap-2 w-80' >
                            <input
                                {...register("name")}
                                defaultValue="MD Forid Hossain"
                                className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                            />
                            <input
                                {...register("title")}
                                defaultValue="Front End Developer | React Developer"
                                className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                            />

                            <input
                                {...register("location")}
                                defaultValue="Dhaka, Bangladesh"
                                className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                            />

                            <select
                                {...register("ability")}
                                className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                            >
                                <option value="Available Now">Available Now</option>
                                <option value="Not Available">Not Available</option>
                            </select>

                            <div className='flex items-end justify-end gap-3 mt-3'>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                >
                                    Cancel
                                </button>
                                <button type='submit'
                                    className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                >
                                    Save
                                </button>
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