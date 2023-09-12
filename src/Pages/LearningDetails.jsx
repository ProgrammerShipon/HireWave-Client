import React from 'react';
import useLearningData from '../Hooks/useLearningData';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import LearningDetailsBody from '../Sections/LearningDetailsBody';

const LearningDetails = () => {

    const {id} = useParams()
    const { learningData, loading } = useLearningData()

    const singleLearningData = learningData?.find(data=> data._id === id)
    console.log(singleLearningData);
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Learning Details - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Learning Details" />

            {/* Page content */}
            {
                !loading ? <LearningDetailsBody singleLearningData={singleLearningData} /> : <h2>Loading...</h2>
            }
        </>
    );
};

export default LearningDetails;