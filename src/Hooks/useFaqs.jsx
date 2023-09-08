import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFaqs = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: faqsData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["faqsData"],
    queryFn: async () => {
      const res = await axiosSecure('/faqs');
      return res.data;
    },
  });

  return [faqsData, loading, refetch];
};

export default useFaqs;
