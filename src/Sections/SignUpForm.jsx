import SocialLogin from "../Components/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from '../Hooks/useAuth';
import { toast } from "react-toastify";

// react icons
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BiUserPin } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';

const SignUpForm = () => {
    const { signUpUser, profileUpdate } = useAuth();

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password.length < 6) {
            return toast.warning('password should be 6 characters', {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
        }
        if (data.password !== data.confirm) {
            return toast.warning("password didn't match", {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
        }

        signUpUser(data.email, data.password)
            .then((result) => {
                profileUpdate(result.user, data.name, data.photo)
                    .then(() => {
                        const user = { name: data.name, email: data.email, role: 'user', photo: data.photo };
                        navigate(from, { replace: true })
                    }).catch((error) => {
                        toast.error(error.message, {
                            position: "top-right",
                            autoClose: 4000,
                            theme: "light",
                        });
                    });
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                });
            })
    };

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-10 shadow-2xl rounded-xl">
                    <h1 className="text-dark text-5xl font-bold mb-10 drop-shadow-lg text-center">Sign Up</h1>

                    {/* name input field */}
                    <div className='flex items-center border border-green rounded-lg gap-3 p-3'>
                        <label htmlFor="name"> <BiUserPin className='text-green text-2xl' /></label>
                        <input className='w-full border-none outline-none' id='name' placeholder="Enter full name" {...register("name", { required: true })} />
                    </div>
                    {errors.name && <span className='text-sm text-red ml-1'>Name is required</span>}

                    {/* email input */}
                    <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="email"> <MdAlternateEmail className='text-green text-2xl' /></label>
                        <input type='email' className='w-full border-none outline-none' id='email' placeholder="Enter your email" {...register("email", { required: true })} />
                    </div>
                    {errors.email && <span className='text-sm text-red-400 ml-1'>Email is required</span>}

                    {/* password input */}
                    <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="password"> <MdLockOutline className='text-green text-2xl' /></label>
                        <input type='password' className='w-full border-none outline-none' id='password' placeholder="password" {...register("password", { required: true })} />
                    </div>
                    {errors.password && <span className='text-sm text-red-400 ml-1'>Password is required</span>}

                    {/* confirm password input */}
                    <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="confirm"> <BsShieldCheck className='text-green text-2xl' /></label>
                        <input type='password' className='w-full border-none outline-none' id='confirm' placeholder="Confirm password" {...register("confirm", { required: true })} />
                    </div>
                    {errors.password && <span className='text-sm text-red-400 ml-1'>Confirm password is required</span>}

                    {/* photo input */}
                    <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="photo"> <HiOutlinePhotograph className='text-green text-2xl' /></label>
                        <input className='w-full border-none outline-none' id='photo' placeholder="Photo URL" {...register("photo")} />
                    </div>

                    {/* select role */}
                    <div className="flex items-center gap-5 mt-5 text-xl text-gray">
                        <div className="flex items-center gap-2">
                            <input type="radio" name="role" id="candidate" className="h-4 w-4" />
                            <label htmlFor="candidate">Candidate</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" name="role" id="recruiter" className="h-4 w-4" />
                            <label htmlFor="recruiter">Recruiter</label>
                        </div>
                    </div>

                    {/* sign up button */}
                    <button className='bg-dark text-white w-full hover:text-white px-5 py-3 rounded-lg hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-4' type='submit'>Sign Up</button>

                    <div className='flex items-center gap-3 mx-5 my-5'>
                        <span className='border-t border-purple w-full block'></span>
                        <span className='text-green'>OR</span>
                        <span className='border-t border-purple w-full block'></span>
                    </div>

                    <SocialLogin />

                    <p className='mt-5 text-center text-gray'>Already have an account? <Link className='text-green font-medium underline' to='/login'>Login</Link></p>
                </form>
            </div>
        </section>
    );
};

export default SignUpForm;