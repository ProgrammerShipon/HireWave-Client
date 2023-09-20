import React from 'react';
import OffersReceivedTableRow from '../Components/DashComponents/OffersReceivedTableRow';
import DashTitle from '../Components/DashComponents/DashTitle';

const OffersReceived = () => {
    const offers =[
        {
            _id: "1",
            name: "Adroit",
            image: "https://media.licdn.com/dms/image/C4D0BAQHrtYNljdjm9w/company-logo_100_100/0/1670441499328?e=1700092800&v=beta&t=0KzCPxcN0RYlHpKQkPgTEkoDLQWPpDXoUCBJc1V2Llk",
            title: "React.js Developer",
            position: "Senior Web Developer",
            salary: 2200,
            offer_letter: "https://www.facebook.com",
            status: "pending"
        },
        {
            _id: "2",
            name: "Mindpal",
            image: "https://media.licdn.com/dms/image/C4D0BAQEXQfDNMAE2OA/company-logo_100_100/0/1670553576447?e=1700092800&v=beta&t=__HYtgX244p1k6tUSneolBcMR3OBJB-UuXRN8Y15X0U",
            title: "Website Content Editor",
            position: "Junior Content Writer",
            salary: 1200,
            offer_letter: "https://www.facebook.com",
            status: "pending"
        },
        {
            _id: "3",
            name: "Prevail",
            image: "https://media.licdn.com/dms/image/C560BAQFYYoXrfko87g/company-logo_100_100/0/1656702414708?e=1700092800&v=beta&t=vjjcsTGdjD_WONEaNC5_f1gcmU_pAtkB0kK2tgqRMuk",
            title: "E-commerce Specialist",
            position: "Business Analyst",
            salary: 2800,
            offer_letter: "https://www.facebook.com",
            status: "pending"
        },
    ]
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Offers Sent' />

            {/* Offers Received table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-4">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Company</th>
                            <th className="px-3 py-3 font-medium text-center">Title</th>
                            <th className="px-3 py-3 font-medium text-center">Position</th>
                            <th className="px-3 py-3 font-medium text-center">Salary</th>
                            <th className="px-3 py-3 font-medium text-center">Status</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer) => (
                            <OffersReceivedTableRow key={offer._id} offer={offer} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OffersReceived;