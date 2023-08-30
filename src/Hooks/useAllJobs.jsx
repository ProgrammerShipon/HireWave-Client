import { useQuery } from "@tanstack/react-query";

export default function useAllJobs() {
  const {
    data: allJobsData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allJobsData"],
    queryFn: async () => {
      const res = await fetch("/allJobsData.json");
      const data = await res.json();
      console.log(data)
      return data;
    },
  });

  return [allJobsData, loading, refetch];
}
