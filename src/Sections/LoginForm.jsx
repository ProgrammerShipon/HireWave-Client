import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../Components/SocialLogin';
import useAuth from '../Hooks/useAuth';

// react icons
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const LoginForm = () => {
    const { signIn, setLoading } = useAuth();
    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [type, setType] = useState('password');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
    };
    return (
        <section className='py-20 md:py-[120px] duration-300'>
            <div className="container">
                <div className='p-5 md:p-16 rounded-lg shadow-2xl max-w-lg mx-auto'>
                    <h1 className='text-3xl md:text-5xl font-semibold drop-shadow-lg'>Welcome Back!</h1>
                    <h2 className='text-xl text-gray mb-10'>Login to continue</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex items-center border border-green rounded-lg gap-3 p-3'>
                            <label htmlFor="email">
                                <MdAlternateEmail className='text-green text-2xl' />
                            </label>
                            <input className='w-full border-none outline-none' id='email' placeholder="Enter email" {...register("email", { required: true })} />
                        </div>
                        {errors.email && <span className='text-sm text-red-400 ml-1'>Email is required</span>}

                        <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-5'>
                            <label htmlFor="password">
                                <MdLockOutline className='text-green text-2xl' />
                            </label>

                            <input type={type} className='w-full border-none outline-none' id='password' placeholder="password" {...register("password", { required: true })} />

                            <div className='cursor-pointer' onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                                {
                                    type === 'password' ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                }
                            </div>
                        </div>
                        {errors.password && <span className='text-sm text-red-400 ml-1'>Password is required</span>}

                        <Link to='/login' className='text-right text-sm text-gray block'>Forget password?</Link>

                        <button className='bg-dark text-white w-full hover:text-white px-5 py-3 rounded-lg hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-4' type='submit'>Login</button>
                    </form>

                    <div className='flex items-center gap-3 mx-5 my-5'>
                        <span className='border-t border-purple w-full block'></span>
                        <span className='text-green'>OR</span>
                        <span className='border-t border-purple w-full block'></span>
                    </div>

                    <SocialLogin />

                    <p className='mt-5 text-center text-gray'>New to Hire Wave? <Link className='text-green' to='/sign_up'>Sign Up</Link></p>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;