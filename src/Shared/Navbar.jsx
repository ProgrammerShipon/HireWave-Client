import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import Logo from '../Assets/images/logo-01.png';
import NavItems from "../Components/NavItems";
import SideNav from "./SideNav";
import { toast } from "react-toastify";
import useAllJobs from "../Hooks/useAllJobs";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navState, setNavState] = useState(false);
    const [allJobsData, loading] = useAllJobs();
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onNavScroll = () => {
        if (typeof window !== 'undefined' && window.scrollY > 300) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", onNavScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("scroll", onNavScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (!loading) { // Add this condition to check if allJobsData is defined
            const searchTitle = searchTerm ? searchTerm.toLowerCase() : "";
            const filter = allJobsData.filter((job) =>
                (!searchTitle || job.title?.toLowerCase().includes(searchTitle) || job.companyName?.toLowerCase().includes(searchTitle))
            );

            setFilteredData(filter);
        }
    }, [searchTerm, allJobsData.length]);

    const handleSearch = () => {
        if (searchTerm === '') {
            toast.warn('Write search term!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else {
            navigate('/search_results', { state: { filteredData } });
            setSearchTerm('');
        }
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`fixed w-full shadow-xl duration-300 ease-in-out ${navState ? 'backdrop-blur-md bg-white/60 py-2 shadow-green/10' : 'bg-white py-3 backdrop-blur-md'} z-50`}>
            <nav className="container flex items-center justify-between">
                {/* logo */}
                <Link to="/">
                    <img data-testid="logo" className="w-52" src={Logo} alt="hire wave logo" />
                </Link>

                <div className="flex items-center gap-8">
                    {/* search bar */}
                    <div className={`hidden w-full md:w-52 lg:w-72 lg:flex items-center bg-white rounded-md border overflow-hidden duration-300 ${navState ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
                        <input
                            data-testid="search-input"
                            type="text"
                            placeholder="Job Title / Keywords or Company"
                            className="w-full py-2 pl-3 rounded-s-md bg-transparent focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch} className="bg-dark text-white px-4 py-3 hover:text-green duration-300">
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
                    data-testid="toggle__button"
                    onClick={toggle}
                    className="lg:hidden text-dark">
                    <FaBars className="text-3xl" />
                </button>

                {/* side navbar */}
                <SideNav isOpen={isOpen} toggle={toggle} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
            </nav>
        </header>
    );
};

export default Navbar;