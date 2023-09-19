import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import PageLoader from "../Components/PageLoader";
import CandidateDetailsContent from "../Sections/CandidateDetailsContent";

const CandidateDetails = () => {
    const singleData = useLoaderData();
    return (
        <>
            {
                singleData?.email &&
                <Helmet>
                    <title>{singleData?.name} - Hire Wave</title>
                </Helmet>
            }

            <Breadcrumbs title="Candidates Details" />

            {/* sections */}
            {
                singleData?.email ? <CandidateDetailsContent candidateDetails={singleData} /> : <PageLoader />
            }

            {/* border */}
            <Divider />
        </>
    );
};

export default CandidateDetails;