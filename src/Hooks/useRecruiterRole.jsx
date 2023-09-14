import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRecruiterRole = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const {
        data: recruitersRole = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["recruitersRole"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/recruiters/email/${user?.email}`);
                return res.data;
            },

        });

    return [recruitersRole, loading, refetch];
};

export default useRecruiterRole;