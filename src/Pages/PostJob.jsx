import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import PostJobForm from "../Sections/PostJobForm";

const PostJob = () => {
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Post Job - Hire Wave</title>
      </Helmet>
      <Breadcrumbs title="Post Job" />

      <PostJobForm />
      {/* border */}
      <Divider />
    </>
  );
};

export default PostJob;
