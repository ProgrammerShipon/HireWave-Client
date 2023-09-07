import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useLearningData = () => {
    const { axiosSecure } = useAxios()
    const { data: learningData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['learningData'],
        queryFn: async () => {
            // todos: Offline Running
            // const res = await fetch('/learning.json');
            // const data = await res.json();
            // return data;

            // Server Get Data
            const res = await axiosSecure("/learning");
            return res?.data;
        },
    });

    return { learningData, loading, refetch };
};

export default useLearningData;