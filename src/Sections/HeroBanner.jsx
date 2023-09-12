import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAllJobs from '../Hooks/useAllJobs';

// react icons
import { BiSearchAlt } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { BsArrowUpRight } from 'react-icons/bs';
import { toast } from 'react-toastify';

const HeroBanner = () => {
    const [allJobsData, loading] = useAllJobs();
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    const { register, watch, handleSubmit, reset } = useForm();
    const onSubmit = () => {
        reset();
    }

    const searchTerm = watch('searchTerm');
    const location = watch('location');

    useEffect(() => {
        if (!loading) {
            if (searchTerm === '' && location === '') {
                setFilteredData([]);
            } else {
                const searchTitle = searchTerm ? searchTerm.toLowerCase() : "";
                const searchLocation = location ? location.toLowerCase() : "";

                const filter = allJobsData.filter((job) =>
                    (!searchTitle || job.title?.toLowerCase().includes(searchTitle) || job.companyName?.toLowerCase().includes(searchTitle)) &&
                    (!searchLocation || job.location.toLowerCase().includes(searchLocation))
                );

                setFilteredData(filter);
            }
        }
    }, [searchTerm, location, allJobsData.length]);

    const handleSearch = () => {
        if (searchTerm === '' && location === '') {
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
        }
    };

    // bg change function
    const [currentCase, setCurrentCase] = useState(1);
    const [displayImage, setDisplayImage] = useState('https://i.ibb.co/6DjmT9h/hero-1.webp');

    const switchCase = (caseValue) => {
        switch (caseValue) {
            case 1:
                return 'https://i.ibb.co/6DjmT9h/hero-1.webp';
            case 2:
                return 'https://i.ibb.co/Dg1bVQB/Breadcrumbs.jpg';
            case 3:
                return 'https://i.ibb.co/q1rDMLM/Breadcrumbs.jpg';
            case 4:
                return 'https://i.ibb.co/56N1ZJj/hero-3.webp';
            case 5:
                return 'https://i.ibb.co/vJ1VwGz/hero-4.webp';
            case 6:
                return 'https://i.ibb.co/XLGXQph/hero-5.webp';
            case 7:
                return 'https://i.ibb.co/611Rmc0/hero-6.webp';
            case 8:
                return 'https://i.ibb.co/cwTZtFd/hjero-7.webp';
            case 9:
                return 'https://i.ibb.co/phVJp04/hero-8.webp';
            case 10:
                return 'https://i.ibb.co/Mp1FkDj/hero-9.webp';
            case 11:
                return 'https://i.ibb.co/2Khz4yY/hero-11.webp';
            case 12:
                return 'https://i.ibb.co/2Khz4yY/hero-11.webp';
            case 13:
                return 'https://i.ibb.co/gJr6N6k/hero-2.webp';
            default:
                return 'https://i.ibb.co/ZTLHpn0/heroo-10.webp';
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newImage = switchCase(currentCase);
            setDisplayImage(newImage);

            // Change case every 5 seconds
            setCurrentCase((currentCase % 13) + 1);
        }, 6000);

        return () => {
            clearInterval(intervalId); // Clear the interval when the component unmounts
        };
    }, [currentCase]);

    return (
        <section style={{ backgroundImage: `url(${displayImage})` }} className={`bg-fixed top-0 bg-center bg-no-repeat bg-cover duration-300`}>
            <div className='bg-[#1b0e3d77] pt-36 md:pt-44 pb-20 md:pb-32 '>
                <div className="container">
                    <div className='max-w-4xl mx-auto duration-300'>
                        <div className='text-center'>

                            <h1 className="text-white text-4xl md:text-6xl font-semibold leading-10 md:leading-[64px] mb-3 drop-shadow-lg">Find The Job That Fits Your Life
                            </h1>

                            <p className='text-white/70 md:text-lg mb-5'>Welcome to the job find website! We're here to help you find the right job with ease. Explore a variety of opportunities that match your interests and skills, making your job search simple and effective. Start your journey towards a great career today!</p>

                            <Link to='/browse_jobs' className='bg-dark text-white px-6 py-4 text-lg rounded-xl hover:bg-green duration-300 shadow-xl hover:shadow-green/30 inline-block'>
                                Know More
                            </Link>
                        </div>

                        {/* search bar */}
                        <form onSubmit={handleSubmit(onSubmit)}
                            className='relative bg-white border border-green shadow-2xl shadow-green/20 grid grid-cols-1 md:grid-cols-5 items-center mt-16 p-2 rounded-xl duration-300'
                        >
                            {/* Search */}
                            <div className='col-span-2 flex items-center border-b md:border-none border-green'>
                                <label htmlFor="search" className='pl-2 text-green'>
                                    <FaBriefcase size='20px' className="animate-bounce" />
                                </label>
                                <input
                                    id='search'
                                    className='w-full bg-transparent border text-lg pl-2 py-4 md:py-2 border-none focus:outline-none text-dark placeholder:text-gray placeholder:bg-transparent'
                                    placeholder="Job Title / Keywords or Company"
                                    {...register("searchTerm")}
                                />
                            </div>

                            {/* location */}
                            <div className='col-span-2 md:border-s border-green  flex items-center'>
                                <label htmlFor="location" className='pl-2 text-green'>
                                    <FaLocationCrosshairs size='20px' className="animate-spin" />
                                </label>
                                <input
                                    id='location'
                                    className='w-full border text-lg pl-2 py-4 md:py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent'
                                    placeholder="Any Job Location"
                                    {...register("location")} />
                            </div>

                            {/* search button */}
                            <button onClick={handleSearch} className='bg-dark text-white px-6 py-4 text-lg rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:bg-green duration-300'><BiSearchAlt /> Find Job</button>

                            {/* suggest result */}
                            <div className={`absolute max-h-48 w-full md:w-4/5 top-48 md:top-20 mt-2 bg-white text-dark shadow-4xl shadow-gray/30 rounded-lg overflow-y-auto space-y-2 px-3 py-2 border-b-[6px] border-green ${filteredData.length ? 'block' : 'hidden'}`}>
                                {filteredData.map(job => (
                                    <Link to={`/job_details/${job._id}`} key={job._id} className='flex items-center gap-2 hover:bg-green/20 p-2 rounded-lg group duration-300'>
                                        <div className='h-12 w-12 rounded-full overflow-hidden shadow-xl'>
                                            <img className='w-full object-cover object-center' src={job.companyLogo} alt="" />
                                        </div>
                                        <div>
                                            <h2 className='text-dark text-xl font-medium group-hover:text-green duration-300'
                                            >{job.title}</h2>
                                            <p className='text-dark italic'>
                                                <span className='text-lightGray'>by</span>  {job.companyName} <span className='text-lightGray'>in</span> {job.category}
                                            </p>
                                        </div>

                                        <div className='flex-1 flex justify-end mr-2 text-dark group-hover:text-green duration-300'>
                                            <BsArrowUpRight size='20' />
                                        </div>
                                    </Link>
                                ))
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;