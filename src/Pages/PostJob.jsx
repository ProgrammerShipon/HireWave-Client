import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import PostJobFrom from "../Sections/PostJobFrom";

const PostJob = () => {
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Post Job - Hire Wave</title>
      </Helmet>
      <Breadcrumbs title="Post Job" />

      <PostJobFrom />
    </>
  );
};

export default PostJob;
