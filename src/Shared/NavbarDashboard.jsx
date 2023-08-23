import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

//React Icons
import { FaSearch } from 'react-icons/fa';
import { BsBell, BsHeart } from 'react-icons/bs';

//Logo
import Logo from '../Assets/images/logo-01.png';
import useAuth from '../Hooks/useAuth';

const NavbarDashboard = () => {

    const { user } = useAuth();
    console.log(user)
    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 300) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <header className={`fixed w-full shadow-xl duration-300 ease-in-out ${navState ? 'backdrop-blur-md bg-white/60 py-2 shadow-green/10' : 'bg-white py-3'} z-50`}>

            <div className='flex gap-10 justify-between mx-10'>
                {/* Logo */}
                <img className="w-52" src={Logo} alt="hire wave logo" />


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

                    {/* Heart */}
                    <button className='w-10 h-10 flex items-center justify-center text-green bg-green/10 rounded-full'>
                        <BsHeart size='24' />
                    </button>

                    {/* Notification */}
                    <button className='w-10 h-10 flex items-center justify-center text-green bg-green/10 rounded-full'>
                        <BsBell size='24' />
                    </button>


                    {/* Profile */}
                    <div className='flex items-center gap-3'>
                        {
                            user?.photoURL && 
                            <img className="h-12 w-12 rounded-full object-cover shadow-lg hover:shadow-green/20 duration-300"
                            src={user?.photoURL} alt="Profile"/>
                        }
                        <div>
                            <p className='text-xl'>{user?.displayName}</p>
                            <p className='italic text-sm'>Candidate</p>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default NavbarDashboard;