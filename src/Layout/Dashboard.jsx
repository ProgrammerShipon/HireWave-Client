import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashNavItems from '../Components/DashComponents/DashNavItems';
import PageLoader from '../Components/PageLoader';
import StayTop from '../Components/StayTop';
import useAuth from '../Hooks/useAuth';
import DashNav from '../Shared/DashNav';
import SelectRole from '../SignUpSteps/SelectRole';

const Dashboard = () => {
    const { user, currentUser, loading } = useAuth();

    if (loading) {
        return <div className='flex h-screen items-center justify-center'><PageLoader /></div>
    }

    if (user?.email && currentUser?.email === undefined) {
        return <SelectRole />;
    } else {
        return (
            <>
                <StayTop />
                <DashNav />

                <div className='flex'>
                    {/* Sidebar */}
                    <DashNavItems />

                    {/* Outlet */}
                    <main className='flex-1 w-full pt-[71px] pl-[84px] md:pl-[300px] bg-[#f5fcf8] duration-300 z-10'>
                        <Outlet />
                    </main>
                </div>
                
                <ToastContainer />
            </>
        );
    }
};

export default Dashboard;