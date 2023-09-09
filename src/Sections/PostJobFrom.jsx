import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import useCurrentUser from "../Hooks/useCurrentUser";
import useRecruiterRole from "../Hooks/useRecruiterRole";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAllCategories from "../Hooks/useAllCategories";
import useSkills from "../Hooks/useSkills";
import { FaXmark } from "react-icons/fa6";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules ={
    toolbar: [
        [ { header: [ 1, 2, 3, 4, 5, 6, false ] } ],
        [ { size: [] } ],
        [ "bold", "italic", "underline", "strike"],
        [
            { list : "ordered" },
            { list : "bullet" },
            { indent : "-1" },
            { indent : "+1" }
        ],
        [ "link", "image", "video" ]
    ]
}

export default function PostJobForm() {

    //States
    const [requirements, setRequirements] = useState('');
    const [skillsExperience, setSkillsExperience] = useState('');
    const [benefits, setBenefits] = useState('');
    const editor = useRef(null);

    const { control, register, handleSubmit, formState: { errors } } = useForm();

    //Imported hooks
    const [recruitersRole, userLoading, refetch] = useRecruiterRole();
    const [allCategoriesData] = useAllCategories()
    const [skillData, loading] = useSkills();
    console.log(allCategoriesData);
    const [axiosSecure] = useAxiosSecure();

    //onSubmit function
    const onSubmit = (data) => {
        const currentDate = moment().format('ddd MMM YYYY HH:mm:ss [GMT]ZZ');
        // TO DO just dynamic the companyName, companyLogo and location
        const newJob = {
            title : data?.title,
            category : data?.category,
            jobType : data?.jobType,
            salary : data?.salary,
            experience: data?.experience,
            quantity : data?.quantity,
            skills: data?.skills?.map((skill) => skill),
            closingDate : data?.closingDate,
            overview : data?.overview,
            requirements,
            skillsExperience,
            benefits,
            applied: 0,
            postedDate: currentDate,
            open : true,
            status : "pending"
            // companyName: recruitersRole?.name, 
            // email: recruitersRole?.email,
            // location: recruitersRole?.address, 
            // companyLogo: recruitersRole?.image, 
            // location : recruitersRole?.location,
        };

        console.log(newJob);
       const res= axiosSecure.post(`/allJobs`, newJob)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Job Post successfully',
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            });
    }

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
    
    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* form */}
                    <form className="md:col-span-2 flex flex-col gap-4 p-6 md:p-12 shadow-4xl shadow-gray/40" onSubmit={handleSubmit(onSubmit)}>
                        {/* job-title */}
                        <div className="w-full">
                            <label className="text-dark font-medium" htmlFor="name">
                                Title:
                            </label>
                            <textarea
                                id="title"
                                placeholder="Enter your job title"
                                {...register("title", { required: true })}
                                className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                            />
                            {errors.title && (
                                <span className="text-red-700">Job Title is required</span>
                            )}
                        </div>

                        {/* job category & type */}
                        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-3">
                            {/* job category */}
                            <div className="w-full md:col-span-3">
                                <label className="text-dark font-medium" htmlFor="category">
                                    Category:
                                </label>
                                <select
                                    id="category"
                                    {...register("category", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none cursor-pointer"
                                >
                                    <option value=''>Select Category</option>
                                   {
                                    allCategoriesData.map( category => 
                                    <option value={category.name}>{category.name}</option>)
                                   }
                                </select>
                                {errors.category && (
                                    <span className="text-red-700">Job Category is required</span>
                                )}
                            </div>

                            {/* job type */}
                            <div className="w-full md:col-span-2">
                                <label className="text-dark font-medium" htmlFor="jobType">
                                    Job Type:
                                </label>
                                <select
                                    id="jobType"
                                    {...register("jobType", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none cursor-pointer"
                                >
                                    <option value=''>Select Type</option>
                                    <option value='Remote'>Remote</option>
                                    <option value='Full-Time'>Full-Time</option>
                                    <option value='Part-Time'>Part-Time</option>
                                </select>
                                {errors.jobType && (
                                    <span className="text-red-700">Job Type is required</span>
                                )}
                            </div>
                        </div>

                        {/* experience & salary */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                            {/* salary */}
                            <div className="w-full">
                                <label className="text-dark font-medium" htmlFor="salary">
                                    Monthly Salary: $
                                </label>
                                <input
                                    id="salary"
                                    type="number"
                                    placeholder="Write a range (200-300)"
                                    {...register("salary", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                                />
                                {errors.salary && (
                                    <span className="text-red-700">Salary is required</span>
                                )}
                            </div>

                            {/* experience */}
                            <div className="w-full">
                                <label className="text-dark font-medium" htmlFor="experience">
                                    Experience Level:
                                </label>
                                <select
                                    id="experience"
                                    {...register("experience", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none cursor-pointer"
                                >
                                    <option value=''>Select Level</option>
                                    <option value='Entry Level'>Entry Level</option>
                                    <option value='Intermediate'>Intermediate</option>
                                    <option value='Expert'>Expert</option>
                                </select>
                                {errors.experience && (
                                    <span className="text-red-700">Experience is required</span>
                                )}
                            </div>

                            {/* number of candidates */}
                            <div className="w-full">
                                <label className="text-dark font-medium" htmlFor="quantity">
                                    Number of Candidates:
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    placeholder="Vacant seat for the post"
                                    {...register("quantity", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                                />
                                {errors.quantity && (
                                    <span className="text-red-700">Number of candidates is required</span>
                                )}
                            </div>
                        </div>

                        {/* skills & closing date */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* Skills */}
                            <div className="w-full col-span-2">
                                <label className="text-dark font-medium" htmlFor="skills">
                                    Add a Skill
                                </label>
                                <div className='w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none'>
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
                            </div>

                            {/* closing date */}
                            <div className="w-full">
                                <label className="text-dark font-medium" htmlFor="closingDate">
                                    Closing date:
                                </label>
                                <input
                                    id="closingDate"
                                    type="date"
                                    placeholder="Enter closing date"
                                    {...register("closingDate", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-[11px] focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                                />
                                {errors.closingDate && (
                                    <span className="text-red-700">Closing Date is required</span>
                                )}
                            </div>
                        </div>

                        {/* Overview */}
                        <div>
                            <label className="text-dark font-medium" htmlFor="overview">
                                Overview:
                            </label>
                            <textarea
                                id="overview"
                                placeholder="Enter your company overview"
                                {...register("overview", { required: true })}
                                className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 h-32 rounded-md outline-none"
                            />
                            {errors.overview && (
                                <span className="text-red-700">Overview is required</span>
                            )}
                        </div>

                        {/* Job Responsibilities */}
                        <div>
                            <label className="text-dark font-medium" htmlFor="name">
                                Job Responsibilities:
                            </label>
                            <ReactQuill
                                theme="snow" 
                                value={requirements}
                                modules={modules}
                                placeholder="Enter the list of your job responsibilities"
                                onChange={setRequirements} 
                            />
                        </div>

                        {/* Skills and Experiences */}
                        <div>
                            <label className="text-dark font-medium" htmlFor="name">
                                Skills & Experiences Required:
                            </label>
                            <ReactQuill
                                theme="snow" 
                                value={skillsExperience}
                                modules={modules}
                                placeholder="Enter the list of skills and experiences required for the job"
                                onChange={setSkillsExperience} 
                            />
                        </div>

                        {/* benefits */}
                        <div>
                            <label className="text-dark font-medium" htmlFor="name">
                                Benefits:
                            </label>
                            <ReactQuill
                                theme="snow" 
                                value={benefits}
                                modules={modules}
                                placeholder="Enter the list of benefits candidate will receive"
                                onChange={setBenefits} 
                            />
                        </div>

                        {/* submit button */}
                        <button
                            type="submit"
                            className="w-full hover:bg-green hover:text-white border border-green py-2 px-3 rounded-md outline-none duration-300 mt-5"
                        >
                            Post Job
                        </button>
                    </form>

                    {/* suggestions */}
                    <div className="p-6 md:p-8 shadow-4xl shadow-gray/40 flex flex-col gap-8">
                        {/* Job Title */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Job Title:</h2>
                            <p className="text-lightGray">Title is the most important place to Include relevant keywords in the job title for better search visibility among potential candidates.</p>
                        </div>

                        {/* category */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Category:</h2>
                            <p className="text-lightGray">Choose the category most suitable for your job.</p>
                        </div>

                        {/* salary */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Salary:</h2>
                            <p className="text-lightGray">Transparently state the offered salary or salary range, ensuring candidates have a clear understanding of the compensation package. Example $340-400</p>
                        </div>

                        {/* skills */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Skills:</h2>
                            <p className="text-lightGray">Skills your job with buzz words that are relevant to the jobs you offer.</p>
                        </div>

                        {/* Overview */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Overview:</h2>
                            <p className="text-lightGray">Describe Your Job Overview best ways. To create an impactful job overview, succinctly introduce the role, provide essential details about responsibilities and qualifications, and highlight what makes your company an appealing place to work.</p>
                        </div>

                        {/* requirements */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Requirements:</h2>
                            <p className="text-lightGray">Specify the qualifications, skills, and experience necessary for the role, ensuring candidates understand the expectations clearly.</p>
                        </div>

                        {/* skill & experience */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Skill & Experience:</h2>
                            <p className="text-lightGray">Specify the essential skills and experience needed for the role, providing a clear picture of candidate qualifications.</p>
                        </div>

                        {/* benefits */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Benefits:</h2>
                            <p className="text-lightGray">Highlight the advantages and perks of the position, showcasing what makes it an attractive opportunity for potential candidates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
