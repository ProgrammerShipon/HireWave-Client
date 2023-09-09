import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCurrentUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: currentUser = [], isLoading: userLoading, refetch } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const res = await axiosSecure(`/users/email/${user?.email}`);
            return res.data;
        },
    });
    return [currentUser, userLoading, refetch];
};

export default useCurrentUser;