import React from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import { Helmet } from 'react-helmet';
import ApplyJobForm from '../Sections/ApplyJobForm';

const ApplyJob = () => {

    return (
        <div>
            {/* page title */}
            <Helmet>
                <title>Apply Job - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Apply Job" />

            {/* Main content */}
            <ApplyJobForm />
        </div>
    );
};

export default ApplyJob;