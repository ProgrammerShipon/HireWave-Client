import { useState } from "react";

const Partners = () => {
 console.log(isLoadingPartner, partnerData);const [partnerData, setData] = useState(null);
 const [isLoadingPartner, setLoadingPartner] = useState(true);

 useEffect(() => {
   fetch("OurPartners.json")
     .then((res) => res.json())
     .then((data) => {
       setData(data);
       setLoadingPartner(false);
     });
 }, []);

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