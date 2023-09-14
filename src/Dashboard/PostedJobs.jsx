import { useState, useEffect } from "react";
import DashTitle from "../Components/DashComponents/DashTitle";
import PostedJobTableRow from "../Components/DashComponents/PostedJobTableRow";
import { useForm } from "react-hook-form";
import PageLoader from "../Components/PageLoader";
import useMyPostedJobs from "../Hooks/useMyPostedJobs";
import { Tooltip } from "react-tooltip";

const PostedJobs = () => {
    const [myPostedJobs, loading] = useMyPostedJobs();
    const [filteredData, setFilteredData] = useState(myPostedJobs);
    const { register, watch, handleSubmit, reset } = useForm();

    const onSubmit = () => {
        reset();
    }

    const searchTerm = watch('searchTerm');
    const category = watch('category');
    const status = watch('status');
    const open = status === 'true' ? true : false;
    const date = watch('date');

    useEffect(() => {
        const searchTitle = searchTerm ? searchTerm.toLowerCase() : "";
        const searchCategory = category ? category.toLowerCase() : "";

        let filter = myPostedJobs.filter((job) =>
            (!searchTitle || job?.title?.toLowerCase().includes(searchTitle)) &&
            (!status || job.open === open) &&
            (!searchCategory || job.category.toLowerCase().includes(searchCategory))
        );
        if (date === 'recent') {
            filter = [...filter].sort(
                (a, b) => new Date(b.appliedDate) - new Date(a.appliedDate)
            );
        } else if (date === 'oldest') {
            filter = [...filter].sort(
                (a, b) => new Date(a.appliedDate) - new Date(b.appliedDate)
            );
        }
        setFilteredData(filter);
    }, [searchTerm, category, status, date, !loading]);

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Posted Jobs' />

            {/* filtering option */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md mt-10">
                {/* search by title */}
                <Tooltip id="title" />
                <div data-tooltip-id="title" data-tooltip-content="Search job title!" className="w-full sm:w-72">
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
                    <Tooltip id="status" />
                    <select
                        data-tooltip-id="status" data-tooltip-content="Select status!"
                        name="status"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                        {...register("status")}
                    >
                        <option value="">Status</option>
                        <option value="true">Open</option>
                        <option value="false">Close</option>
                    </select>

                    {/* filter by category */}
                    <Tooltip id="category" />
                    <select
                        data-tooltip-id="category" data-tooltip-content="Select job category!"
                        name="category"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                        {...register("category")}
                    >
                        <option value="">Select Category</option>
                        {
                            Array.from(new Set(myPostedJobs.map(item => item.category))).map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))
                        }
                    </select>

                    {/* filter by date */}
                    <Tooltip id="date" />
                    <select
                        data-tooltip-id="date" data-tooltip-content="Select posted date!"
                        name="date"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                        {...register("date")}
                    >
                        <option value="">Date</option>
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
                            {
                                filteredData.length > 0 ? filteredData.map((job) => (
                                    <PostedJobTableRow key={job._id} job={job} />
                                )) : <h2 className="py-4 text-lg text-center">No data available!</h2>
                            }
                        </tbody>
                    </table> : <PageLoader />
                }
            </div>
        </section>
    );
};

export default PostedJobs;
