import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import AppliedCandidatesDetails from "../Sections/AppliedCandidatesDetails";

const AppliedCandidates = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Applied Candidates - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Applied Candidates" />

            {/* section */}
            <AppliedCandidatesDetails></AppliedCandidatesDetails>
            {/* border */}
            <Divider />
        </>
    );
};

export default AppliedCandidates;