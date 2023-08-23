import { Helmet } from "react-helmet";
import EventDetailsBody from "../Sections/EventDetailsBody";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";
import useEvents from "../Hooks/useEvents";

const EventDetails = () => {
    const [eventData] = useEvents();
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Event Details - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Event Details" />

            {
                eventData.length > 0 && <EventDetailsBody eventData={eventData} />
            }
            {/* border */}
            <Divider />
        </>
    );
};

export default EventDetails;