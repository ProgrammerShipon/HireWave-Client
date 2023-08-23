import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import PostJobFrom from "../Sections/PostJobFrom";
import Divider from "../Components/Divider";

const PostJob = () => {
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Post Job - Hire Wave</title>
      </Helmet>
      <Breadcrumbs title="Post Job" />

      <PostJobFrom />
      {/* border */}
      <Divider />
    </>
  );
};

export default PostJob;
