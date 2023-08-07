import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/"> HireWave</Link>
        </div>

        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/"> Home 2 </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
