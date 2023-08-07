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
        </ul>

        <ul>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
