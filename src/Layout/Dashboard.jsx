import React from 'react';
import NavbarDashboard from '../Shared/NavbarDashboard';
import { Outlet } from 'react-router-dom';
import NavItemsDashboard from '../Components/NavItemsDashboard';

const Dashboard = () => {
    return (
        <>
            <NavbarDashboard/>


            <div className='flex'>

                {/* Sidebar */}
                <div className='fixed shadow-xl w-[300px] xxl:w-[360px] bg-purple/10 duration-300 h-screen pt-32'>
                    <ul className='flex flex-col items-center justify-center'>
                        <NavItemsDashboard />   
                    </ul>
                </div>

                {/* Outlet */}
                <main className='flex-1 mt-10 ml-[300px] xxl:ml-[360px]'>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Dashboard;