import { Outlet } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import StayTop from '../Components/StayTop';


// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
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