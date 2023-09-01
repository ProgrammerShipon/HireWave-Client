import DashTitle from "../Components/DashComponents/DashTitle";
import ManageUserTableRow from "../Components/DashComponents/ManageUserTableRow";
import useCandidatesData from "../Hooks/useCandidatesData";
import CountUp from 'react-countup';

// react icons
import { LiaIndustrySolid, LiaUserClockSolid } from 'react-icons/lia';
import { PiUsersThreeLight } from 'react-icons/pi';
import { CgUserList } from 'react-icons/cg';

const ManageUsers = () => {
    const [candidatesData, loading] = useCandidatesData();

    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Manage Users' />

            {/* top card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14'>

                {/* total users */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-[#18025B]/40 mb-2'>
                        <div className='w-16 h-16 bg-[#18025B] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#18025B]/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <PiUsersThreeLight size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-[#18025B] text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={324} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Total Users</h3>
                        </div>
                    </div>
                </div>

                {/* recruiters */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-purple/40 mb-2'>
                        <div className='w-16 h-16 bg-purple text-white flex items-center justify-center rounded-lg shadow-xl shadow-purple/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <LiaIndustrySolid size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-purple text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={124} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Recruiters</h3>
                        </div>
                    </div>
                </div>

                {/* candidates */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-green/40 mb-2'>
                        <div className='w-16 h-16 bg-green text-white flex items-center justify-center rounded-lg shadow-xl shadow-green/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <CgUserList size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-green text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={135} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Candidates</h3>
                        </div>
                    </div>
                </div>

                {/* pending user */}
                <div className='bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group'>
                    <div className='flex items-center justify-between border-b border-[#FF9671]/40 mb-2'>
                        <div className='w-16 h-16 bg-[#FF9671] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#FF9671]/50 -mt-10 group-hover:-mt-14 duration-300'>
                            <LiaUserClockSolid size='36' />
                        </div>
                        <div className='text-right pt-1 pb-2'>
                            <span className='text-[#FF9671] text-4xl drop-shadow-xl count__up'>
                                <CountUp duration={3} end={35} />
                            </span>
                            <h3 className='text-dark tracking-wider drop-shadow-xl'>Pending</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* table */}
            <div className="mt-7 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                {
                    !loading ? <table className="table lg:w-full w-[800px] text-left">
                        <thead className="text-lg text-green border-b border-green/40">
                            <tr>
                                <th className="px-3 py-3 font-medium">User Info</th>
                                <th className="px-3 py-3 font-medium">Category</th>
                                <th className="px-3 py-3 font-medium text-center">Role</th>
                                <th className="px-3 py-3 font-medium text-center">Status</th>
                                <th className="py-3 text-center font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                candidatesData.map((user) => (
                                    <ManageUserTableRow key={user._id} user={user} />))
                            }
                        </tbody>
                    </table> : <h1>Loading ...</h1>
                }
            </div>
        </section>
    );
};

export default ManageUsers;
