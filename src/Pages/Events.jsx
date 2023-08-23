import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindEvents from '../Sections/FindEvents';

const Events = () => {
    return (
        <>

            {/* page title */}
            <Helmet>
                <title>Events - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Events" />

            {/* sections */}
            <FindEvents />
        </>
    );
};

export default Events;