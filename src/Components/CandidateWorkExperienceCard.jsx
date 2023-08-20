
const CandidateWorkExperienceCard = ({ CandidateExperience }) => {
    const { logo, companyName, jobType, position, startDate, location, currentWorking } = CandidateExperience;
    return (
        <div>
            <div className='flex items-start gap-5'>
                <p className='bg-green p-2 mt-2 rounded-full'>{companyName}</p>
                <div>
                    <div className='flex items-center gap-5'>
                        <h3 className='text-xl'>{jobType}</h3>
                        <p className='bg-green/20 text-dark px-2 rounded-lg'>{position}</p>
                    </div>
                    <p className='text-red-600'>{companyName}</p>
                    <p className="mt-5 opacity-70">{startDate}</p>
                </div>
            </div>

        </div>
    );
};

export default CandidateWorkExperienceCard;