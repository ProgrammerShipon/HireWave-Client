import { useQuery } from "@tanstack/react-query";


const useLanguagesData = () => {
    const { data: languagesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['languagesData'],
        queryFn: async () => {
            const res = await fetch('/languages.json');
            const data = await res.json();
            return data;
        },
    });

    return [languagesData, loading, refetch];
};

export default useLanguagesData;