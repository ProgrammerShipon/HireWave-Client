import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import PageLoader from "../Components/PageLoader";
import RecruitersDetailsContent from "../Sections/RecruitersDetailsContent";

import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export default function RecruitersDetails() {
  const { currentUser } = useAuth()
  const [axiosSecure] = useAxiosSecure();
  const singleRecruiter = useLoaderData();

  console.log(singleRecruiter)
  
  const viewsCount = () => {
    const viewsData = { candidateEmail: currentUser?.email }

    axiosSecure
      .patch(`/recruiters/viewsCount/${singleRecruiter[0]?._id}`, viewsData)
      .then((res) => {
        console.log(res)
        if (res.status == 200 || res.status == 201) {
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    viewsCount();
  } , [])

  return (
    <>
      <Helmet>
        <title>Recruiter Details - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Recruiter Details" />

      {/* sections */}
      {
        singleRecruiter.length > 0 ? <RecruitersDetailsContent recruiterData={singleRecruiter} /> : <PageLoader />
      }

      {/* border */}
      <Divider />
    </>
  );
}
