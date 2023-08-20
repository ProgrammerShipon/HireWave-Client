import CandidateEducationCard from "./CandidateEducationCard";

const CandidateEducation = ({ candidateDetails }) => {
    const { education } = candidateDetails;
    return (
        <div className="py-8 ">
            <h3 className="text-xl mb-4">Education Qualification :</h3>
            {
                education.length > 0 && <div className='flex flex-col gap-8'>
                    {
                        education.map((CandidateEducation, index) =>
                            <CandidateEducationCard key={index} CandidateEducation={CandidateEducation} />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default CandidateEducation;