import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSingleUser = () => {
    const { currentUser } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {
      data: singleUser = [],
      isLoading: UserDataLoading,
      refetch,
    } = useQuery({
      queryKey: ["userData"],
      queryFn: async () => {
        const res = await axiosSecure(`/users/email/${currentUser?.email}`);
        return res.data;
      },
    });
    return [singleUser, UserDataLoading, refetch];
};

export default useSingleUser;