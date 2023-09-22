import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTask = () => {
    const { user, currentUser } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    let url = `/task/recruiter-email/${user?.email}`;
    if (currentUser.role === 'candidate') {
        url = `/task/candidate-email/${user?.email}`;
    }

    const {
        data: taskData = [], isLoading: candidateLoading, refetch, } = useQuery({
            queryKey: ["taskData"],
            queryFn: async () => {
                const res = await axiosSecure.get(url);
                return res.data;
            },
        });

    return [taskData, candidateLoading, refetch];
};

export default useTask;