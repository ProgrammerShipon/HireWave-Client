import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRecruiters = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: recruiterData = [], isLoading: loading, refetch, } = useQuery({
        queryKey: ["recruiterData"],
        queryFn: async () => {
            const res = await axiosSecure('/recruiters');
            return res.data;
        },
    });

    return [recruiterData, loading, refetch];
};

export default useRecruiters;
