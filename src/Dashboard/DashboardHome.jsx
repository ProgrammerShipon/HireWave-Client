import DashTitle from '../Components/DashComponents/DashTitle';
import useAuth from '../Hooks/useAuth';
import AdminDashboard from '../Sections/DashSections/AdminDashboard';
import CandidateDashboard from '../Sections/DashSections/CandidateDashboard';
import RecruiterDashboard from '../Sections/DashSections/RecruiterDashboard';

const DashboardHome = () => {
    const { user } = useAuth();

    // const role = 'admin';
    // const role = 'recruiter';
    const role = 'candidate';
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