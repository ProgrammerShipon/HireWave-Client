import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

// react icons
import { PiUser } from "react-icons/pi";
import useAuth from "../Hooks/useAuth";
import Profile from "./Profile";
import useCurrentUser from "../Hooks/useCurrentUser";

const NavItems = () => {
    const { user } = useAuth();
    // const []=useCurrentUser();
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

            {/* candidates route */}
            {
                role === 'candidate' && <>
                    <li>
                        <ActiveLink to='/browse_jobs'>
                            Browse Jobs
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/learning'>
                            Learning
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/saved_jobs'>
                            Saved Jobs
                        </ActiveLink>
                    </li>
                </>
            }

            {/* recruiters route */}
            {

                role === 'recruiter' && <>
                    <li>
                        <ActiveLink to='/find_talents'>
                            Find Talents
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/applied_candidates'>
                            Applied Candidates
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/post_job'>
                            Post A Job
                        </ActiveLink>
                    </li>
                </>
            }

            {/* User Profile Info */}
            {
                user?.email ? <Profile /> : <Link to='/login' className="flex items-center gap-2 py-2 text-green font-medium">
                    <PiUser />
                    Login
                </Link>
            }
        </>
    );
};

export default NavItems;
