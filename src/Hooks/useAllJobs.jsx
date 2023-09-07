import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useAllJobs() {
  const [axiosSecure] = useAxiosSecure();
  const { data: allJobsData = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["allJobsData"],
    queryFn: async () => {
      const res = await axiosSecure('/allJobs');
      return res.data;
    },
  });

  return [allJobsData, loading, refetch];
}
