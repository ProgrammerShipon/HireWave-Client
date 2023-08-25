import ActiveLink from "./ActiveLink";

// react icons
import { AiOutlineHome } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';

const DashNavItems = () => {
    // const role = 'candidate';
    const role = 'recruiter';
    // const role = 'admin';

    return (
        <aside className="shadow-xl w-[300px] xxl:w-[360px] bg-purple/10 duration-300 h-screen">
            <ul className="flex flex-col items-center justify-center">
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
                {/* <NavItemsDashboardByRole role={role}/> */}

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
            </ul>
        </aside>
    );
};

export default DashNavItems;