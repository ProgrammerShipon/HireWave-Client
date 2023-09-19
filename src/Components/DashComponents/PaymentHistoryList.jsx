import moment from 'moment';
import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";

const PaymentHistoryList = ({ pay }) => {
    const { recruiterId, receiver, amount, tran_id, recruiterName, companyLogo, purchaseDate , packages } = pay;
    const purchaseDateFormat = moment(purchaseDate).format('L');
    const stringPurchaseDate = purchaseDateFormat.toString()
    const givenDate = new Date(stringPurchaseDate);
    
    console.log(pay)
    // Add 30 days
    givenDate.setDate(givenDate.getDate() + 30);

    // Format the new date as MM/DD/YYYY
    const expiredDate = `${givenDate.getMonth() + 1}/${givenDate.getDate()}/${givenDate.getFullYear()}`;

    console.log(expiredDate);

    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group">
            <td className="px-3 py-3 flex items-center  gap-2">
               {packages}
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
                {moment(expiredDate).format("MMM Do YY") }
            </td>
        </tr>
    );
};

export default PaymentHistoryList;