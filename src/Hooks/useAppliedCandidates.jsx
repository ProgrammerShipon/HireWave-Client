import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAppliedCandidates = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const {
    data: appliedCandidatesData = [], isLoading: loading, refetch, } = useQuery({
      queryKey: ["appliedCandidatesData"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/appliedCandidate/eachCandidate/${user?.email}`);
        return res.data;
      },
    });

  return [appliedCandidatesData, loading, refetch];
};

export default useAppliedCandidates;
