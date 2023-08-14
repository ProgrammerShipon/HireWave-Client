import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

// react icons
import { PiUser } from 'react-icons/pi';

const NavItems = () => {
    const role = "user";
    return (
        <>
            <li>
                <ActiveLink to='/'>
                    Home
                </ActiveLink>
            </li>
            {
                role !== 'employer' && role !== 'recruiter' && role !== 'admin' && <>
                    <li>
                        <ActiveLink to='/find_jobs'>
                            Find Jobs
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/candidates'>
                            Candidates
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/employers'>
                            Employers
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/contact'>
                            Contact
                        </ActiveLink>
                    </li>
                </>
            }
            {
                role === 'employer' && <>
                    <li>
                        <ActiveLink to='/find_jobs'>
                            Find Jobs
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/courses'>
                            Learning Courses
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/events'>
                            Events
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/contact'>
                            Contact
                        </ActiveLink>
                    </li>
                </>
            }
            {
                
                role === 'recruiter' && <>
                    <li>
                        <ActiveLink to='/find_talents'>
                            Find Talents
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/post_job'>
                            Post A Job
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/events'>
                            Events
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/blogs'>
                            Blogs
                        </ActiveLink>
                    </li>
                </>
            }
            <li>
                <Link to='/login' className="flex items-center gap-2 py-2 text-green font-medium">
                    <PiUser />
                    Login
                </Link>
            </li>
        </>
    );
};

export default NavItems;