import HiredCandidatesTableRow from '../Components/DashComponents/HiredCandidatesTableRow';
import DashTitle from '../Components/DashComponents/DashTitle';
import useOffers from '../Hooks/useOffers';

const HiredCandidates = () => {
    const [offerData, loading, refetch] = useOffers();
    const filterOffer = offerData.filter(offer => offer.status === 'accept');

    return (
        <section className="m-5 rounded-md">
            <DashTitle title="Hired Candidates" />

            {/* Offers Received table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-10">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-left">Candidates Details</th>
                            <th className="px-3 py-3 font-medium text-center">Position</th>
                            <th className="px-3 py-3 font-medium text-center">Salary</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && filterOffer.length > 0 ?
                            filterOffer.map((offer) => (
                                <HiredCandidatesTableRow
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

export default HiredCandidates;