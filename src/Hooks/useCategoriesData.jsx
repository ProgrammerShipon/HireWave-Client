import { useQuery } from '@tanstack/react-query';

const useCategoriesData = () => {
    const { data: categoriesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['categoriesData'],
        queryFn: async () => {
            const res = await fetch('/jobCategories.json');
            const data = await res.json();
            return data;
        },
    });

    return [categoriesData, loading, refetch];
};

export default useCategoriesData;