import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLearningData = () => {
    const [axiosSecure] = useAxiosSecure();
    const {
        data: learningData = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["learningData"],
            queryFn: async () => {
                const res = await axiosSecure.get('/learning');
                return res.data;
            },

        });
    console.log(learningData)

    return { learningData, loading, refetch };
};

export default useLearningData;