import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
   return (
      <>
         <Navbar />
         
         <main>
            <Outlet />
         </main>

         <Footer/>
      </>
   );
};

export default Main;