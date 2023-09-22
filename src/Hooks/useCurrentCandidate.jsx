import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCurrentCandidate = () => {
    const { currentUser } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {
        data: currentCandidate = [], isLoading: candidateLoading, refetch, } = useQuery({
            queryKey: ["currentCandidate"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/candidates/email/${currentUser?.email}`);
                return res.data;
            },
        });

    return [currentCandidate, candidateLoading, refetch];
};

export default useCurrentCandidate;