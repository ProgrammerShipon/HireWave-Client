import useEmployeeData from "../Hooks/useEmployeeData";
import SectionTitle from "../Components/SectionTitle";
import EmployeeCard from "../Components/EmployeeCard";

export default function TopEmployee() {
    const [employeeData] = useEmployeeData();

    return (
        <section className="py-16 md:py-20 duration-300">
            <div className="container">
                {/* section title */}
                <SectionTitle title='Top Employer' para='Top Employer to hire' />

                {/* top employee content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 mt-12 md:mt-16">
                    {
                        employeeData?.map((employee) => (
                            <EmployeeCard key={employee.id} employee={employee} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
