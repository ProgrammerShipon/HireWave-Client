import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFaqs = () => {
  const { axiosSecure } = useAxios();

  const {
    data: faqsData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["faqsData"],
    queryFn: async () => {
      const res = await axiosSecure("/faqs");
      const data = await res.json();
      return data;
    },
  });

  return [faqsData, loading, refetch];
};

export default useFaqs;
