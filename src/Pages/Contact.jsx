import { Helmet } from "react-helmet";
import ContactForm from "../Sections/ContactForm";
import OurLocation from "../Sections/OurLocation";
import Breadcrumbs from "../Components/Breadcrumbs";
import Divider from "../Components/Divider";




const Contact = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Contact - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Contact" />

            {/* contact sections */}
            <OurLocation />
            {/* border */}
            <Divider />

            <ContactForm />
        </>
    );
};

export default Contact;