import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

// react icons
import { FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../Hooks/useAxios';

const SocialLogin = () => {
    const { googleSignIn, gitHubSignIn } = useAuth();
const { axiosSecure } = useAxios();


    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                const newUser = { name: user.displayName, email: user.email, role: 'user' };

                axiosSecure.post("/users", newUser).then((data) => {
                  if (data.status === 200) {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Sign Up successfully",
                      showConfirmButton: false,
                      timer: 2500,
                    });
                  }
                });
                navigate(from, { replace: true })
            }).catch((error) => {
                if (error.message) {
                    toast.error(error.message, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
    }

    const handleGithubLogin = () => {
        gitHubSignIn()
            .then(res => {
                const user = res.user;
                const newUser = { name: user.displayName, email: user.email, role: 'user' };

                axiosSecure.post("/users", newUser).then((data) => {
                  if (data.status === 200) {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Sign Up successfully",
                      showConfirmButton: false,
                      timer: 2500,
                    });
                  }
                });
                navigate(from, { replace: true });
            }).catch((error) => {
                if (error.message) {
                    toast.error(error.message, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
    }

    return (
        <div className='flex items-center justify-center gap-3'>
            <button
                onClick={handleGoogleLogin}
                className='flex items-center justify-center gap-2 text-xl border border-green bg-white rounded-md w-full h-12 shadow-xl hover:shadow-green/20 duration-300'>
                <img className='w-8' src='https://i.ibb.co/0f4JQNf/google.png' alt="google" />
                Google
            </button>

            <button
                onClick={handleGithubLogin}
                className='flex items-center justify-center gap-2 text-xl border border-green bg-white rounded-md w-full h-12 shadow-xl hover:shadow-green/20 duration-300'>
                <FaGithub size='30' />
                GitHub
            </button>
        </div>
    );
};

export default SocialLogin;