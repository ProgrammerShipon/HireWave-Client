
const CandidateEducationCard = ({ CandidateEducation }) => {
    const { degree, institute, duration, testimonial } = CandidateEducation;
    return (
        <div>
            <div className='flex items-start gap-4 '>

                <p className='bg-green/50 p-2 mt-2 text-dark rounded-full'>{institute.slice(0, 1)}</p>

                <div>
                    <div className='flex items-center  md:gap-5'>
                        <h3 className='text-xl'>{degree}</h3>
                        <p className='bg-green/20 text-dark w-28 md:w-auto px-2 rounded-lg'>{duration}</p>
                        
                    </div>
                    <p className='text-red-600'>{institute}</p>
                    <p className="mt-5 opacity-70">{testimonial}</p>
                </div>
            </div>
        </div>
    );
};

export default CandidateEducationCard;