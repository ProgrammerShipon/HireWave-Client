import CountUp from 'react-countup';
import LineChart from '../../Components/Charts/LineChart';
import BarChart from '../../Components/Charts/BarChart';

// react icons
import { BsBriefcase, BsBookmarkCheck } from 'react-icons/bs';
import { IoDocumentTextOutline, IoAnalyticsOutline } from 'react-icons/io5';
import { PiUsersThreeLight } from 'react-icons/pi';
import useSavedJobs from '../../Hooks/useSavedJobs';
import useAllJobs from '../../Hooks/useAllJobs';
import useAppliedData from '../../Hooks/useAppliedData';
import useUsers from '../../Hooks/useUsers';


const AdminDashboard = () => {
    const [savedJobs] = useSavedJobs();
    const [allJobsData] = useAllJobs();
    const [appliedData] = useAppliedData();
    const [userData] = useUsers();

    return (
        <div>
            {/* top card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {/* posted jobs */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-purple/40'>
                        <div className='w-16 h-16 bg-purple text-white flex items-center justify-center rounded-lg shadow-xl shadow-purple/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <BsBriefcase size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-purple text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={allJobsData.length} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Posted Jobs</h3>
                        </div>
                    </div>
                    <p className='py-2 text-lightGray flex gap-2 line-clamp-1'>
                        <span className='text-purple flex gap-1'>
                            +44 <IoAnalyticsOutline />
                        </span>Last 30 Days
                    </p>
                </div>

                {/* application */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-green/40'>
                        <div className='w-16 h-16 bg-green text-white flex items-center justify-center rounded-lg shadow-xl shadow-green/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <IoDocumentTextOutline size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-green text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={appliedData.length} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Application</h3>
                        </div>
                    </div>
                    <p className='py-2 text-lightGray flex gap-2 line-clamp-1'>
                        <span className='text-green flex gap-1'>
                            +24 <IoAnalyticsOutline />
                        </span> Last 7 Days
                    </p>
                </div>

                {/* shortlist */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-[#FF9671]/40'>
                        <div className='w-16 h-16 bg-[#FF9671] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#FF9671]/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <BsBookmarkCheck size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-[#FF9671] text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={savedJobs.length} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Shortlist</h3>
                        </div>
                    </div>
                    <p className='py-2 text-lightGray flex gap-2 line-clamp-1'>
                        <span className='text-[#FF9671] flex gap-1'>
                            +34 <IoAnalyticsOutline />
                        </span> Last Week
                    </p>
                </div>

                {/* total users */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-[#18025B]/40'>
                        <div className='w-16 h-16 bg-[#18025B] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#18025B]/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <PiUsersThreeLight size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-[#18025B] text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={userData.length} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Total Users</h3>
                        </div>
                    </div>
                    <p className='py-2 text-lightGray flex gap-2 line-clamp-1'>
                        <span className='text-[#18025B] flex gap-1'>
                            +10 <IoAnalyticsOutline />
                        </span> Than Last Week
                    </p>
                </div>
            </div>

            {/* chart area */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mt-10'>
                <LineChart />

                <BarChart />
            </div>
        </div>
    );
};

export default AdminDashboard;