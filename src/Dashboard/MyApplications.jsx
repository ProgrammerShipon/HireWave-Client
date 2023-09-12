import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import DashTitle from "../Components/DashComponents/DashTitle";
import AppliedJobTableRow from "../Components/DashComponents/AppliedJobTableRow";
import PageLoader from "../Components/PageLoader";
import useMyAppliedJobs from "../Hooks/useMyAppliedJobs";

const MyApplications = () => {
    const [myAppliedJobs, loading] = useMyAppliedJobs();

    const [filteredData, setFilteredData] = useState(myAppliedJobs);

    const { register, watch, handleSubmit, reset } = useForm();
    const onSubmit = () => {
        reset();
    }

    const title = watch('title');
    const jobType = watch('jobType');
    const date = watch('date');

    useEffect(() => {
        let filter = myAppliedJobs.filter((user) =>
            (!title || user.title.toLowerCase().includes(title.toLowerCase())) &&
            (!jobType || user.jobType.toLowerCase().includes(jobType.toLowerCase()))
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
    }, [title, jobType, date, !loading]);
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>My Applications - Dashboard | Hire Wave</title>
            </Helmet>

            <section className='m-5 rounded-md'>
                <DashTitle title='My Applications' />

                {/* filtering option */}
                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md shadow-xl mt-10">
                    {/* search by user name */}
                    <div className="w-full sm:w-72">
                        <input
                            placeholder="Search by title"
                            className="border border-gray/40 p-2 rounded-md bg-white focus:outline-none focus:border-green w-full"
                            {...register("title")}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <h2 className="text-lg text-dark">Filter By: </h2>

                        {/* filter by job type */}
                        <select
                            name="jobType"
                            className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto capitalize"
                            {...register("jobType")}
                        >
                            <option className="capitalize" value="">Job Type</option>
                            {
                                myAppliedJobs.map((cnd, index) => <option key={index} className="capitalize" value={cnd.jobType}>{cnd.jobType}</option>)
                            }
                        </select>

                        {/* filter by date */}
                        <select
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

                {/*My Applications table */}
                <div className="mt-10 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                    {/* table */}
                    {
                        !loading ? <table className="table lg:w-full w-[800px] text-left">
                            <thead className="text-lg text-green border-b border-green/40">
                                <tr>
                                    <th className="px-3 py-3 font-medium">Company</th>
                                    <th className="px-3 py-3 font-medium">Job Title</th>
                                    <th className="px-3 py-3 font-medium text-center">Applied On</th>
                                    <th className="px-3 py-3 font-medium text-center">Applications</th>
                                    <th className="px-3 py-3 font-medium">Status</th>
                                    <th className="py-3 text-center font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((job) => (
                                    <AppliedJobTableRow key={job._id} job={job} />))
                                }
                            </tbody>
                        </table> : <PageLoader />
                    }
                </div>
            </section>
        </>
    );
};

export default MyApplications;