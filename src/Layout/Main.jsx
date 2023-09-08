import { Outlet, useNavigate } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import StayTop from '../Components/StayTop';


// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCurrentUser from '../Hooks/useCurrentUser';
import useAuth from '../Hooks/useAuth';

const Main = () => {
   const { user } = useAuth();
   const [currentUser] = useCurrentUser();
   const navigate = useNavigate();

   // if (user?.email && currentUser === undefined) {
   //    return navigate('/select_role', { replace: true })
   // }
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