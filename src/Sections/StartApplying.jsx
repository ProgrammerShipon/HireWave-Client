import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const StartApplying = () => {
    return (
        <section className='bg-green/5 py-20 md:py-[120px] '>
            <div className='container'>
                <div className=' border border-none rounded-md duration-500 hover:shadow-2xl hover:shadow-green/50  flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-14 md:gap-8  p-16'>
                    <div className='w-auto lg:w-[600px] text-center md:text-left'>
                        <h1 className='text-3xl mb-3'>Explore a Job now !</h1>
                        <p className='text-gray'>Tenetur natus in animi, nisi quia doloremque, impedit consectetur ab, mollitia aperiam dicta? Suscipit, alias accusantium!</p>
                    </div>
                    <div className=' md:w-60 lg:w-auto flex md:flex-col lg:flex-row gap-2'>
                        <Link to='/'>
                            <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 '>
                               Apply Now
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className='bg-transparent text-dark  px-5 py-2 rounded-lg border border-green hover:border-green duration-300 shadow-xl hover:shadow-green/20'>
                               Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartApplying;