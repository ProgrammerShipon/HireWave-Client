import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

// react icons
import { PiUser } from "react-icons/pi";
import useAuth from "../Hooks/useAuth";
import Profile from "./Profile";

const NavItems = () => {
  const { user } = useAuth();
  // const role = 'user';
  // const role = 'candidate';
  const role = 'recruiter';
  return (
    <>
      <li>
        <ActiveLink to='/'>
          Home
        </ActiveLink>
      </li>
          {
              role !== 'candidate' && role !== 'recruiter' && role !== 'admin' && <>
                  <li>
                      <ActiveLink to='/browse_jobs'>
                          Browse Jobs
                      </ActiveLink>
                  </li>
                  <li>
                      <ActiveLink to='/candidates'>
                          Candidates
                      </ActiveLink>
                  </li>
                  <li>
                      <ActiveLink to='/recruiters'>
                          Recruiters
                      </ActiveLink>
                  </li>
                  <li>
                      <ActiveLink to='/contact'>
                          Contact
                      </ActiveLink>
                  </li>
              </>
          }
          </>
    );
};

export default NavItems;
