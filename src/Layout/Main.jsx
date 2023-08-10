import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';


const Main = () => {
   return (
      <>
         <Navbar />
         
         <main>
            <Outlet />
         </main>

         <Footer />
      </>
   );
};

export default Main;