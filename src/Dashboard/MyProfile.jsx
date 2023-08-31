import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '../Components/Button';
import MyAccount from '../Sections/MyAccount';
import DashTitle from './DashTitle';

const MyProfile = () => {
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='My Profile' />

            {/* My Account */}
            <MyAccount />

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