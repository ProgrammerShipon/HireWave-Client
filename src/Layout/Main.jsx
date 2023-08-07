import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shayed/navbar';
import Footer from '../shayed/footer';

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