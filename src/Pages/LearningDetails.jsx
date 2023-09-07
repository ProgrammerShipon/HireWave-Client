import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs';
import useAxios from '../Hooks/useAxios';
import LearningDetailsBody from '../Sections/LearningDetailsBody';

const LearningDetails = () => {
  
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Learning Details - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Learning Details" />

            {/* Page content */}
            <LearningDetailsBody />
        </>
    );
};

export default LearningDetails;