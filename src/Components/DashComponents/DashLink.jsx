import { NavLink } from "react-router-dom";

const DashLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-purple underline text-lg py-3 px-5 md:pr-auto flex items-center gap-5 bg-purple/20 w-fit md:w-full rounded-s-full duration-300"
                    : "text-lightGray text-lg py-3 px-5 md:pr-auto flex items-center gap-4 hover:gap-5 bg-purple/20 md:bg-transparent hover:text-purple hover:underline hover:bg-purple/20 w-fit md:w-full rounded-s-full duration-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default DashLink;