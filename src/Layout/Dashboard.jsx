import { Navigate, Outlet } from 'react-router-dom';
import DashNav from '../Shared/DashNav';
import DashNavItems from '../Components/DashComponents/DashNavItems';
import StayTop from '../Components/StayTop';
import useAuth from '../Hooks/useAuth';
import PageLoader from '../Components/PageLoader';

const Dashboard = () => {
    const { user, loading, currentUser } = useAuth();

    if (loading) {
        return <div className='flex h-screen items-center justify-center'><PageLoader /></div>
    }

    if (user?.email && currentUser.email === undefined) {
        return <Navigate to="/select_role" replace={true} />;
    }
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
        </>
    );
};

export default Dashboard;