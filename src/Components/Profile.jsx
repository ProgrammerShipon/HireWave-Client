import { Link } from 'react-router-dom';

import useAuth from '../Hooks/useAuth';
import Message from './Message';
import Notification from './Notification';

const Profile = () => {
    const { user, logOut } = useAuth();
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
                    className="absolute right-0 top-28 max-w-xs min-w-[200px] bg-white shadow-4xl shadow-gray/40 origin-top-right transition-all duration-300 ease-in-out group-hover:top-[60px] p-4 invisible group-hover:visible opacity-0 group-hover:opacity-100">

                    <ul
                        className="flex flex-col gap-1 text-dark"
                    >
                        <li>
                            <Link to='/dashboard/myProfile' className='hover:text-green duration-300'>My Profile</Link>
                        </li>
                        <li>
                            <Link to='/events' className='hover:text-green duration-300'>Events</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='hover:text-green duration-300'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/learning' className='hover:text-green duration-300'>Learning</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/dashboardHome' className='hover:text-green duration-300'>Dashboard</Link>
                        </li>
                    </ul>

                    <button
                        className="w-full bg-red-400 text-white font-medium py-1 mt-2"
                        onClick={() => logOut()}
                    >
                        LogOut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;