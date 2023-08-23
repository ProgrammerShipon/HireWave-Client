import { useQuery } from "@tanstack/react-query";

const useEvents = () => {
  const {
    data: eventData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["eventData"],
    queryFn: async () => {
      const res = await fetch("/events.json");
      const data = await res.json();
      return data;
    },
  });

  return [eventData, loading, refetch];
};

export default useEvents;
