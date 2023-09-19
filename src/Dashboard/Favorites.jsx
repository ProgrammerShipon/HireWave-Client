import React from 'react';
import DashTitle from '../Components/DashComponents/DashTitle';
import FavoritesTableRow from '../Components/DashComponents/FavoritesTableRow';

const Favorites = () => {
    const favorites =[
        {
            candidateId: "1",
            candidateName: "Rakibul Hasan",
            candidateImage: "https://digity.netlify.app/assets/images/team/4.png",
            candidateCategory: "Graphics & Design",
            candidateRate: 34
        },
        {
            candidateId: "2",
            candidateName: "Tonmoy",
            candidateImage: "https://digity.netlify.app/assets/images/team/6.png",
            candidateCategory: "Video & Animation",
            candidateRate: 13
        },
        {
            candidateId: "3",
            candidateName: "Anik",
            candidateImage: "https://digity.netlify.app/assets/images/team/8.png",
            candidateCategory: "Music & Audio",
            candidateRate: 39
        },
    ]
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Favorites' />

            {/* posted jobs table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-4">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Name</th>
                            <th className="px-3 py-3 font-medium text-center">Category</th>
                            <th className="px-3 py-3 font-medium text-center">Hourly Rate</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favorites.map((favorite) => (
                            <FavoritesTableRow key={favorite._id} favorite={favorite} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Favorites;