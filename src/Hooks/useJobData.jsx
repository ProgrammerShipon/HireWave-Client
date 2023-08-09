import { useQuery } from "@tanstack/react-query";

const useJobData = () => {
    const { data: jobData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['jobData'],
        queryFn: async () => {
            const res = await fetch('/jobs.json');
            const data = await res.json();
            return data;
        },
    });

    return [jobData, loading, refetch];
};

export default useJobData;