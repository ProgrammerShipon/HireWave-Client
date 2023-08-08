import usePartners from "../Hooks/usePartners";

const Partners = () => {
   const partner = usePartners()
   console.log(partner)

   return (
     <section>
       <div className="container">
         <div className="section-title">
           <p> Our Partners </p>
           <h2>
             {" "}
             We Have Worked with <span className="text-green"> 10,000+ </span> Trusted Companies 
           </h2>
         </div>
       </div>
     </section>
   );
};

export default Partners;