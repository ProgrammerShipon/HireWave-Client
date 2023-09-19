import React from 'react';
import { Helmet } from "react-helmet";
import { useLoaderData } from 'react-router-dom';
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import PageLoader from '../Components/PageLoader';
import ApplicationFormDetails from '../Sections/ApplicationFormDetails';

const ApplicationForm = () => {
    const singleData = useLoaderData();

    return (
        <>
            {/* page title */}
            {
                singleData?.email &&
                <Helmet>
                    <title>{singleData.name}'s Form - Hire Wave</title>
                </Helmet>
            }

            <Breadcrumbs title="Candidate's Form" />

            {/* section */}
            {
                singleData?.applicantEmail ? <ApplicationFormDetails candidateDetails={singleData} /> : <PageLoader />
            }

            {/* border */}
            <Divider />
        </>
    );
};

export default ApplicationForm;