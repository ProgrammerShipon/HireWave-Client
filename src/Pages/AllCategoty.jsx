import React from 'react';
import Categoris from "../Sections/Categoris";
import Breadcrumbs from '../Components/Breadcrumbs';
import { Helmet } from 'react-helmet';
const AllCategoty = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>All Category - Hire Wave</title>
            </Helmet>
            <Breadcrumbs title="All Categoty" />
            <Categoris />
        </>
    );
};

export default AllCategoty;