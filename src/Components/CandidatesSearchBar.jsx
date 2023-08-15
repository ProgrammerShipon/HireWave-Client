import React from 'react';
import { useForm } from "react-hook-form"
import { ImFilter } from "react-icons/im";
const CandidatesSearchBar = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)

    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center gap-5 shadow-lg shadow-green/30 rounded p-4 md:py-6 ">
                    <input type="text" placeholder="Search Candidates Name " className=" border border-green px-3 py-2 w-auto  rounded focus:outline-none" {...register("candidatesName")} required />

                    <input type="text" placeholder="Search Candidates Location " className="border border-green px-3 py-2 w-auto rounded focus:outline-none" {...register("candidatesLocation")} required />

                    <select {...register("jobRole")} className='border border-green px-4 py-2 w-auto rounded focus:outline-none ' required>
                        <option value="" selected>Select Category </option>
                        <option value="react">React Developer </option>
                        <option value="mernStack">Mern Stack Developer</option>
                        <option value="backEnd">Full Stack Developer</option>
                        <option value="fontEnd">Font-end Developer</option>
                        <option value="backEnd">Back-end Developer</option>
                    </select>
                    <select {...register("tag")} className='border border-green px-4 py-2 w-auto rounded focus:outline-none ' required>
                        <option value="" selected>Select Skills </option>
                        <option value="html">HTML5  </option>
                        <option value="css">CSS 3</option>
                        <option value="javaScript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c">C </option>
                        <option value="c++">C ++ </option>
                    </select>
                    <button type='submit' className='flex items-center justify-center gap-2 bg-dark text-white px-8 py-4 text-lg rounded-md ' >
                        Filter  <ImFilter />
                    </button>
                    {/* <input type="submit" value="Filter" className='cursor-pointer  bg-dark text-white px-8 py-4 text-lg rounded-md' /> */}
                </div>

            </form>
        </section>
    );
};

export default CandidatesSearchBar;