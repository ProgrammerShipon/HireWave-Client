
const CandidateDescription = ({candidateDetails}) => {
    const { about, name, location } = candidateDetails;
    return (
        <div className="py-5">
            <h1 className="text-xl font-medium mb-3">Candidates About,</h1>
            <h3>Hello my name is {name} and web developer from {location}. </h3>
            <p className="text-dark text-justify"> {about}</p>
        </div>
    );
};

export default CandidateDescription;