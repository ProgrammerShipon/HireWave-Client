import DashTitle from "../Components/DashComponents/DashTitle";
import useAllJobs from "../Hooks/useAllJobs";
import AppliedJobTableRow from "../Components/DashComponents/AppliedJobTableRow";

const AppliedJobs = () => {
    const [allJobsData, loading] = useAllJobs();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Applied Jobs' />

            {/*applied jobs table */}
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
                            {allJobsData.map((job) => (
                                <AppliedJobTableRow key={job._id} job={job} />))
                            }
                        </tbody>
                    </table> : <h1>Loading ...</h1>
                }
            </div>
        </section>
    );
};

export default AppliedJobs;
