import React from 'react';
import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import ApplicationFormDetails from '../Sections/ApplicationFormDetails';
import { useLoaderData } from 'react-router-dom';
import PageLoader from '../Components/PageLoader';

const ApplicationForm = () => {
    const singleData = useLoaderData();

    return (
        <>
            {/* page title */}
            {
                singleData.email &&
                <Helmet>
                    <title>{singleData.name}'s Form - Hire Wave</title>
                </Helmet>
            }

            <Breadcrumbs title="Candidate's Form" />

            {/* section */}
            {
                singleData.applicantEmail ? <ApplicationFormDetails candidateDetails={singleData} /> : <PageLoader />
            }

            {/* border */}
            <Divider />
        </>
    );
};

export default ApplicationForm;