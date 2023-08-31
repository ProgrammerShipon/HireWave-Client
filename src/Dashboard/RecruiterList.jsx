import DashTitle from "../Components/DashComponents/DashTitle";
import RecruiterListTableRow from "../Components/DashComponents/RecruiterListTableRow";
import useRecruiters from "../Hooks/useRecruiters";

const RecruiterList = () => {
    const [recruiterData, loading] = useRecruiters();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Recruiter List' />

            <div className="mt-10 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                {/* table */}
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