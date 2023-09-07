import Breadcrumbs from "../Components/Breadcrumbs";
import CandidateDetailsContent from "../Sections/CandidateDetailsContent";
import Divider from "../Components/Divider";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import PageLoader from "../Components/PageLoader";

const CandidateDetails = () => {
    const singleData = useLoaderData();
    console.log(singleData)

    return (
        <>
            {
                singleData.email &&
                <Helmet>
                    <title>{singleData.name} - Hire Wave</title>
                </Helmet>
            }

            <Breadcrumbs title="Candidates Details" />

            {/* sections */}
            {
                singleData.email ? <CandidateDetailsContent candidateDetails={singleData} /> : <PageLoader />
            }

            {/* border */}
            <Divider />
        </>
    );
};

export default CandidateDetails;