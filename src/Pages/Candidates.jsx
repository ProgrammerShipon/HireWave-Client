import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindCandidate from '../Sections/FindCandidate';
import Divider from '../Components/Divider';

const Candidates = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Candidates - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Candidates" />
            <FindCandidate />
            {/* border */}
            <Divider />
        </>
    );
};

export default Candidates;