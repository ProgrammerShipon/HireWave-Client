import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';

const SignUp = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Sign Up - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Sign Up" />
        </>
    );
};

export default SignUp;