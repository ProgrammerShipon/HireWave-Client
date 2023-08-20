import CandidateAchievementCard from "./CandidateAchievementCard";

const CandidateAchievement = ({ candidateDetails }) => {
    const { awards } = candidateDetails;
    return (
        <div className="py-8 ">
            <h3 className="text-xl mb-4">Candidates Awards  :</h3>
            {
                awards?.length > 0 && <div className='flex flex-col gap-8'>
                    {
                        awards.map((CandidateAwards, index) =>
                            <CandidateAchievementCard key={index} CandidateAwards={CandidateAwards} />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default CandidateAchievement;