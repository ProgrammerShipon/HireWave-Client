import { useQuery } from '@tanstack/react-query';

const usePartnerData = () => {
    const { data: partnerData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['partnerData'],
        queryFn: async () => {
            const res = await fetch('/partners.json');
            const data = await res.json();
            return data;
        },
    });

    return [partnerData, loading, refetch];
};

export default usePartnerData;