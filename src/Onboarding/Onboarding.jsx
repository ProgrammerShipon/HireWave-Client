import { useState } from 'react';
import { Stepper, Step } from "@tkwant/react-steps";
import { Controller, useForm } from 'react-hook-form';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const isMobile = window.innerWidth > 768;
    const [curStep, setCurStep] = useState(0);
    const [finished, setFinished]= useState(false)
    const [hidden, setHidden] = useState(true)

    // States for skill checking
    const [skills, setSkills] = useState([{ id: 1, value: "" }]); 
    const [maximumWarning, setMaximumWarning]= useState(false)
    const navigate= useNavigate()

    //Form Submit function
    const onSubmit = data => {
        const newData=  
        finished? {
                    role: 'candidate',
                    userInfo: {
                        title: data?.job_title,
                        phone: [data?.country_code, data?.phone],
                        category: data?.job_category,
                        },
                    jobType: data?.job_type,
                    location: data?.country,
                    address: data?.address,
                    skills: data?.skills?.map((skill) => skill),
                    education: [
                    {
                        institute: data?.institution,
                        degree: data?.degree,
                        subject: data?.subject,
                        startYear: data?.starting_year,
                        endYear: data?.ending_year,
                    },
                    ],
                    experience: [
                    {
                        position: data?.profile,
                        companyName: data?.organization,
                        location: data?.location,
                        startDate: data?.starting_date,
                        endDate: data?.ending_date,
                    },
                    ],
                    visibility: data?.visible,
          }
        : {
                    userInfo: {
                    title: data?.job_title,
                    phone: [data?.country_code, data?.phone],
                    category: data?.job_category,
                    },
                    jobType: data?.job_type,
                    location: data?.country,
                    address: data?.address,
                    skills: data?.skills?.map((skill) => skill),
                    education: [
                    {
                        institute: data?.institution,
                        degree: data?.degree,
                        subject: data?.subject,
                        startYear: data?.starting_year,
                        endYear: data?.ending_year,
                    },
                    ],
                    experience: [
                    {
                        position: data?.profile,
                        companyName: data?.organization,
                        location: data?.location,
                        startDate: data?.starting_date,
                        endDate: data?.ending_date,
                    },
                    ],
                    visibility: data?.visible,
          };

        console.log(newData);
        setCurStep(curStep + 1)

        //TODO: Backend integration
        finished && navigate('/')
    }

    // Previous step function
    const handlePreviousStep = () => {
        setCurStep(curStep - 1);
    };

    // Necessary json
    const years = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,  2020, 2021, 2022, 2023]
    const countryCodes = ["+1", "+44", "+49", "+33", "+81", "+86", "+91", "+61", "+7", "+55", "+54", "+51", "+52", "+53", "+20", "+27", "+82", "+62", "+92", "+94", "+62", "+63", "+66", "+84", "+95", "+670", "+975", "+380", "+375", "+373", "+377", "+423", "+41", "+46", "+47", "+48", "+351", "+34", "+39", "+31", "+420", "+880", "+421", "+386", "+385", "+385", "+352", "+352", "+43", "+353", "+354"]


    //States for Experience div
    const [present, setPresent] = useState(false);
    const [workFromHome, setWorkFromHome] = useState(false);

         // Skills states
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    // Skills functions
    const skillsData = [ "JavaScript", "React.js", "Node.js", "Python", "Java", "SQL", "HTML/CSS", "Angular", "Vue.js", "Ruby on Rails", "C#", "PHP", "Swift", "Android Development", "iOS Development","DevOps","Data Science","UI/UX Design","Project Management","Machine Learning","Cloud Computing","Cybersecurity","Database Administration","Frontend Development","Backend Development","Full Stack Development","Web Design","Mobile App Design","Network Engineering","Digital Marketing","Content Writing","Search Engine Optimization (SEO)","Social Media Marketing","Product Management","Agile Methodologies","Blockchain","Artificial Intelligence (AI)","Augmented Reality (AR)","Virtual Reality (VR)","Customer Service","Public Speaking","Graphic Design","Video Editing","Data Analysis","Financial Analysis","Copywriting","Leadership","Team Management","Foreign Languages","Photography","Event Planning","Salesmanship","Negotiation","Project Coordination","Research Skills","Time Management","Conflict Resolution","Customer Relationship Management","Legal Research","Creative Problem Solving","Content Strategy","Market Research","Data Entry","Logistics","Quality Control","Healthcare Management","Clinical Research","Teaching","Public Relations","Social Work","Event Management","Database Management","Content Management","E-commerce","Mechanical Engineering","Electrical Engineering","Human Resources Management","Market Analysis","Financial Planning","Supply Chain Management","Video Production","Artificial Intelligence (AI)","Digital Illustration","Laboratory Techniques","Multilingualism","Public Policy Analysis","Business Intelligence","Legal Writing","Data Visualization","Event Coordination","Foreign Exchange Trading","Interior Design","Statistical Analysis","Sustainable Agriculture","Travel Planning","Content Marketing","Video Game Design","Public Health","Bio-informatics","Legal Research and Analysis","Machine Learning","Industrial Design","Crisis Management","Bilingual Communication","User Experience (UX) Research","Environmental Sustainability","Financial Modeling","Political Science","Medical Coding","Digital Advertising","Network Security","Conflict Mediation","Renewable Energy","Forensic Accounting","Machine Vision","Quantitative Analysis","Environmental Engineering","Blockchain Development","Social Psychology","Biotechnology","Strategic Planning","International Relations","Robotics Programming","Digital Forensics","Art Restoration","Urban Planning","Aerospace Engineering","Copy Editing","Clinical Psychology","Geographic Information Systems (GIS)","Fashion Design","Marine Biology","Community Outreach","Neuroscience","Artificial Intelligence Ethics","Digital Artistry","Astronomy","Clinical Research Coordination","Disaster Management"];


    const handleInputChange = (e) => {
    const value = e.target.value;
    setHidden(false)
    setInputValue(value);
    generateSuggestions(value);
    };

    const generateSuggestions = (inputValue) => {
    const matchingSkills = skillsData.filter((skill) =>
        skill.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(matchingSkills);
    };

    const selectSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
        register(`skills[${selectedSkills.length}]`, { value: skill });
        setSelectedSkills([...selectedSkills, skill]);
        setInputValue('');
    }
    };

    const removeSelectedSkill = (index) => {
    const updatedSkills = [...selectedSkills];
    updatedSkills.splice(index, 1);
    setSelectedSkills(updatedSkills);
    };

     //States and Functions used for visibility checking
     const [visibleChecked, setVisibleChecked] = useState(false);
     const [invisibleChecked, setInvisibleChecked] = useState(false);
     const handleVisibleClick = () => {
         setVisibleChecked(!visibleChecked);
         setInvisibleChecked(false);
     };
     const handleInvisibleClick = () => {
         setInvisibleChecked(!invisibleChecked);
         setVisibleChecked(false);
     };
     const onVisibilitySubmit = (data) => {
         data.visible = visibleChecked;
         data.invisible = invisibleChecked;
         onSubmit(data);
     };

     // Validate ending date for education and experiences part. end date has to be greater than starting date
     const validateEndingDate = (endingDate, startingDate) => {
        if (endingDate && startingDate) {
            return endingDate >= startingDate || "Ending date must be greater than or equal to the starting date";
        }
        return true; 
    };

    // Validate ending date for education. end year has to be greater than starting year
    const validateEndingYear = (endingYear, startingYear) => {
        if (endingYear && startingYear) {
            const endingYearValue = parseInt(endingYear, 10);
            const startingYearValue = parseInt(startingYear, 10);
            return endingYearValue > startingYearValue || "End year must be greater than the start year";
        }
        return true;
    };

    const renderContent = () => {
        switch (curStep) {
            //Job
            case 0:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>What are you looking for in your next job?</h1>
                        <p className='text-sm mb-8'>Tell us the job details you're interested in to get better recommendations across HireWave</p>
            
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Job Category */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Job Category <sup className='text-red-500'>*</sup></label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                placeholder='e.g. Sales and Marketing'
                                {...register("job_category", { required: true })}
                                />
                            </div>
                            {errors.Job_category?.type === 'required' && <span className='text-red-500'>Job Category is required</span>}
            
                            {/* Job title */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Job Title <sup className='text-red-500'>*</sup></label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                placeholder='e.g. Digital Marketing Specialist'
                                {...register("job_title", { required: true })}
                                />
                            </div>
                            {errors.job_title?.type === 'required' && <span className='text-red-500'>Job Title is required</span>}
            
                            {/* Job Type */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Job Type</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                placeholder='e.g. Full Time'
                                {...register("job_type")}
                                />
                            </div>  

                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-end mx-auto mt-8'>

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-8' type="submit"  value="Next" /> 
                                )}
                            </div>
                                   
                        </form>
                    </div>
                );

            //Location
            case 1:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Where are you located?</h1>
                        <p className='text-sm mb-8'>This helps match you with nearby jobs</p>
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Country */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Country <sup className='text-red-500'>*</sup></label>
                                <select 
                                    defaultValue="Bangladesh"
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    {...register("country", { required: true })}
                                >
                                <option value="" disabled>Select country</option>
                                    <option value="Australia">Australia</option>
                                    <option value="USA">USA</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="UK">UK</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>
                            {errors.country?.type === 'required' && <span className='text-red-500 duration-300'>Country is required</span>}

                            {/* Full address */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Full Address</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                placeholder='e.g. 45 West Sandore, Sector-5'
                                {...register("address")}
                                />
                            </div>

                            {/* Phone number */}
                            <div className='flex items-center gap-2 mt-5'>
                                <div className='w-40'>
                                <label className='text-dark block mb-1'>Country code</label>
                                    <select defaultValue="+880"
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                    {...register("country_code")}
                                    >
                                    {
                                        countryCodes.map((code, index) => <option
                                            key={index} value={code}>{code}</option>)
                                    }
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1'>Phone number</label>
                                    <input
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    type="number"
                                    {...register("phone", {maxLength: 10, minLength: 10})}
                                    />
                                </div>
                            </div>
                            {errors.phone?.type === 'maxLength' && <span className='text-red-500 duration-300'>Invalid Number</span>}
                            {errors.phone?.type === 'minLength' && <span className='text-red-500 duration-300'>Invalid Number</span>}
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit"  value="Next" /> 
                                )}
                            </div>
                        </form>
                    </div>
                );
            
            //Experience
            case 2:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto '>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Add a Work Experience <span className='text-green text-base'>(optional)</span></h1>
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Profile */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Profile</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g: Front-End Developer'
                                {...register("profile")}
                                />
                            </div>
            
                            {/* organization & Location */}
                            <div className='md:flex gap-5'>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>Organization</label>
                                    <input 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    type="text" 
                                    placeholder='e.g: Mahitech Ltd'
                                    {...register("organization")}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>Location</label>
                                    <input 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    type="text"
                                    {...register("location")}
                                    readOnly={watch("location") === 'Work from home'}
                                    />
                                </div>
                            </div>
            
                            {/* Checkbox for work from home */}
                            <div className='flex justify-end items-center mt-1'>
                                <label>Work from home</label>
                                <input 
                                className='ml-2 cursor-pointer' 
                                type="checkbox"
                                onChange={e => {
                                    setWorkFromHome(e.target.checked);
                                    if (e.target.checked) setValue('location', 'Work from home')
                                    else setValue('location', '')
                                }}
                                />
                            </div>
                            
                            {/* Starting & Ending date */}
                            <div className='md:flex gap-5'>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-1 md:mt-0'>Start date</label>
                                    <input 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                    type="date"
                                    {...register("starting_date")}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5 md:mt-0'>End date</label>
                                    {present ? (
                                        <input
                                            className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                            type='text'
                                            value='Present'
                                            readOnly
                                        />
                                    ) : (
                                        <input
                                            className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                            type='date'
                                            {...register('ending_date', { validate: (value) => validateEndingDate(value, watch("starting_date"))})}
                                        />
                                    )}
                                    {errors.ending_date?.type === 'validate' && <span className='text-red-500 text-sm duration-300'>Invalid End date considering start date</span>}
                                </div>
                            </div>
            
                            {/* Checkbox for presently working */}
                            <div className='flex justify-end items-center mt-1'>
                                <label className=''>Currently working here</label>
                                <input 
                                className='ml-2' 
                                type="checkbox"
                                onChange={e => {
                                    setPresent(e.target.checked);
                                    if (e.target.checked) setValue('ending_date', 'Present')
                                    else setValue('ending_date', '')
                                }}
                                />
                            </div>
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit"  value="Next" /> 
                                )}
                            </div>
                        </form>
                    </div>
                );
            
            //Education
            case 3:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Add an Education Detail <span className='text-green text-base'>(optional)</span></h1>

                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Institution Name */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Institution Name</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g. Notre Dame College'
                                {...register("institution")}
                                />
                            </div>

                            {/* Starting & Ending year */}
                            <div className='md:flex gap-5'>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>Start Year</label>
                                    <select 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                    {...register("starting_year")}
                                    >
                                    {
                                        years.map((year, index) => <option
                                            key={index} value={year}>{year}</option>)
                                    }
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>End Year</label>
                                    <select 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                    {...register('ending_year', {  validate: (value) => validateEndingYear(value, watch("starting_year")) })}
                                    >
                                    {
                                        years.map((year, index) => <option
                                            key={index} value={year}>{year}</option>)
                                    }
                                    </select>
                                    {errors.ending_year?.type === 'validate' && <span className='text-red-500 text-sm duration-300'>Invalid End year considering start year</span>}
                                </div>
                            </div>

                            {/* Degree & Subject */}
                            <div className='md:flex gap-5'>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>Degree</label>
                                    <input 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    type="text" 
                                    placeholder='e.g. B.Sc (Hons)'
                                    {...register("degree")}
                                    />
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>Subject</label>
                                    <input 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    type="text" 
                                    placeholder='e.g. Computer Science'
                                    {...register("subject")}
                                    />
                                </div>
                            </div>
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit"  value="Next" /> 
                                )}
                            </div>
                        </form>
                    </div>
                );

            //Skills
            case 4:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>What are some of your Skills</h1>
                        <p className='text-sm mb-8'>We recommend adding at least six skills for better recommendations</p>

                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>

                            {/* Skill field */}
                            <div>
                                <label className='text-dark block mb-1'>Add a Skill</label>
                                <div className="flex flex-wrap gap-3 mb-3 mt-3">
                                    {selectedSkills?.map((selectedSkill, index) => (
                                    <div className="border border-green pl-3 rounded-full" key={index}>
                                        {selectedSkill}
                                        <button className='text-sm hover:font-semibold hover:text-red-500 rounded-full px-1 border border-red-500 ml-2'
                                        onClick={() => removeSelectedSkill(index)}
                                        >
                                        ✕
                                        </button>
                                    </div>
                                    ))}
                                </div>
                                <Controller
                                    name="skills"
                                    control={control}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                    <input
                                        type="text"
                                        {...field}
                                        className='rounded outline-none h-10 border border-dark/20 w-full px-3 py-2 max-w-5xl'
                                        {...field}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="Search for a skill"
                                    />
                                    )}
                                />
                                <ul className={`bg-slate-100 rounded-b-lg max-h-28 overflow-y-scroll px-5 py-2 ${hidden? 'hidden' : 'block'}`}>
                                    {suggestions.map((suggestion, index) => (
                                    <li key={index} className='cursor-pointer'
                                    onClick={() => selectSkill(suggestion)} >{suggestion}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Divider */}
                            <p className='border border-green mt-10 mb-6'></p>

                            {/* Suggested skills */}
                            <div>
                                <h2 className='text-xl text-green mb-5'>Do you want to add one of these fields?</h2>
                                <div className='grid md:grid-cols-2 gap-5'>

                                    {/* Suggested skills array map */}
                                    {['Customer Service', 'Communication skills', 'Leadership', 'Maintenance'].map((suggestedSkill) => (
                                    <div
                                        key={suggestedSkill}
                                        className='flex items-center gap-3 px-5 py-2 border border-dark hover:border-green hover:shadow-lg rounded-lg cursor-pointer group'
                                        onClick={() => selectSkill(suggestedSkill)}
                                    >
                                        <AiOutlinePlus className='group-hover:text-green' />
                                        <p>{suggestedSkill}</p>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit"  value="Next" /> 
                                )}
                            </div>
                        </form>
                    </div>
                );

            //Visibility
            case 5:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Want to allow employers to find you on HireWave?</h1>

                        <form className='relative' onSubmit={handleSubmit(onVisibilitySubmit)}>
                            {/* Visible */}
                            <div 
                            className='border border-dark/40 px-5 py-3 rounded-lg hover:shadow-lg mt-5 cursor-pointer'
                            onClick={handleVisibleClick}
                            >
                                <p className='bg-dark/5 px-3 rounded w-fit text-sm'>Recommended</p>
                                <div className='flex justify-between items-center gap-2 mt-2 mb-1'>
                                    <div>
                                        <p className='flex items-center gap-2 text-dark'><AiOutlineEye /> <span className='font-semibold'>Searchable on HireWave</span></p>
                                    </div>
                                    <input
                                        id="visible"
                                        className='w-4 h-4 rounded-full'
                                        type="radio"
                                        name="visible"
                                        {...register('visible')}
                                        checked={visibleChecked}
                                        onChange={() => {}}
                                    />
                                </div>
                                <p className='text-sm'>Employers can find your resume through searches and may contact you about jobs according to our terms</p>
                            </div>

                            {/* Invisible */}
                            <div 
                            className='border border-dark/40 px-5 py-3 rounded-lg hover:shadow-lg mt-5 cursor-pointer'
                            onClick={handleInvisibleClick}
                            >
                                <div className='flex justify-between items-center gap-2 mb-1 mt-1'>
                                    <div>
                                        <p className='flex items-center gap-2 text-dark'><AiOutlineEyeInvisible /> <span className='font-semibold'>Not Searchable on HireWave</span></p>
                                    </div>
                                    <input
                                        id="invisible"
                                        className='w-4 h-4 rounded-full'
                                        type="radio"
                                        name="invisible"
                                        {...register('invisible')}
                                        checked={invisibleChecked}
                                        onChange={() => {}}
                                    />
                                </div>
                                <p className='text-sm'>Employers can find your resume through searches and may contact you about jobs according to our terms</p>
                            </div>
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit" onClick={() => setFinished(true)} /> 
                            </div>
                            
                        </form>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <>
            {
                isMobile?
                <Stepper
                    style={{ width: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "60px", marginBottom: "20px" }}
                    curStep={curStep}
                    setCurStep={setCurStep}
                    progressBarBackgroundColor='green'
                >
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step /> 
                </Stepper>
            :
                <Stepper
                    style={{ width: "400px", marginLeft: "auto", marginRight: "auto", marginTop: "60px", marginBottom: "20px" }}
                    curStep={curStep}
                    setCurStep={setCurStep}
                    progressBarBackgroundColor='green'
                >
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step /> 
                </Stepper> 
            }
            {renderContent()}         
        </>
    );
};

export default Onboarding;
