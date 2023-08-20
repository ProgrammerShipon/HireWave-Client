import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import ScrollToTop from '../Components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
   return (
      <>
         <ScrollToTop />

         <Navbar />

         <main>
            <Outlet />
         </main>

         <Footer />

         <ToastContainer />
      </>
   );
};

export default Main;