import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import ApplyJobForm from '../Sections/ApplyJobForm';
import Divider from '../Components/Divider';
import { useLoaderData } from 'react-router-dom';

const ApplyJob = () => {
    const jobData = useLoaderData();
    console.log(jobData)
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Apply Job - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Apply Job" />

            {/* sections */}
            <ApplyJobForm jobData={jobData} />

            {/* border */}
            <Divider />
        </>
    );
};

export default ApplyJob;