import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";

const SavedJobs = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Saved Jobs - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Saved Jobs" />

            {/* section here */}
            {/* border */}
            <Divider />
        </>
    );
};

export default SavedJobs;