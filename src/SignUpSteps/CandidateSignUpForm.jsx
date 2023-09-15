import { Step, Stepper } from "@tkwant/react-steps";
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import useSkills from '../Hooks/useSkills';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from "sweetalert2";
import { Country, State } from "country-state-city"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// react icons
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlinePlus } from 'react-icons/ai';
import { FaXmark } from 'react-icons/fa6';
import PageLoader from "../Components/PageLoader";
import useAllCategories from "../Hooks/useAllCategories";

const CandidateSignUpForm = () => {
    const [allCategoriesData] = useAllCategories();
    const [curStep, setCurStep] = useState(0);
    const [finish, setFinish] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState()
    const [skillData, loading] = useSkills();
    const [finishLoading, setFinishLoading] = useState(false);
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const selectedCategory = watch('job_category', '');

    //Form Submit function
    const onSubmit = data => {
        const todayDate = new Date();
        const newData = {
            role: 'candidate',
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            title: data.title,
            phone: phoneNumber,
            category: data.category,
            hourlyRate: data.hourlyRate,
            jobType: data.jobType,
            location: `${data.country}, ${data.state}`,
            address: data.address,
            skills: data?.skills?.map((skill) => skill),
            about: [],
            education: [],
            experience:
                data.position == "" && data.organization == "" && data.companyLocation == "" && data.startDate == "" && data.endDate == "" ?
                    [] :
                    [
                        {
                            position: data.position,
                            companyName: data.organization,
                            location: data.companyLocation,
                            startDate: data.startDate,
                            endDate: data.endDate,
                        }
                    ],
            socialLink: [],
            languages: [],
            recommendations: 0,
            status: 'pending',
            visibility: data.visibility,
            joinDate: todayDate
        }

        setCurStep(curStep + 1)

        // Step Finish 
        if (finish) {
            setFinishLoading(true)
            return axiosSecure.post("/candidates", newData)
                .then((data) => {
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

    //Country, State, Province
    const selectedCountry = watch('country', '');
    const countryData = Country.getAllCountries()
    const filteredCountry = countryData.find(country => country.name == selectedCountry)
    const stateData = State.getStatesOfCountry(filteredCountry?.isoCode)

    // Experience div State
    const [present, setPresent] = useState(false);

    // Skills States and Functions
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    useEffect(() => {
        if (inputValue.trim() === '') {
            setSuggestions([]);
        } else {
            const matchingSkills = skillData.filter((skill) =>
                skill.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(matchingSkills);
        }
    }, [inputValue, !loading])

    const selectSkill = (skill) => {
        if (!selectedSkills.includes(skill)) {
            register(`skills[${selectedSkills.length}]`, { value: skill });
            setSelectedSkills([...selectedSkills, skill]);
            setInputValue('');
        }
    };

    const removeSelectedSkill = (skillToRemove) => {
        const updatedSkills = selectedSkills.filter((skill) => skill !== skillToRemove);
        setSelectedSkills(updatedSkills);
    };


    // Validate ending date for education and experiences part. end date has to be greater than starting date
    const validateEndingDate = (endingDate, startingDate) => {
        if (endingDate && startingDate) {
            return endingDate >= startingDate || "Ending date must be greater than or equal to the starting date";
        }
        return true;
    };

    const validatePhoneNumber = (value) => {
        if (!value || value.length < 10 || value.length > 15) return false
        return true;
    };

    const renderContent = () => {
        switch (curStep) {
            case 0:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>What are you looking for in your next job?</h1>
                        <p className='text-lightGray font-light max-w-[470px] mt-1'>Tell us the job details you're interested in to get better recommendations across HireWave</p>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
                            {/* title */}
                            <label className='text-gray text-base'>Title*
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.title && 'border-red-400'}`}
                                    placeholder='e.g. Digital Marketing Specialist | SEO Expert'
                                    {...register("title", { required: true })}
                                />
                            </label>

                            {/* Job Type & hourly rate */}
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* Job Type */}
                                <label className='text-gray text-base w-full'>Job type*
                                    <select name="jobType" id="jobType"
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.jobType && 'border-red-400'}`}
                                        {...register("jobType", { required: true })}
                                    >
                                        <option value="">Select</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Full-Time">Full Time</option>
                                        <option value="Part-Time">Part Time</option>
                                        <option value="As Needed - Open to work">As Needed - Open to work</option>
                                    </select>
                                </label>

                                {/* hourly rate */}
                                <label className='text-gray w-full text-base'>Hourly rate ($)*
                                    <input
                                        type="number"
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.hourlyRate && 'border-red-400'}`}
                                        placeholder='e.g. 10'
                                        {...register("hourlyRate", { required: true })}
                                    />
                                </label>
                            </div>

                            {/* category */}
                            <p className='border-b-2 border-purple my-5'></p>
                            <h1 className='font-medium text-xl text-lightGray drop-shadow-lg'>Choose category that fits best with your job title</h1>

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
                );

            //Location
            case 1:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>Where are you located?</h1>
                        <p className='text-lightGray font-light max-w-[470px] mt-1'>This helps match you with nearby jobs</p>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* country */}
                                <label className='text-gray w-full text-base'>Country*
                                    <select name="jobType" id="jobType"
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.country && 'border-red-400'}`}
                                        {...register("country", { required: true })}
                                    >
                                        <option value="" disable>Select</option>
                                        {
                                            countryData?.map(country => <option key={country.isoCode} value={country.name}>{country.name}</option>)
                                        }
                                    </select>
                                </label>

                                {/* state */}
                                <label className='text-gray w-full text-base'>State*
                                    <select name="jobType" id="jobType"
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.state && 'border-red-400'}`}
                                        {...register("state", { required: true })}
                                    >
                                        <option value="" disable>Select</option>
                                        {
                                            stateData?.map(state => <option key={state.isoCode} value={state.name}>{state.name}</option>)
                                        }
                                    </select>
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

                            {/* Phone number */}
                            <label className="text-gray w-40 text-base outline-none">
                                Phone Number*
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{
                                        validate: validatePhoneNumber
                                    }}
                                    render={({ field }) => (
                                        <PhoneInput
                                            className={`PhoneInputInput text-dark rounded-md border border-gray/20 hover:border-purple px-3 py-2 ${errors.phone && 'border-red-400 hover:border-red-400 '}`}
                                            placeholder="Enter phone number"
                                            value={field.value}

                                            onChange={(value) => {
                                                field.onChange(value)
                                                setPhoneNumber(value)
                                            }}
                                        />
                                    )}
                                />
                            </label>
                            {errors.phone && (<p className="text-red-400 -mt-5">Invalid Phone Number Length</p>)}

                            {/* Submit */}
                            <div className='flex items-center justify-between'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-gray text-dark hover:bg-transparent hover:text- px-8 py-[6px] rounded-md duration-300 shadow-lg hover:shadow-gray/40' onClick={() => setCurStep(0)}
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

            //experiences
            case 2:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>Add a Work Experience <span className='text-gray text-base font-light'>(optional)</span></h1>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
                            {/* title position */}
                            <label className='text-gray text-base'>Title*
                                <input
                                    className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                    placeholder='e.g: Front-End Developer'
                                    {...register("position")}
                                />
                            </label>

                            {/* organization & Location */}
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* organization */}
                                <label className='text-gray w-full text-base'>Organization*
                                    <input
                                        className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                        placeholder='e.g. Mahitech Ltd'
                                        {...register("organization")}
                                    />
                                </label>

                                {/* location */}
                                <label className='text-gray w-full text-base'>Location*
                                    <input
                                        className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                        placeholder="Write 'Remote' if it was Remote job"
                                        {...register("companyLocation")}
                                    />
                                </label>
                            </div>

                            {/* Starting & Ending date */}
                            <div>
                                <div className='flex flex-col sm:flex-row items-center gap-3'>
                                    {/* Start date */}
                                    <label className='text-gray w-full text-base'>Start date*
                                        <input
                                            type="date"
                                            className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                            {...register("startDate")}
                                        />
                                    </label>

                                    {/* end date */}
                                    <label className='text-gray w-full text-base'>
                                        End date*
                                        {present ? (
                                            <input
                                                className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                                value='Present'
                                                readOnly
                                                {...register("endDate")}
                                            />
                                        ) : (
                                            <input
                                                type='date'
                                                className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2`}
                                                {...register('endDate', { validate: (value) => validateEndingDate(value, watch("startDate")) })}
                                            />
                                        )}
                                    </label>

                                    {errors.ending_date?.type === 'validate' && <span className='text-red-500 text-sm duration-300'>Invalid End date considering start date</span>}
                                </div>

                                {/* Checkbox for presently working */}
                                <label className='flex gap-2 justify-end text-base'>
                                    <input
                                        type="checkbox"
                                        onChange={e => {
                                            setPresent(e.target.checked);
                                            console.log(e.target.checked);
                                            if (e.target.checked) {
                                                setValue('ending_date', 'Present')
                                            } else {
                                                setValue('ending_date', '')
                                            }
                                        }}
                                    />
                                    Currently working here
                                </label>
                            </div>

                            {/* Submit */}
                            <div className='flex items-center justify-between'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-gray text-dark hover:bg-transparent hover:text- px-8 py-[6px] rounded-md duration-300 shadow-lg hover:shadow-gray/40' onClick={handlePreviousStep}>Previous</button>
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

            //skills
            case 3:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>What are some of your Skills</h1>
                        <p className='text-lightGray font-light max-w-[470px] mt-1'>We recommend adding at least six skills for better recommendations</p>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>

                            {/* Skill field */}
                            <label htmlFor="skills" className="text-xl text-purple -mb-3">Add a Skill</label>
                            <div className='relative border border-purple/40 rounded-md p-3'>
                                <div className='flex flex-wrap gap-x-2 gap-y-3'>
                                    {selectedSkills?.map((selectedSkill, index) => (
                                        <p key={index}
                                            className="flex items-center gap-1 px-3 rounded-md bg-purple/20 text-purple shadow-lg"
                                        >
                                            {selectedSkill}
                                            <button className=''
                                                onClick={() => removeSelectedSkill(selectedSkill)}
                                            >
                                                <FaXmark size='14' className='text-gray' />
                                            </button>
                                        </p>
                                    ))}
                                    <Controller
                                        name="skills"
                                        control={control}
                                        defaultValue={[]}
                                        render={({ field }) => (
                                            <input
                                                id='skills'
                                                type="text"
                                                className='text-dark focus:outline-none border-none focus:border-none group'
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="Search skills"
                                            />
                                        )}
                                    />
                                </div>
                                <ul className={`absolute top-full mt-2 bg-white text-dark shadow-4xl shadow-gray/30 rounded-lg max-h-40 overflow-y-auto px-5 py-2 border-b-4 border-purple ${suggestions.length ? 'block' : 'hidden'}`}>
                                    {suggestions.map((suggestion, index) => (
                                        <li key={index} className='cursor-pointer hover:text-purple duration-300'
                                            onClick={() => selectSkill(suggestion)} >{suggestion}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Divider */}
                            <p className='border-b-2 border-purple my-5'></p>

                            {/* Suggested skills */}
                            <div>
                                <h2 className='text-xl text-purple mb-3'>Do you want to add one of these fields?</h2>
                                <div className='flex flex-wrap items-center gap-4'>

                                    {/* Suggested skills array map */}
                                    {['Customer Service', 'Communication skills', 'Leadership', 'Maintenance', 'Problem Solving', 'Stress Management', 'Presentation Skill', 'Adaptability'].map((suggestedSkill) => (
                                        <div
                                            key={suggestedSkill}
                                            className='flex items-center gap-2 px-3 py-2 border border-gray/40 hover:border-purple hover:shadow-lg rounded-md cursor-pointer group duration-300'
                                            onClick={() => selectSkill(suggestedSkill)}
                                        >
                                            <AiOutlinePlus className='group-hover:text-purple duration-300' />
                                            <p className='text-lightGray capitalize'>{suggestedSkill}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Submit */}
                            <div className='flex items-center justify-between'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-gray text-dark hover:bg-transparent hover:text- px-8 py-[6px] rounded-md duration-300 shadow-lg hover:shadow-gray/40' onClick={handlePreviousStep}>Previous</button>
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

            //visibility
            case 4:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>Want to allow employers to find you on HireWave?</h1>

                        <form className='flex flex-col gap-4 mt-10' onSubmit={handleSubmit(onSubmit)}>
                            {/* Visible */}
                            <label htmlFor='visible' className='text-base border border-gray/40 hover:border-green px-5 py-3 rounded-lg shadow-lg cursor-pointer duration-300'>
                                <p className='bg-dark/5 px-3 rounded w-fit text-sm'>Recommended</p>
                                <div className=''>
                                    <div
                                        className='flex items-start justify-between'
                                    >
                                        <p className='flex items-center gap-2 text-green text-xl font-medium drop-shadow-xl'>
                                            <AiOutlineEye /> Searchable on HireWave
                                        </p>
                                        <input
                                            id='visible'
                                            name='visibility'
                                            type="radio"
                                            value='visible'
                                            {...register('visibility')}
                                            className='h-4 w-4'
                                        />
                                    </div>

                                    <p className='text-gray font-light mt-1'>Anyone can find your profile through searches and may contact you about jobs according to our terms</p>
                                </div>
                            </label>

                            {/* Invisible */}
                            <label htmlFor='invisible' className='text-base border border-gray/40 hover:border-green px-5 py-3 rounded-lg shadow-lg cursor-pointer duration-300'>
                                <div className=''>
                                    <div
                                        className='flex items-start justify-between'
                                    >
                                        <p className='flex items-center gap-2 text-green text-xl font-medium drop-shadow-xl'>
                                            <AiOutlineEyeInvisible /> Not Searchable on HireWave
                                        </p>
                                        <input
                                            id='invisible'
                                            name='visibility'
                                            type="radio"
                                            value='invisible'
                                            {...register('visibility')}
                                            className='h-4 w-4'
                                        />
                                    </div>

                                    <p className='text-gray font-light mt-1'>Anyone can't find your profile through searches and may contact you about jobs according to our terms</p>
                                </div>
                            </label>

                            {/* Submit */}
                            <div className='flex items-center justify-between'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-gray text-dark hover:bg-transparent hover:text- px-8 py-[6px] rounded-md duration-300 shadow-lg hover:shadow-gray/40' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* finish Button */}
                                <button className='bg-dark text-white hover:bg-green px-8 py-[6px] rounded-md duration-300 shadow-xl hover:shadow-green/20' type="submit"
                                    onClick={() => setFinish(true)}
                                >
                                    Finish
                                </button>
                            </div>

                        </form >
                    </div >
                );

            default:
                return null;
        }
    };

    if (finishLoading) {
        return <div className='flex h-screen items-center justify-center'><PageLoader /></div>
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

export default CandidateSignUpForm;