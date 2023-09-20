import React from 'react';
import DashTitle from '../Components/DashComponents/DashTitle';
import OffersSentTableRow from '../Components/DashComponents/OffersSentTableRow';

const OffersSent = () => {
    const offers =[
        {
            _id: "1",
            name: "Rakibul Hasan",
            image: "https://digity.netlify.app/assets/images/team/4.png",
            category: "Web Development",
            title: "React.js Developer",
            position: "Senior Web Developer",
            salary: 2200
        },
        {
            _id: "2",
            name: "Tonmoy",
            image: "https://digity.netlify.app/assets/images/team/6.png",
            category: "Writing & Translation",
            title: "Website Content Editor",
            position: "Junior Content Writer",
            salary: 1200
        },
        {
            _id: "3",
            name: "Anik",
            image: "https://digity.netlify.app/assets/images/team/8.png",
            category: "Business",
            title: "E-commerce Specialist",
            position: "Business Analyst",
            salary: 2800
        },
    ]
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Offers Sent' />

            {/* Offers Sent table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-4">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Name</th>
                            <th className="px-3 py-3 font-medium text-center">Category</th>
                            <th className="px-3 py-3 font-medium text-center">Title</th>
                            <th className="px-3 py-3 font-medium text-center">Position</th>
                            <th className="px-3 py-3 font-medium text-center">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer) => (
                            <OffersSentTableRow key={offer._id} offer={offer} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OffersSent;