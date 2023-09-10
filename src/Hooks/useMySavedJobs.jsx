import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMySavedJobs = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: mySavedJobs = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['mySavedJobs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/savedjob/${user?.email}`);
            return res.data;
        },
    });

    return [mySavedJobs, loading, refetch];
};

export default useMySavedJobs;