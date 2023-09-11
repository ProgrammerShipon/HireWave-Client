import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import PageLoader from '../Components/PageLoader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className='flex h-screen items-center justify-center'><PageLoader /></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;