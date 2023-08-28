import { Outlet } from 'react-router-dom';
import NavItemsDashboard from '../Components/NavItemsDashboard';
import DashNav from '../Shared/DashNav';
import DashNavItems from '../Components/DashNavItems';

const Dashboard = () => {
    return (
        <>
            <DashNav />

            <div className='flex'>
                {/* Sidebar */}
                <DashNavItems />

                {/* Outlet */}
                <main className='flex-1 w-full'>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Dashboard;