import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import ContactForm from "../Sections/ContactForm";
import OurLocation from "../Sections/OurLocation";
import FAQ from "../Sections/FAQ";
import Divider from "../Components/Divider";

const Contact = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Contact - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Contact" />

            {/* sections */}
            <OurLocation />
            {/* border */}
            <Divider />
            <ContactForm />
            {/* border */}
            <Divider />

            {/* FAQ */}
            <FAQ />
        </>
    );
};

export default Contact;