import { Link } from 'react-router-dom';

// react icons
import { AiOutlineUserAdd } from "react-icons/ai";

const GetStart = () => {
    return (
        <section className='bg-[url("https://i.ibb.co/Dg1bVQB/Breadcrumbs.jpg")] bg-right-top bg-no-repeat bg-cover xl:bg-center'>
            <div className='bg-green/70 py-20 md:py-24 duration-300'>
                <div className='container'>
                    <div className='max-w-4xl mx-auto flex items-center justify-between'>
                        <div className='max-w-[600px] text-center md:text-left'>
                            <h1 className='text-3xl mb-5 text-white'>Get Start Your New Job With Us !</h1>

                            <p className='text-white font-light tracking-wide'>Ride the wave of success with Hire Wave, your dedicated partner in finding the perfect job match through our expert hiring services.</p>
                        </div>

                        <div>
                            <Link to='/login' className='text-lg bg-dark text-white hover:text-dark px-8 py-3 rounded-lg hover:bg-white duration-300 shadow-xl hover:shadow-white/30 flex items-center justify-center gap-1'>
                                <AiOutlineUserAdd /> Create an Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStart;