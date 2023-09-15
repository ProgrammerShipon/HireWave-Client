import { Helmet } from 'react-helmet';
import DashTitle from '../Components/DashComponents/DashTitle';
import AdminDashboard from '../Sections/DashSections/AdminDashboard';
import CandidateDashboard from '../Sections/DashSections/CandidateDashboard';
import RecruiterDashboard from '../Sections/DashSections/RecruiterDashboard';
import useAuth from '../Hooks/useAuth';

const DashboardHome = () => {
    const { currentUser } = useAuth();
    const role = currentUser?.role
    // const role = 'admin';
    // const role = 'recruiter';
    // const role = 'candidate';
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Dashboard Home | Hire Wave</title>
            </Helmet>
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
        </>
    );
};

export default DashboardHome;