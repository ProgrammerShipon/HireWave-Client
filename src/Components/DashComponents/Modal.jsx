import { useState } from 'react';
import { BsCamera, BsThreeDotsVertical } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import { useForm } from 'react-hook-form';

const Modal = ({ candidatesData }) => {
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
                                    src={candidatesData.image} alt="" />

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
                        <div

                            className='flex flex-col gap-2 w-80' >
                            <input
                                {...register("name")}
                                defaultValue={candidatesData.name}
                                className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                            />
                            <input
                                {...register("title")}
                                defaultValue={candidatesData.title}
                                className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
                            />

                            <input
                                {...register("location")}
                                defaultValue={`${candidatesData.location[0]}, ${candidatesData.location[1]}`}
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
                        </div>
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