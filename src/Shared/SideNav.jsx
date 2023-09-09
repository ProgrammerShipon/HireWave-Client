// react icons
import { FaXmark } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

// logo
import Logo from '../Assets/images/logo-01.png';
import { Link } from 'react-router-dom';
import NavItems from '../Components/NavItems';

const SideNav = ({ isOpen, toggle, searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <>
            <aside className={`lg:hidden fixed top-0 bg-white w-[280px] md:w-[350px] h-screen p-5 z-50 duration-300 ease-in ${isOpen ? 'right-0' : '-right-full'}`}>
                <div className='flex items-center justify-between border-b border-green/20 pb-2'>
                    {/* logo */}
                    <Link to="/">
                        <img className="w-40 md:w-52" src={Logo} alt="hire wave logo" />
                    </Link>

                    {/* close button */}
                    <button onClick={toggle} className='p-3 bg-dark text-white rounded-full'>
                        <FaXmark />
                    </button>
                </div>

                {/* nav items */}
                <ul className='flex flex-col px-4 divide-y divide-green/20 mt-4'>
                    <NavItems />
                </ul>

                {/* search bar */}
                <div className="w-full flex items-center bg-white rounded-md border overflow-hidden mt-6">
                    <input
                        type="text"
                        placeholder="Job Title / Keywords or Company"
                        className="w-full py-2 pl-3 rounded-s-md bg-transparent focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className="bg-dark text-white px-4 py-3">
                        <FaSearch />
                    </button>
                </div>
            </aside>
            {/* overlay */}
            <div onClick={toggle} className={`fixed lg:hidden w-full h-screen top-0 left-0 z-30 bg-dark bg-opacity-30 duration-300 ease-in ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>
        </>
    );
};

export default SideNav;