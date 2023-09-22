import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFollowing = () => {
    const [axiosSecure] = useAxiosSecure()
    const { currentUser, loading: authLoading } = useAuth()

    const {
        data: followingData = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["followingData"],
        queryFn: async () => {
            const res = await axiosSecure(
                `/follow/candidates_email/${currentUser?.email}`
            );
            return await res.data;
        },
    });

    return [followingData, loading, refetch];
};

export default useFollowing;
