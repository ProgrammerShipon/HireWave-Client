import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { data: user = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const user = await useAxios;
            const data = await res.json();
            return data;
        },
    });

    return [user, loading, refetch];
};

export default useUsers;