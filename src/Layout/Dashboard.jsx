import { Outlet, useNavigate } from 'react-router-dom';
import DashNav from '../Shared/DashNav';
import DashNavItems from '../Components/DashComponents/DashNavItems';
import StayTop from '../Components/StayTop';
import useCurrentUser from '../Hooks/useCurrentUser';
import useAuth from '../Hooks/useAuth';
import PageLoader from '../Components/PageLoader';

const Dashboard = () => {
    const { user } = useAuth();
    const [currentUser, loading] = useCurrentUser();
    const navigate = useNavigate();

    if (user?.email && loading) {
        return <PageLoader />
    }

    if (user?.email && currentUser === undefined) {
        return navigate('/select_role', { replace: true })
    }
    return (
        <>
            <StayTop />
            <DashNav />

            <div className='flex'>
                {/* sidebar */}
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