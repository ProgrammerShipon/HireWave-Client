import React from 'react';
import DashTitle from '../Components/DashComponents/DashTitle';
import useAllJobs from '../Hooks/useAllJobs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useRecruiterRole from '../Hooks/useRecruiterRole';
import useAppliedCompany from '../Hooks/useAppliedCompany';
import PageLoader from '../Components/PageLoader';
import PostedJobTableRow from '../Components/DashComponents/PostedJobTableRow';

const AppliedApplicant = () => {

    const [appliedCompany] = useAppliedCompany();
    console.log(appliedCompany)
    const [allJobsData, loading] = useAllJobs();
    const [filteredData, setFilteredData] = useState(allJobsData);
    const { register, watch, handleSubmit, reset } = useForm();
    const onSubmit = () => {
        reset();
    }
    const searchTerm = watch('searchTerm');
    const category = watch('category');
    const status = watch('status');
    const date = watch('date');

    // console.log(searchTerm, category, date);

    useEffect(() => {
        const searchTitle = searchTerm ? searchTerm.toLowerCase() : "";
        const searchCategory = category ? category.toLowerCase() : "";

        const filter = allJobsData.filter((job) =>
            (!searchTitle || job.title.toLowerCase().includes(searchTitle)) &&
            (!status || job.status.toLowerCase().includes(status.toLowerCase())) &&
            (!searchCategory || job.category.toLowerCase().includes(searchCategory))
        );

        if (date === 'recent') {
            filter = [...filter].sort(
                (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
            );
        } else if (date === 'oldest') {
            filter = [...filter].sort(
                (a, b) => new Date(a.postedDate) - new Date(b.postedDate)
            );
        }

        setFilteredData(filter);
    }, [searchTerm, category, status, date, !loading]);

    useEffect(() => {
        setFilteredData(allJobsData);
    }, [allJobsData])
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Applicant' />
            {/* filtering option */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md mt-10">
                {/* search by title */}
                <div className="w-full sm:w-72">
                    <input
                        type="text"
                        placeholder="Search job title"
                        className="border border-gray/40 p-2 rounded-md bg-white focus:outline-none focus:border-green w-full"
                        {...register("searchTerm")}
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <h2 className="text-lg text-dark">Filter By: </h2>

                    {/* filter by status */}
                    <select
                        name="status"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                        {...register("status")}
                    >
                        <option value="">Status</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>

                    {/* filter by category */}
                    <select
                        name="category"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                        {...register("category")}
                    >
                        <option value="">All Category</option>
                        {
                            Array.from(new Set(allJobsData.map(item => item.category))).map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))
                        }
                    </select>

                    {/* filter by date */}
                    <select
                        name="date"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                        {...register("date")}
                    >
                        <option value="recent">Recent</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </form>


            {/* posted jobs table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-4">
                {
                    !loading ? <table className="table lg:w-full w-[800px] text-left">
                        <thead className="text-lg text-green border-b border-green/40">
                            <tr>
                                <th className="px-3 py-3 font-medium">Job Title</th>
                                <th className="px-3 py-3 font-medium">Category</th>
                                <th className="px-3 py-3 font-medium">Post Date</th>
                                <th className="px-3 py-3 font-medium text-center">Applied</th>
                                <th className="px-3 py-3 font-medium text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((job) => (
                                <PostedJobTableRow key={job._id} job={job} />
                            ))}
                        </tbody>
                    </table> : <PageLoader />
                }
            </div>

        </section>
    );
};

export default AppliedApplicant;