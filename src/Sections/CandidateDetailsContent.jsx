import CandidateProfile from "../Components/CandidateProfile";
import CandidateAbout from "../Components/CandidateAbout";

const CandidateDetailsContent = ({ candidateDetails }) => {
    return (
        <section>
            <div className="container">
                {/* Candidate Profile Section */}
                <CandidateProfile candidateDetails={candidateDetails} />

                {/* Candidate All Details  Section */}
                <CandidateAbout candidateDetails={candidateDetails} />
            </div>
        </section>
    );
};

export default CandidateDetailsContent;