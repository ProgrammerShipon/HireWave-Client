import { Outlet } from 'react-router-dom';
import DashNav from '../Shared/DashNav';
import DashNavItems from '../Components/DashNavItems';
import StayTop from '../Components/StayTop';

const Dashboard = () => {
    return (
        <>
            <StayTop />
            <DashNav />

            <div className='flex'>
                {/* sidebar */}
                <DashNavItems />

                {/* Outlet */}
                <main className='flex-1 w-full pt-[71px] bg-[#f5fcf8]'>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Dashboard;