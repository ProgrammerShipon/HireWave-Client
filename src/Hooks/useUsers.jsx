import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: userData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure('/users');
            return res.data;
        },
    });
    return [userData, loading, refetch];
};

export default useUsers;