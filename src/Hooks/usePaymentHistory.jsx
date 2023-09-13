import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const usePaymentHistory = () => {
    const [axiosSecure]=useAxiosSecure();
    const {
        data: paymentHistory = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["paymentHistory"],
            queryFn: async () => {
                const res = await axiosSecure.get('/payment/history');
                return res.data;
            },

        });

    return [paymentHistory, loading, refetch ];
};

export default usePaymentHistory;