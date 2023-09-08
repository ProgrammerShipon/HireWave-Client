import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSavedJobs = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: savedJobs = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['savedJobs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/savedjob/${user?.email}`);
            return res.data;
        },
    });
    console.log(savedJobs)

    return [savedJobs, loading, refetch];
};

export default useSavedJobs;