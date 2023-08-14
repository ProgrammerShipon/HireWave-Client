import CandidateCard from '../Components/CandidateCard';
import SectionTitle from '../Components/SectionTitle';
import useCandidatesData from '../Hooks/useCandidatesData';

const Candidates = () => {
    const [candidates] = useCandidatesData()
    return (
        <section className='py-16 md:py-20 bg-green/10'>
            <div className='container'>
            <SectionTitle title={"Our Candidates"}></SectionTitle>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-8'>
                    {
                        candidates.map(candidate =>
                            <CandidateCard
                                key={candidate.id}
                                candidate={candidate}
                            ></CandidateCard>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Candidates;