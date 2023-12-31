import { useState } from "react";
import { useForm } from "react-hook-form";
import DescriptionTextarea from "../../Components/DashComponents/DescriptionTextarea";
import RecruiterModal from "../../Components/DashComponents/RecruiterModal";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { Tooltip } from "react-tooltip";

// react icons
import { SlLocationPin } from "react-icons/sl";
import { IoIosFlash } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { BsTelephoneOutbound, BsCamera } from "react-icons/bs";
import { BiSolidUserDetail } from "react-icons/bi";

const RecruitersProfile = ({ recruitersData, refetchRecruiters }) => {
    const [axiosSecure] = useAxiosSecure();
    const { _id, name, image, email, banner, phone, location, address, about, specialties, status, } = recruitersData;

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const [contact, setContact] = useState(true);
    const [editAbout, setEditAbout] = useState(true);
    const [editLocation, setEditLocation] = useState(true);
    const [editSpecialties, setEditSpecialties] = useState(true);
    const [userAbout, setUserAbout] = useState(about);
    const [specialtiesOf, setSpecialtiesOf] = useState(specialties);

    const formattedAbout = about.map(pa => pa === "" ? "\u00A0" : pa);
    const formattedSpecialties = specialties.map(pa => pa === "" ? "\u00A0" : pa);

    // Update about 
    const handleModifyAbout = () => {
        axiosSecure.patch(`/recruiters/about/${_id}`, userAbout)
            .then(res => {
                if (res.status === 200) {
                    setEditAbout(!editAbout)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    // Update specialties 
    const handleModifySpecialties = (data) => {
        axiosSecure.patch(`/recruiters/specialties/${_id}`, specialtiesOf)
            .then(res => {
                if (res.status === 200) {
                    setEditSpecialties(!editSpecialties)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    // Update contactInfo 
    const handleContact = (data) => {
        axiosSecure.patch(`/recruiters/contact/${_id}`, data)
            .then(res => {
                if (res.status === 200) {
                    setEditAbout(!editAbout)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })

    };
    // Update Location 
    const handleLocation = (data) => {
        const updateData = {
            address: data.address,
            location: data.location,
        }
        axiosSecure.patch(`/recruiters/location/${_id}`, updateData)
            .then(res => {
                if (res.status === 200) {
                    setEditLocation(!editLocation)
                    refetchRecruiters()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    // Image hosting
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    // Update Recruiter ProfilePhoto 
    const handlePictureUpload = event => {
        const picture = event.target.files[0]
        const formData = new FormData()
        formData.append('image', picture)

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const image = imageResponse.data.display_url
                    const profile = {
                        email: email,
                        image: image
                    }

                    console.log(profile)
                    axiosSecure.patch(`/recruiters/profilePhoto/${_id}`, profile)
                        .then(res => {
                            if (res.status === 200) {
                                refetchRecruiters()
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
    }
    // Update Recruiter banner 
    const handleBannerUpload = event => {
        const picture = event.target.files[0]
        const formData = new FormData()
        formData.append('image', picture)

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const banner = imageResponse.data.display_url
                    const profile = {
                        banner: banner
                    }

                    axiosSecure.patch(`/recruiters/banner/${_id}`, profile)
                        .then(res => {
                            if (res.status === 200) {
                                refetchRecruiters()
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
    }
    return (
        <div className='mt-10 space-y-7'>
            {/* profile top */}
            <div className='relative bg-white shadow-xl shadow-gray/40 p-6 rounded-md flex flex-col lg:flex-row items-start lg:items-end justify-between'>
                <div>
                    <div className="w-[700px] h-48 flex items-end relative">
                        <img
                            src={banner}
                            className="w-full  object-center rounded-md h-full "
                            alt={name}
                        />
                        <label className='absolute flex items-center gap-2 px-2  bottom-0 right-0 mb-1 mr-1 p-1 rounded-md bg-gray/60 cursor-pointer text-white border border-green'>
                            <input
                                name='banner'
                                type='file'
                                style={{ display: 'none' }}
                                onChange={handleBannerUpload}
                            />
                            <BsCamera className="text-3xl " />
                            <p className="text-lg">Upload cover Photo</p>

                        </label>

                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-8 mb-6 lg:mb-0 w-full lg:w-auto'>

                        {/* image & name */}
                        <div className="relative">
                            <div className="-mt-16 ml-5 md:ml-10 w-40 h-44 rounded-md p-2 border border-purple overflow-hidden duration-300 shadow-4xl shadow-gray/40">
                                <img
                                    src={image}
                                    className="object-cover object-center w-full h-full shadow-3xl shadow-white rounded-md"
                                    alt={name}
                                />

                            </div>
                            <label className='absolute bottom-0 right-0 -mb-2 -mr-3 p-1 cursor-pointer text-green  rounded-full border border-green bg-white'>
                                <input
                                    name='picture'
                                    type='file'
                                    style={{ display: 'none' }}
                                    onChange={handlePictureUpload}
                                />
                                <BsCamera className="text-3xl" />

                            </label>
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
                        formattedAbout.length > 0 ? formattedAbout.map((ab, index) => <p key={index} className='text-lightGray text-lg leading-relaxed capitalize'>
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
                        formattedSpecialties.length > 0 ? formattedSpecialties.map((ab, index) => <p key={index} className='text-lightGray text-lg leading-relaxed capitalize'>
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