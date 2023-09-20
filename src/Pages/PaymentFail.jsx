import React from 'react';
import failedAnimation from '../Assets/107311-failed-red.json'
import Lottie from 'lottie-react';

const PaymentFail = () => {
    return (
        <div>
            <Lottie className='w-80 mx-auto ' animationData={failedAnimation}></Lottie>
            <h2 className='text-center text-xl text-red-900'>You have failed to make payment.</h2>
            <h2 className='text-center text-xl text-red-900'> Please try again</h2>
        </div>
    );
};

export default PaymentFail;