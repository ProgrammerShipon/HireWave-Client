import DashLink from './DashLink';

// react icons
import { AiOutlineFileDone } from 'react-icons/ai';
import { BsBookmarkPlus, BsBriefcase, BsFileArrowUp, BsSendCheck } from 'react-icons/bs';
import { CgUserList } from 'react-icons/cg';
import { FaChalkboardUser } from 'react-icons/fa6';
import { LiaIndustrySolid } from 'react-icons/lia';
import { MdOutlineAssignment, MdOutlineHistory, MdOutlineManageAccounts } from 'react-icons/md';
import { PiHandshakeDuotone } from 'react-icons/pi';

const DashNavItemsByRole = ({ role }) => {
    const CreateNewId = (Math.floor(Math.random() * 1000000)).toString()

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
                    </> :

                    // recruiter routes
                    role === 'recruiter' ?
                        <>
                            <li className="w-full">
                                <DashLink to={`/dashboard/room/${CreateNewId}`}>
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

                            {/* Hired Candidates */}
                            <li className="w-full">
                                <DashLink to='/dashboard/hired_candidates'>
                                    <PiHandshakeDuotone size={24} />
                                    <p className="hidden md:inline">Hired Candidates</p>
                                </DashLink>
                            </li>

                            {/* Payment History */}
                            <li className="w-full">
                                <DashLink to='/dashboard/payment_history'>
                                    <MdOutlineHistory size={24} />
                                    <p className="hidden md:inline">Payment History</p>
                                </DashLink>
                            </li>

                            {/* Requested Offers */}
                            <li className="w-full">
                                <DashLink to='/dashboard/offersSent'>
                                    <BsSendCheck size={24} />
                                    <p className="hidden md:inline">Offers </p>
                                </DashLink>
                            </li>

                            {/* Tasks Sent */}
                            <li className="w-full">
                                <DashLink to='/dashboard/tasks'>
                                    <MdOutlineAssignment size={24} />
                                    <p className="hidden md:inline">Tasks</p>
                                </DashLink>
                            </li>

                            {/* Favorites  */}
                            <li className="w-full">
                                <DashLink to='/dashboard/favorites'>
                                    <BsBookmarkPlus size={24} />
                                    <p className="hidden md:inline">Favorites</p>
                                </DashLink>
                            </li>
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