import { useQuery } from '@tanstack/react-query';

const useCandidatesData = () => {
    const { data: candidatesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['candidatesData'],
        queryFn: async () => {
            const res = await fetch('https://hire-wave-server.vercel.app/api/jobCandidates');
            const data = await res.json();
            return data;
        },
    });
    return [candidatesData, loading, refetch];
};

export default useCandidatesData;