//React Icons
import { FaSearch } from 'react-icons/fa';
import { BsBell, BsHeart } from 'react-icons/bs';

//Logo
import Logo from '../Assets/images/logo-01.png';
import useAuth from '../Hooks/useAuth';

const DashNav = () => {
    const { user } = useAuth();
    return (
        <header className='sticky w-full top-0 shadow-2xl shadow-purple/20 backdrop-blur-md py-2 bg-white/60 z-50'>

            <div className='flex gap-10 justify-between mx-10'>
                {/* Logo */}
                <img className="w-48" src={Logo} alt="hire wave logo" />


                {/* Search bar and profile */}
                <div className='flex items-center gap-5'>

                    {/* Search Bar */}
                    <div className='w-full md:w-52 lg:w-72 flex items-center bg-white rounded-md border overflow-hidden duration-300'>
                        <input
                            type="text"
                            placeholder="Keywords"
                            className="w-full py-2 pl-3 rounded-s-md bg-transparent focus:outline-none"
                        />
                        <button className="bg-dark text-white px-4 py-3 hover:text-green duration-300">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Notification */}
                    <button className='w-10 h-10 flex items-center justify-center text-green bg-green/10 rounded-full'>
                        <BsBell size='24' />
                    </button>


                    {/* Profile */}
                    <div className='flex items-center gap-3'>
                        {
                            user?.photoURL &&
                            <img className="h-12 w-12 rounded-full object-cover shadow-lg hover:shadow-green/20 duration-300"
                                src={user?.photoURL} alt="Profile" />
                        }
                        <div>
                            <p className='text-xl text-dark'>{user?.displayName}</p>
                            <p className='font-light text-purple -mt-1'>Candidate</p>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default DashNav;