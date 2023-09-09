import DashTitle from "../Components/DashComponents/DashTitle";
import AppliedJobTableRow from "../Components/DashComponents/AppliedJobTableRow";
import useAppliedCandidates from "../Hooks/useAppliedCandidates";
import PageLoader from "../Components/PageLoader";

const AppliedJobs = () => {
    const [appliedCandidatesData, loading, refetch] = useAppliedCandidates()
    // console.log(appliedCandidatesData)
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
                            {appliedCandidatesData.map((job) => (
                                <AppliedJobTableRow key={job._id} job={job} />))
                            }
                        </tbody>
                    </table> : <PageLoader />
                }
            </div>
        </section>
    );
};

export default AppliedJobs;
