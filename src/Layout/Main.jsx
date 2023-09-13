import { Navigate, Outlet } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import StayTop from '../Components/StayTop';
import useAuth from '../Hooks/useAuth';
import PageLoader from '../Components/PageLoader';
import SelectRole from '../SignUpSteps/SelectRole';

// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
   const { user, loading, currentUser } = useAuth();
   if (loading) {
      return <div className='flex h-screen items-center justify-center'><PageLoader /></div>
   }

   if (user?.email && currentUser?.email === undefined) {
      return <SelectRole />;
   }

   return (
      <>
         <StayTop />
         <ScrollToTop smooth color='#33e2a0' className='px-2 bg-white text-center flex items-center justify-center animate-bounce shadow-4xl shadow-gray/50' />

         <Navbar />

         <main>
            <Outlet />
         </main>

         <Footer />

         <ToastContainer />
      </ >
   );
};

export default Main;