import { useForm } from 'react-hook-form';
import Button from '../Components/Button';

// react icons
import { BiSearchAlt } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';

const HeroBanner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <section className="pt-36 md:pt-44 pb-20 md:pb-28">
            <div className="container">
                <div className='max-w-4xl mx-auto duration-300'>
                    <div className='text-center'>

                        <h1 className="text-dark text-4xl md:text-6xl font-semibold leading-10 md:leading-[64px] mb-3">Find The Job That Fits Your Life
                        </h1>

                        <p className='text-gray md:text-lg mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                        <Button>
                            Know More
                        </Button>
                    </div>

                    {/* search bar */}
                    <form onSubmit={handleSubmit(onSubmit)}
                        className='bg-white border border-green shadow-2xl shadow-green/20 grid grid-cols-1 md:grid-cols-5 items-center mt-16 p-2 rounded-xl duration-300'
                    >
                        {/* search */}
                        <div className='col-span-2 flex items-center border-b md:border-none border-green'>
                            <label htmlFor="search" className='pl-2 text-green'>
                                <FaBriefcase size='20px' />
                            </label>
                            <input
                                id='search'
                                className='w-full border text-lg pl-2 py-4 md:py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent'
                                placeholder="Job Title / Keywords or Company" {...register("search")}
                            />
                        </div>

                        {/* location */}
                        <div className='col-span-2 md:border-s border-green  flex items-center'>
                            <label htmlFor="location" className='pl-2 text-green'>
                                <FaLocationCrosshairs size='20px' />
                            </label>
                            <input
                                id='location'
                                className='w-full border text-lg pl-2 py-4 md:py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent'
                                placeholder="Any Job Location"
                                {...register("location")} />
                        </div>

                        {/* search button */}
                        <button type="submit" className='bg-dark text-white px-6 py-4 text-lg rounded-xl flex items-center justify-center gap-2'><BiSearchAlt /> Find Job</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;