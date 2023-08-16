import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import Divider from '../Components/Divider';
import FindJobs from '../Sections/FindJobs';

const BrowseJobs = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Browse Jobs - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Browse Jobs" />

            <FindJobs />
            {/* border */}
            <Divider />
        </>
    );
};

export default BrowseJobs;
