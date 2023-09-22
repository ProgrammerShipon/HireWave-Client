import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useOffers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { currentUser, loading: authLoading } = useAuth()

    const {
        data: offerData = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["offerData"],
        queryFn: async () => {
            const res = await axiosSecure(
                `/job_offer/recruiter-email/${currentUser?.email}`
            );
            return await res.data;
        },
    });

    return [offerData, loading, refetch];
};

export default useOffers;