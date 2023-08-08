import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-green text-lg py-2 inline-block"
                    : "text-dark text-lg hover:text-green duration-300 py-2 inline-block"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;