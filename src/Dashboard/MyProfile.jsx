import { useEffect, useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '../Components/Button';
import DashTitle from '../Components/DashComponents/DashTitle';
import PageLoader from '../Components/PageLoader';
import useAuth from '../Hooks/useAuth';
import useCandidatesData from '../Hooks/useCandidatesData';
import CandidateProfile from '../Sections/DashSections/CandidateProfile';

const MyProfile = () => {
    const { currentUser } = useAuth();
    const [candidatesData, loading ,refetch] = useCandidatesData();
    const [currentCandidate, setCurrentCandidate] = useState({});
    useEffect(() => {
        const getCandidate = candidatesData.find(candidate => candidate.email === currentUser?.email);
        setCurrentCandidate(getCandidate)
    }, [!loading, currentUser?.email])

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='My Profile' />

            {/* My Account */}
            {
                currentCandidate?.email ? <CandidateProfile candidatesData={currentCandidate} refetch={refetch} /> : <PageLoader />
            }

            {/* Generate Resume Button */}
            <div className='mt-7'>
                <Button>
                    <div className='flex items-center gap-2'>
                        <AiOutlineFileAdd />
                        <p>Generate Resume</p>
                    </div>
                </Button>
            </div>
        </section>
    );
};

export default MyProfile;