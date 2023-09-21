import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useJobOffer = () => {
   const [ axiosSecure ] = useAxiosSecure()
   const { currentUser, loading: authLoading } = useAuth()
   
  const {
    data: jobOfferData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["jobOfferData"],
   //  enabled: [authLoading],
    queryFn: async () => {
      const res = await axiosSecure(
        `/job_offer/candidate-email/${currentUser?.email}`
      );
      return await res.data;
    },
  });

  return [jobOfferData, loading, refetch];
};

export default useJobOffer;
