import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFavorite = () => {
    const [axiosSecure] = useAxiosSecure()
    const { currentUser, loading: authLoading } = useAuth()
    console.log(currentUser?.email);

    const {
        data: favoriteData = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["favoriteData"],
        queryFn: async () => {
            const res = await axiosSecure(
                `/favorite/recruiters_email/${currentUser?.email}`
            );
            return await res.data;
        },
    });

    return [favoriteData, loading, refetch];
};

export default useFavorite;