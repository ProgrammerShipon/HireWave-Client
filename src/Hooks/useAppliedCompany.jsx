import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useRecruiterRole from './useRecruiterRole';

const useAppliedCompany = () => {
    const [axiosSecure] = useAxiosSecure();
    const [recruitersRole] = useRecruiterRole();
    console.log(recruitersRole.name)
    const {
        data: appliedCompany = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["appliedCompany"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/appliedCandidate/company/${recruitersRole?.name}`);
                return res.data;
            },

        });
    console.log(appliedCompany)

    return [appliedCompany, loading, refetch];
};

export default useAppliedCompany;