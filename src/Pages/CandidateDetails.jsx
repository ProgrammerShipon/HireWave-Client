import Breadcrumbs from "../Components/Breadcrumbs";
import CandidateDetailsContent from "../Sections/CandidateDetailsContent";
import Divider from "../Components/Divider";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const CandidateDetails = () => {
    const singleData = useLoaderData();
    const { userId } = useAuth();
    console.log(userId)

    return (
        <>
            <Helmet>
                <title>{singleData[0].name} - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Candidates Details" />

            {/* sections */}
            <CandidateDetailsContent candidateDetails={singleData[0]} />

            {/* border */}
            <Divider />
        </>
    );
};

export default CandidateDetails;