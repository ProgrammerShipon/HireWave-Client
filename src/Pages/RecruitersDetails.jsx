import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import RecruitersDetailsContent from "../Sections/RecruitersDetailsContent";
import Divider from "../Components/Divider";
import useRecruiters from "../Hooks/useRecruiters";

export default function RecruitersDetails() {
  const [recruiterData, loading] = useRecruiters();

  return (
    <>
      <Helmet>
        <title>Recruiter Details - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Recruiter Details" />

      {/* sections */}
      {
        !loading ? <RecruitersDetailsContent recruiterData={recruiterData} /> : <h1 className="text-4xl">Loading ...</h1>
      }

      {/* border */}
      <Divider />
    </>
  );
}
