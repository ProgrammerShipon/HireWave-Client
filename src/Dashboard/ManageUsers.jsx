import DashTitle from "../Components/DashComponents/DashTitle";
import ManageUserTableRow from "../Components/DashComponents/ManageUserTableRow";
import useCandidatesData from "../Hooks/useCandidatesData";


const ManageUsers = () => {
    const [candidatesData, loading] = useCandidatesData();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Manage Users' />

            <div className="mt-10 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                {/* table */}
                {
                    !loading ? <table className="table lg:w-full w-[800px] text-left">
                        <thead className="text-lg text-green border-b border-green/40">
                            <tr>
                                <th className="px-3 py-3 font-medium">User Info</th>
                                <th className="px-3 py-3 font-medium">Category</th>
                                <th className="px-3 py-3 font-medium text-center">Role</th>
                                <th className="px-3 py-3 font-medium text-center">Status</th>
                                <th className="py-3 text-center font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                candidatesData.map((user) => (
                                    <ManageUserTableRow key={user._id} user={user} />))
                            }
                        </tbody>
                    </table> : <h1>Loading ...</h1>
                }
            </div>
        </section>
    );
};

export default ManageUsers;