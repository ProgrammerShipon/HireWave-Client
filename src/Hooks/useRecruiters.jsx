import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useRecruiters = () => {
  const { axiosSecure } = useAxios()
  const {
    data: recruiterData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["recruiterData"],
    queryFn: async () => {
      const res = await fetch("https://hire-wave-server.vercel.app/api/recruiters");
      const data = await res.json();
      return data;

      // const res = await axiosSecure("/recruiters");
      // const data = await res.json();
      // return data?.data;
    },
  });

  return [recruiterData, loading, refetch];
};

export default useRecruiters;
