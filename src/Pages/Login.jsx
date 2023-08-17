import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocalLogin from '../Shared/SocalLogin';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [hidePass, setHidePass] = useState(false);

    const onSubmit = data => {

        console.log(data)
        
    };
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Login - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Login" />

          <div className='w-[600px] mx-auto   p-16 shadow-lg hover:shadow-green/40 rounded-md mt-8 '>
            <h1 className='text-3xl text-center mb-5 text-dark'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="">
                    <label className="">
                        <span className="text-gray">Email* </span>
                    </label>
                    <input type="text" placeholder="Enter Your Email" className="w-full border duration-500 border-purple bg-transparent rounded-md px-8 py-2 focus:outline-green/60 text-lg" {...register("email")} required />

                </div>
                <div className="">
                    <label className="">
                        <span className="text-gray">Password*</span>
                    </label>
                    <div className='relative'>
                        <input type={hidePass ? 'text' : 'password'} placeholder="password" className="w-full border duration-500 border-purple rounded-md px-8 py-2 focus:outline-green/60 text-lg" {...register("password")} required />
                        <span onClick={() => setHidePass(!hidePass)} className='absolute top-4  right-8'>{hidePass ? <FaEyeSlash /> : <FaEye />} </span>
                    </div>
                    <label className="">
                        <a href="#" className="text-gray underline">Forgot password?</a>
                    </label>
                </div>
                <div className="mt-2">
                    <input className='w-full bg-green/40 hover:bg-green/70 duration-500 text-xl p-2 rounded-md' type="submit"  value="Login" />
                    <p className='text-sm mt-3'>Create a Accout <Link to='/sign_up' className='underline text-blue-400'>Sign Up</Link></p>

                </div>
            </form>
            <SocalLogin/>
          </div>
        </>
    );
};

export default Login;