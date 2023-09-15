import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCurrentRecruiter = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {
        data: currentRecruiter = [], isLoading: loadingRecruiters, refetch:refetchRecruiters } = useQuery({
            queryKey: ["currentRecruiter"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/recruiters/email/charlie@gmail.com`);
                // const res = await axiosSecure.get(`/recruiters/email/${user?.email}`);
                return res.data;
            },

        });

    return [currentRecruiter, loadingRecruiters, refetchRecruiters];
};

export default useCurrentRecruiter;