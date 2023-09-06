import Breadcrumbs from "../Components/Breadcrumbs";
import CandidateDetailsContent from "../Sections/CandidateDetailsContent";
import Divider from "../Components/Divider";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const CandidateDetails = () => {
    const singleData = useLoaderData();

    return (
        <>
            <Helmet>
                <title>{singleData.name} - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Candidates Details" />

            {/* sections */}
            <CandidateDetailsContent candidateDetails={singleData} />

            {/* border */}
            <Divider />
        </>
    );
};

export default CandidateDetails;