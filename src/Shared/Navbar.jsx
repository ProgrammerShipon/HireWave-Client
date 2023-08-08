import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import NavItems from "../Components/NavItems";

// react icons
import { FaBars, FaSearch } from 'react-icons/fa';

// logo
import Logo from '../Assets/images/logo-01.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 100) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <header className={`fixed w-full shadow-xl duration-300 ease-in-out ${navState ? 'backdrop-blur-md bg-white/60 py-2 shadow-green/10' : 'bg-white py-3'}`}>
            <nav className="container flex items-center justify-between">
                {/* logo */}
                <Link to="/">
                    <img className="w-52" src={Logo} alt="hire wave logo" />
                </Link>

                <div className="flex items-center gap-8">
                    {/* search bar */}
                    <div className={`hidden w-full md:w-52 lg:w-72 lg:flex items-center bg-white rounded-md border overflow-hidden duration-300 ${navState ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
                        <input
                            type="text"
                            placeholder="Job Title / Keywords or Company"
                            className="w-full py-2 pl-3 rounded-s-md bg-transparent focus:outline-none"
                        />
                        <button className="bg-dark text-white px-4 py-3 hover:text-green duration-300">
                            <FaSearch />
                        </button>
                    </div>

                    {/* nav items */}
                    <ul className="hidden lg:flex items-center gap-8">
                        <NavItems />
                    </ul>
                </div>

                {/* toggle button */}
                <button
                    onClick={toggle}
                    className="lg:hidden text-dark">
                    <FaBars className="text-3xl" />
                </button>

                {/* side navbar */}
                <SideNav isOpen={isOpen} toggle={toggle} />
            </nav>
        </header>
    );
};

export default Navbar;
