import DashTitle from "../Components/DashComponents/DashTitle";
import PostedJobTableRow from "../Components/DashComponents/PostedJobTableRow";
import useAllJobs from "../Hooks/useAllJobs";

const PostedJobs = () => {
    const [allJobsData, loading] = useAllJobs();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Posted Jobs' />

            {/* filtering option */}
            <div className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md mt-10">
                {/* search by title */}
                <div className="w-full sm:w-72">
                    <input
                        type="text"
                        placeholder="Search job title"
                        className="border border-gray/40 p-2 rounded-md bg-white focus:outline-none focus:border-green w-full"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <h2 className="text-lg text-dark">Filter By: </h2>

                    {/* filter by status */}
                    <select
                        name="status"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                    >
                        <option value="">Status</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>

                    {/* filter by category */}
                    <select
                        name="category"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                    >
                        <option value="">Category</option>
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
                    >
                        <option value="recent">Recent</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

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
                            {allJobsData.map((job) => (
                                <PostedJobTableRow key={job._id} job={job} />
                            ))}
                        </tbody>
                    </table> : <h1>Loading ...</h1>
                }
            </div>
        </section>
    );
};

export default PostedJobs;
