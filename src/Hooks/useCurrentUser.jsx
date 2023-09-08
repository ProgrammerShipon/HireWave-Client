import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCurrentUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [currentUser, setCurrentUser] = useState({});
    const [userLoading, setUserLoading] = useState(true);
    const { data: userData = [], isLoading: isLoading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure('/users');
            return res.data;
        },
    });

    useEffect(() => {
        const getUser = userData.find(usr => usr.email === user?.email)
        setCurrentUser(getUser)
        setUserLoading(false)
    }, [user?.email, isLoading])

    return [currentUser, userLoading];
};

export default useCurrentUser;