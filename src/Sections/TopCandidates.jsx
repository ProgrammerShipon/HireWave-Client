import SectionTitle from "../Components/SectionTitle";
import CandidateCard from "../Components/CandidateCard";
import Button from "../Components/Button";
import useCandidatesData from "../Hooks/useCandidatesData";
import { Link } from "react-router-dom";
import useReview from "../Hooks/useReview";
import PageLoader from "../Components/PageLoader";

const TopCandidates = () => {
    const [candidatesData, loading] = useCandidatesData();
    const [reviewData] = useReview();

    if (loading) {
        return <PageLoader />
    }
    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                {/* section title */}
                <SectionTitle title='Top Candidates' para='Top Candidates to hire' />

                {/* top employee content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 mt-12 md:mt-16">
                    {
                        candidatesData?.slice(0, 8).map((candidate) => (
                            <CandidateCard key={candidate._id} candidate={candidate} reviewData={reviewData} />
                        ))
                    }
                </div>

                <div className="text-center mt-16">
                    <Link to='candidates'>
                        <Button>View More</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TopCandidates;