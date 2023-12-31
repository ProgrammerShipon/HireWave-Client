import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

//react icons
import { FaSearch } from 'react-icons/fa';
import { BsBell } from 'react-icons/bs';
import { LiaAngleDownSolid } from 'react-icons/lia';

//Logo
import Logo from '../Assets/images/logo-01.png';

const DashNav = () => {
    const { currentUser, loading } = useAuth();
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!loading) {
            const firstName = currentUser?.name.split(' ').slice(0, -1).join(' ');
            if (firstName.length > 0) {
                setName(firstName);
            } else {
                setName(currentUser.name);
            }
        }
    }, [!loading]);

    return (
        <header className='fixed w-full top-0 shadow-2xl shadow-purple/20 backdrop-blur-md py-2 bg-white/60 z-50'>
            <div className='flex items-center justify-between mx-4 md:mx-10'>
                <div className='flex items-center gap-14 lg:gap-24'>
                    {/* Logo */}
                    <Link to='/'>
                        <img className="w-44 md:w-48" src={Logo} alt="hire wave logo" />
                    </Link>


                    {/* search field */}
                    <div className='hidden w-52 lg:w-72 md:flex items-center bg-white rounded-md border overflow-hidden duration-300'>
                        <input
                            type="text"
                            placeholder="Keywords"
                            className="w-full py-2 pl-3 rounded-s-md bg-transparent focus:outline-none"
                        />
                        <button className="bg-dark text-white px-4 py-3 hover:text-green duration-300">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* profile & notification */}
                <div className='flex items-center gap-3'>
                    {/* notification */}
                    <button className='w-10 h-10 flex items-center justify-center text-green bg-green/10 rounded-full'>
                        <BsBell size='20' />
                    </button>


                    {/* Profile */}
                    <div className='relative flex items-center gap-3'>
                        <div className='relative'
                            onClick={() => setOpen(!open)}
                        >
                            {
                                currentUser.image !== null ?
                                    <img
                                        className="h-12 w-12 rounded-full object-cover shadow-lg hover:shadow-green/20 duration-300"
                                        src={currentUser.image} alt={currentUser.name} /> :
                                    <p
                                        className="h-14 w-14 bg-blue text-dark text-xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300 drop-shadow-xl uppercase"
                                    >
                                        {currentUser.name.slice(0, 2)}
                                    </p>
                            }
                            <div className='absolute top-0 -right-0'>
                                <span className="relative flex h-3 w-3 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                                </span>
                            </div>
                        </div>

                        <LiaAngleDownSolid
                            onClick={() => setOpen(!open)}
                            className={`md:hidden relative ${open ? 'rotate-180' : 'rotate-0'} duration-300`} />

                        <div className='hidden md:inline-block'>
                            <p className='text-xl text-dark capitalize'>{name}</p>
                            <p className='font-light text-purple -mt-1'>{currentUser.role}</p>
                        </div>

                        {/* responsive */}
                        <div className={`md:hidden absolute bg-white right-0 p-5 shadow-4xl shadow-gray/40 rounded-md ${open ? 'visible opacity-100 top-14' : 'invisible opacity-0 top-24'} duration-300`}>
                            <p className='text-xl text-dark drop-shadow-xl'>{currentUser.name}</p>
                            <p className='font-light text-purple -mt-1'>{currentUser.role}</p>
                            <p className='text-dark mt-1'>{currentUser.email}</p>

                            {/* Search Bar */}
                            <div className='w-56 flex items-center bg-white rounded-md border overflow-hidden duration-300 mt-4'>
                                <input
                                    type="text"
                                    placeholder="Keywords"
                                    className="w-full py-2 pl-3 rounded-s-md bg-transparent focus:outline-none"
                                />
                                <button className="bg-dark text-white px-4 py-3 hover:text-green duration-300">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashNav;