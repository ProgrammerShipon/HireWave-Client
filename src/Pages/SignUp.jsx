import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocalLogin from '../Shared/SocalLogin';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [hidePass, setHidePass] = useState(false);

    const onSubmit = data => {

        console.log(data)

    };
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Sign Up - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Sign Up" />

            <div className='w-[600px] mx-auto   p-16 pb-8 shadow-lg hover:shadow-green/40 rounded-md mt-8 '>
                <h1 className='text-3xl text-center mb-5 text-dark'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="">
                        <label className="">
                            <span className="text-gray">Name*</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="w-full border duration-500 border-purple rounded-md px-8 py-2 focus:outline-green/60 text-lg" {...register("userName")} required />
                    </div>
                    {/* <div className="">
                        <label className="">
                            <span className="text-gray">Your Status* </span>
                        </label>
                        <select {...register("userStatus")} className='w-full border duration-500 border-purple rounded-md px-8 py-2 focus:outline-green/60 text-lg' required>
                            <option value="" selected>Select One</option>
                            <option value="candidate">Candidate</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                    </div> */}
                    <div className="  ">
                        <label className="">
                            <span className="text-gray">Email* </span>
                        </label>
                        <input type="text" placeholder="Enter Your Email" className="w-full border duration-500 border-purple rounded-md px-8 py-2 focus:outline-green/60 text-lg" {...register("email")} required />
                    </div>
                    <div className="">
                        <label className="">
                            <span className="text-gray">New Password*</span>
                        </label>
                        <div className='relative'>
                            <input type={hidePass ? 'text' : 'password'} placeholder="password" className="w-full border duration-500 border-purple rounded-md px-8 py-2 focus:outline-green/60 text-lg" {...register("newPassword")} required />
                            <span onClick={() => setHidePass(!hidePass)} className='absolute top-4  right-8'>{hidePass ? <FaEyeSlash /> : <FaEye />} </span>
                        </div>
                    </div>

                    <div className="">
                        <label className="">
                            <span className="text-gray"> Confrim Password*</span>
                        </label>
                        <div className='relative'>
                            <input type={hidePass ? 'text' : 'password'} placeholder="password" className="w-full border duration-500 border-purple rounded-md px-8 py-2 focus:outline-green/60 text-lg" {...register("confrimPassword")} required />
                            <span onClick={() => setHidePass(!hidePass)} className='absolute top-4  right-8'>{hidePass ? <FaEyeSlash /> : <FaEye />} </span>
                        </div>

                    </div>
                    <div className='flex justify-around '>
                        <div className='flex items-center gap-1'>
                            <input
                                type="radio"
                                id="candidate"
                                value="candidate"
                                {...register('candidate')}
                            />
                            <label htmlFor="candidate">Candidate</label>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input
                                type="radio"
                                id="recruiter"
                                value="recruiter"
                                {...register('radioOption')}
                            />
                            <label htmlFor="recruiter">Recruiter</label>
                        </div>
                    </div>


                    <div className="form-control mt-2">
                        <input className='w-full bg-green/40 hover:bg-green/70 duration-500 text-xl p-2 rounded-md' type="submit" value="Sign Up" />
                        <p className='text-sm mt-3'>Already have an account <Link to='/login' className='underline text-blue-400'>Login</Link></p>

                    </div>
                </form>
                <SocalLogin />
            </div>
        </>
    );
};

export default SignUp;