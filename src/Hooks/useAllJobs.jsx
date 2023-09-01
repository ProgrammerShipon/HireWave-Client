import { useQuery } from "@tanstack/react-query";

export default function useAllJobs() {
  const {
    data: allJobsData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allJobsData"],
    queryFn: async () => {
      const res = await fetch("https://hire-wave-server.vercel.app/api/allJobs");
      const data = await res.json();
      console.log(data)
      return data;
    },
  });

  return [allJobsData, loading, refetch];
}
