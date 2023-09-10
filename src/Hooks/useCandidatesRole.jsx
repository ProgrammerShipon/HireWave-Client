
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCandidatesRole = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    // console.log(user.email)
    const {
        data: candidatesRole = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["candidatesRole"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/candidates/email/${user?.email}`);
                return res.data;
            },

        });
    console.log(candidatesRole)

    return [candidatesRole, loading, refetch];
};

export default useCandidatesRole;