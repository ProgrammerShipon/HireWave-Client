import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCandidatesData = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: candidatesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['candidatesData'],
        queryFn: async () => {
            const res = await axiosSecure('/candidate');
            return res.data;
        },
    });
    return [candidatesData, loading, refetch];
};

export default useCandidatesData;