import moment from 'moment';
import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";

const PaymentHistoryList = ({ pay }) => {
    const { amount, tran_id, receiverImage, receiver, paymentDate, } = pay;
    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
            <td className="py-3 ">
                <div className="w-12 h-12 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img
                        className="w-full object-cover object-center"
                        src={receiverImage}
                        alt={receiver}
                    />
                </div>
            </td>

            <td className="px-3 py-4 ">
                {receiver}
            </td>
            <td className="px-3 py-4 text-center">
                <div className='flex gap-1 items-center '>
                    <BsCurrencyDollar /> {amount}
                </div>
            </td>
            <td className="px-3 py-4 text-center">
                {tran_id}
            </td>
            <td className="px-3 py-4 text-center">
                {moment(paymentDate).format("MMM Do YY")}
            </td>
        </tr>
    );
};

export default PaymentHistoryList;