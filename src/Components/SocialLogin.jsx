import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

// react icons
import { FaGithub } from 'react-icons/fa';
import useCurrentUser from '../Hooks/useCurrentUser';
import PageLoader from './PageLoader';

const SocialLogin = () => {
  const { googleSignIn, gitHubSignIn } = useAuth();
  const [currentUser, userLoading, refetch] = useCurrentUser();
  console.log("current User -> ", currentUser, userLoading);

  // Loading
  if (userLoading) {
    return <PageLoader />;
  }

  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // If the user role does not exist then this route will be taken
  if (!currentUser?.email) {
    from = "/select_role";
  }

  // Google Login Handle
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        return navigate(from, { replace: true });
      })
      .catch((error) => {
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
  };

  // Github Login Handle
  const handleGithubLogin = () => {
    gitHubSignIn()
      .then(() => {
        return navigate(from, { replace: true });
      })
      .catch((error) => {
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
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 text-xl border border-green bg-white rounded-md w-full h-12 shadow-xl hover:shadow-green/20 duration-300"
      >
        <img
          className="w-8"
          src="https://i.ibb.co/0f4JQNf/google.png"
          alt="google"
        />
        Google
      </button>

      <button
        onClick={handleGithubLogin}
        className="flex items-center justify-center gap-2 text-xl border border-green bg-white rounded-md w-full h-12 shadow-xl hover:shadow-green/20 duration-300"
      >
        <FaGithub size="30" />
        GitHub
      </button>
    </div>
  );
};

export default SocialLogin;