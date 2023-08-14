import { Link } from 'react-router-dom';

// react icons
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';

const Profile = () => {

    return (
        <div className='flex items-center gap-3'>
            <button className='w-10 h-10 flex items-center justify-center text-green bg-green/10 rounded-full'>
                <IoMdNotificationsOutline size='24' />
            </button>
            <button className='w-10 h-10 flex items-center justify-center text-green bg-green/10 rounded-full'>
                <MdOutlineMail size='24' />
            </button>

            <div className="relative z-[999] group">
                <div
                    className="relative flex items-center cursor-pointer"
                >
                    {
                        true ? <img
                            className="h-12 w-12 rounded-full object-cover shadow-lg group-hover:shadow-green/20 duration-300"
                            src='https://lh3.googleusercontent.com/a/AAcHTtdQpnr_vzncOEN2wR4mMMXMPrkkrHMvOpC7UW3HGRvhrw=s96-c'
                            alt="User avatar"
                        /> :
                            <p
                                className="h-14 w-14 bg-blue text-white text-3xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300"
                            >
                                {/* {userData?.name?.slice(0, 1)} */}
                                FH
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
                    className="absolute right-0 top-28 max-w-xs min-w-[200px] bg-white shadow-lg shadow-green/20 rounded-lg origin-top-right transition-all duration-300 ease-in-out group-hover:top-[60px] p-4 invisible group-hover:visible opacity-0 group-hover:opacity-100">

                    <ul
                        className="flex flex-col gap-1 text-dark"
                    >
                        <li>
                            <Link to='/my_profile' className='hover:text-green duration-300'>My Profile</Link>
                        </li>
                        <li>
                            <Link to='/events' className='hover:text-green duration-300'>Events</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='hover:text-green duration-300'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className='hover:text-green duration-300'>Dashboard</Link>
                        </li>
                    </ul>

                    <button
                        className="w-full bg-red-400 text-white font-medium py-1 mt-2"
                    // onClick={() => logOut()}
                    >
                        LogOut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;