import { SlLocationPin } from "react-icons/sl";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useLanguagesData from "../../Hooks/useLanguagesData";
import { IoIosFlash } from "react-icons/io";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { MdLocationPin } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiMap, BiSolidUserDetail } from "react-icons/bi";
import DescriptionTextarea from "../../Components/DashComponents/DescriptionTextarea";
import { LuExternalLink } from "react-icons/lu";
import { BsTelephoneOutbound } from "react-icons/bs";
import RecruiterModal from "../../Components/DashComponents/RecruiterModal";

const RecruitersProfile = ({ recruitersData, refetchRecruiters }) => {
    const [axiosSecure] = useAxiosSecure()
    // console.log(recruitersData)
    const { _id, name, image, email, banner, phone, industry, website, category, subCategory, location, address, about, specialties, status, active, followers, joinDate, } = recruitersData;

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const [availability, setAvailability] = useState(true);
    const [editAbout, setEditAbout] = useState(true);
    // const [editAbout, setEditAbout] = useState(true);
    const [editLocation, setEditLocation] = useState(true);
    const [isSkills, setIsSkills] = useState(true);
    const [openLanguage, setOpenLanguage] = useState(true);
    const [openEducation, setOpenEducation] = useState(true);
    const [openExperience, setOpenExperience] = useState(true);
    const [editSpecialties, setEditSpecialties] = useState();

    const [userAbout, setUserAbout] = useState(about);
    // Update Candidate Availability 
    // const handleModifyAbout = (data) => {
    //     console.log("userAbout", userAbout)
    //     // axiosSecure.patch(`/candidates/about/${_id}`, userAbout)
    //     //     .then(res => {
    //     //         console.log(res.data)
    //     //         if (res.status === 200) {
    //     //             setEditAbout(!editAbout)
    //     //             refetch()
    //     //         }

    //     //     })
    //     //     .catch(error => {
    //     //         console.log(error);
    //     //     })

    // }
    const handleLocation=()=>{
        console.log("handleLocation")
    }
    return (

        <div className='mt-10 space-y-7'>


            {/* Contact & locations */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/* Contact */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* Contact top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><BsTelephoneOutbound /> Contact Info</h2>
                        {/* edit button */}
                        <Tooltip id="availability" />
                        <button
                            onClick={() => setAvailability(!availability)}
                            data-tooltip-id="availability" data-tooltip-content="Edit Availability!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <FaPencilAlt size='14' />
                        </button>
                    </div>
                    <div className={`py-4 ${availability ? 'block' : 'hidden'}`}>
                        <p className='text-dark font-medium mb-3'>Email</p>
                        <p className='text-lightGray text-lg -mt-1'>{email}</p>
                    </div>
                    <div className={`py-4 ${availability ? 'block' : 'hidden'}`}>
                        <p className='text-dark font-medium mb-3'>Phone</p>
                        <p className='text-lightGray text-lg -mt-1'>{phone}</p>
                    </div>

                    {/* edit field */}
                    <form
                    //  onSubmit={handleSubmit(handleAvailability)} 
                    >
                        <div className={`flex flex-col gap-2 p-3 ${availability ? 'hidden' : 'block'}`}>
                            <p className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'>Email cannot be changed</p>

                            <label htmlFor="phone" className='text-lightGray text-base'>
                                Phone
                                <input
                                    id='phone'
                                    type="number"
                                    {...register("phone", { required: true, min: 0 })}
                                    defaultValue={phone}
                                    className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                                />
                            </label>

                            <div className='flex items-end justify-end gap-3'>
                                <div
                                    onClick={() => setAvailability(true)}
                                    className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                >
                                    Cancel
                                </div>
                                <button
                                    type='submit'
                                    className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

                {/* locations */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* Locations top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><MdLocationPin /> Locations</h2>
                        {/* edit button */}
                        <Tooltip id="editLocations" />
                        <button
                            onClick={() => setEditLocation(!editLocation)}
                            data-tooltip-id="editLocations" data-tooltip-content="Edit editLocation!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <FaPencilAlt size='14' />
                        </button>
                    </div>

                    <div className={`py-4 ${editLocation ? 'block' : 'hidden'} space-y-1`}>
                        <p className='text-black'>{address}</p>
                        <p className='text-lightGray'>{location}</p>
                    </div>

                    {/* edit field */}
                    <form onSubmit={handleSubmit(handleLocation)} >
                        <div className={`flex flex-col gap-2 p-3 ${editLocation ? 'hidden' : 'block'}`}>
                            <label htmlFor="hourlyRate" className='text-lightGray text-base'>
                                Address
                                <input
                                    id='address'
                                    {...register("address", { required: true })}
                                    defaultValue={address}
                                    className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                                />
                            </label>

                            <label htmlFor="editLocation" className='text-lightGray text-base'>
                                Region & Country
                                <input
                                    id='editLocation'
                                    {...register("location", { required: true, min: 0 })}
                                    defaultValue={location}
                                    className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                                />
                            </label>


                            <div className='flex items-end justify-end gap-3'>
                                <div
                                    onClick={() => setEditLocation(true)}
                                    className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                >
                                    Cancel
                                </div>
                                <button
                                type="submit"
                                    className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default RecruitersProfile;