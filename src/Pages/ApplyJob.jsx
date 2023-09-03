import React from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import { Helmet } from 'react-helmet';
import ApplyJobForm from '../Sections/ApplyJobForm';

const ApplyJob = () => {

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Apply Job - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Apply Job" />

            {/* Apply form section*/}
            <ApplyJobForm />
        </>
    );
};

export default ApplyJob;