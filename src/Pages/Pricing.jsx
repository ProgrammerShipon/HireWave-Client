import { Helmet } from "react-helmet";
import Breadcrumbs from "../Components/Breadcrumbs";
import PricingBody from "../Sections/PricingBody";
import Divider from "../Components/Divider";

const Pricing = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Pricing - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Pricing" />

            {/* sections */}
            <PricingBody />

            {/* border */}
            <Divider />
        </>
    );
};

export default Pricing;