import Button from '../Components/Button';
import { AiOutlineFileAdd } from 'react-icons/ai';
import useCandidatesData from '../Hooks/useCandidatesData';
import DashTitle from '../Components/DashComponents/DashTitle';
import CandidateProfile from '../Sections/DashSections/CandidateProfile';

const MyProfile = () => {
    const [candidatesData, loading] = useCandidatesData();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='My Profile' />

            {/* My Account */}
            {
                !loading ? <CandidateProfile candidatesData={candidatesData[0]} /> : <h1 className='text-3xl'>Loading ...</h1>
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