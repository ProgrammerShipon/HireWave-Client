import { useQuery } from "@tanstack/react-query";

const useLearningData = () => {
    const { data: learningData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['learningData'],
        queryFn: async () => {
            const res = await fetch('/learning.json');
            const data = await res.json();
            return data;
        },
    });

    return [learningData, loading, refetch];
};

export default useLearningData;