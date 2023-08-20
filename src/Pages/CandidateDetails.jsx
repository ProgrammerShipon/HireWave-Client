import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import CandidateDetailsContent from "../Sections/CandidateDetailsContent";

const CandidateDetails = () => {
    const fineCandidateDetails = useLocation();
    const candidateDetails = fineCandidateDetails.state;

    return (
        <>
            <Helmet>
                <title>Candidate Details - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Candidates Details" />

            {/* Candidate About */}
            <CandidateDetailsContent candidateDetails={candidateDetails} />
        </>
    );
};

export default CandidateDetails;