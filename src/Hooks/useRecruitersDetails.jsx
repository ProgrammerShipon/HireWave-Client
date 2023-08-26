import { useQuery } from "@tanstack/react-query";

export default function useRecruitersDetails() {
  const {
    data: RecruitersDetails = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["RecruitersDetails"],
    queryFn: async () => {
      const res = await fetch("/RecruitersDetails.json");
      const data = await res.json();
      return data;
    },
  });

  return [RecruitersDetails, loading, refetch];
}
