import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import RecruitersDetailsContent from "../Sections/RecruitersDetailsContent";
import Divider from "../Components/Divider";
import { useLoaderData } from "react-router-dom";

export default function RecruitersDetails() {
  const singleRecruiter = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Recruiter Details - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Recruiter Details" />

      {/* sections */}
      {
        singleRecruiter.length > 0 ? <RecruitersDetailsContent recruiterData={singleRecruiter} /> : <h1 className="text-4xl">Loading ...</h1>
      }

      {/* border */}
      <Divider />
    </>
  );
}
