import useAuth from '../Hooks/useAuth';
import AdminDashboard from './AdminDashboard';
import DashTitle from './DashTitle';

const DashboardHome = () => {
    const { user } = useAuth();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Dashboard' />

            <AdminDashboard />
        </section>
    );
};

export default DashboardHome;