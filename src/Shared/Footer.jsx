import { Link } from "react-router-dom";

// react icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// logo
import logo from "../Assets/images/logo-01.png";

const Footer = () => {
  return (
    <footer className="text-dark pt-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-9 pt-12">
          {/* Logo, address, and social media links */}
          <div className="col-span-1 md:col-span-2">
            {/* logo */}
            <Link to="/">
              <img className="w-56" src={logo} alt="hire wave logo" />
            </Link>

            <p className="mt-5 max-w-xs">
              Our platform is more than just a hiring agency. it's a dynamic
              ecosystem where talent meets opportunity, innovation meets
              collaboration, and dreams meet reality.{" "}
            </p>

            {/* social icons */}
            <div className="flex items-center gap-2 mt-8">
              <Link
                to="/"
                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
              >
                <FaFacebookF size="20px" />
              </Link>

              <Link
                to="/"
                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
              >
                <FaTwitter size="20px" />
              </Link>

              <Link
                to="/"
                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
              >
                <FaLinkedin size="20px" />
              </Link>

              <Link
                to="/"
                className="text-green h-9 w-9 flex items-center justify-center rounded-lg border border-green shadow-lg shadow-green/20 duration-500 ease-in-out hover:rounded-[100%]"
              >
                <FaInstagram size="20px" />
              </Link>
            </div>
          </div>

          {/* Job seekers */}
          <div>
            <h3 className="text-2xl font-medium text-dark capitalize drop-shadow-lg">
              Job seekers
            </h3>
            <ul className="flex flex-col gap-1 mt-5 text-gray">
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Salary Tools
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Student Career Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Resume writing services
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-2xl font-medium text-dark capitalize drop-shadow-lg">
              Employers
            </h3>
            <ul className="flex flex-col gap-1 mt-5 text-gray">
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  How to Hire
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Talent Marketplace
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Hire an Agency
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Hire worldwide
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Direct Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-2xl font-medium text-dark capitalize drop-shadow-lg">
              Resources
            </h3>
            <ul className="flex flex-col gap-1 mt-5 text-gray">
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Help and Support
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Researches
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green duration-300">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-2xl font-medium text-dark capitalize drop-shadow-lg">
              Contact Us
            </h3>
            <div className="text-gray">
              <p className="mt-5">
                43/7 Northern Tower, Banani, Dhaka-1263, Bangladesh
              </p>
              <p className="mt-4 lowercase">support@hirewave.com</p>
              <p>+8801543653473</p>
            </div>
          </div>
        </div>
      </div>

      {/* copy write */}
      <div className="border-t border-green mt-14 shadow-3xl">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between py-5">
            <p>© 2023 Hire Wave. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <Link to="/" className="hover:text-green duration-300">
                Privacy Policy
              </Link>{" "}
              |
              <Link to="/" className="hover:text-green duration-300">
                Terms of Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
