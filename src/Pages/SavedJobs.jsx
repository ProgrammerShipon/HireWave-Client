import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import SavedJob from "../Sections/SavedJob";
import GetStart from "../Sections/GetStart";

const SavedJobs = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Saved Jobs - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Saved Jobs" />

            {/* section here */}
            <SavedJob />
            {/* border */}
            <Divider />

            <GetStart />
        </>
    );
};

export default SavedJobs;