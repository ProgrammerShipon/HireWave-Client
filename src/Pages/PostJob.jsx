import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";

const PostJob = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Post Job - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Post Job" />
        </>
    );
};

export default PostJob;