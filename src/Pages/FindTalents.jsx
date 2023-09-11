import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import FindCandidate from "../Sections/FindCandidate";
import GetStart from "../Sections/GetStart";

const FindTalents = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Find Talents - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Find Talents" />

            <FindCandidate />
            {/* border */}
            <Divider />

            <GetStart />
        </>
    );
};

export default FindTalents;