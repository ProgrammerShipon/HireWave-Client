import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import ScrollToTop from '../Components/ScrollToTop';


const Main = () => {
   return (
      <>
         <ScrollToTop />

         <Navbar />

         <main>
            <Outlet />
         </main>

         <Footer />
      </>
   );
};

export default Main;