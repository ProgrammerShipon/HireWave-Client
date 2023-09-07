import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCurrentUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);
    const { data: userData = [], isLoading: userLoading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure('/users');
            return res.data;
        },
    });

    useEffect(() => {
        const getUser = userData.find(usr => usr.email === user?.email)
        setCurrentUser(getUser)
        if (getUser?.email) {
            setLoading(false)
        }
    }, [user?.email, userLoading])

    return [currentUser, loading];
};

export default useCurrentUser;