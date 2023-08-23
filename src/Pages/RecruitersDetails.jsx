import React from "react";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import RecruitersDetailsContent from "../Sections/RecruitersDetailsContent";

export default function RecruitersDetails() {
  return (
    <>
      <Helmet>
        <title>Candidate Details - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Candidates Details" />

      {/* sections */}
      <RecruitersDetailsContent />
    </>
  );
}
