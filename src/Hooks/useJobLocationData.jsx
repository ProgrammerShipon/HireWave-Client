import { useQuery } from '@tanstack/react-query';

const useJobLocationData = () => {
    const { data: jobLocationData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['jobLocationData'],
        queryFn: async () => {
            const res = await fetch('/jobLocation.json');
            const data = await res.json();
            return data;
        },
    });

    return [jobLocationData, loading, refetch];
};

export default useJobLocationData;