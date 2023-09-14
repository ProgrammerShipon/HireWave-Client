import { Step, Stepper } from "@tkwant/react-steps";
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useAllCategories from '../Hooks/useAllCategories';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import PageLoader from "../Components/PageLoader";

const RecruiterSignUpForm = () => {
    const [curStep, setCurStep] = useState(0);
    const [finish, setFinish] = useState(false);
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [allCategoriesData] = useAllCategories();
    const [finishLoading, setFinishLoading] = useState(false);
    const navigate = useNavigate();

    const { control, register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();

    //Watch
    const selectedCategory = watch('job_category', '');
    const selectedSubCategory = watch('sub_category', '');
    const singleCategory = allCategoriesData.find(category => category.name === selectedCategory);

    //Form Submit function
    const onSubmit = data => {
        const todayDate = new Date();
        const newData = {
            role: 'recruiter',
            name: data.name,
            title: data.title,
            email: user?.email,
            phone: [data.country_code, data.phone],
            image: user?.photoURL,
            banner: null,
            industry: data.industry,
            website: data.website,
            category: data.category,
            subCategory: data.subCategory,
            location: [data.country, data.state],
            address: data.address,
            about: [],
            specialties: [],
            status: "pending",
            active: false,
            followers: 0,
            joinDate: todayDate
        }

        setCurStep(curStep + 1)
        if (finish) {
            setFinishLoading(true)
            return axiosSecure.post('/recruiters', newData)
                .then(data => {
                    if (data.status === 200) {
                        setFinishLoading(false)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Sign Up successfully',
                            showConfirmButton: false,
                            timer: 2500
                        });
                        navigate('/', { replace: true })
                        window.location.reload(true)
                    }
                })
                .catch((err) => console.log(err));
        }
    }

    // Previous step function
    const handlePreviousStep = () => {
        setCurStep(curStep - 1);
    };

    const countryCodes = ["+1", "+44", "+49", "+33", "+81", "+86", "+91", "+61", "+7", "+55", "+54", "+51", "+52", "+53", "+20", "+27", "+82", "+62", "+92", "+94", "+62", "+63", "+66", "+84", "+95", "+670", "+975", "+380", "+375", "+373", "+377", "+423", "+41", "+46", "+47", "+48", "+351", "+34", "+39", "+31", "+420", "+421", "+386", "+385", "+385", "+352", "+352", "+43", "+353", "+354", "+880"]


    const renderContent = () => {
        switch (curStep) {

            //Company Information
            case 0:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>Create an employer account</h1>
                        <p className='text-lightGray font-light max-w-[470px] mt-1'>You'll need to create an employer account before posting a job</p>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
                            {/* Company name */}
                            <label className='text-gray text-base'>Company Name*
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.name && 'border-red-400'}`}
                                    placeholder='e.g. SHOMEKA IT'
                                    {...register("name", { required: true })}
                                />
                            </label>

                            {/* industry */}
                            <label className='text-gray text-base'>Industry*
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.industry && 'border-red-400'}`}
                                    placeholder='e.g. Digital Marketing Agency'
                                    {...register("industry", { required: true })}
                                />
                            </label>

                            {/* website */}
                            <label className='text-gray text-base'>Website URL
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2`}
                                    placeholder='e.g. Digital Marketing Agency'
                                    {...register("website")}
                                />
                            </label>

                            {/* Submit */}
                            <div className='text-right'>
                                {/* Next Button */}
                                {curStep < 6 && (
                                    <button className='bg-dark text-white hover:bg-green px-8 py-[6px] rounded-md duration-300 shadow-xl hover:shadow-green/20' type="submit" value="Next">
                                        Next
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                )

            //location
            case 1:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>Address and Contact Information</h1>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* country */}
                                <label className='text-gray w-full text-base'>Country*
                                    <select name="jobType" id="jobType"
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.country && 'border-red-400'}`}
                                        {...register("country", { required: true })}
                                    >
                                        <option value="">Select</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="United States">United States</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="India">India</option>
                                    </select>
                                </label>

                                {/* state */}
                                <label className='text-gray w-full text-base'>Province / State*
                                    <input
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.state && 'border-red-400'}`}
                                        placeholder='e.g. Dhaka | New work'
                                        {...register("state", { required: true })}
                                    />
                                </label>
                            </div>

                            {/* address */}
                            <label className='text-gray text-base'>Address*
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.address && 'border-red-400'}`}
                                    placeholder='e.g. Uttara Model Town, 1230'
                                    {...register("address", { required: true })}
                                />
                            </label>

                            {/* country code & phone number */}
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* country code */}
                                <label className='text-gray w-40 text-base'>Country code*
                                    <select name="jobType" id="jobType"
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.country_code && 'border-red-400'}`}
                                        {...register("country_code", { required: true })}
                                    >
                                        <option value="">Select</option>
                                        {
                                            countryCodes.map((code, index) => <option
                                                key={index} value={code}>{code}</option>)
                                        }
                                    </select>
                                </label>

                                {/* Phone number */}
                                <label className='text-gray w-full text-base'>Phone number*
                                    <input
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.phone && 'border-red-400'}`}
                                        placeholder='e.g. 12910211'
                                        {...register("phone", { required: true })}
                                    />
                                </label>
                            </div>

                            {/* Submit */}
                            <div className='flex items-center justify-between'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-gray text-dark hover:bg-transparent hover:text- px-8 py-[6px] rounded-md duration-300 shadow-lg hover:shadow-gray/40' onClick={handlePreviousStep}
                                    >Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <button className='bg-dark text-white hover:bg-green px-8 py-[6px] rounded-md duration-300 shadow-xl hover:shadow-green/20' type="submit" value="Next">
                                        Next
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                );

            //categories
            case 2:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>Choose category that fits your company</h1>
                        <p className='text-lightGray font-light max-w-[470px] mt-1'>This information helps us for better recommendations across Hire Wave</p>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
                            {/*  Category */}
                            <div className='flex flex-wrap gap-4'>
                                {allCategoriesData.map((category) => (
                                    <div
                                        key={category.name}
                                        className={`w-fit ${selectedCategory === category.name
                                            ? 'bg-purple/20 text-purple font-medium drop-shadow-lg shadow-lg cursor-pointer'
                                            : errors.job_category ? 'border border-red-500'
                                                : 'bg-gray/30 text-lightGray font-medium hover:bg-purple/20 hover:text-purple duration-300'
                                            } px-4 rounded-full cursor-pointer`}
                                        onClick={() => setValue('job_category', category.name)}
                                    >
                                        <Controller
                                            name="job_category"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <label className="text-base" htmlFor={category.name}>
                                                    {category.name}
                                                    <input
                                                        id={category.name}
                                                        type="radio"
                                                        value={category.name}
                                                        className='hidden'
                                                        {...register("category", { required: true })}
                                                    />
                                                </label>
                                            )}
                                        />
                                    </div>

                                ))}
                            </div>
                            {errors.Job_category?.type === 'required' && <span className='text-red-500'>Category is required</span>}

                            {/* Divider & Sub category */}
                            {
                                selectedCategory &&
                                <>
                                    <p className='border-b-2 border-purple my-5'></p>
                                    <h1 className='font-medium text-xl text-lightGray drop-shadow-lg'>Choose sub category on which your company works on</h1>
                                </>
                            }
                            <div className='flex flex-wrap gap-3'>
                                {
                                    selectedCategory &&
                                    singleCategory.subcategories.map((sub_category) => (
                                        <div
                                            key={sub_category.name}
                                            className={`w-fit ${selectedSubCategory === sub_category.name
                                                ? 'bg-purple/20 text-purple border border-purple/20 shadow-xl'
                                                : errors.sub_category ? 'border border-red-500'
                                                    : 'hover:bg-purple/20 hover:text-purple hover:shadow-lg'
                                                } px-4 rounded-full border flex text-lightGray font-medium border-purple cursor-pointer duration-300`}
                                            onClick={() => setValue('sub_category', sub_category.name)}
                                        >
                                            <Controller
                                                name="sub_category"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => (
                                                    <>
                                                        <label htmlFor={sub_category.name} className='flex items-center gap-2 font-medium text-base mb-[2px]'>
                                                            <AiOutlinePlus />{sub_category.name}
                                                        </label>
                                                        <input
                                                            id={sub_category.name}
                                                            name='sub_category'
                                                            type="radio"
                                                            value={sub_category.name}
                                                            className='hidden'
                                                            {...register("subCategory", { required: true })}
                                                        />
                                                    </>
                                                )}
                                            />

                                        </div>
                                    ))}
                            </div>
                            {errors.Job_category?.type === 'required' && <span className='text-red-500'>Sub-Category is required</span>}

                            {/* Submit */}
                            <div className='flex justify-between mt-4'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-gray text-dark hover:bg-transparent hover:text- px-8 py-[6px] rounded-md duration-300 shadow-lg hover:shadow-gray/40' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                <button className='bg-dark text-white hover:bg-green px-8 py-[6px] rounded-md duration-300 shadow-xl hover:shadow-green/20'
                                    onClick={() => setFinish(true)}
                                    type="submit"
                                >
                                    Finish
                                </button>
                            </div>
                        </form>
                    </div>
                );

            default:
                return null;
        }
    };

    if (finishLoading) {
        return <div className="mt-32"><PageLoader /></div>
    }

    return (
        <>
            <div className="container">
                <Stepper
                    className='mt-3'
                    curStep={curStep}
                    activeColor='#1b0e3d'
                >
                    <Step />
                    <Step />
                    <Step />
                </Stepper>
            </div>
            <div className='py-10'>
                {renderContent()}
            </div>
        </>
    );
};

export default RecruiterSignUpForm;