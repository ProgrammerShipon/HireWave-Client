import Lottie from 'lottie-react';
import { useParams } from 'react-router-dom';
import successAnimation from '../Assets/97987-success.json'
import useAuth from '../Hooks/useAuth';
import moment from 'moment';
import useRecruiterPaymentHistory from '../Hooks/useRecruiterPaymentHistory';
const PaymentSuccess = () => {
    const { currentUser } = useAuth();
    const { tran_id } = useParams();
    const [RecruiterPaymentHistory, loading, refetch] = useRecruiterPaymentHistory();
    console.log(RecruiterPaymentHistory)
    if (loading) {

        return <h1>...</h1>
    }
    const { amount, purchaseDate, receiver } = RecruiterPaymentHistory[0]


    return (

        <div className=''>
            <Lottie className='w-[400px] mx-auto' animationData={successAnimation}></Lottie>
            <p className='text-center text-xl text-green px-3'>
                Payment {amount}.00 USD From {currentUser.name} to {receiver} is successful.  TrxID {tran_id} at {moment(purchaseDate).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
        </div>
    );
};

export default PaymentSuccess;