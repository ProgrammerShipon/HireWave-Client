import useAuth from '../Hooks/useAuth';
import DashTitle from './DashTitle';

const DashboardHome = () => {
    const { user } = useAuth();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Dashboard Home' />

            <h2 className='mt-10 text-center text-4xl text-green/80 font-semibold'>Welcome to Dashboard Home</h2>
            <p className='text-center text-2xl text-green/80 font-semibold'>{user?.displayName}</p>
        </section>
    );
};

export default DashboardHome;