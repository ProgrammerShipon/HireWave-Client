import { Helmet } from "react-helmet";

import ContactForm from "../Sections/ContactForm";
import OurLocation from "../Sections/OurLocation";




const Contact = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Contact - HireWave</title>
            </Helmet>
            {/* contact sections */}
            <OurLocation />
            <ContactForm />

        </>
    );
};

export default Contact;