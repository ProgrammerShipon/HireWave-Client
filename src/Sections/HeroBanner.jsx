import React from 'react';
import Button from '../Components/Button';

const HeroBanner = () => {
   return (
     <div id="hero-banner" className="h-screen">
       <h1 className="text-3xl text-pink-700"> This is Hero Banner Route </h1>
       <Button> Start Here </Button>
     </div>
   );
};

export default HeroBanner;