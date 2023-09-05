import { useEffect, useState } from 'react';
import { Stepper, Step } from "@tkwant/react-steps";
import { Controller, useForm } from 'react-hook-form';
import useSkills from '../Hooks/useSkills';
import useAxios from '../Hooks/useAxios';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

// react icons
import { FaXmark } from 'react-icons/fa6';
import { AiOutlinePlus, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const CandidateSignUpForm = () => {
    const { user } = useAuth();
    const [skillData, loading] = useSkills();
    const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm();

    const [curStep, setCurStep] = useState(0);
    const [finish, setFinish] = useState(false);

    //Form Submit function
    const onSubmit = data => {
        const newData = {
            role: 'candidate',
            userInfo: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
                title: data.title,
                phone: [data.country_code, data?.phone],
                category: data.category,
            },
            hourlyRate: data.hourlyRate,
            jobType: data.jobType,
            location: [data.country, data.state],
            address: data.address,
            skills: data?.skills?.map((skill) => skill),
            experience: [
                {
                    position: data.position,
                    companyName: data.organization,
                    location: data.companyLocation,
                    startDate: data.startDate,
                    endDate: data.endDate,
                },
            ],
            visibility: data.visibility,
        }

        setCurStep(curStep + 1)

        if (!finish) {
            return
        }

        useAxios.post('/users', newData)
            .then(data => {
                if (data.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Sign Up successfully',
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate('/', { replace: true })
                }
            })

    }

    // Previous step function
    const handlePreviousStep = () => {
        setCurStep(curStep - 1);
    };

    // Necessary json
    const years = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]

    const countryCodes = ["+1", "+44", "+49", "+33", "+81", "+86", "+91", "+61", "+7", "+55", "+54", "+51", "+52", "+53", "+20", "+27", "+82", "+62", "+92", "+94", "+62", "+63", "+66", "+84", "+95", "+670", "+975", "+380", "+375", "+373", "+377", "+423", "+41", "+46", "+47", "+48", "+351", "+34", "+39", "+31", "+420", "+880", "+421", "+386", "+385", "+385", "+352", "+352", "+43", "+353", "+354"]


    //States for Experience div
    const [present, setPresent] = useState(false);

    // Skills states
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

    const renderContent = () => {
        switch (curStep) {
            case 0:
                return (
                    <div className='max-w-2xl mx-auto border border-gray/40 hover:border-purple shadow-3xl shadow-gray/10 hover:shadow-gray/20 rounded-md px-10 py-8 duration-300'>
                        <h1 className='font-medium text-3xl text-dark drop-shadow-xl'>What are you looking for in your next job?</h1>
                        <p className='text-lightGray font-light max-w-[470px] mt-1'>Tell us the job details you're interested in to get better recommendations across HireWave</p>

                        <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
                            {/* title */}
                            <label className='text-gray'>Title*
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.title && 'border-red-400'}`}
                                    placeholder='e.g. Digital Marketing Specialist | SEO Expert'
                                    {...register("title", { required: true })}
                                />
                            </label>

                            {/* Job Type & hourly rate */}
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* Job Type */}
                                <label className='text-gray w-full'>Job type*
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
                                <label className='text-gray w-full'>Hourly rate*
                                    <input
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.hourlyRate && 'border-red-400'}`}
                                        placeholder='e.g. 10'
                                        {...register("hourlyRate", { required: true })}
                                    />
                                </label>
                            </div>

                            {/* category */}
                            <label className='text-gray'>Category*
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.category && 'border-red-400'}`}
                                    placeholder='e.g. Sales and Marketing'
                                    {...register("category", { required: true })}
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
                                <label className='text-gray w-full'>Country*
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
                                <label className='text-gray w-full'>State*
                                    <input
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.state && 'border-red-400'}`}
                                        placeholder='e.g. Dhaka | New work'
                                        {...register("state", { required: true })}
                                    />
                                </label>
                            </div>

                            {/* address */}
                            <label className='text-gray'>Address*
                                <input
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.address && 'border-red-400'}`}
                                    placeholder='e.g. Uttara Model Town, 1230'
                                    {...register("address", { required: true })}
                                />
                            </label>

                            {/* country code & phone number */}
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* country code */}
                                <label className='text-gray w-40'>Country code*
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
                                <label className='text-gray w-full'>Phone number*
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
                            <label className='text-gray'>Title*
                                <input
                                    className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                    placeholder='e.g: Front-End Developer'
                                    {...register("position")}
                                />
                            </label>

                            {/* organization & Location */}
                            <div className='flex flex-col sm:flex-row items-center gap-3'>
                                {/* organization */}
                                <label className='text-gray w-full'>Organization*
                                    <input
                                        className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                        placeholder='e.g. Mahitech Ltd'
                                        {...register("organization")}
                                    />
                                </label>

                                {/* location */}
                                <label className='text-gray w-full'>Location*
                                    <input
                                        className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                        placeholder='e.g. New work, USA'
                                        {...register("companyLocation")}
                                    />
                                </label>
                            </div>

                            {/* Starting & Ending date */}
                            <div>
                                <div className='flex flex-col sm:flex-row items-center gap-3'>
                                    {/* Start date */}
                                    <label className='text-gray w-full'>Start date*
                                        <input
                                            type="date"
                                            className='text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'
                                            {...register("startDate")}
                                        />
                                    </label>

                                    {/* end date */}
                                    <label className='text-gray w-full'>
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
                                <label className='flex gap-2 justify-end'>
                                    <input
                                        type="checkbox"
                                        onChange={e => {
                                            setPresent(e.target.checked);
                                            if (e.target.checked) setValue('ending_date', 'Present')
                                            else setValue('ending_date', '')
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
                            <label htmlFor="skills">Add a Skill</label>
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
                                    {['Customer Service', 'Communication skills', 'Leadership', 'Maintenance', 'react'].map((suggestedSkill) => (
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
                            <label htmlFor='visible' className='border border-gray/40 hover:border-green px-5 py-3 rounded-lg shadow-lg cursor-pointer duration-300'>
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
                            <label htmlFor='invisible' className='border border-gray/40 hover:border-green px-5 py-3 rounded-lg shadow-lg cursor-pointer duration-300'>
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