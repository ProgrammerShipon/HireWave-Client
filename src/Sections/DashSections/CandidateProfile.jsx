import { useState } from 'react';
import Button from '../../Components/Button';
import Modal from '../../Components/DashComponents/Modal';
import useLanguagesData from '../../Hooks/useLanguagesData';
import DescriptionTextarea from '../../Components/DashComponents/DescriptionTextarea';

import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { useForm } from 'react-hook-form';

// react icons
import { SlLocationPin } from 'react-icons/sl';
import { MdLocationPin } from 'react-icons/md';
import { IoIosFlash, IoMdAdd } from 'react-icons/io';
import { IoShareSocialOutline } from 'react-icons/io5';
import { BiSolidUserDetail, BiCalendar } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
import { HiLanguage } from 'react-icons/hi2';
import { LiaIndustrySolid } from 'react-icons/lia';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaPencilAlt, FaTrashAlt, FaGraduationCap } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const CandidateProfile = ({ candidatesData }) => {
    const [languagesData] = useLanguagesData();
    const [axiosSecure]=useAxiosSecure()
    const { _id, name, title, image, location, status, hourlyRate, jobType, address, languages, about, education, experience, skills, openToWork, socialLink } = candidatesData;

    const formattedAbout = about.map(pa => pa === "" ? "\u00A0" : pa);

    const [hourlyRates, setHourlyRates] = useState(hourlyRate)
    const [jobTypes, setJobTypes] = useState(jobType)
    const [userAbout, setUserAbout] = useState(formattedAbout)
    const [userLocation, setUserLocation] = useState([location])
    const [userAddress, setUserAddress] = useState(address)



    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [availability, setAvailability] = useState(true);
    const [editAbout, setEditAbout] = useState(true);
    const [editLocation, setEditLocation] = useState(true);
    const [isSkills, setIsSkills] = useState(true);
    const [openLanguage, setOpenLanguage] = useState(true);
    const [openEducation, setOpenEducation] = useState(true);
    const [openExperience, setOpenExperience] = useState(true);

    const newSkills = [...skills, watch('newSkill')]
    const newLanguages = [...languages, { name: watch('name'), level: watch('level') }];
    const newEducations = [...education, { subject: watch('subject'), currentStudying: watch('currentStudying'), institute: watch('institute'), startDate: watch('startDate'), endDate: watch('endDate') }];
    const newExperiences = [...experience, { logo: watch('logo'), currentWorking: watch('currentWorking'), companyName: watch('companyName'), position: watch('position'), location: watch('workLocation'), startDate: watch('workStartDate'), endDate: watch('workEndDate') }];

    const onSubmit = (data) => {
        const updateData = {
            jobType: jobTypes,
            hourlyRate: hourlyRates,
            about: userAbout, location,
            address: userAddress,
            location: userLocation,
            languages: newLanguages,
            education: newEducations,
            experience: newExperiences
        }
        console.log(updateData)
        axiosSecure.patch(`/candidates/${_id}`, updateData)
            .then(res => {
                console.log(res)
            })
            .catch(error=>{
                console.log(error.message);
            })

    };


    const years = [
        1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
        1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
        1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
        1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023
    ]
    return (
        <form
            onSubmit={handleSubmit(onSubmit)} className='mt-10 space-y-7'>

            {/* profile top */}
            <div className='relative bg-white shadow-xl shadow-gray/40 p-6 rounded-md flex flex-col lg:flex-row items-start lg:items-end justify-between'>
                <div className='flex flex-col lg:flex-row items-center gap-8 mb-6 lg:mb-0 w-full lg:w-auto'>
                    {/* image */}
                    <div className='w-48 h-48 rounded-full overflow-hidden shadow-xl shadow-gray/40'>
                        <img
                            className='w-full h-full object-cover object-center'
                            src={image} alt={name} />
                    </div>

                    {/* content */}
                    <div className='flex flex-col items-center lg:items-start justify-center'>
                        <h1 className='text-2xl md:text-3xl text-dark font-medium drop-shadow-xl'>{name}</h1>
                        <h3 className='text-base md:text-xl text-lightGray mt-2 line-clamp-1'>{title}</h3>
                        <p className='text-gray flex items-center gap-1'>
                            <SlLocationPin className='text-lightGray' /> {location[0]}, {location[1]}
                        </p>
                        {
                            status ? <p className='bg-purple/10 text-purple font-medium w-fit px-4 rounded-full flex items-center gap-1 mt-2'><IoIosFlash />Available Now</p> : <p className='bg-red-400/10 text-red-500 font-medium w-fit px-4 rounded-full flex items-center gap-1 mt-2'><IoIosFlash />Unavailable</p>
                        }
                    </div>
                </div>

                {/* public view button */}
                <div className='hidden md:block ml-auto'>
                    <Link to={`/candidate_details/${_id}`}><Button>See Public View</Button></Link>
                </div>

                <Modal candidatesData={candidatesData} />
            </div>

            {/* availability & locations */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* availability */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* Availability top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><IoIosFlash /> Availability</h2>
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
                        <p className='text-dark font-medium mb-3'>Hourly Rate: ${hourlyRates}</p>
                        {
                            openToWork ? <p className='text-gray'>Open to contract to hire</p> : <p className='text-gray'>Contract to work</p>
                        }
                        <p className='text-lightGray text-lg -mt-1'>{jobTypes}</p>
                    </div>

                    {/* edit field */}
                    <div className={`flex flex-col gap-2 p-3 ${availability ? 'hidden' : 'block'}`}>
                        <label htmlFor="hourlyRate" className='text-lightGray text-base'>
                            Hourly Rate: $
                            <input
                                id='hourlyRate'
                                type="number"
                                {...register("hourlyRate", { required: true, min: 0 })}
                                defaultValue={hourlyRates}
                                onChange={(e) => setHourlyRates(e.target.value)}
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            />
                        </label>

                        <div className='flex gap-2'>
                            <input
                                id='openToWork'
                                type="checkbox"
                                {...register("openToWork")}
                            />
                            <label htmlFor="openToWork" className='text-black text-base'>
                                Open to contract to hire
                            </label>
                        </div>

                        <select
                            {...register("jobType")}
                            onChange={(e) => setJobTypes(e.target.value)}
                            className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                        >
                            <option value="As Needed - Open to work">As Needed - Open to work</option>
                            <option value="Part Time - Only">Part Time - Only</option>
                            <option value="Full Time - Only">Full Time - Only</option>
                            <option value="Remote - Only">Remote</option>
                        </select>

                        <div className='flex items-end justify-end gap-3'>
                            <button
                                onClick={() => setAvailability(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setAvailability(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Save
                            </button>
                        </div>
                    </div>
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
                        <p className='text-black'>{userAddress}</p>
                        <p className='text-lightGray'>{userLocation[0]}, {userLocation[1]}</p>
                    </div>

                    {/* edit field */}
                    <div className={`flex flex-col gap-2 p-3 ${editLocation ? 'hidden' : 'block'}`}>
                        <label htmlFor="hourlyRate" className='text-lightGray text-base'>
                            Address
                            <input
                                id='address'
                                {...register("address", { required: true })}
                                defaultValue={address}
                                onChange={(e) => setUserAddress(e.target.value)}
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            />
                        </label>

                        <label htmlFor="editLocation" className='text-lightGray text-base'>
                            Region & Country
                            <input
                                id='editLocation'
                                {...register("location", { required: true, min: 0 })}
                                defaultValue={location}
                                onChange={(e) => setUserLocation(e.target.value)}
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            />
                        </label>


                        <div className='flex items-end justify-end gap-3'>
                            <button
                                onClick={() => setEditLocation(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setEditLocation(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Save
                            </button>
                        </div>
                    </div>
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
                        userAbout.length > 0 ? userAbout.map((ab, index) => <p key={index} className='text-lightGray text-lg leading-relaxed'>
                            {ab}
                        </p>) : <p className='text-lg text-lightGray'>N/A</p>
                    }

                </div>

                <div className={`flex flex-col gap-2 p-3 ${editAbout ? 'hidden' : 'block'}`}>
                    <label htmlFor="newSkill" className='text-lightGray text-base'>
                        Edit About
                        <DescriptionTextarea userAbout={userAbout} setUserAbout={setUserAbout} />
                    </label>

                    <div className='flex items-center justify-end gap-3'>
                        <button
                            onClick={() => setEditAbout(true)}
                            className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setEditAbout(true)}
                            className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>

            {/* skills & languages */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* skills */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* skills top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><GiSkills /> Skills</h2>

                        {/* edit button */}
                        <Tooltip id="add_skill" />
                        <button
                            onClick={() => setIsSkills(!isSkills)}
                            data-tooltip-id="add_skill" data-tooltip-content="Add Skill!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* skills body */}
                    <div className={`py-4 flex items-center flex-wrap gap-2 ${isSkills ? 'block' : 'hidden'}`}>

                        {
                            newSkills.map((skl, index) => <div key={index} className='relative text-purple bg-purple/10 px-3 rounded-md capitalize group cursor-pointer'>
                                <span>{skl}</span>

                                <div className='absolute top-0 -right-14 flex gap-2 bg-white text-gray h-full px-2 rounded-md group-hover:-right-12 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                    <button>
                                        <FaPencilAlt size='14' />
                                    </button>
                                    <button>
                                        <FaTrashAlt size='14' />
                                    </button>
                                </div>
                            </div>)
                        }
                    </div>

                    {/* skills edit field */}
                    <div className={`flex flex-col gap-2 p-3 ${isSkills ? 'hidden' : 'block'}`}>
                        <label htmlFor="newSkill" className='text-lightGray text-base'>
                            New Skill
                            <input
                                id='newSkill'
                                {...register("newSkill")}
                                placeholder='Add new skill'
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            />
                        </label>

                        <div className='flex items-center justify-end gap-3'>
                            <button
                                onClick={() => setIsSkills(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setIsSkills(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>

                {/* languages */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* languages top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><HiLanguage /> Languages</h2>
                        {/* edit button */}
                        <Tooltip id="add_language" />
                        <button
                            onClick={() => setOpenLanguage(!openLanguage)}
                            data-tooltip-id="add_language" data-tooltip-content="Add Language!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* languages body */}
                    <div className={`py-4 space-y-1 ${openLanguage ? 'block' : 'hidden'}`}>
                        {
                            newLanguages.length > 0 ? newLanguages.map((lan, index) => <div
                                key={index}
                                className='relative capitalize group cursor-pointer w-fit'>
                                <p className='text-black flex items-center gap-1'>{lan.name} <span className='inline-block w-2 border-t border-gray'></span>
                                    <span className='text-gray'>{lan.level}</span>
                                </p>

                                <div className='absolute top-0 -right-16 flex gap-2 bg-white text-gray h-full px-2 rounded-md group-hover:-right-14 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                    <button>
                                        <FaPencilAlt size='14' />
                                    </button>
                                    <button>
                                        <FaTrashAlt size='14' />
                                    </button>
                                </div>
                            </div>) : <p className='text-lg text-lightGray'>N/A</p>
                        }
                    </div>

                    {/* add languages  */}
                    <div className={`flex flex-col gap-2 p-3 ${openLanguage ? 'hidden' : 'block'}`}>
                        <div className='flex flex-col gap-2'>
                            <select
                                id='language'
                                {...register("name")}
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            >
                                <option value="">Select Language</option>
                                {
                                    languagesData.map((lan, index) => (
                                        <option
                                            key={index}
                                            value={lan.name}>
                                            {lan.name}
                                        </option>
                                    ))
                                }
                                <option value="Spanish">Spanish</option>
                            </select>

                            <select
                                id='language_level'
                                {...register("level")}
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            >
                                <option value="">Level</option>
                                <option value="Basic">Basic</option>
                                <option value="Comfortable">Comfortable</option>
                                <option value="Fluent">Fluent</option>
                                <option value="Native">Native</option>
                            </select>
                        </div>

                        <div className='flex items-center justify-end gap-3'>
                            <button
                                onClick={() => setOpenLanguage(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setOpenLanguage(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* educations & experiences */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* educations */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* educations top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><FaGraduationCap /> Educations</h2>

                        {/* edit button */}
                        <Tooltip id="add_education" />
                        <button
                            onClick={() => setOpenEducation(!openEducation)}
                            data-tooltip-id="add_education" data-tooltip-content="Add Education!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* educations body */}
                    <div className={`py-4 space-y-4 ${openEducation ? 'block' : 'hidden'}`}>
                        {
                            newEducations.length > 0 ? newEducations.map(edu =>
                                <div className='relative group cursor-pointer w-fit'>
                                    <h3 className='text-dark font-medium text-xl'>{edu.subject}</h3>
                                    <p className='text-lightGray'>{edu.institute}</p>
                                    <p className='flex items-center gap-1 text-gray mt-1 font-light'>
                                        <BiCalendar /> {edu.startDate} to {edu.endDate}
                                    </p>

                                    <div className='absolute top-0 -right-14 flex gap-2 text-gray h-full px-2 rounded-md group-hover:-right-12 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                        <button>
                                            <FaPencilAlt size='14' />
                                        </button>
                                        <button>
                                            <FaTrashAlt size='14' />
                                        </button>
                                    </div>
                                </div>
                            )
                                : <p className='text-lg text-lightGray'>N/A</p>
                        }
                    </div>

                    {/* education edit field */}
                    <div className={`flex flex-col gap-2 p-3 ${openEducation ? 'hidden' : 'block'}`}>
                        <input
                            {...register("subject")}
                            placeholder='Subject'
                            className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                        />
                        <input
                            {...register("institute")}
                            placeholder='Institute & Country'
                            className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                        />
                        <label htmlFor="currently_studying"
                            className='flex items-center gap-2 text-base'
                        >
                            <input
                                id='currently_studying'
                                type='checkbox'
                                {...register("currentStudying")}
                            />
                            Currently Studying
                        </label>

                        <div className='flex items-center gap-2'>
                            <select
                                {...register("startDate")}
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            >
                                <option value="">Start year</option>
                                {
                                    years.map((year, index) => <option
                                        key={index} value={year}>{year}</option>)
                                }
                            </select>
                            {
                                !watch('currentStudying') && <select
                                    {...register("endDate")}
                                    className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                                >
                                    <option value="">Completed year</option>
                                    {
                                        years.map((year, index) => <option
                                            key={index} value={year}>{year}</option>)
                                    }
                                </select>
                            }
                        </div>

                        <div className='flex items-center justify-end gap-3'>
                            <button
                                onClick={() => setOpenEducation(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setOpenEducation(!openEducation)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>

                {/* experiences */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* experiences top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><LiaIndustrySolid /> Experiences</h2>
                        {/* edit button */}
                        <Tooltip id="add_experience" />
                        <button
                            onClick={() => setOpenExperience(!openExperience)}
                            data-tooltip-id="add_experience" data-tooltip-content="Add Experience!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* experiences body */}
                    <div className={`py-4 space-y-4 ${openExperience ? 'block' : 'hidden'}`}>
                        {
                            newExperiences.length > 0 ? newExperiences.map((exp, index) => (
                                <div key={index} className='relative group cursor-pointer w-fit flex gap-2'>
                                    <div className='h-14 w-14 overflow-hidden'>
                                        <img
                                            className='w-full object-cover object-center'
                                            src={exp.logo} alt="" />
                                    </div>
                                    <div>
                                        <h3 className='text-dark font-medium text-xl'>{exp.position} <span className='text-sm text-lightGray'>- {exp.jobType}</span></h3>
                                        <p className='text-lightGray'>{exp.companyName},{exp.location}</p>
                                        <p className='flex items-center gap-1 text-gray -mt-1 font-light'>
                                            <BiCalendar />{exp.startDate} - {exp.currentWorking ? 'Present' : exp.startDate}
                                        </p>
                                    </div>

                                    <div className='absolute top-0 -right-14 flex gap-2 text-gray h-full px-2 rounded-md group-hover:-right-12 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                        <button>
                                            <FaPencilAlt size='14' />
                                        </button>
                                        <button>
                                            <FaTrashAlt size='14' />
                                        </button>
                                    </div>
                                </div>
                            )) : <p className='text-lg text-lightGray'>N/A</p>
                        }
                    </div>

                    {/* experience add field */}
                    <div className={`flex flex-col gap-2 p-3 ${openExperience ? 'hidden' : 'block'}`}>
                        <input
                            {...register("logo")}
                            placeholder='Company logo URL'
                            className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                        />
                        <input
                            {...register("position")}
                            placeholder='Your position'
                            className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                        />
                        <div className='flex gap-2'>
                            <input
                                {...register("companyName")}
                                placeholder='Company name'
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            />
                            <input
                                {...register("workLocation")}
                                placeholder='Company location'
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            />
                        </div>
                        <label htmlFor="currentWorking"
                            className='flex items-center gap-2 text-base'
                        >
                            <input
                                id='currentWorking'
                                type='checkbox'
                                {...register("currentWorking")}
                            />
                            Current Working
                        </label>

                        <div className='flex items-center gap-2'>
                            <select
                                {...register("workStartDate")}
                                className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                            >
                                <option value="">Start year</option>
                                {
                                    years.map((year, index) => <option
                                        key={index} value={year}>{year}</option>)
                                }
                            </select>
                            {
                                !watch('currentWorking') && <select
                                    {...register("workEndDate")}
                                    className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
                                >
                                    <option value="">End year</option>
                                    {
                                        years.map((year, index) => <option
                                            key={index} value={year}>{year}</option>)
                                    }
                                </select>
                            }
                        </div>

                        <div className='flex items-center justify-end gap-3'>
                            <button
                                onClick={() => setOpenExperience(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setOpenExperience(true)}
                                className="bg-transparent text-dark hover:text-white px-5 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* social links */}
            <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                {/* social links top */}
                <div className='flex items-center justify-between border-b border-green/40 py-2'>
                    <h2 className='flex items-center gap-1 text-xl text-green'><IoShareSocialOutline /> Social Links</h2>

                    {/* edit button */}
                    <Tooltip id="add_education" />
                    <button
                        data-tooltip-id="add_education" data-tooltip-content="Add Education!"
                        className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                        <IoMdAdd size='20' />
                    </button>
                </div>
                {
                    socialLink.length > 0 ?
                        <div className="flex items-center gap-2 py-4">
                            <Link
                                to="/"
                                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                            >
                                <FaFacebookF size="20px" />
                            </Link>

                            <Link
                                to="/"
                                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                            >
                                <FaTwitter size="20px" />
                            </Link>

                            <Link
                                to="/"
                                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                            >
                                <FaLinkedin size="20px" />
                            </Link>

                            <Link
                                to="/"
                                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
                            >
                                <FaGithub size="20px" />
                            </Link>
                        </div> : <p className='text-lg text-lightGray'>N/A</p>
                }
            </div>
            <Button>
                <button className='text-center w-full' type='submit'>
                    Update
                </button>
            </Button>


        </form >
    );
};

export default CandidateProfile;