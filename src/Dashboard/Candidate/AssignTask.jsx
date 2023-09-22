import DashTitle from "../../Components/DashComponents/DashTitle";


const AssignTask = () => {
    return (
        <section className="m-5 rounded-md">
            <DashTitle title="Assign Task" />

            {/* Offers Received table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-10">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Company</th>
                            <th className="px-3 py-3 font-medium text-center">Position</th>
                            <th className="px-3 py-3 font-medium text-center">Salary</th>
                            <th className="px-3 py-3 font-medium text-center">Status</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {isJobOfferData &&
                            isJobOfferData.map((offer) => (
                                <JobOffersTableRow
                                    key={offer._id}
                                    offer={offer}
                                    refetch={refetch}
                                />
                            ))} */}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AssignTask;