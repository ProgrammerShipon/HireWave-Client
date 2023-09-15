import DashLink from './DashLink';

// react icons
import { AiOutlineFileDone } from 'react-icons/ai';
import { BsBookmarkPlus, BsBriefcase, BsFileArrowUp, BsFileEarmarkPerson } from 'react-icons/bs';
import { MdOutlineManageAccounts, MdOutlinePayments, } from 'react-icons/md';
import { CgUserList } from 'react-icons/cg';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { LiaIndustrySolid } from 'react-icons/lia';
import { FaChalkboardUser } from 'react-icons/fa6';

const DashNavItemsByRole = ({ role }) => {
    return (
        <>
            {
                // candidate routes
                role === 'candidate' ?
                    <>
                        {/* applied Jobs */}
                        <li className="w-full">
                            <DashLink to='/dashboard/myApplications'>
                                <BsFileArrowUp size={24} />
                                <p className="hidden md:inline">My Applications</p>
                            </DashLink>
                        </li>
                        <li className="w-full">
                            <DashLink to='/dashboard/messages'>
                                <BiMessageRoundedDetail size={24} />
                                <p className="hidden md:inline">Messages</p>
                            </DashLink>
                        </li>
                    </> :

                    // recruiter routes
                    role === 'recruiter' ?
                        <>
                            {/* Messages */}
                            <li className="w-full">
                                <DashLink to='/dashboard/messages'>
                                    <BiMessageRoundedDetail size={24} />
                                    <p className="hidden md:inline">Messages</p>
                                </DashLink>
                            </li>

                            <li className="w-full">
                                <DashLink to='/dashboard/room'>
                                    <FaChalkboardUser size={24} />
                                    <p className="hidden md:inline">Interview</p>
                                </DashLink>
                            </li>

                            {/* Posted job */}
                            <li className="w-full">
                                <DashLink to='/dashboard/postedJobs'>
                                    <AiOutlineFileDone size={24} />
                                    <p className="hidden md:inline">Posted Jobs</p>
                                </DashLink>
                            </li>
                            {/* Applied candidates */}
                            <li className="w-full">
                                <DashLink to='/applied_candidates'>
                                    <BsFileEarmarkPerson size={24} />
                                    <p className="hidden md:inline">Applicants</p>
                                </DashLink>
                            </li>
                            {/* Payment  */}
                            <li className="w-full">
                                <DashLink to='/pricing'>
                                    <MdOutlinePayments size={24} />
                                    <p className="hidden md:inline">Payments</p>
                                </DashLink>
                            </li>
                            {/* favorites  */}
                            {/* <li className="w-full">
                                <DashLink to='/dashboard/favorites'>
                                    <BsBookmarkPlus size={24} />
                                    <p className="hidden md:inline">Favorites</p>
                                </DashLink>
                            </li> */}
                        </> :

                        // Admin routes
                        <>
                            {/* Manage users */}
                            <li className="w-full">
                                <DashLink to='/dashboard/manageUsers'>
                                    <MdOutlineManageAccounts size={24} />
                                    <p className="hidden md:inline">Manage Users</p>
                                </DashLink>
                            </li>

                            {/* Manage jobs */}
                            <li className="w-full">
                                <DashLink to='/dashboard/manageJobs'>
                                    <BsBriefcase size={24} />
                                    <p className="hidden md:inline">Manage jobs</p>
                                </DashLink>
                            </li>

                            {/* Candidate List */}
                            <li className="w-full">
                                <DashLink to='/dashboard/candidateList'>
                                    <CgUserList size={24} />
                                    <p className="hidden md:inline">Candidate List</p>
                                </DashLink>
                            </li>

                            {/* Recruiter List */}
                            <li className="w-full">
                                <DashLink to='/dashboard/recruiterList'>
                                    <LiaIndustrySolid size={24} />
                                    <p className="hidden md:inline">Recruiter List</p>
                                </DashLink>
                            </li>
                        </>
            }
        </>
    );
};

export default DashNavItemsByRole;