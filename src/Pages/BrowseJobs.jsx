import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";

const BrowseJobs = () => {
  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Browse Jobs - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Browse Jobs" />

      {/* section here */}
      {/* border */}
      <Divider />
    </>
  );
};

export default BrowseJobs;
