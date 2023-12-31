import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs';
import Divider from '../Components/Divider';
import JobDetailsBody from '../Sections/JobDetailsBody';

const Job_Details = () => {
    const jobDetails = useLoaderData();

    const { title } = jobDetails;

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>{title} - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Job Details" />

            {/* sections */}
            <JobDetailsBody jobDetails={jobDetails} />

            {/* border */}
            <Divider />
        </>
    );
};

export default Job_Details;