import CandidateCurrentInfo from "./CandidateCurrentInfo";
import CandidateEducation from "./CandidateEducation";
import CandidateWorkExperience from "./CandidateWorkExperience";
import CandidateDescription from "./candidateDescription";

const CandidateAbout = ({ candidateDetails }) => {
    return (
        <div className="py-12 md:py-14">

            <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-10 ">

                {/* Candidate Current All Information And Social Link Is Here */}
                <div className="md:col-span-3 lg:col-span-4">
                    <CandidateCurrentInfo candidateDetails={candidateDetails} />
                </div>

                <div className="md:col-span-5 lg:col-span-8 bg-slate-200 px-8 py-10 rounded-md">
                    {/* Candidate Description */}
                    <CandidateDescription candidateDetails={candidateDetails} />

                    {/* Candidate Educational Qualification */}
                    <CandidateEducation candidateDetails={candidateDetails} />

                    {/* Candidate Work Qualification */}
                    <CandidateWorkExperience candidateDetails={candidateDetails} />
                </div>
            </div>
        </div>
    );
};

export default CandidateAbout;