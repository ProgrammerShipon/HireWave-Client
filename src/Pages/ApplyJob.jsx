import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import ApplyJobForm from '../Sections/ApplyJobForm';
import Divider from '../Components/Divider';

const ApplyJob = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Apply Job - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Apply Job" />

            {/* sections */}
            <ApplyJobForm />

            {/* border */}
            <Divider />
        </>
    );
};

export default ApplyJob;