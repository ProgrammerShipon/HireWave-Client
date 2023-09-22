
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRecruiterPaymentHistory = () => {
    const [axiosSecure]=useAxiosSecure();
    const {currentUser}=useAuth();
    console.log(currentUser.name)
    const {
        data: RecruiterPaymentHistory = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["RecruiterPaymentHistory"],
            queryFn: async () => {
                const res = await axiosSecure.get(`payment/history/Mahfuz private`);
                return res.data;
            },

        });

    return [RecruiterPaymentHistory, loading, refetch ];
};

export default useRecruiterPaymentHistory;