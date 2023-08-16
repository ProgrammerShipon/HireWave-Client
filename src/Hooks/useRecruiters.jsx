import { useQuery } from "@tanstack/react-query";

const useRecruiters = () => {
  const {
    data: recruiterData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["recruiterData"],
    queryFn: async () => {
      const res = await fetch("/recruiters.json");
      const data = await res.json();
      return data;
    },
  });

  return [recruiterData, loading, refetch];
};

export default useRecruiters;
