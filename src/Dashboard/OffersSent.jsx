import DashTitle from '../Components/DashComponents/DashTitle';
import OffersSentTableRow from '../Components/DashComponents/OffersSentTableRow';
import useOffers from '../Hooks/useOffers';

const OffersSent = () => {
    const [offerData, loading, refetch] = useOffers();

    return (
        <section className="m-5 rounded-md">
            <DashTitle title="Offers" />

            {/* Offers Received table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-10">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Name</th>
                            <th className="px-3 py-3 font-medium text-center">Position</th>
                            <th className="px-3 py-3 font-medium text-center">Salary</th>
                            <th className="px-3 py-3 font-medium text-center">Status</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && offerData.length > 0 ?
                            offerData.map((offer) => (
                                <OffersSentTableRow
                                    key={offer._id}
                                    offer={offer}
                                    refetch={refetch}
                                />
                            )) : <h2 className="py-4 text-lg text-center">No data available!</h2>
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OffersSent;