import { useQuery } from "@tanstack/react-query";

const useSkills = () => {
    const { data: skillData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['skillData'],
        queryFn: async () => {
            const res = await fetch('/skills.json');
            const data = await res.json();
            return data;
        },
    });

    return [skillData, loading, refetch];
};

export default useSkills;