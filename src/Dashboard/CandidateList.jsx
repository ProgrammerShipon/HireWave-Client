import CandidateListTableRow from "../Components/DashComponents/CandidateListTableRow";
import DashTitle from "../Components/DashComponents/DashTitle";
import useCandidatesData from "../Hooks/useCandidatesData";

const CandidateList = () => {
    const [candidatesData, loading] = useCandidatesData();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Candidate List' />

            <div className="mt-10 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                {/* table */}
                {
                    !loading ? <table className="table lg:w-full w-[800px] text-left">
                        <thead className="text-lg text-green border-b border-green/40">
                            <tr>
                                <th className="px-3 py-3 font-medium">Candidates Info</th>
                                <th className="px-3 py-3 font-medium">Category</th>
                                <th className="px-3 py-3 font-medium text-center">Location</th>
                                <th className="px-3 py-3 font-medium text-center">Status</th>
                                <th className="py-3 text-center font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                candidatesData.map((candidate) => (
                                    <CandidateListTableRow key={candidate._id} candidate={candidate} />))
                            }
                        </tbody>
                    </table> : <h1>Loading ...</h1>
                }
            </div>
        </section>
    );
};

export default CandidateList;