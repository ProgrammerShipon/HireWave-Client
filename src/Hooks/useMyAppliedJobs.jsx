import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyAppliedJobs = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const {
        data: myAppliedJobs = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["myAppliedJobs"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/appliedCandidate/eachCandidate/${user?.email}`);
                return res.data;
            },
        });

    return [myAppliedJobs, loading, refetch];
};

export default useMyAppliedJobs;