import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAppliedData = () => {
    const [axiosSecure] = useAxiosSecure()
    const {
        data: appliedData = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["appliedData"],
            queryFn: async () => {
                const res = await axiosSecure.get('/appliedCandidate');
                return res.data;
            },
        });

    return [appliedData, loading, refetch];
};

export default useAppliedData;