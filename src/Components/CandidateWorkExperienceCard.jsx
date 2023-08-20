
const CandidateWorkExperienceCard = ({ CandidateExperience }) => {
    const { position, company, duration,testimonial } = CandidateExperience;
    return (
        <div>
            <div className='flex items-start gap-5'>
                <p className='bg-green p-2 mt-2 rounded-full'>{company.slice(0, 1)}</p>
                <div>
                    <div className='flex items-center gap-5'>
                        <h3 className='text-xl'>{position}</h3>
                        <p className='bg-green/20 text-dark px-2 rounded-lg'>{duration}</p>
                    </div>
                    <p className='text-red-600'>{company}</p>
                    <p className="mt-5 opacity-70">{testimonial}</p>
                </div>
            </div>

        </div>
    );
};

export default CandidateWorkExperienceCard;