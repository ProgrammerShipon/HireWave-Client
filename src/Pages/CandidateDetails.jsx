import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import CandidateDetailsContent from "../Sections/CandidateDetailsContent";
import Divider from "../Components/Divider";

const CandidateDetails = () => {
    const fineCandidateDetails = useLocation();
    const candidateDetails = fineCandidateDetails.state;

    return (
        <>
            <Helmet>
                <title>Candidate Details - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Candidates Details" />

            {/* sections */}
            <CandidateDetailsContent candidateDetails={candidateDetails} />

            {/* border */}
            <Divider />
        </>
    );
};

export default CandidateDetails;