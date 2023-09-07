import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCurrentUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [currentUser, setCurrentUser] = useState({});
    const { data: userData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure('https://hire-wave-server.vercel.app/api/users');
            return res.data;
        },
    });

    useEffect(() => {
        const getUser = userData.find(usr => usr.email === user?.email)
        setCurrentUser(getUser)
    }, [user?.email, !loading, refetch])

    return [currentUser, loading];
};

export default useCurrentUser;