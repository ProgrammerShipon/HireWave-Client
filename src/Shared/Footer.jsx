import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { BiLogoTelegram } from 'react-icons/bi';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '/Logo/black bg banner.png';
const Footer = () => {
  return (
    <footer className="text-white bg-dark mt-10">
      <div className="container">
        {/* Top footer part */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-9 pt-12">
          {/* Logo, address, and social media links */}
          <div className="col-span-1 md:col-span-2">
            <img className="w-1/2" src={logo} alt="" />
            <p className="mt-5 mb-2">43/7 Northern Tower, Banani, Dhaka-1263</p>
            <p className="mb-2 lowercase">support@hirewave.com</p>
            <p>+8801543653473</p>

            <div className="mt-4 md:mt-8">
              <h1 className="mb-2">Follow Us:</h1>
              <div className="flex gap-2">
                <FiFacebook className="w-10 h-10 text-4xl p-[5px] rounded-full border-[1px] border-white text-white hover:bg-green cursor-pointer" />
                <FiTwitter className="w-10 h-10 text-4xl p-[5px] rounded-full border-[1px] border-white text-white hover:bg-green cursor-pointer" />
                <AiOutlineYoutube className="w-10 h-10 text-4xl p-[5px] rounded-full border-[1px] border-white text-white hover:bg-green cursor-pointer" />
                <BiLogoTelegram className="w-10 h-10 text-4xl p-[5px] rounded-full border-[1px] border-white text-white hover:bg-green cursor-pointer" />
                <AiOutlineInstagram className="w-10 h-10 text-4xl p-[5px] rounded-full border-[1px] border-white text-white hover:bg-green cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Job seekers */}
          <div>
            <h1 className="font-semibold text-emerald-400 mb-3">Job seekers</h1>
            <ul>
              <li className="mb-2">
                <Link to="">Browse Jobs</Link>
              </li>
              <li className="mb-2">
                <Link to="">Salary Tools</Link>
              </li>
              <li className="mb-2">
                <Link to="">Career Advice</Link>
              </li>
              <li className="mb-2">
                <Link to="">Student Career Center</Link>
              </li>
              <li className="mb-2">
                <Link to="">Resume writing services</Link>
              </li>
              <li className="mb-2">
                <Link to="">Direct Contracts</Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h1 className="font-semibold text-emerald-400 mb-3">Employers</h1>
            <ul>
              <li className="mb-2">
                <Link to="">How to Hire</Link>
              </li>
              <li className="mb-2">
                <Link to="">Talent Marketplace</Link>
              </li>
              <li className="mb-2">
                <Link to="">Hire an Agency</Link>
              </li>
              <li className="mb-2">
                <Link to="">Hire worldwide</Link>
              </li>
              <li className="mb-2">
                <Link to="">Direct Contracts</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h1 className="font-semibold text-emerald-400 mb-3">Resources</h1>
            <ul>
              <li className="mb-2">
                <Link to="">Help and Support</Link>
              </li>
              <li className="mb-2">
                <Link to="">Success Stories</Link>
              </li>
              <li className="mb-2">
                <Link to="">Blogs</Link>
              </li>
              <li className="mb-2">
                <Link to="">Researches</Link>
              </li>
              <li className="mb-2">
                <Link to="">Community</Link>
              </li>
              <li className="mb-2">
                <Link to="">Events and Webinars</Link>
              </li>
              <li className="mb-2">
                <Link to="">News and press</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h1 className="font-semibold text-emerald-400 mb-3">Company</h1>
            <ul>
              <li className="mb-2">
                <Link to="">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="">Leadership</Link>
              </li>
              <li className="mb-2">
                <Link to="">Careers</Link>
              </li>
              <li className="mb-2">
                <Link to="">Our Impact</Link>
              </li>
              <li className="mb-2">
                <Link to="">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer part */}
        <div className="md:flex justify-center gap-10 mt-10 pb-5 text-center">
          <div>
            <p>© 2023 HireWave. All rights reserved.</p>
          </div>
          <div>
            <p>
              <Link to="">Privacy Policy</Link > |{" "}
              <Link to="">Terms of Services</Link >
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;