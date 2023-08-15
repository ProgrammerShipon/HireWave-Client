import { useQuery } from "@tanstack/react-query";

const useAllCategories = () => {
    const { data: allCategoriesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allCategoriesData'],
        queryFn: async () => {
            const res = await fetch('/AllCategoris.json');
            const data = await res.json();
            return data;
        },
    });
    return [allCategoriesData, loading, refetch];
    
};

export default useAllCategories;