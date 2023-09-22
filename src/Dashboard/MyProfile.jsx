import { useEffect, useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '../Components/Button';
import DashTitle from '../Components/DashComponents/DashTitle';
import PageLoader from '../Components/PageLoader';
import useAuth from '../Hooks/useAuth';
import useCandidatesData from '../Hooks/useCandidatesData';
import CandidateProfile from '../Sections/DashSections/CandidateProfile';
import AdminProfile from '../Sections/DashSections/AdminProfile';
import useCurrentCandidate from '../Hooks/useCurrentCandidate';
import useCurrentRecruiter from '../Hooks/useCurrentRecruiter';
import RecruitersProfile from '../Sections/DashSections/RecruitersProfile';

const MyProfile = () => {
    const { currentUser } = useAuth();
    const [currentRecruiter, , refetchRecruiters] = useCurrentRecruiter();
    const [currentCandidate, , refetch] = useCurrentCandidate();
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='My Profile' />

            {/* My Account */}
            {
                currentUser.role === 'candidate' && <>
                    {
                        currentCandidate?.email ? <CandidateProfile candidatesData={currentCandidate} refetch={refetch} /> : <PageLoader />
                    }
                </>

            }

            {
                currentUser.role === "recruiter" && <>
                    {
                        currentRecruiter?.email ? <RecruitersProfile recruitersData={currentRecruiter} refetchRecruiters={refetchRecruiters} /> : <PageLoader />
                    }
                </>
            }

            {
                currentUser.role === 'admin' && <AdminProfile currentUser={currentUser} />
            }
        </section>
    );
};

export default MyProfile;