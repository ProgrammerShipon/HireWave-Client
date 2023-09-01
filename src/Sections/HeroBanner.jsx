import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// react icons
import { BiSearchAlt } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';

const HeroBanner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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

                            <Link to='candidates' className='bg-dark text-white px-6 py-4 text-lg rounded-xl hover:bg-green duration-300 shadow-xl hover:shadow-green/30 inline-block'>
                                Know More
                            </Link>
                        </div>

                        {/* search bar */}
                        <form onSubmit={handleSubmit(onSubmit)}
                            className='bg-white border border-green shadow-2xl shadow-green/20 grid grid-cols-1 md:grid-cols-5 items-center mt-16 p-2 rounded-xl duration-300'
                        >
                            {/* Search */}
                            <div className='col-span-2 flex items-center border-b md:border-none border-green'>
                                <label htmlFor="search" className='pl-2 text-green'>
                                    <FaBriefcase size='20px' className="animate-bounce" />
                                </label>
                                <input
                                    id='search'
                                    className='w-full border text-lg pl-2 py-4 md:py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent'
                                    placeholder="Job Title / Keywords or Company"
                                    {...register("search")}
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
                            <button type="submit" className='bg-dark text-white px-6 py-4 text-lg rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:bg-green duration-300'><BiSearchAlt /> Find Job</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;