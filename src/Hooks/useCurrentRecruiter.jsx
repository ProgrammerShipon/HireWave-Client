import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCurrentRecruiter = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {
        data: currentRecruiter = [], isLoading: loading, refetch } = useQuery({
            queryKey: ["currentRecruiter"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/recruiters/email/${user?.email}`);
                return res.data;
            },

        });

    return [currentRecruiter, loading, refetch];
};

export default useCurrentRecruiter;