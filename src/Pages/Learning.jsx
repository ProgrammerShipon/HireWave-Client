import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";

const Learning = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Learning - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Learning" />

            {/* section here */}
            {/* border */}
            <Divider />
        </>
    );
};

export default Learning;