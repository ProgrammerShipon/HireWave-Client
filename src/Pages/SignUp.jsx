import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs'; import SignUpForm from '../Sections/SignUpForm';
;

const SignUp = () => {

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Sign Up - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Sign Up" />

            {/* sections */}
            <SignUpForm />
        </>
    );
};

export default SignUp;