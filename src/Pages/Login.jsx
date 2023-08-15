import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';

const Login = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Login - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title="Login" />
        </>
    );
};

export default Login;