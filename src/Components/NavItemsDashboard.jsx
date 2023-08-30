import React from 'react';
import ActiveLink from './ActiveLink';
import { AiOutlineHome } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';

import NavItemsDashboardByRole from './NavItemsDashboardByRole';

const NavItemsDashboard = () => {

    // const role = 'candidate';
    const role = 'recruiter';
    // const role = 'admin';

    return (
        <>
            {/* Dashboard Home */}
            <li className=''>
                <ActiveLink to='/dashboard/dashboardHome'>
                    <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                        <AiOutlineHome size={24} />
                        <p>Dashboard</p>
                    </div>
                </ActiveLink>
            </li>

            {/* My Profile */}
            <li className=''>
                <ActiveLink to='/dashboard/myProfile'>
                    <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                        <VscAccount size={24} />
                        <p>My Profile</p>
                    </div>
                </ActiveLink>
            </li>

            {/* Routes per Role */}
            <NavItemsDashboardByRole role={role}/>

            {/* Change Password */}
            <li className=''>
                <ActiveLink to='/dashboard/changePassword'>
                    <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                        <RiLockPasswordLine size={24} />
                        <p>Change Password</p>
                    </div>
                </ActiveLink>
            </li>

            {/* Logout */}
            <li className=''>
                <ActiveLink to='/dashboard/logOut'>
                    <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                        <IoMdLogOut size={24} />
                        <p>Logout</p>
                    </div>
                </ActiveLink>
            </li>
        </>
    );
};

export default NavItemsDashboard;