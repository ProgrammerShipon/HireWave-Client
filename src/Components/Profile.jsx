import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../Hooks/useAuth';
import Message from './Message';
import Notification from './Notification';

// react icons
import { MdOutlineContactMail } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiLogOutCircle, BiBookReader } from "react-icons/bi";
import { BsCalendar2Event } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const Profile = () => {
    const { user, currentUser, logOut } = useAuth();
    const navigate= useNavigate()
    return (
        <div className='flex items-center gap-3'>
            <div className='flex items-center'>
                <Notification />
                <Message />
            </div>

            <div className="relative z-[999] group">
                <div
                    className="relative flex items-center cursor-pointer"
                >
                    {
                        user?.photoURL ? <img
                            className="h-12 w-12 rounded-full object-cover shadow-lg group-hover:shadow-green/20 duration-300"
                            src={user?.photoURL}
                            alt={user?.displayName}
                        /> :
                            <p
                                className="h-14 w-14 bg-blue text-dark text-xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300 drop-shadow-xl uppercase"
                            >
                                {user?.displayName?.slice(0, 2)}
                            </p>
                    }
                    <div className='absolute top-0 -right-0'>
                        <span className="relative flex h-3 w-3 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                        </span>
                    </div>
                </div>

                {/* Dropdown */}
                <div
                    className="absolute right-0 top-28 max-w-xs min-w-[200px] bg-white shadow-4xl rounded-lg border-b-4 border-purple shadow-gray/40 origin-top-right transition-all duration-300 ease-in-out group-hover:top-[60px] overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100">

                    <ul
                        className="flex flex-col text-dark"
                    >
                        <li>
                            <Link to='/dashboard/myProfile' className='text-purple flex items-center gap-4 hover:gap-5 hover:bg-purple/20 py-2 pl-4 hover:underline duration-300'><VscAccount /> My Profile</Link>
                        </li>
                        <li>
                            <Link to='/events' className='text-purple flex items-center gap-4 hover:gap-5 hover:bg-purple/20 py-2 pl-4 hover:underline duration-300'>
                                <BsCalendar2Event />
                                Events</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='text-purple flex items-center gap-4 hover:gap-5 hover:bg-purple/20 py-2 pl-4 hover:underline duration-300'>
                                <MdOutlineContactMail />
                                Contact</Link>
                        </li>
                        <li>
                            <Link to='/learning' className='text-purple flex items-center gap-4 hover:gap-5 hover:bg-purple/20 py-2 pl-4 hover:underline duration-300'>
                                <BiBookReader />
                                Learning</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/dashboardHome' className='text-purple flex items-center gap-4 hover:gap-5 hover:bg-purple/20 py-2 pl-4 hover:underline duration-300'>
                                <LuLayoutDashboard />
                                Dashboard
                            </Link>
                        </li>
                    </ul>

                    <button
                        className="w-full text-purple hover:text-white flex items-center justify-center gap-3 hover:gap-4 hover:bg-red-400/80 py-2 hover:underline duration-300"
                        onClick={() => {
                            logOut()
                            navigate("/login")
                        }}
                    >
                        <BiLogOutCircle />   LogOut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;