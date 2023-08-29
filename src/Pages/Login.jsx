import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import LoginForm from '../Sections/LoginForm';

const Login = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Login - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Login" />

            {/* sections */}
            <LoginForm />
        </>
    );
};

export default Login;