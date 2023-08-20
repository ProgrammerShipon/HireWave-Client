import CandidateWorkExperienceCard from "./CandidateWorkExperienceCard";

const CandidateWorkExperience = ({ candidateDetails }) => {
    const { experience } = candidateDetails;
    return (
        <div className="py-8 ">
            <h3 className="text-xl mb-4">Work Experience :</h3>
            {
                experience.length > 0 && <div className='flex flex-col gap-8'>
                    {
                        experience.map((CandidateExperience, index) =>
                            <CandidateWorkExperienceCard key={index} CandidateExperience={CandidateExperience} />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default CandidateWorkExperience;