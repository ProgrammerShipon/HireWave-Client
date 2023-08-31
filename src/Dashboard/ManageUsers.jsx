import DashTitle from "./DashTitle";
import useCandidatesData from "../Hooks/useCandidatesData";
import ManageUserTable from "../Components/ManageUserTable";
import CountUp from "react-countup";

// react icons
import { BsBriefcase, BsBookmarkCheck } from "react-icons/bs";
import { IoDocumentTextOutline, IoAnalyticsOutline } from "react-icons/io5";
import { PiUsersThreeLight } from "react-icons/pi";

const ManageUsers = () => {
  const [candidatesData] = useCandidatesData();
  return (
    <section className="m-5 rounded-md">
      <DashTitle title="Manage Users" />
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* total member */}
        <div className="bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group">
          <div className="flex items-center justify-between border-b border-purple/40">
            <div className="w-16 h-16 bg-purple text-white flex items-center justify-center rounded-lg shadow-xl shadow-purple/50 -mt-10 group-hover:-mt-14 duration-300">
              <BsBriefcase size="36" />
            </div>
            <div className="text-right pt-1 pb-2">
              <span className="text-purple text-4xl drop-shadow-xl count__up">
                <CountUp duration={3} end={27000} />
              </span>
              <h3 className="text-dark tracking-wider drop-shadow-xl">
                Total User
              </h3>
            </div>
          </div>
          <p className="py-2 text-lightGray flex gap-2 line-clamp-1">
            <span className="text-purple flex gap-1">
              +44 <IoAnalyticsOutline />
            </span>
            Last 30 Days
          </p>
        </div>

        {/* User */}
        <div className="bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group">
          <div className="flex items-center justify-between border-b border-green/40">
            <div className="w-16 h-16 bg-green text-white flex items-center justify-center rounded-lg shadow-xl shadow-green/50 -mt-10 group-hover:-mt-14 duration-300">
              <IoDocumentTextOutline size="36" />
            </div>
            <div className="text-right pt-1 pb-2">
              <span className="text-green text-4xl drop-shadow-xl count__up">
                <CountUp duration={3} end={4500} />
              </span>
              <h3 className="text-dark tracking-wider drop-shadow-xl">User</h3>
            </div>
          </div>
          <p className="py-2 text-lightGray flex gap-2 line-clamp-1">
            <span className="text-green flex gap-1">
              +24 <IoAnalyticsOutline />
            </span>{" "}
            Last 7 Days
          </p>
        </div>
        {/* Total Job  */}
        <div className="bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group">
          <div className="flex items-center justify-between border-b border-[#FF9671]/40">
            <div className="w-16 h-16 bg-[#FF9671] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#FF9671]/50 -mt-10 group-hover:-mt-14 duration-300">
              <BsBookmarkCheck size="36" />
            </div>
            <div className="text-right pt-1 pb-2">
              <span className="text-[#FF9671] text-4xl drop-shadow-xl count__up">
                <CountUp duration={3} end={1500} />
              </span>
              <h3 className="text-dark tracking-wider drop-shadow-xl">
                Total Job
              </h3>
            </div>
          </div>
          <p className="py-2 text-lightGray flex gap-2 line-clamp-1">
            <span className="text-[#FF9671] flex gap-1">
              +34 <IoAnalyticsOutline />
            </span>{" "}
            Last Week
          </p>
        </div>
        {/* total users */}
        <div className="bg-white shadow-4xl shadow-gray/40 rounded-md px-3 group">
          <div className="flex items-center justify-between border-b border-[#18025B]/40">
            <div className="w-16 h-16 bg-[#18025B] text-white flex items-center justify-center rounded-lg shadow-xl shadow-[#18025B]/50 -mt-10 group-hover:-mt-14 duration-300">
              <PiUsersThreeLight size="36" />
            </div>
            <div className="text-right pt-1 pb-2">
              <span className="text-[#18025B] text-4xl drop-shadow-xl count__up">
                <CountUp duration={3} end={112} />
              </span>
              <h3 className="text-dark tracking-wider drop-shadow-xl">
                Total Users
              </h3>
            </div>
          </div>
          <p className="py-2 text-lightGray flex gap-2 line-clamp-1">
            <span className="text-[#18025B] flex gap-1">
              +10 <IoAnalyticsOutline />
            </span>{" "}
            Than Last Week
          </p>
        </div>
      </div>

      <div className="hover:shadow-md w-full lg:w-full overflow-x-scroll lg:overflow-hidden duration-300 mt-5 rounded-xl ">
        {/* table */}
        <table className="table bg-white w-[900px] lg:w-full text-left">
          <thead className="text-dark text-lg">
            <tr>
              <th className="px-5 py-3 ">Members Name</th>
              <th className="px-5 py-3 ">Category</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidatesData?.map((data) => (
              <ManageUserTable key={data.id} manageuser={data} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUsers;
