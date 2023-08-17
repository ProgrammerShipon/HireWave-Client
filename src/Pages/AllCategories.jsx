import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import Categories from "../Sections/Categories";
import Divider from '../Components/Divider';

const AllCategories = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>All Category - Hire Wave</title>
            </Helmet>
            <Breadcrumbs title="All Categories" />

            {/* section */}
            <Categories />
            {/* border */}
            <Divider />
        </>
    );
};

export default AllCategories;