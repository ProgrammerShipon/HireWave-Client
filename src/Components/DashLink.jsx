import { NavLink } from "react-router-dom";

const DashLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-white font-medium text-lg py-3 pl-7 pr-5 md:pr-auto flex items-center gap-2 bg-green w-fit md:w-full rounded-s-full duration-300"
                    : "text-dark font-medium text-lg py-3 pl-7 pr-5 md:pr-auto flex items-center gap-2 bg-green/25 md:bg-transparent hover:text-white hover:bg-green w-fit md:w-full rounded-s-full duration-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default DashLink;