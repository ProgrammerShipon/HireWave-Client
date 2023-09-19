import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";

const PaymentHistoryList = ({ pay }) => {
    const { recruiterId, receiver, amount, tran_id, paymentTimeline, recruiterName, companyLogo, purchaseDate } = pay;
console.log(pay)
    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group">
            <td className="px-3 py-3 flex gap-2">
                <img
                    src={companyLogo}
                    alt={recruiterName}
                    className="w-12 h-12 rounded-full object-cover object-center overflow-hidden"
                />
                <div className="flex flex-col">
                    {/* <Link
                        to={`/candidate_details/${_id}`}
                        className="font-medium text-dark group-hover:text-green duration-300"
                    > */}
                    {recruiterName}
                    {/* </Link> */}
                    {/* <p className="text-lightGray">{email}</p> */}
                </div>
            </td>

            <td className="px-3 py-4 text-center capitalize">{receiver}</td>

            <td className="px-3 py-4 text-center">
                <div className='flex gap-1 items-center justify-center'>
                    <BsCurrencyDollar /> {amount}
                </div>
            </td>
            <td className="px-3 py-4 text-center">
                {tran_id}
            </td>
            <td className="px-3 py-4 text-center">
                {purchaseDate}
            </td>
        </tr>
    );
};

export default PaymentHistoryList;