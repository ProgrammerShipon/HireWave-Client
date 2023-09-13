import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import useMyAppliedJobs from "../Hooks/useMyAppliedJobs";
import ViewApplicationDetails from "../Sections/ViewApplicationDetails";
import PageLoader from "../Components/PageLoader";

const ViewApplication = () => {
    const jobData = useLoaderData();
    const [myAppliedJobs, loading] = useMyAppliedJobs();
    const [appliedJob, setAppliedJob] = useState([]);

    useEffect(() => {
        const findAppliedJob = myAppliedJobs.filter((job) =>
            job.jobId.includes(jobData._id)
        );
        setAppliedJob(findAppliedJob)
    }, [jobData._id, !loading])

    if (!appliedJob.length) {
        return <div className="pt-28"><PageLoader /></div>
    }

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>View Application - HireWave</title>
            </Helmet>

            <Breadcrumbs title="View Application" />

            {/* sections */}
            <ViewApplicationDetails jobData={jobData} appliedJob={appliedJob[0]} />

            {/* border */}
            <Divider />
        </>
    );
};

export default ViewApplication;