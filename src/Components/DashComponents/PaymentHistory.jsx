import PaymentHistoryList from './PaymentHistoryList';
import useRecruiterPaymentHistory from '../../Hooks/useRecruiterPaymentHistory';
import DashTitle from './DashTitle';

const PaymentHistory = () => {
    const [paymentHistory] = useRecruiterPaymentHistory();
    // let sum = 0;
    // paymentHistory?.forEach(item => {
    //     sum += item.amount;
    // });
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Payment History' />

            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-10">
                {
                    paymentHistory.length !== 0 ? <table className="table lg:w-full w-[800px] text-left">
                        <thead className="text-lg text-green border-b border-green/40 ">
                            <tr>
                                <th className="px-3 py-3 text-center  font-medium">Image</th>
                                <th className="px-3 py-3 text-center  font-medium">Name</th>
                                <th className="px-3 py-3 font-medium">Amount</th>
                                <th className="py-3 text-center font-medium">Transaction ID</th>
                                <th className="py-3 text-center font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory?.map((pay) => (
                                    <PaymentHistoryList
                                        key={pay._id}
                                        pay={pay}
                                    />
                                ))
                            }
                        </tbody>
                    </table> :
                        <h3 className='py-8 text-3xl text-center text-gray capitalize'>You haven't made any payment yet </h3>
                }
            </div>

        </section>
    );
};

export default PaymentHistory;