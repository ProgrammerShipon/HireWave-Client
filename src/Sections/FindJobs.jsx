import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAllJobs from "../Hooks/useAllJobs";
import FindJobBody from "../Components/FindJobBody";

// react icons
import { BiSearchAlt, BiCategory } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineClear } from "react-icons/ai";

const FindJobs = () => {
    const [allJobsData] = useAllJobs();
    const [filteredData, setFilteredData] = useState(allJobsData);

    const { register, watch, handleSubmit, reset } = useForm();
    const onSubmit = () => {
        reset();
    }

    const searchTerm = watch('searchTerm');
    const location = watch('location');
    const category = watch('category');

    useEffect(() => {
        const searchTitle = searchTerm ? searchTerm.toLowerCase() : "";
        const searchLocation = location ? location.toLowerCase() : "";
        const searchCategory = category ? category.toLowerCase() : "";

        const filter = allJobsData.filter((job) =>
            (!searchTitle || job.title.toLowerCase().includes(searchTitle) || job.companyName.toLowerCase().includes(searchTitle)) &&
            (!searchLocation || job.location.toLowerCase().includes(searchLocation)) &&
            (!searchCategory || job.category.toLowerCase().includes(searchCategory))
        );

        setFilteredData(filter);
    }, [searchTerm, location, category, allJobsData]);

    useEffect(() => {
        setFilteredData(allJobsData);
    }, [allJobsData])

    return (
        <section className="py-20 md:py-[120px]">
            <div className="container">
                {/* search bar */}
                <div className="w-full duration-300">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white border border-green shadow-2xl shadow-green/20 grid grid-cols-1 md:grid-cols-7 items-center p-2 rounded-xl duration-300"
                    >
                        {/* Search */}
                        <div className="col-span-2 flex items-center border-b md:border-none border-green">
                            <label htmlFor="search" className="pl-2 text-green">
                                <FaBriefcase size="20px" className="animate-bounce" />
                            </label>
                            <input
                                id="search"
                                className="w-full border text-lg pl-2 py-2 border-none focus:outline-none bg-white text-dark placeholder:text-gray"
                                placeholder="Job Title / Keywords or Company"
                                {...register("searchTerm")}
                            />
                        </div>

                        {/* location */}
                        <div className="col-span-2 md:border-s border-green flex items-center">
                            <label htmlFor="location" className="pl-2 text-green">
                                <FaLocationCrosshairs size="20px" className="animate-spin" />
                            </label>
                            <input
                                id="location"
                                className="w-full border text-lg pl-2 py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent"
                                placeholder="Any Job Location"
                                {...register("location")}
                            />
                        </div>

                        {/* categories */}
                        <div className="col-span-2 md:border-s border-green md:border-e flex items-center">
                            <label htmlFor="categories" className="pl-2 text-green">
                                <BiCategory size="20px" className="animate-pulse" />
                            </label>
                            <select name="category" id="category"
                                {...register("category")}
                                className="w-full border text-lg pl-2 py-2 border-none focus:outline-none bg-transparent text-dark placeholder:text-gray placeholder:bg-transparent"
                            >
                                <option value="">Select Category</option>
                                {
                                    Array.from(new Set(allJobsData.map(item => item.category))).map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* search button */}
                        <div className="w-full md:pl-2 border-green">
                            <button
                                type="submit"
                                className="bg-dark w-full text-white px-6 py-2 text-lg rounded-full flex items-center justify-center gap-2 hover:bg-green hover:shadow-xl hover:shadow-green/20 duration-300"
                            >
                                {
                                    searchTerm || location || category ? <><AiOutlineClear className='text-[#ea2b33]' /> Clear</> : <><BiSearchAlt /> Search</>
                                }
                            </button>
                        </div>
                    </form>
                </div>

                {
                    filteredData.length > 0 ? <FindJobBody allJobsData={filteredData} /> : <p className="text-4xl text-center py-6 mt-6">Job Not Found!</p>
                }
            </div>
        </section>
    );
};

export default FindJobs;
