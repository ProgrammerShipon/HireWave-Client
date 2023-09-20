import { SlLocationPin } from "react-icons/sl";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
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
import { BsTelephoneOutbound } from "react-icons/bs";
import RecruiterModal from "../../Components/DashComponents/RecruiterModal";

const RecruitersProfile = ({ recruitersData, refetchRecruiters }) => {
    const [axiosSecure] = useAxiosSecure()
    console.log(recruitersData)
    const { _id, name, image, email, banner, phone,  location, address, about, specialties, status,} = recruitersData;

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const [contact, setContact] = useState(true);
    const [editAbout, setEditAbout] = useState(true);
    const [editLocation, setEditLocation] = useState(true);
    const [editSpecialties, setEditSpecialties] = useState();

    const [userAbout, setUserAbout] = useState(about);
    const [specialtiesOf, setSpecialtiesOf] = useState(specialties);


    const handleModifyAbout = (data) => {
        console.log("handleModifyAbout", userAbout)
        axiosSecure.patch(`/recruiters/about/${_id}`, userAbout)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setEditAbout(!editAbout)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleModifySpecialties = (data) => {
        console.log("handleModifyAbout", specialtiesOf)
        axiosSecure.patch(`/recruiters/specialties/${_id}`, specialtiesOf)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setEditSpecialties(!editSpecialties)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleContact = (data) => {
        console.log(data)

        axiosSecure.patch(`/recruiters/contact/${_id}`, data)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setEditAbout(!editAbout)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })

    };

    const handleLocation = (data) => {

        const updateData = {
            address: data.address,
            location: data.location,
        }
        console.log(updateData)
        axiosSecure.patch(`/recruiters/location/${_id}`, updateData)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setEditLocation(!editLocation)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (


        <div className='mt-10 space-y-7'>
            {/* profile top */}
            <div className='relative bg-white shadow-xl shadow-gray/40 p-6 rounded-md flex flex-col lg:flex-row items-start lg:items-end justify-between'>
                <div>
                    <div className="w-full h-40 ">
                        <img
                            src={banner}
                            className="object-cover object-center w-full h-full"
                            alt={name}
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-8 mb-6 lg:mb-0 w-full lg:w-auto'>

                        {/* image & rating */}
                        <div className="-mt-16 ml-5 md:ml-10 w-40 h-40 rounded-md p-2 border border-purple overflow-hidden duration-300 shadow-4xl shadow-gray/40">
                            <img
                                src={image}
                                className="object-cover object-center w-full h-full shadow-3xl shadow-white rounded-md"
                                alt={name}
                            />
                        </div>

                        {/* content */}
                        <div className='flex flex-col items-center lg:items-start justify-center'>
                            <h1 className='text-2xl md:text-3xl text-dark font-medium drop-shadow-xl'>{name}</h1>
                            <p className='text-gray flex items-center gap-1'>
                                <SlLocationPin className='text-lightGray' /> {location}
                            </p>
                            {
                                status ? <p className='bg-purple/10 text-purple font-medium w-fit px-4 rounded-full flex items-center gap-1 mt-2'><IoIosFlash />Available Now</p> : <p className='bg-red-400/10 text-red-500 font-medium w-fit px-4 rounded-full flex items-center gap-1 mt-2'><IoIosFlash />Unavailable</p>
                            }
                        </div>
                    </div>
                </div>

                {/* public view button */}
                <div className='hidden md:block ml-auto'>
                    <Link to={`/recruiters_details/${_id}`}><Button>See Public View</Button></Link>
                </div>

                <div>
                <RecruiterModal recruitersData={recruitersData} refetchRecruiters={refetchRecruiters} />
                </div>
            </div>


            {/* about */}

            <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                {/* about top */}
                <div className='flex items-center justify-between border-b border-green/40 py-2'>
                    <h2 className='flex items-center gap-1 text-xl text-green'><BiSolidUserDetail /> About</h2>
                    {/* edit button */}
                    <Tooltip id="about" />
                    <button
                        onClick={() => setEditAbout(!editAbout)}
                        data-tooltip-id="about" data-tooltip-content="Edit About!"
                        className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                        <FaPencilAlt size='14' />
                    </button>
                </div>

                <div className={`py-4 ${editAbout ? 'block' : 'hidden'}`}>
                    {
                        userAbout.length > 0 ? userAbout.map((ab, index) => <p key={index} className='text-lightGray text-lg leading-relaxed capitalize'>
                            {ab}
                        </p>) : <p className='text-lg text-lightGray'>N/A</p>
                    }

                </div>

                <div className={`flex flex-col gap-2 p-3 ${editAbout ? 'hidden' : 'block'}`}>
                    <form onSubmit={handleSubmit(handleModifyAbout)}>
                        <label htmlFor="newAbout" className='text-lightGray text-base'>
                            {/* Edit About */}
                            <DescriptionTextarea description={userAbout} setDescription={setUserAbout} />
                        </label>

                        <div className='flex items-center justify-end gap-3'>
                            <div
                                onClick={() => setEditAbout(!editAbout)}
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
                    </form>

                </div>
            </div>
            {/* Specialties */}

            <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                {/* Specialties top */}
                <div className='flex items-center justify-between border-b border-green/40 py-2'>
                    <h2 className='flex items-center gap-1 text-xl text-green'><BiSolidUserDetail />Specialties</h2>
                    {/* edit button */}
                    <Tooltip id="Specialties" />
                    <button
                        onClick={() => setEditSpecialties(!editSpecialties)}
                        data-tooltip-id="about" data-tooltip-content="Edit About!"
                        className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                        <FaPencilAlt size='14' />
                    </button>
                </div>

                <div className={`py-4 ${editSpecialties ? 'block' : 'hidden'}`}>
                    {
                        specialtiesOf.length > 0 ? specialtiesOf.map((ab, index) => <p key={index} className='text-lightGray text-lg leading-relaxed capitalize'>
                            {ab}
                        </p>) : <p className='text-lg text-lightGray'>N/A</p>
                    }

                </div>

                <div className={`flex flex-col gap-2 p-3 ${editSpecialties ? 'hidden' : 'block'}`}>
                    <form onSubmit={handleSubmit(handleModifySpecialties)}>
                        <label htmlFor="newAbout" className='text-lightGray text-base'>
                            {/* Edit Specialties */}
                            <DescriptionTextarea description={specialtiesOf} setDescription={setSpecialtiesOf} />
                        </label>

                        <div className='flex items-center justify-end gap-3'>
                            <div
                                onClick={() => setEditSpecialties(!editSpecialties)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Cancel
                            </div>
                            <button
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Save
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            {/* Contact & locations */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/* Contact */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* Contact top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><BsTelephoneOutbound /> Contact Info</h2>
                        {/* edit button */}
                        <Tooltip id="contact" />
                        <button
                            onClick={() => setContact(!contact)}
                            data-tooltip-id="contact" data-tooltip-content="Edit contact!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <FaPencilAlt size='14' />
                        </button>
                    </div>
                    <div className={`py-4 ${contact ? 'block' : 'hidden'}`}>
                        <p className='text-dark font-medium mb-3'>Email</p>
                        <p className='text-lightGray text-lg -mt-1'>{email}</p>
                    </div>
                    <div className={`py-4 ${contact ? 'block' : 'hidden'}`}>
                        <p className='text-dark font-medium mb-3'>Phone</p>
                        <p className='text-lightGray text-lg -mt-1'>{phone}</p>
                    </div>

                    {/* edit field */}
                    <form
                        onSubmit={handleSubmit(handleContact)}
                    >
                        <div className={`flex flex-col gap-2 p-3 ${contact ? 'hidden' : 'block'}`}>
                            <label htmlFor="phone" className='text-lightGray text-base'>
                                Email
                                <input
                                    id='phone'
                                    type="email"
                                    {...register("email", { required: true, min: 0 })}
                                    defaultValue={email}
                                    readOnly
                                    className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green cursor-not-allowed'
                                />
                            </label>

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
                                    onClick={() => setContact(true)}
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
        </div>


    );
};

export default RecruitersProfile;