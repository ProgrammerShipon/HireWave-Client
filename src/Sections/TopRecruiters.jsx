import PageLoader from "../Components/PageLoader";
import RecruiterCard from "../Components/RecruiterCard";
import SectionTitle from "../Components/SectionTitle";
import useRecruiters from "../Hooks/useRecruiters";
const TopRecruiters = () => {
    const [recruiterData, loading] = useRecruiters();

    if (loading) {
        return <PageLoader />
    }

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                {/* section title */}
                <SectionTitle title='Top Recruiters' para='Top Recruiters to hire' />

                {/* content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center mt-12 md:mt-16">
                    {recruiterData.slice(0, 15).map((recruiter) => (
                        <RecruiterCard key={recruiter._id} recruiter={recruiter} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopRecruiters;