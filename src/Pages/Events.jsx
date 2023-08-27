import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindEvents from '../Sections/FindEvents';
import Divider from '../Components/Divider';

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
            {/* border */}
            <Divider />
        </>
    );
};

export default Events;