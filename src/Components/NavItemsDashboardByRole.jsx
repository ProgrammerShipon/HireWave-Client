import React from 'react';
import ActiveLink from './ActiveLink';
import { AiOutlineFileDone } from 'react-icons/ai';
import { GrDocumentPdf } from 'react-icons/gr';
import { BsBriefcase, BsCardList, BsFileArrowUp } from 'react-icons/bs';
import { MdOutlineManageAccounts, } from 'react-icons/md';
import { CgUserList } from 'react-icons/cg';
import { BiMessageRoundedDetail } from 'react-icons/bi';

const NavItemsDashboardByRole = ({role}) => {

    console.log(role)
    return (
        <>
            {
                // Candidate Routes
                role=== 'candidate'?
                <>
                    <li>
                        <ActiveLink to='/dashboard/appliedJobs'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <BsFileArrowUp size={24} />
                                <p>Applied Jobs</p>
                            </div>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/dashboard/myResume'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <GrDocumentPdf size={24} />
                                <p>My Resume</p>
                            </div>
                        </ActiveLink>
                    </li>
                </> :

                // Recruiter Routes
                role=== 'recruiter' ?
                <>
                    <li>
                        <ActiveLink to='/dashboard/messages'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <BiMessageRoundedDetail size={24} />
                                <p>Messages</p>
                            </div>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/dashboard/postedJobs'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <AiOutlineFileDone size={24} />
                                <p>Posted Jobs</p>
                            </div>
                        </ActiveLink>
                    </li>
                </>:

                // Admin routes
                <>
                    <li>
                        <ActiveLink to='/dashboard/manageUsers'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <MdOutlineManageAccounts size={24} />
                                <p>Manage Users</p>
                            </div>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/dashboard/manageJobs'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <BsBriefcase size={24} />
                                <p>Manage jobs</p>
                            </div>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/dashboard/candidateList'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <CgUserList size={24} />
                                <p>Candidate List</p>
                            </div>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/dashboard/recruiterList'>
                            <div className='flex items-center gap-3 pl-10 pr-auto w-64 py-3 hover:bg-green/10 rounded'>
                                <BsCardList size={24} />
                                <p>Recruiter List</p>
                            </div>
                        </ActiveLink>
                    </li>
                </>
            }
        </>
    );
};

export default NavItemsDashboardByRole;