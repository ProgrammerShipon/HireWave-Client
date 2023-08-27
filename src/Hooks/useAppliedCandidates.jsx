import { useQuery } from "@tanstack/react-query";

const useAppliedCandidates = () => {
  const {
    data: appliedCandidatesData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["appliedCandidatesData"],
    queryFn: async () => {
      const res = await fetch("/appliedCandidates.json");
      const data = await res.json();
      return data;
    },
  });

  return [appliedCandidatesData, loading, refetch];
};

export default useAppliedCandidates;
