import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function PostJobForm() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newClass = { ...data, status: "pending", students: 0, feedback: "" };
    console.log(newClass);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <section>
      <div className="container bg-[#ffffff] py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-5">
        <div>
          {step === 1 && (
            <form onSubmit={handleSubmit(handleNext)}>
              {/* job-title */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Job Title:
                  </label>
                  <input
                    id="title"
                    placeholder="Enter job title"
                    {...register("title", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.title && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* company-name */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Company Name:
                  </label>
                  <input
                    id="company"
                    placeholder="Enter company name"
                    {...register("company", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.company && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* location */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Job location:
                  </label>
                  <input
                    id="location"
                    placeholder="Enter job location"
                    {...register("location", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.location && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* duration */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Job duration:
                  </label>
                  <input
                    id="duration"
                    placeholder="Enter duration"
                    {...register("duration", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.duration && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* job type & time */}
              <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                <div className="w-full ">
                  <label className="text-gray" htmlFor="image">
                    Job Type:
                  </label>
                  <select
                    id="select"
                    {...register("select", { required: true })}
                    className="w-full border text-gray border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none focus:outline-none cursor-pointer"
                  >
                    <option>Remote</option>
                    <option>Onside</option>
                    <option>Offsite</option>
                  </select>
                  {errors.select && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-gray" htmlFor="instructorImage">
                    Start Time:
                  </label>
                  <input
                    id="time"
                    placeholder="Enter start time"
                    {...register("time", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.time && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* application & salary */}
              <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Job application:
                  </label>
                  <input
                    id="application"
                    type="number"
                    placeholder="Enter job application"
                    {...register("application", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.application && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-gray" htmlFor="instructorImage">
                    Salary:
                  </label>
                  <input
                    id="salary"
                    type="number"
                    placeholder="Enter job salary"
                    {...register("salary", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.salary && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* next-button */}
              <div className="py-3 flex gap-4">
                <div className="w-full ">
                  <button
                    type="submit"
                    className="w-full hover:bg-green hover:text-white border border-green py-3 rounded-md outline-none duration-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Render the previous form fields here */}
              {/* benefits */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Benefits:
                  </label>
                  <input
                    id="benefits"
                    placeholder="Enter job benefits"
                    {...register("benefits", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.benefits && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* job-responsibility */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Responsibility:
                  </label>
                  <input
                    id="responsibility"
                    placeholder="Enter job responsibility"
                    {...register("responsibility", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.responsibility && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* educational-requirements */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Education requirements:
                  </label>
                  <input
                    id="education"
                    placeholder="Enter education requirement"
                    {...register("education", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.education && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* skills */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Skills:
                  </label>
                  <input
                    id="skills"
                    placeholder="Enter job skills"
                    {...register("skills", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.skills && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* experiences */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    experiences:
                  </label>
                  <input
                    id="experiences"
                    placeholder="Enter job experiences"
                    {...register("experiences", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.experiences && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              {/* contact-information */}
              <div className="py-2">
                <div className="w-full">
                  <label className="text-gray" htmlFor="name">
                    Contact information:
                  </label>
                  <input
                    id="Contact information"
                    placeholder="Enter job Contact information"
                    {...register("Contact information", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.Contact && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>

              {/* postTime & weekend*/}
              <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                <div className="w-full">
                  <label className="text-gray" htmlFor="image">
                    PostTime:
                  </label>

                  <input
                    id="PostTime"
                    placeholder="Enter  PostTime"
                    {...register("PostTime", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.PostTime && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-gray" htmlFor="instructorImage">
                    Weekend:
                  </label>
                  <input
                    id="weekend"
                    placeholder="Enter start weekend"
                    {...register("weekend", { required: true })}
                    className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                  />
                  {errors.weekend && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>

              {/* job_description */}
              <div className="w-full py-2">
                <label className="text-gray" htmlFor="des">
                  Description:
                </label>
                <textarea
                  rows={4}
                  id="des"
                  placeholder="Write Description"
                  {...register("des", { required: true })}
                  className="w-full border  border-green py-3 focus:shadow-md shadow-green duration-300 px-3 rounded-md outline-none"
                />
                {errors.des && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              {/* previous & post button */}
              <div className=" flex flex-row mt-4 gap-4">
                <div className="w-full">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="w-full hover:bg-green hover:text-white border border-green py-2 px-3 rounded-md outline-none duration-300"
                  >
                    Previous
                  </button>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full hover:bg-green hover:text-white border border-green py-2 px-3 rounded-md outline-none duration-300"
                  >
                    Post Job
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className="">
          <img src={"https://i.ibb.co/k8rQSKj/Mail-sent-amico-1.png"} alt="" />
        </div>
      </div>
    </section>
  );
}
