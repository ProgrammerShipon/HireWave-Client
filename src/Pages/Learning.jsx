import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import LearningBlog from "../Sections/LearningBlog";

const Learning = () => {
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Learning - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Learning" />
      <LearningBlog />
      {/* border */}
      <Divider />
    </>
  );
};

export default Learning;
