import logo from '/Logo/black bg banner.png'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoTelegram } from 'react-icons/bi';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className='text-white bg-green mt-10'>
      <div className='container py-5 md:flex justify-between gap-5 mt-0'>
        <div>
          <img className='w-1/2 ' src={logo} alt="" />
          <p className='mt-5 mb-2'>43/7 Northern Tower, Banani, Dhaka-1263</p>
          <p className='font-semibold'>+8801543653473</p>

          <div className='mt-4 md:mt-8'>
            <h1 className='mb-2'>Follow Us:</h1>
            <div className='flex gap-2'>
              <FiFacebook className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-emerald-300' />
              <FiTwitter className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-emerald-300' />
              <AiOutlineYoutube className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-emerald-300' />
              <BiLogoTelegram className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-emerald-300' />
              <FaFacebookF className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-emerald-300' />
            </div>

          </div>
        </div>

        <section className='grid grid-cols-2 lg:grid-cols-4 gap-10 md:mt-0 mt-10'>
          <div>
            <h1 className='font-semibold text-emerald-700 mb-3'>Job seekers</h1>
            <ul>
              <li className='mb-2'><a href="">Browse Jobs</a></li>
              <li className='mb-2'><a href="">Salary Tools</a></li>
              <li className='mb-2'><a href="">Career Advice</a></li>
              <li className='mb-2'><a href="">Student Career Center</a></li>
              <li className='mb-2'><a href="">Resume writing services</a></li>
              <li className='mb-2'><a href="">Direct Contracts</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold text-emerald-700 mb-3'>Employers</h1>
            <ul>
              <li className='mb-2'><a href="">How to Hire</a></li>
              <li className='mb-2'><a href="">Talent Marketplace</a></li>
              <li className='mb-2'><a href="">Hire an Agency</a></li>
              <li className='mb-2'><a href="">Hire worldwide</a></li>
              <li className='mb-2'><a href="">Direct Contracts</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold text-emerald-700 mb-3'>Resources</h1>
            <ul>
              <li className='mb-2'><a href="">Help and Support</a></li>
              <li className='mb-2'><a href="">Success Stories</a></li>
              <li className='mb-2'><a href="">Blogs</a></li>
              <li className='mb-2'><a href="">Researches</a></li>
              <li className='mb-2'><a href="">Community</a></li>
              <li className='mb-2'><a href="">Events and Webinars</a></li>
              <li className='mb-2'><a href="">News and press</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold text-emerald-700 mb-3'>Company</h1>
            <ul>
              <li className='mb-2'><a href="">About Us</a></li>
              <li className='mb-2'><a href="">Leadership</a></li>
              <li className='mb-2'><a href="">Careers</a></li>
              <li className='mb-2'><a href="">Our Impact</a></li>
              <li className='mb-2'><a href="">Contact Us</a></li>
            </ul>
          </div>
        </section>
      </div>

      <div className='md:flex justify-between container mt-10 pb-3 text-center'>
        <div>
          <p>© 2023 HireWave. All rights reserved.</p>
        </div>
        <div>
          <p><span className='footer-items'>Privacy Policy</span> | <span className='footer-items'>Terms of Services</span></p>
        </div>
        <div className='hidden md:block'>
          Website by <span className='footer-items'>Hiqmah-607</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;