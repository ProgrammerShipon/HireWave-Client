import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useCurrentRecruiter from './useCurrentRecruiter';

const usePaymentHistory = () => {
    const [axiosSecure]=useAxiosSecure();
    const [currentRecruiter, loadingRecruiters, refetchRecruiters] = useCurrentRecruiter();
    
    const {
        data: paymentHistory = [], isLoading: loading, refetch, } = useQuery({
            queryKey: ["paymentHistory"],
            queryFn: async () => {
                const res = await axiosSecure.get(`/payment/history/${currentRecruiter?.name}`);
                return res.data;
            },

        });
console.log('paymentHistory',paymentHistory)
    return [paymentHistory, loading, refetch ];
};

export default usePaymentHistory;