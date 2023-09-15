import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useNotification = () => {
  const { user } = useAuth();
  const [ axiosSecure ] = useAxiosSecure();
  const {
    data: notificationData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/job_offer/candidate-email/${user?.email}`
      );
      return res.data;
    },
  });

  return [notificationData, loading, refetch];
};

export default useNotification;
