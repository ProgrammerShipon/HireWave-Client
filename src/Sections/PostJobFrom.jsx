import { useState } from "react";
import { useForm } from "react-hook-form";
import TextareaField from "../Components/TextareaField";
import SkillsField from "../Components/SkillsField";
import moment from "moment";
import useCurrentUser from "../Hooks/useCurrentUser";
import useRecruiterRole from "../Hooks/useRecruiterRole";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export default function PostJobForm() {
    const [overview, setOverview] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [skillsExperience, setSkillsExperience] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [skills, setSkills] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [recruitersRole, userLoading, refetch] = useRecruiterRole();
    const [axiosSecure] = useAxiosSecure();
    // console.log(recruitersRole)
    const onSubmit = (data) => {
        const currentDate = moment().format('ddd MMM YYYY HH:mm:ss [GMT]ZZ');
        // TO DO just dynamic the companyName, companyLogo and location
        const newJob = {
            ...data, postedDate: currentDate,
            companyName: recruitersRole?.name, companyMail: recruitersRole?.email,
            companyLogo: '', location: recruitersRole?.address, overview, requirements, skillsExperience, benefits, skills, applied: 0
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
                                rows={2}
                                placeholder="Enter your job title..."
                                {...register("title", { required: true })}
                                className="w-full text-2xl border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                            />
                            {errors.title && (
                                <span className="text-red-700">This field is required</span>
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
                                    <option value='Design & Creative'>Design & Creative</option>
                                    <option value='UI/UX Designer'>UI/UX Designer</option>
                                </select>
                                {errors.category && (
                                    <span className="text-red-700">This field is required</span>
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
                                    <option value='Full Time'>Full Time</option>
                                    <option value='Part Time'>Part Time</option>
                                </select>
                                {errors.jobType && (
                                    <span className="text-red-700">This field is required</span>
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
                                    placeholder="200-300 example..."
                                    {...register("salary", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                                />
                                {errors.salary && (
                                    <span className="text-red-700">This field is required</span>
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
                                    <span className="text-red-700">This field is required</span>
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
                                    placeholder="Number of Candidates..."
                                    {...register("quantity", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-2 focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                                />
                                {errors.quantity && (
                                    <span className="text-red-700">This field is required</span>
                                )}
                            </div>
                        </div>

                        {/* skills & closing date */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* skills */}
                            <SkillsField
                                skills={skills}
                                setSkills={setSkills}
                            />

                            {/* closing date */}
                            <div className="w-full">
                                <label className="text-dark font-medium" htmlFor="closingDate">
                                    Closing date:
                                </label>
                                <input
                                    id="closingDate"
                                    type="date"
                                    placeholder="Enter closing date..."
                                    {...register("closingDate", { required: true })}
                                    className="w-full border border-gray/40 focus:border-green py-[11px] focus:shadow-lg focus:shadow-gray/20 duration-300 px-3 rounded-md outline-none"
                                />
                                {errors.closingDate && (
                                    <span className="text-red-700">This field is required</span>
                                )}
                            </div>
                        </div>

                        {/* Overview */}
                        <TextareaField
                            label="Overview"
                            placeholder="Enter job Overview here..."
                            setUpdate={setOverview}
                        />

                        {/* requirements */}
                        <TextareaField
                            label="Requirements"
                            placeholder="Enter job requirements here..."
                            setUpdate={setRequirements}
                        />

                        {/* requirements */}
                        <TextareaField
                            label="Skill & Experience"
                            placeholder="Enter job skill & experience here..."
                            setUpdate={setSkillsExperience}
                        />

                        {/* benefits */}
                        <TextareaField
                            label="Benefits"
                            placeholder="Enter job benefits here..."
                            setUpdate={setBenefits}
                        />

                        {/* submit button */}
                        <button
                            type="submit"
                            className="w-full hover:bg-green hover:text-white border border-green py-2 px-3 rounded-md outline-none duration-300"
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
