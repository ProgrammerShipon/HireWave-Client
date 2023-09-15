import React from 'react';
import { useParams } from 'react-router-dom';
import failedAnimation from '../../public/107311-failed-red.json'
import Lottie from 'lottie-react';
const PaymentFail = () => {
    const { trans_Id } = useParams();
    console.log(trans_Id)
    return (
        <div>
            <Lottie className='w-80 mx-auto ' animationData={failedAnimation}></Lottie>
            <h2 className='text-center text-xl text-red-900'>You have failed to make payment.</h2>
            <h2 className='text-center text-xl text-red-900'> Please try again</h2>
        </div>
    );
};

export default PaymentFail;