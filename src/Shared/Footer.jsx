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
    <footer className="pt-10 text-dark">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-9 pt-12 ">
          {/* Logo, address, and social media links */}
          <div className="order-first col-span-1 md:col-span-2">
            {/* logo */}
            <Link to="/">
              <img className="w-56" src={logo} alt="hire wave logo" />
            </Link>

            <p className="max-w-xs mt-5">
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

          {/* Candidate */}
          <div className="md:hidden lg:block">
            <h3 className="text-2xl font-medium text-dark capitalize drop-shadow-lg">
              Candidate
            </h3>
            <ul className="flex flex-col gap-1 mt-5 text-gray">
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Salary Tools
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Student Career Center
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Resume writing services
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact for Medium Screen */}
          <div className="hidden md:block lg:hidden">
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
          {/* Recruiters */}
          <div>
            <h3 className="text-2xl font-medium text-dark capitalize drop-shadow-lg">
              Recruiters
            </h3>
            <ul className="flex flex-col gap-1 mt-5 text-gray">
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  How to Hire
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Talent Marketplace
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Hire an Agency
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Hire worldwide
                </Link>
              </li>
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Direct Contracts
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div className="order-none">
            <h3 className="text-2xl font-medium capitalize text-dark drop-shadow-lg">
              Resources
            </h3>
            <ul className="flex flex-col gap-1 mt-5 text-gray">
              <li>
                <Link to="/" className="duration-300 hover:text-green">
                  Help and Support
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="duration-300 hover:text-green">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/events" className="duration-300 hover:text-green">
                  Event
                </Link>
              </li>
              <li>
                <Link to="/learning" className="duration-300 hover:text-green">
                  Learning
                </Link>
              </li>
              <li>
                <Link to="/contact" className="duration-300 hover:text-green">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div className="md:hidden lg:block">
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
          {/* Candidate for Medium Screen */}
          <div className="hidden md:block lg:hidden">
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

        </div>
      </div>

      {/* copy write */}
      <div className="border-t border-green mt-14 shadow-3xl">
        <div className="container">
          <div className="flex flex-col items-center justify-between py-5 md:flex-row">
            <p>© 2023 Hire Wave. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <Link to="/" className="duration-300 hover:text-green">
                Privacy Policy
              </Link>{" "}
              |
              <Link to="/" className="duration-300 hover:text-green">
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
