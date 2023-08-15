import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";

const AppliedCandidates = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Applied Candidates - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Applied Candidates" />

            {/* section here */}
            {/* border */}
            <Divider />
        </>
    );
};

export default AppliedCandidates;