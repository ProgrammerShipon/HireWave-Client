import useAuth from "../Hooks/useAuth";
import DashLink from "./DashLink";
import DashNavItemsByRole from "./DashNavItemsByRole";

// react icons
import { LiaHomeSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { TbLockCog } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";

const DashNavItems = () => {
  const { logOut } = useAuth();
  // const role = 'candidate';
  // const role = 'recruiter';
  const role = "admin";

  return (
    <aside className="sticky top-0 shadow-4xl shadow-gray/40 w-auto md:w-[300px] bg-white duration-300 h-screen pt-[71px] overflow-y-auto">
      <ul className="flex flex-col items-center gap-3 ml-4 md:ml-10 pt-6">
        {/* Dashboard Home */}
        <li className="w-full">
          <DashLink to="/dashboard/dashboardHome">
            <LuLayoutDashboard size={24} />
            <p className="hidden md:inline">Dashboard</p>
          </DashLink>
        </li>

        {/* My Profile */}
        <li className="w-full">
          <DashLink to="/dashboard/myProfile">
            <VscAccount size={24} />
            <p className="hidden md:inline">My Profile</p>
          </DashLink>
        </li>

        {/* Routes per Role */}
        <DashNavItemsByRole role={role} />

        {/* Change Password */}
        <li className="w-full">
          <DashLink to="/dashboard/changePassword">
            <TbLockCog size={24} />
            <p className="hidden md:inline">Change Password</p>
          </DashLink>
        </li>

        {/* back to home */}
        <li className="w-full">
          <DashLink to="/">
            <LiaHomeSolid size={24} />
            <p className="hidden md:inline">Back Home</p>
          </DashLink>
        </li>

        {/* Logout */}
        <li className="w-full">
          <button
            onClick={() => logOut()}
            className="text-red-500 font-medium text-lg py-3 pl-7 flex items-center gap-2 bg-transparent hover:text-white bg-red-200 hover:bg-red-400 w-full rounded-s-full duration-300"
          >
            <MdLogout size={24} />
            <p className="hidden md:inline">Logout</p>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default DashNavItems;
