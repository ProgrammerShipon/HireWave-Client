import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import useCurrentUser from '../Hooks/useCurrentUser';
import FindCandidate from '../Sections/FindCandidate';
import GetStart from '../Sections/GetStart';

const Candidates = () => {
    const [currentUser, userLoading, refetch] = useCurrentUser();
    console.log("current User -> ", currentUser, userLoading);

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