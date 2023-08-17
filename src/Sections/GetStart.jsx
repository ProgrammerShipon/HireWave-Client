import React from 'react';
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
const GetStart = () => {
    return (
        <section className='bg-green/5 py-20 md:py-[120px] '>
            <div className='container'>
                <div className=' border border-none rounded-md duration-500 hover:shadow-2xl hover:shadow-green/50  flex flex-col md:flex-row justify-center items-center gap-14  p-16'>
                    <div className='w-auto lg:w-[600px] text-center md:text-left'>
                        <h1 className='text-3xl mb-3'>Get Start Your New Job With Us !</h1>
                        <p>Tenetur natus in animi, nisi quia doloremque, impedit consectetur ab, mollitia aperiam dicta? Suscipit, alias accusantium!</p>
                    </div>
                    <div>
                        <Link to='/'>
                            <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 flex items-center gap-2 w-48 lg:w-auto'>
                                <AiOutlineUserAdd /> Create an Account
                            </button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStart;