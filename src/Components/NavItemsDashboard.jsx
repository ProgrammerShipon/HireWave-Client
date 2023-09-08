import { AiOutlineHome } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import ActiveLink from "./ActiveLink";
import NavItemsDashboardByRole from "./NavItemsDashboardByRole";

const NavItemsDashboard = () => {
  // const role = "candidate";
  const role = "recruiter";
  // const role = "admin";

  return (
    <>
      {/* Dashboard Home */}
      <li className="">
        <ActiveLink to="/dashboard/dashboardHome">
          <div className="flex items-center w-64 gap-3 py-3 pl-10 rounded pr-auto hover:bg-green/10">
            <AiOutlineHome size={24} />
            <p>Dashboard</p>
          </div>
        </ActiveLink>
      </li>

      {/* My Profile */}
      <li className="">
        <ActiveLink to="/dashboard/myProfile">
          <div className="flex items-center w-64 gap-3 py-3 pl-10 rounded pr-auto hover:bg-green/10">
            <VscAccount size={24} />
            <p>My Profile</p>
          </div>
        </ActiveLink>
      </li>

      {/* Routes per Role */}
      <NavItemsDashboardByRole role={role} />

      {/* Change Password */}
      <li className="">
        <ActiveLink to="/dashboard/changePassword">
          <div className="flex items-center w-64 gap-3 py-3 pl-10 rounded pr-auto hover:bg-green/10">
            <RiLockPasswordLine size={24} />
            <p>Change Password</p>
          </div>
        </ActiveLink>
      </li>

      {/* Logout */}
      <li className="">
        <ActiveLink to="/dashboard/logOut">
          <div className="flex items-center w-64 gap-3 py-3 pl-10 rounded pr-auto hover:bg-green/10">
            <IoMdLogOut size={24} />
            <p>Logout</p>
          </div>
        </ActiveLink>
      </li>
    </>
  );
};

export default NavItemsDashboard;
