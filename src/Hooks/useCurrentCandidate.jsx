import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCurrentCandidate = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {
        data: currentCandidate = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["currentCandidate"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/candidates/email/${user?.email}`);
                return res.data;
            },
        });

    return [currentCandidate, loading, refetch];
};

export default useCurrentCandidate;