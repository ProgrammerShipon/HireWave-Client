import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRecruiterRole = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    console.log(user.email)
    const {
        data: recruitersRole = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["recruitersRole"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/recruiters/email/${user?.email}`);
                return res.data;
            },

        });
    // console.log(recruitersRole)

    return [recruitersRole, loading, refetch];
};

export default useRecruiterRole;