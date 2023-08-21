import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindRecruiters from '../Sections/FindRecruiters';
import Divider from '../Components/Divider';
import GetStart from '../Sections/GetStart';

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

            <GetStart />
        </>
    );
};

export default Recruiters;