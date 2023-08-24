import React from 'react';
import useAuth from '../Hooks/useAuth';

const Logout = () => {
    const { logOut } = useAuth();
    return (
        <div>
             <h2 className='mt-10 text-center text-4xl text-green/80 font-semibold'>Logout</h2>
        </div>
    );
};

export default Logout;