import React from 'react';
import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import ApplicationFormDetails from '../Sections/ApplicationFormDetails';
import { useLoaderData, useParams } from 'react-router-dom';

const ApplicationForm = () => {
    const singleData = useLoaderData();
    console.log(singleData);

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
                singleData.email ?  <ApplicationFormDetails candidateDetails={singleData} /> : <PageLoader />
            }
           
            {/* border */}
            <Divider />
        </>
    );
};

export default ApplicationForm;