import React from 'react';
import DashTitle from '../Components/DashComponents/DashTitle';
import FavoritesTableRow from '../Components/DashComponents/FavoritesTableRow';
import useFavorite from '../Hooks/useFavorite';

const Favorites = () => {
    const [favoriteData, loading, refetch] = useFavorite();
    console.log(favoriteData);
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
                            <th className="px-3 py-3 font-medium text-center">Hourly Rate</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && favoriteData.length > 0 ?
                            favoriteData.map((favorite) => (
                                <FavoritesTableRow
                                    key={favorite._id}
                                    favorite={favorite}
                                    refetch={refetch}
                                />
                            )) : <p className="py-4 text-lg text-center">No data available!</p>
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Favorites;