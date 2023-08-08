import { useEffect, useState } from "react";

const usePartners = async () => {
   const [ partnerData, setData ] = useState(null)
   useEffect(() => {
     fetch("/OurPartners.json")
       .then((res) => res.json())
       .then((data) => setData(data));
 } ,[])
   return {isLoadingPartner, partnerData}
}

export default usePartners