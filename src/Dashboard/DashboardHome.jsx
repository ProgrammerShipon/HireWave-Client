import React from 'react';
import useAuth from '../Hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    console.log(user.displayName)
    return (
        <div>
            <h2 className='mt-10 text-center text-4xl text-green/80 font-semibold'>Welcome to Dashboard Home</h2>
            <p className='text-center text-2xl text-green/80 font-semibold'>{user?.displayName}</p>
        </div>
    );
};

export default DashboardHome;