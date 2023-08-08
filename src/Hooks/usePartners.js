import { useEffect, useState } from "react";

const usePartners = async () => {
  const [partnerData, setData] = useState(null)
  const [isLoadingPartner, setLoadingPartner] = useState(true);
  
   useEffect(() => {
     fetch("OurPartners.json")
       .then((res) => res.json())
       .then((data) => {
         setData(data)
         setLoadingPartner(false);
       });
   }, [])
  
   return { partnerData, isLoadingPartner };
}

export default usePartners