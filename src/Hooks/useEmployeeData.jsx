import { useQuery } from '@tanstack/react-query';

const useEmployeeData = () => {
    const { data: employeeData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['employeeData'],
        queryFn: async () => {
            const res = await fetch('/employee.json');
            const data = await res.json();
            return data;
        },
    });

    return [employeeData, loading, refetch];
};

export default useEmployeeData;