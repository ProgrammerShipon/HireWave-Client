import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMyPostedJobs = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: myPostedJobs = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["myPostedJobs"],
        queryFn: async () => {
            const res = await axiosSecure(`/allJobs/email/${user?.email}`);
            return res.data;
        },
    });

    return [myPostedJobs, loading, refetch];
};

export default useMyPostedJobs;