import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import LearningBlog from "../Sections/LearningBlog";
import GetStart from "../Sections/GetStart";

const Learning = () => {
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Learning - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Learning" />

      {/* sections */}
      <LearningBlog />
      <GetStart />
    </>
  );
};

export default Learning;
