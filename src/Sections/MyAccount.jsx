import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import { Tooltip } from 'react-tooltip';

// react icons
import { SlLocationPin } from 'react-icons/sl';
import { MdLocationPin } from 'react-icons/md';
import { IoIosFlash, IoMdAdd } from 'react-icons/io';
import { IoShareSocialOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiSolidUserDetail, BiCalendar } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
import { HiLanguage } from 'react-icons/hi2';
import { LiaIndustrySolid } from 'react-icons/lia';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaPencilAlt, FaTrashAlt, FaGraduationCap } from 'react-icons/fa';
import Modal from '../Components/Modal';

const MyAccount = () => {

    return (
        <div className='mt-10 space-y-7'>

            {/* profile top */}
            <div className='relative bg-white shadow-xl shadow-gray/40 p-6 rounded-md flex flex-col lg:flex-row items-start lg:items-end justify-between'>
                <div className='flex flex-col lg:flex-row items-center gap-8 mb-6 lg:mb-0 w-full lg:w-auto'>
                    {/* image */}
                    <div className='w-48 h-48 rounded-full overflow-hidden shadow-xl shadow-gray/40'>
                        <img
                            className='w-full h-full object-cover object-center'
                            src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/2ad1f54716df5d59667877d07d039551-1664788852632/c28dea6e-85a7-45b9-8b41-79d11b6c2cb2.jpg" alt="" />
                    </div>

                    {/* content */}
                    <div className='flex flex-col items-center lg:items-start justify-center'>
                        <h1 className='text-2xl md:text-3xl text-dark font-medium drop-shadow-xl'>MD Forid Hossain</h1>
                        <h3 className='text-base md:text-xl text-lightGray mt-2 line-clamp-1'>Front End Developer | React Developer</h3>
                        <p className='text-gray flex items-center gap-1'>
                            <SlLocationPin className='text-lightGray' /> Dhaka, Bangladesh
                        </p>
                        <p className='bg-purple/10 text-purple font-medium w-fit px-4 rounded-full flex items-center gap-1 mt-2'><IoIosFlash />Available Now</p>
                    </div>
                </div>

                {/* public view button */}
                <div className='hidden md:block ml-auto'>
                    <Button>See Public View</Button>
                </div>

                <Modal />
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
                            data-tooltip-id="availability" data-tooltip-content="Edit Availability!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <FaPencilAlt size='14' />
                        </button>
                    </div>

                    <div className='py-4'>
                        <p className='text-dark font-medium mb-3'>Hourly Rate: $10</p>
                        <p className='text-gray'>Open to contract to hire</p>
                        <p className='text-lightGray text-lg -mt-1'>As Needed - Open to work</p>
                    </div>
                </div>

                {/* locations */}
                <div className='border border-transparent hover:border-green px-4 rounded-md bg-white shadow-xl shadow-gray/40 duration-300'>
                    {/* locations top */}
                    <div className='flex items-center justify-between border-b border-green/40 py-2'>
                        <h2 className='flex items-center gap-1 text-xl text-green'><MdLocationPin /> Locations</h2>
                        {/* edit button */}
                        <Tooltip id="locations" />
                        <button
                            data-tooltip-id="locations" data-tooltip-content="Edit Location!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <FaPencilAlt size='14' />
                        </button>
                    </div>

                    <div className='py-4'>
                        <p className='text-black'>Uttara Model Town, 1230</p>
                        <p className='text-lightGray'>Dhaka, Bangladesh</p>
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
                        data-tooltip-id="about" data-tooltip-content="Edit About!"
                        className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                        <FaPencilAlt size='14' />
                    </button>
                </div>

                <div className='py-4'>
                    <p className='text-lightGray'>Hi! I'm MD Forid Hossain, a Full-time professional freelancer. I truly believe that your success is my reason to smile! I have 3 years of experience as a React JS developer, front-end web developer, and e-Commerce Product Lister for Virtual Assistant. So you are welcome! Let’s work together and make something special happen! So, feel free to ask me. I’m glad to answer any questions!</p>
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
                            data-tooltip-id="add_skill" data-tooltip-content="Add Skill!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* skills body */}
                    <div className='py-4 flex items-center flex-wrap gap-2'>
                        <div className='relative text-purple bg-purple/10 px-3 rounded-md capitalize group cursor-pointer'>
                            <span>React</span>

                            <div className='absolute top-0 -right-14 flex gap-2 bg-white text-gray h-full px-2 rounded-md group-hover:-right-12 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                <button>
                                    <FaPencilAlt size='14' />
                                </button>
                                <button>
                                    <FaTrashAlt size='14' />
                                </button>
                            </div>
                        </div>

                        <div className='relative text-purple bg-purple/10 px-3 rounded-md capitalize group cursor-pointer'>
                            <span>Javascript</span>

                            <div className='absolute top-0 -right-14 flex gap-2 bg-white text-gray h-full px-2 rounded-md group-hover:-right-12 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                <button>
                                    <FaPencilAlt size='14' />
                                </button>
                                <button>
                                    <FaTrashAlt size='14' />
                                </button>
                            </div>
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
                            data-tooltip-id="add_language" data-tooltip-content="Add Language!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* languages body */}
                    <div className='py-4 space-y-1'>
                        <div className='relative capitalize group cursor-pointer w-fit'>
                            <p className='text-black flex items-center gap-1'>English <span className='inline-block w-2 border-t border-gray'></span>
                                <span className='text-gray'>Comfortable</span>
                            </p>

                            <div className='absolute top-0 -right-16 flex gap-2 bg-white text-gray h-full px-2 rounded-md group-hover:-right-14 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                <button>
                                    <FaPencilAlt size='14' />
                                </button>
                                <button>
                                    <FaTrashAlt size='14' />
                                </button>
                            </div>
                        </div>
                        <div className='relative capitalize group cursor-pointer w-fit'>
                            <p className='text-black flex items-center gap-1'>Spanish <span className='inline-block w-2 border-t border-gray'></span>
                                <span className='text-gray'>Fluent</span>
                            </p>

                            <div className='absolute top-0 -right-16 flex gap-2 bg-white text-gray h-full px-2 rounded-md group-hover:-right-14 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300 z-20'>
                                <button>
                                    <FaPencilAlt size='14' />
                                </button>
                                <button>
                                    <FaTrashAlt size='14' />
                                </button>
                            </div>
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
                            data-tooltip-id="add_education" data-tooltip-content="Add Education!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* educations body */}
                    <div className='py-4 space-y-4'>
                        <div className='relative group cursor-pointer w-fit'>
                            <h3 className='text-dark font-medium text-xl'>Master's in Computer Science</h3>
                            <p className='text-lightGray'>Stanford University, Bangladesh</p>
                            <p className='flex items-center gap-1 text-gray -mt-1 font-light'>
                                <BiCalendar /> 2018 - Current
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
                        <div className='relative group cursor-pointer w-fit'>
                            <h3 className='text-dark font-medium text-xl'>Master's in Computer Science</h3>
                            <p className='text-lightGray'>Stanford University, Bangladesh</p>
                            <p className='flex items-center gap-1 text-gray -mt-1 font-light'>
                                <BiCalendar /> 2018 - 2023
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
                            data-tooltip-id="add_experience" data-tooltip-content="Add Experience!"
                            className='h-8 w-8 text-green border border-green rounded-full flex items-center justify-center'>
                            <IoMdAdd size='20' />
                        </button>
                    </div>

                    {/* experiences body */}
                    <div className='py-4 space-y-4'>
                        <div className='relative group cursor-pointer w-fit flex gap-2'>
                            <div className='h-14 w-14 overflow-hidden'>
                                <img
                                    className='w-full object-cover object-center'
                                    src="https://i.ibb.co/jkmcP33/121-systems-2011-logo-Black-Back-Large.jpg" alt="" />
                            </div>
                            <div>
                                <h3 className='text-dark font-medium text-xl'>Software Engineer <span className='text-sm text-lightGray'>- Part Time</span></h3>
                                <p className='text-lightGray'>TechSolutions, BD</p>
                                <p className='flex items-center gap-1 text-gray -mt-1 font-light'>
                                    <BiCalendar />2018 - Present
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
                        <div className='relative group cursor-pointer w-fit flex gap-2'>
                            <div className='h-14 w-14 overflow-hidden'>
                                <img
                                    className='w-full object-cover object-center'
                                    src="https://i.ibb.co/VSrKDdL/120px-Dvdvideosoft.png" alt="" />
                            </div>
                            <div>
                                <h3 className='text-dark font-medium text-xl'>Frontend Developer <span className='text-sm text-lightGray'>- Full Time</span></h3>
                                <p className='text-lightGray'>Yassir Limited, USA</p>
                                <p className='flex items-center gap-1 text-gray -mt-1 font-light'>
                                    <BiCalendar /> 2018 - 2022
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
                </div>
            </div>
        </div>
    );
};

export default MyAccount;