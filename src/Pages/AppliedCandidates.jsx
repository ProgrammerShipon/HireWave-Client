import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import AppliedCandidatesDetails from "../Sections/AppliedCandidatesDetails";
import useAppliedData from "../Hooks/useAppliedData";
import PageLoader from "../Components/PageLoader";

const AppliedCandidates = () => {
    const [appliedData, loading] = useAppliedData();

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Applied Candidates - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Applied Candidates" />

            {/* section */}
            {
                !loading ? <AppliedCandidatesDetails appliedData={appliedData} /> : <div className='flex h-screen items-center justify-center'><PageLoader /></div>
            }
            {/* border */}
            <Divider />
        </>
    );
};

export default AppliedCandidates;