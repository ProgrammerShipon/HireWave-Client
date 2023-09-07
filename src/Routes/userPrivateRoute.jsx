import { Navigate, useLocation } from 'react-router-dom';

const userPrivateRoute = ({ children }) => {
   // const { user, loading } = useAuth();
   const location = useLocation()


   // waiting loading time
   if ( loading ) {
     return <h1> Loading... </h1>;
   }

   // check user
   if (user && user?.email) {
      return children;
   }

   // children 
   return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default userPrivateRoute;



