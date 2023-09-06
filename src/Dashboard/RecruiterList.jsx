import DashTitle from "../Components/DashComponents/DashTitle";
import RecruiterListTableRow from "../Components/DashComponents/RecruiterListTableRow";
import useRecruiters from "../Hooks/useRecruiters";

const RecruiterList = () => {
    const [recruiterData, loading] = useRecruiters();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Recruiter List' />

            {/* filtering option */}
            <div className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md shadow-xl mt-10">
                {/* search by title */}
                <div className="w-full sm:w-72">
                    <input
                        type="text"
                        placeholder="Search recruiter name"
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
                        <option value="approve">Approve</option>
                        <option value="pending">Pending</option>
                        <option value="suspend">Suspend</option>
                    </select>

                    {/* filter by Industry */}
                    <select
                        name="Industry"
                        className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                    >
                        <option value="">Industry</option>
                        {
                            Array.from(new Set(recruiterData.map(item => item.industry))).map((industry, index) => (
                                <option key={index} value={industry}>
                                    {industry}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {/* table */}
            <div className="mt-6 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                {
                    !loading ? <table className="table lg:w-full w-[800px] text-left">
                        <thead className="text-lg text-green border-b border-green/40">
                            <tr>
                                <th className="px-3 py-3 font-medium">Recruiters Info</th>
                                <th className="px-3 py-3 font-medium">Industry</th>
                                <th className="px-3 py-3 font-medium text-center">Open Jobs</th>
                                <th className="px-3 py-3 font-medium text-center">Status</th>
                                <th className="py-3 text-center font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recruiterData.map((recruiter) => (
                                    <RecruiterListTableRow key={recruiter._id} recruiter={recruiter} />))
                            }
                        </tbody>
                    </table> : <h1>Loading ...</h1>
                }
            </div>
        </section>
    );
};

export default RecruiterList;