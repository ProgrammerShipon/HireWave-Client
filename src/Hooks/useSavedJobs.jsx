import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useSavedJobs = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: savedJobs = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['savedJobs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/savedjob');
            return res.data;
        },
    });

    return [savedJobs, loading, refetch];
};

export default useSavedJobs;