import { Helmet } from "react-helmet";
import ContactForm from "../Sections/ContactForm";
import OurLocation from "../Sections/OurLocation";
import Breadcrumbs from "../Components/Breadcrumbs";
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

            {/* contact sections */}
            <OurLocation />
            {/* border */}
            <Divider />
            <ContactForm />
            {/* border */}
            <Divider />
            {/* FAQ */}
            <FAQ />

            <ContactForm />
        </>
    );
};

export default Contact;