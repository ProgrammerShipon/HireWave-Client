import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindCandidate from '../Sections/FindCandidate';
import GetStart from '../Sections/GetStart';

const Candidates = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Candidates - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Candidates" />

            {/* sections */}
            <FindCandidate />
            <GetStart />
        </>
    );
};

export default Candidates;