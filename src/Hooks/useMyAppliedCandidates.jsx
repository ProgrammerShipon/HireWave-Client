import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyAppliedCandidates = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const {
        data: myAppliedCandidates = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["myAppliedCandidates"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/appliedCandidate/email/${user?.email}`);
                return res.data;
            },
        });

    return [myAppliedCandidates, loading, refetch];
};

export default useMyAppliedCandidates;