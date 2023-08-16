import { useQuery } from "@tanstack/react-query";

export default function useLearning() {
  const {
    data: learning = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["learning"],
    queryFn: async () => {
      const res = await fetch("/learning.json");
      const data = await res.json();
      return data;
    },
  });

  return [learning, loading, refetch];
}
