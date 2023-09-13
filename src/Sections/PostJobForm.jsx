import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from "react-icons/hi";
import { LuLayoutTemplate } from "react-icons/lu";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CustomModal from "../Components/CustomModal";
import Divider from "../Components/Divider";
import GetAgoTime from "../Components/GetAgoTime";
import useAllCategories from "../Hooks/useAllCategories";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useRecruiterRole from "../Hooks/useRecruiterRole";
import useSkills from "../Hooks/useSkills";

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline"],
        [
            { list: "ordered" },
            { list: "bullet" }
        ],
        [{ 'align': [] }]
    ]
}

export default function PostJobForm() {

    //States
    const [description, setDescription] = useState("");
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const {
      control,
      watch,
      register,
      setValue,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();

    //Imported hooks
    const [recruitersRole, userLoading, refetch] = useRecruiterRole();
    const [allCategoriesData] = useAllCategories()
    const [skillData, loading] = useSkills();
    const subCategories = allCategoriesData?.find(category => category?.name == recruitersRole?.category)
    const [axiosSecure] = useAxiosSecure();
    console.log(recruitersRole);

    //Modal functions
    const handlePreviewModal =(e) => {
        if(e == "edit") setIsPreviewModalOpen(true)
        else if (e == "cancel") setIsPreviewModalOpen(false)
    }
    const handleDemoModal =(e) => {
        if(e == "edit") setIsDemoModalOpen(true)
        else if (e == "cancel") setIsDemoModalOpen(false)
    }

    const currentDate = moment().format('ddd MMM YYYY HH:mm:ss [GMT]ZZ');
    const selectedSubCategory = watch('sub_category', '');

    //onSubmit function
    const onSubmit = (data) => {
        const newJob = {
            title: data?.title,
            category: recruitersRole?.category,
            subcategory: data?.subCategory,
            jobType: data?.jobType,
            salary: data?.salary,
            experience: data?.experience,
            quantity: data?.quantity,
            skills: data?.skills?.map((skill) => skill),
            closingDate: data?.closingDate,
            overview: data?.overview,
            description: description,
            applied: 0,
            postedDate: currentDate,
            open: true,
            status: "pending",
            companyName: recruitersRole?.name, 
            email: recruitersRole?.email,
            location: [recruitersRole?.location[0], recruitersRole?.location[1]], 
            companyLogo: recruitersRole?.image, 
            location : recruitersRole?.location,
        };
        console.log(newJob);

        axiosSecure.post(`/allJobs`, newJob)
            .then((res) => {
                if (res.status === 200) {
                    reset();
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
                        <h2 className="text-3xl md:text-4xl text-green ">Post a Job</h2>
                        <p className="text-gray -mt-2 mb-5">All the fields below are required to post a job on HireWave</p>

                        {/* job-title */}
                        <div className="w-full">
                            <label className='text-gray text-base' htmlFor="name">
                                Job Title:
                            </label>
                            <input
                                id="title"
                                type="text"
                                placeholder="Enter your job title"
                                {...register("title", { required: true })}
                                className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.title && 'border-red-400'}`}
                            />
                        </div>

                        {/* Sub category */}
                        <h2 className="text-green text-base md:text-lg">Choose the most suitable sub-category for the job</h2>
                        <div className='flex flex-wrap gap-3'>
                            {
                                subCategories?.subcategories.map((sub_category) => (
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
                                                    <label htmlFor={sub_category.name} className='flex items-center gap-2 font-medium text-sm mb-[2px]'>
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

                        {/* Divider */}
                        <p className="border border-gray my-5"></p>  

                        <h2 className="text-green text-lg md:text-xl">✅ Provide the following data to facilitate improved candidate selection</h2>
                        {/* Job Type and Experience */}
                        <div className="md:flex items-center gap-5">
                            {/* job type */}
                            <div className="w-full">
                                <label className='text-gray text-base' htmlFor="jobType">
                                    Job Type:
                                    <select
                                        id="jobType"
                                        defaultValue=""
                                        {...register("jobType", { required: true })}
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 cursor-pointer ${errors.jobType && 'border-red-400'}`}
                                    >
                                        <option value='' disabled>Select Type</option>
                                        <option value='Remote'>Remote</option>
                                        <option value='Full-Time'>Full-Time</option>
                                        <option value='Part-Time'>Part-Time</option>
                                    </select>
                                </label>
                            </div>

                            {/* experience */}
                            <div className="w-full mt-3 md:mt-0">
                                <label className='text-gray text-base' htmlFor="experience">
                                    Experience Level:
                                
                                    <select
                                        id="experience"
                                        {...register("experience", { required: true })}
                                        className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 cursor-pointer ${errors.experience && 'border-red-400'}`}
                                    >
                                        <option value=''>Select Level</option>
                                        <option value='Entry Level'>Entry Level</option>
                                        <option value='Intermediate'>Intermediate</option>
                                        <option value='Expert'>Expert</option>
                                    </select>
                                </label>    
                            </div>
                        </div>

                        {/* Salary & Candidates */}
                        <div className="md:flex items-center gap-5">

                            {/* salary */}
                            <div className="w-full">
                                <label className='text-gray text-base' htmlFor="salary">
                                    Monthly Salary: $
                                </label>
                                <input
                                    id="salary"
                                    type="number"
                                    placeholder="Write a range (200-300)"
                                    {...register("salary", { required: true})}
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.salary && 'border-red-400'}`}
                                />
                                {errors.salary=="validate" && (
                                    <span className="text-red-600">Salary cannot be negative number</span>
                                )}
                            </div>

                            {/* number of candidates */}
                            <div className="w-full mt-3 md:mt-0">
                                <label className='text-gray text-base' htmlFor="quantity">
                                    Number of Candidates:
                                <input
                                    id="quantity"
                                    type="number"
                                    placeholder="Vacant seats for the post"
                                    {...register("quantity", { required: true })}
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.quantity && 'border-red-400'}`}
                                />
                                </label>
                            </div>
                        </div>

                        {/* skills & closing date */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* Skills */}
                            <div className="w-full col-span-2">
                                <label className='text-gray text-base' htmlFor="skills">
                                    Add Skills
                                </label>
                                <div className='relative text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2'>
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
                                <label className='text-gray text-base' htmlFor="closingDate">
                                    Closing date:
                                </label>
                                <input
                                    id="closingDate"
                                    type="date"
                                    placeholder="Enter closing date"
                                    {...register("closingDate", { required: true })}
                                    className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full px-3 py-2 ${errors.closingDate && 'border-red-400'}`}
                                />
                            </div>
                        </div>

                        {/* Overview */}
                        <div>
                            <label className='text-gray text-base' htmlFor="overview">
                                Overview:
                            </label>
                            <textarea
                                id="overview"
                                placeholder="Enter your company overview"
                                {...register("overview", { required: true })}
                                className={`text-dark rounded-md focus:outline-none border border-gray/40 focus:border-purple w-full h-32 px-3 py-2 ${errors.overview && 'border-red-400'}`}
                            />
                        </div>

                        <p className="border border-gray my-5"></p>  

                        <h2 className="text-green text-lg md:text-xl">📜 Enlist Job Responsibilities, Requirements, Benefits and other necessary details</h2>

                        {/* Job Description */}
                        <div>
                            <label className='flex justify-end mb-2'>
                                <div onClick={() => handleDemoModal("edit")} className="text-dark bg-gray/20 rounded-full cursor-pointer px-2">See Demo</div>
                            </label>
                            <ReactQuill
                                theme="snow"
                                value={description}
                                modules={modules}
                                placeholder="List item is recommended"
                                onChange={setDescription}
                            />
                        </div>

                        {/* Button */}
                        <div className='flex items-center justify-end gap-8 mt-5'>
                            {/* Preview Button */}
                            <div className='text-green hover:text-green/40 duration-300 flex flex-col items-center mt-2 cursor-pointer' onClick={() => handlePreviewModal("edit")}
                            > 
                                <FaEye size={24} />
                                <span className="text-xs text-gray">Preview</span>
                            </div>

                            {/* Submit Button */}
                            <button className='bg-dark text-white hover:bg-green px-8 py-[6px] rounded-md duration-300 shadow-xl hover:shadow-green/20' type="submit">
                                Post Job
                            </button>
                        </div>
                    </form>

                    {isPreviewModalOpen && (
                        <CustomModal
                        isModalOpen={isPreviewModalOpen}
                        setIsModalOpen={setIsPreviewModalOpen}
                        handleModal={handlePreviewModal}
                        larger= {true}
                        >
                        <div id="postJob" className="p-8 -m-8 border rounded-lg border-purple shadow-4xl shadow-gray/40">
                            <div>
                                <h1 className="text-2xl font-medium text-dark">{watch('title')}</h1>
                                <p className="text-sm italic text-gray">
                                    Posted <GetAgoTime datetime={currentDate} />
                                </p>
                            </div>

                            {/* company details */}
                            <div className="flex items-center gap-2 mt-6">
                                <div className="w-16 h-16 overflow-hidden rounded-lg shadow-xl">
                                    <img
                                        className="object-cover object-center w-full"
                                        src={recruitersRole?.companyLogo}
                                        alt={recruitersRole?.companyName}
                                    />
                                </div>
                                <div className="mt-1">
                                    <p className="text-xl font-medium duration-300 text-dark drop-shadow-lg hover:text-green line-clamp-2">{recruitersRole?.companyName}</p>
                                    <p className="text-gray">{recruitersRole?.category}</p>
                                </div>
                            </div>

                            {/* job details */}
                            <div className="flex flex-col items-start justify-between gap-2 mt-4 duration-300 sm:flex-row sm:items-end">
                                <div className="flex items-center gap-2">
                                    <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                                        {watch('jobType')}
                                    </p>

                                    <p className="text-purple bg-purple/10 px-4 py-[2px] rounded-full shadow-lg shadow-purple/20 flex items-center gap-1">
                                        <BiMap /> {recruitersRole?.location[0]}, {recruitersRole?.location[1]}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start mb-6 md:flex-row md:gap-8">
                                <div className="mt-5">
                                    <p className="flex items-center gap-1 text-dark">
                                        <HiOutlineCurrencyDollar /> Salary:{" "}
                                        <span className="ml-1 text-gray">${watch('salary')}/month</span>
                                    </p>
                                    <p className="flex items-center gap-1 mt-1 text-dark">
                                        <AiOutlineCalendar /> Closing date:{" "}
                                        <span className="ml-1 text-gray">{watch('closingDate')}</span>
                                    </p>
                                </div>
                                <div className="mt-1 md:mt-5">
                                    <p className="flex items-center gap-1 text-dark">
                                        <BsBuildingGear /> Experience:{" "}
                                        <span className="ml-1 text-gray">{watch('experience')}</span>
                                    </p>
                                    <p className="flex items-center gap-1 mt-1 text-dark">
                                        <HiOutlineUserGroup /> Quantity:{" "}
                                        <span className="ml-1 text-gray">{watch('quantity')} Person</span>
                                    </p>
                                </div>
                            </div>

                            <Divider />

                            {/* job description */}
                            <div className="my-6">
                                <h2 className="text-3xl font-medium text-dark">Description</h2>

                                {/* Overview */}
                                <div className="mt-5 mb-3">
                                    <h4 className="text-xl">Overview:</h4>
                                    <p className="text-gray">{watch('overview')}</p>
                                </div>

                                {/* Requirements */}
                                <p dangerouslySetInnerHTML={{__html: description}}></p>

                                <Divider />

                                {/* skills */}
                                <div className="mt-6">
                                    <h2 className="text-3xl font-medium text-dark">Skills</h2>
                                    <div className="flex flex-wrap items-center gap-2 mt-4 duration-300">
                                        {watch('skills').map((skill, index) => (
                                            <p
                                                key={index}
                                                className="bg-purple/20 hover:bg-white text-purple px-4 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                                            >
                                                {skill}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </CustomModal>
                    )}

                    {isDemoModalOpen && (
                        <CustomModal
                        isModalOpen={isDemoModalOpen}
                        setIsModalOpen={isDemoModalOpen}
                        handleModal={handleDemoModal}
                        >
                        {/* Modal Heading */}
                        <h2 className="px-2 pt-4 pb-2 flex items-center gap-3 border-b border-dark/20 mb-5 -mt-3">
                            <LuLayoutTemplate size={20} />
                            <p className="text-dark text-xl">Job Description Demo</p>
                        </h2>

                        {/* Modal content */}
                        <h2 className="text-xl mb-2 mt-5">Job Responsibilities:</h2>
                        <ul>
                            <li className="list-item">Conduct research on AI ethics and its impact on society.</li>
                            <li className="list-item">Analyze and address ethical dilemmas in AI development.</li>
                            <li className="list-item">Contribute to publications in AI ethics or related topics.</li>
                        </ul>
                        <h2 className="text-xl mb-2 mt-5">Job Requirements:</h2>
                        <ul>
                            <li className="list-item">Proficiency in blockchain programming languages (e.g., Solidity).</li>
                            <li className="list-item">Experience with Ethereum and other blockchain platforms.</li>
                            <li className="list-item">Strong problem-solving and debugging skills.</li>
                        </ul>
                        <h2 className="text-xl mb-2 mt-5">Benefits:</h2>
                        <ul>
                            <li className="list-item">Collaborative and innovative work environment.</li>
                            <li className="list-item">Opportunity to work on groundbreaking blockchain solutions.</li>
                            <li className="list-item">Collaborative and innovative work environment.</li>
                        </ul>
                        <p className="text-dark text-center mt-5">---Add other necessary fields like this---</p>
                        
                        </CustomModal>
                    )}

                    {/* suggestions */}
                    <div className="p-6 md:p-8 shadow-4xl shadow-gray/40 flex flex-col gap-8">
                        {/* Job Title */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Job Title:</h2>
                            <p className="text-lightGray">Use relevant keywords in the job title for better search visibility among potential candidates.</p>
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
                            <p className="text-lightGray">Include all the skills that are relevant to the jobs you offer. The job post will be suggested to Candidates with similar skills.</p>
                        </div>

                        {/* Overview */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Overview:</h2>
                            <p className="text-lightGray">Describe Your Company Overview in a detailed way. To create an impactful job overview, provide essential details about your company, and highlight what makes your company an appealing place to work.</p>
                        </div>

                        {/* Responsibilities */}
                        <div>
                            <h2 className="text-dark text-lg underline underline-offset-2">Responsibilities:</h2>
                            <p className="text-lightGray">Specify the responsibilities for the role, ensuring candidates understand the expectations clearly.</p>
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
