import DashTitle from "../Components/DashComponents/DashTitle";
import ManageUserTableRow from "../Components/DashComponents/ManageUserTableRow";
import CountUp from 'react-countup';
import useUsers from "../Hooks/useUsers";
import PageLoader from "../Components/PageLoader";

// react icons
import { LiaIndustrySolid, LiaUserClockSolid } from 'react-icons/lia';
import { PiUsersThreeLight } from 'react-icons/pi';
import { CgUserList } from 'react-icons/cg';
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import useRecruiters from "../Hooks/useRecruiters";
import useCandidatesData from "../Hooks/useCandidatesData";
import { useForm } from "react-hook-form";

const ManageUsers = () => {
    const [userData, loading] = useUsers();
    const [recruiterData] = useRecruiters();
    const [candidatesData] = useCandidatesData();
    const [pendingUsers, setPendingUsers] = useState([]);
    const [filteredData, setFilteredData] = useState(userData);

    useEffect(() => {
        const pendingUser = userData.filter(user => user.status === "pending");
        setPendingUsers(pendingUser)
    }, [!loading])

    const { register, watch, handleSubmit, reset } = useForm();
    const onSubmit = () => {
        reset();
    }

    const name = watch('name');
    const status = watch('status');
    const role = watch('role');
    const date = watch('date');

    useEffect(() => {
        let filter = userData.filter((user) =>
            (!name || user.name.toLowerCase().includes(name.toLowerCase())) &&
            (!status || user.status.toLowerCase().includes(status.toLowerCase())) &&
            (!role || user.role.toLowerCase().includes(role.toLowerCase()))
        );

        if (date === 'recent') {
            filter = [...filter].sort(
                (a, b) => new Date(b.joinDate) - new Date(a.joinDate)
            );
        } else if (date === 'oldest') {
            filter = [...filter].sort(
                (a, b) => new Date(a.joinDate) - new Date(b.joinDate)
            );
        }

        setFilteredData(filter);
    }, [name, status, role, date, userData]);

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Manage Users - Dashboard | Hire Wave</title>
            </Helmet>

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
                                    <CountUp duration={3} end={userData.length} />
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
                                    <CountUp duration={3} end={recruiterData.length} />
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
                                    <CountUp duration={3} end={candidatesData.length} />
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
                                    <CountUp duration={3} end={pendingUsers.length} />
                                </span>
                                <h3 className='text-dark tracking-wider drop-shadow-xl'>Pending</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* filtering option */}
                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md shadow-xl mt-10">
                    {/* search by user name */}
                    <div className="w-full sm:w-72">
                        <input
                            placeholder="Search by name"
                            className="border border-gray/40 p-2 rounded-md bg-white focus:outline-none focus:border-green w-full"
                            {...register("name")}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <h2 className="text-lg text-dark">Filter By: </h2>

                        {/* filter by status */}
                        <select
                            name="status"
                            className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                            {...register("status")}
                        >
                            <option value="">Status</option>
                            <option value="approved">Approved</option>
                            <option value="pending">Pending</option>
                            <option value="rejected">Suspend</option>
                        </select>

                        {/* filter by category */}
                        <select
                            name="category"
                            className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                            {...register("role")}
                        >
                            <option value="">Role</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="candidate">Candidate</option>
                        </select>

                        {/* filter by date */}
                        <select
                            name="date"
                            className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                            {...register("date")}
                        >
                            <option value="">Date</option>
                            <option value="recent">Recent</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </form>

                {/* table */}
                <div className="mt-7 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                    {
                        !loading ? <table className="table lg:w-full w-[800px] text-left">
                            <thead className="text-lg text-green border-b border-green/40">
                                <tr>
                                    <th className="px-3 py-3 font-medium">User Info</th>
                                    <th className="px-3 py-3 font-medium text-center">Role</th>
                                    <th className="px-3 py-3 font-medium text-center">Status</th>
                                    <th className="py-3 text-center font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredData.map((user) => (
                                        <ManageUserTableRow key={user._id} user={user} />))
                                }
                            </tbody>
                        </table> : <PageLoader />
                    }
                </div>
            </section>
        </>
    );
};

export default ManageUsers;
