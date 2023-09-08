import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import PageLoader from '../Components/PageLoader';
import useCurrentUser from '../Hooks/useCurrentUser';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [currentUser, userLoading] = useCurrentUser();

    const location = useLocation();

    if (loading) {
        return <div className='pt-28'><PageLoader /></div>
    }
    // if (userLoading) {
    //     return <div className='pt-28'><PageLoader /></div>
    // }
    if (user) {
        return children;
    }
    // if (user && !currentUser) {
    //     return <Navigate to='/select_role' state={{ from: location }} replace />;
    // }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;