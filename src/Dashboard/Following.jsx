import React from 'react';
import DashTitle from '../Components/DashComponents/DashTitle';
import FollowingTableRow from '../Components/DashComponents/FollowingTableRow';
import useFollowing from '../Hooks/useFollowing';

const Following = () => {
    const [followingData, loading, refetch] = useFollowing();
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Followings' />

            {/* posted jobs table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-10">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Name</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && followingData.length > 0 ?
                            followingData.map((following) => (
                                <FollowingTableRow
                                    key={following._id}
                                    following={following}
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

export default Following;