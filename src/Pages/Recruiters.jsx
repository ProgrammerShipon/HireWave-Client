import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindRecruiters from '../Sections/FindRecruiters';
import Divider from '../Components/Divider';

const Recruiters = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Recruiters - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Recruiters" />

            {/* sections */}
            <FindRecruiters />
            {/* border */}
            <Divider />
        </>
    );
};

export default Recruiters;