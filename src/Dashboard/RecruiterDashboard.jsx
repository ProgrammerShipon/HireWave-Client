import DoughnutChart from '../Components/DoughnutChart';
import AreaChart from '../Components/AreaChart';
import CountUp from 'react-countup';

// react icons
import { BsBriefcase } from 'react-icons/bs';
import { IoDocumentTextOutline, IoAnalyticsOutline } from 'react-icons/io5';
import { RiChatFollowUpLine } from 'react-icons/ri';
import { AiOutlineFundView } from 'react-icons/ai';

const RecruiterDashboard = () => {
    const labels = ['Applications', 'Profile Views', 'Open Jobs'];
    const chartData = [135, 75, 234];

    const profileViewsData = [80, 200, 160, 260, 220, 400, 350];
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {/* open jobs */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-purple/40'>
                        <div className='w-16 h-16 bg-purple text-white flex items-center justify-center rounded-lg shadow-xl shadow-purple/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <BsBriefcase size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-purple text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={chartData[2]} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Open Jobs</h3>
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
                                <CountUp duration={3} end={chartData[0]} />
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

                {/* profile view */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-[#FF9671]/40'>
                        <div className='w-16 h-16 bg-[#FF9671] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#FF9671]/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <AiOutlineFundView size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-[#FF9671] text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={chartData[1]} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Profile Views</h3>
                        </div>
                    </div>
                    <p className='py-2 text-lightGray flex gap-2 line-clamp-1'>
                        <span className='text-[#FF9671] flex gap-1'>
                            +34 <IoAnalyticsOutline />
                        </span> Last Week
                    </p>
                </div>

                {/* followers */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-[#18025B]/40'>
                        <div className='w-16 h-16 bg-[#18025B] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#18025B]/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <RiChatFollowUpLine size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-[#18025B] text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={122} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Followers</h3>
                        </div>
                    </div>
                    <p className='py-2 text-lightGray flex gap-2 line-clamp-1'>
                        <span className='text-[#18025B] flex gap-1'>
                            +10 <IoAnalyticsOutline />
                        </span> Than Last Week
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                <DoughnutChart labels={labels} chartData={chartData} />
                <AreaChart profileViewsData={profileViewsData} />
            </div>
        </div>
    );
};

export default RecruiterDashboard;