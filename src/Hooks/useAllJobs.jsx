import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

export default function useAllJobs() {
  const { axiosSecure } = useAxios();

  const {
    data: allJobsData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allJobsData"],
    queryFn: async () => {
      // todos:
      // public folder Data Connections
      // const res = await fetch("/allJobsData.json");
      // const data = await res.json();
      // return data;

      // Server Data Connections or get data
      const res = await axiosSecure("/allJobs");
      return res?.data;
    },
  });

  return [allJobsData, loading, refetch];
}
