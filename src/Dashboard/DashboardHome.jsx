import useAuth from '../Hooks/useAuth';
import AdminDashboard from './AdminDashboard';
import CandidateDashboard from './CandidateDashboard';
import DashTitle from './DashTitle';
import RecruiterDashboard from './RecruiterDashboard';

const DashboardHome = () => {
    const { user } = useAuth();

    // const role = 'admin';
    const role = 'recruiter';
    // const role = 'candidate';
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Dashboard' />

            {
                role === 'admin' && <AdminDashboard />
            }
            {
                role === 'recruiter' && <RecruiterDashboard />
            }
            {
                role === 'candidate' && <CandidateDashboard />
            }
        </section>
    );
};

export default DashboardHome;