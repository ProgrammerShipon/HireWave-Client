import Lottie from 'lottie-react';
import { Link, useParams } from 'react-router-dom';
import successAnimation from '../../public/97987-success.json'
import usePaymentHistory from '../Hooks/usePaymentHistory';
import useAuth from '../Hooks/useAuth';
import moment from 'moment';
import useRecruiterPaymentHistory from '../Hooks/useRecruiterPaymentHistory';
const PaymentSuccess = () => {
    const { currentUser } = useAuth();
    console.log(currentUser.name)
    const { tran_id } = useParams();
    console.log(tran_id)
    const [RecruiterPaymentHistory, loading, refetch] = useRecruiterPaymentHistory();
    if (loading) {
        return <h1>Loading</h1>
    }
    console.log(RecruiterPaymentHistory[0])
    const { amount, paymentTimeline, purchaseDate, receiver, recruiterName } = RecruiterPaymentHistory[0]


    return (

        <div className=''>
            <Lottie className='w-[480px] mx-auto ' animationData={successAnimation}></Lottie>
            <p className='text-center text-xl text-green'>
                Payment {amount}.00 USD {currentUser.name} to {receiver} is successful.  TrxID {tran_id} at {moment(purchaseDate).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
        </div>
    );
};

export default PaymentSuccess;