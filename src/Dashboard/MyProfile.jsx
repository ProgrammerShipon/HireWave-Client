import { useEffect, useState } from 'react';
import Button from '../Components/Button';
import { AiOutlineFileAdd } from 'react-icons/ai';
import useCandidatesData from '../Hooks/useCandidatesData';
import DashTitle from '../Components/DashComponents/DashTitle';
import CandidateProfile from '../Sections/DashSections/CandidateProfile';
import useAuth from '../Hooks/useAuth';
import PageLoader from '../Components/PageLoader';

const MyProfile = () => {
    const { currentUser } = useAuth();
    const [candidatesData, loading] = useCandidatesData();
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
                currentCandidate?.email ? <CandidateProfile candidatesData={currentCandidate} /> : <PageLoader />
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