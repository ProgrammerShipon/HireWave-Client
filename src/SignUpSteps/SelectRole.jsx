import { Link, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

// react icons
import { BsBuildings, BsPersonWorkspace } from 'react-icons/bs';
import PageLoader from '../Components/PageLoader';
import useCurrentUser from '../Hooks/useCurrentUser';

const SelectRole = () => {
  const { logOut, user, loading } = useAuth();
  const [currentUser, userLoading] = useCurrentUser();
  const location = useLocation();

  if (loading || userLoading) {
    return <PageLoader />
  }
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  if (currentUser) {
    return <Navigate to='/' replace />;
  }

  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-dark font-medium mb-2 drop-shadow-xl">
              Welcome to HireWave
            </h1>

            <p className="text-xl text-lightGray">
              Your Ultimate Hiring / Recruiting Destination
            </p>
          </div>

          <p className="text-gray mb-4 italic">Select your user identity</p>

          {/* select user role */}
          <div className="flex items-center gap-8 mb-10">
            {/* candidate role ,*/}
            <Link
              // onClick={() => userHandle("candidate")}
              to="/candidate_sign_up"
              className="bg-white border border-gray/40 hover:border-green px-8 md:px-16 py-5 rounded flex flex-col justify-center items-center flex-1 shadow-xl hover:shadow-green/20 duration-300 group"
            >
              <BsPersonWorkspace className="text-3xl text-purple group-hover:text-green duration-300" />
              <p className="text-xl text-purple group-hover:text-green drop-shadow-lg mt-3 duration-300">
                Candidate
              </p>
            </Link>

            {/* recruiter role */}
            <Link
              // onClick={() => userHandle("recruiter")}
              to="/recruiter_sign_up"
              className="bg-white border border-gray/40 hover:border-green px-8 md:px-16 py-5 rounded flex flex-col justify-center items-center flex-1 shadow-xl hover:shadow-green/20 duration-300 group"
            >
              <BsBuildings className="text-3xl text-purple group-hover:text-green duration-300" />
              <p className="text-xl text-purple group-hover:text-green drop-shadow-lg mt-3 duration-300">
                Recruiter
              </p>
            </Link>
          </div>

          {/* button */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              onClick={() => logOut()}
              className="bg-dark text-white border border-dark hover:bg-transparent hover:text-red-400 hover:border-red-400 px-5 py-1 rounded-md shadow-xl hover:shadow-red-400/20 duration-300"
            >
              Log Out
            </Link>
            <p className="text-lightGray"> and go to the website</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectRole;