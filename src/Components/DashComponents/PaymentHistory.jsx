import usePaymentHistory from '../../Hooks/usePaymentHistory';
import useAuth from '../../Hooks/useAuth';
import PaymentHistoryList from './PaymentHistoryList';
import PageLoader from '../PageLoader';

const PaymentHistory = () => {
    const [paymentHistory, loading, refetch] = usePaymentHistory();
    const { currentUser } = useAuth()
    console.log(currentUser)
    return (
        <div className='pt-8'>
            <table className="table lg:w-full w-[800px] text-left">
                <thead className="text-lg text-green border-b border-green/40">
                    <tr>
                        <th className="px-3 py-3 font-medium">Sender</th>
                        <th className="px-3 py-3 font-medium text-center">Receiver</th>
                        <th className="px-3 py-3 font-medium text-center">
                            Amount
                        </th>
                        <th className="py-3 text-center font-medium">Trans ID</th>
                        <th className="py-3 text-center font-medium">Expire</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentHistory?.length > 0 ? paymentHistory?.map((pay) => (
                            <PaymentHistoryList
                                key={pay._id}
                                pay={pay}
                            />
                        )) : <PageLoader />
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;