import { useQuery } from '@tanstack/react-query';

const useReview = () => {
    const { data: reviewData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            const res = await fetch('/reviews.json');
            const data = await res.json();
            return data;
        },
    });

    return [reviewData, loading, refetch];
};

export default useReview;