import logo from '/Logo/black bg banner.png'
import './Footer.css'
import { BiLogoTelegram } from 'react-icons/bi';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='text-white bg-dark mt-10'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-20 pt-12'>
          <div className='col-span-1'>
            <img className='w-1/2' src={logo} alt="" />
            <p className='mt-5 mb-2'>43/7 Northern Tower, Banani, Dhaka-1263</p>
            <p className='mb-2 lowercase'>support@hirewave.com</p>
            <p>+8801543653473</p>

            <div className='mt-4 md:mt-8'>
              <h1 className='mb-2'>Follow Us:</h1>
              <div className='flex gap-2'>
                <FiFacebook className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-slate-500' />
                <FiTwitter className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-slate-500' />
                <AiOutlineYoutube className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-slate-500' />
                <BiLogoTelegram className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-slate-500' />
                <AiOutlineInstagram className='text-4xl p-1 rounded-full border-2 border-white text-white hover:bg-slate-500' />
              </div>

            </div>
          </div>

          <section className='grid grid-cols-2 lg:grid-cols-4 gap-10 col-span-1 md:col-span-2'>
            <div>
              <h1 className='font-semibold text-emerald-400 mb-3'>Job seekers</h1>
              <ul>
                <li className='mb-2'><Link href="">Browse Jobs</Link></li>
                <li className='mb-2'><Link href="">Salary Tools</Link></li>
                <li className='mb-2'><Link href="">Career Advice</Link></li>
                <li className='mb-2'><Link href="">Student Career Center</Link></li>
                <li className='mb-2'><Link href="">Resume writing services</Link></li>
                <li className='mb-2'><Link href="">Direct Contracts</Link></li>
              </ul>
            </div>
            <div>
              <h1 className='font-semibold text-emerald-400 mb-3'>Employers</h1>
              <ul>
                <li className='mb-2'><Link href="">How to Hire</Link></li>
                <li className='mb-2'><Link href="">Talent Marketplace</Link></li>
                <li className='mb-2'><Link href="">Hire an Agency</Link></li>
                <li className='mb-2'><Link href="">Hire worldwide</Link></li>
                <li className='mb-2'><Link href="">Direct Contracts</Link></li>
              </ul>
            </div>
            <div>
              <h1 className='font-semibold text-emerald-400 mb-3'>Resources</h1>
              <ul>
                <li className='mb-2'><Link href="">Help and Support</Link></li>
                <li className='mb-2'><Link href="">Success Stories</Link></li>
                <li className='mb-2'><Link href="">Blogs</Link></li>
                <li className='mb-2'><Link href="">Researches</Link></li>
                <li className='mb-2'><Link href="">Community</Link></li>
                <li className='mb-2'><Link href="">Events and Webinars</Link></li>
                <li className='mb-2'><Link href="">News and press</Link></li>
              </ul>
            </div>
            <div>
              <h1 className='font-semibold text-emerald-400 mb-3'>Company</h1>
              <ul>
                <li className='mb-2'><Link href="">About Us</Link></li>
                <li className='mb-2'><Link href="">Leadership</Link></li>
                <li className='mb-2'><Link href="">Careers</Link></li>
                <li className='mb-2'><Link href="">Our Impact</Link></li>
                <li className='mb-2'><Link href="">Contact Us</Link></li>
              </ul>
            </div>
          </section>
        </div>


        <div className='md:flex justify-center gap-10 mt-10 pb-5 text-center'>

          <div>
            <p>© 2023 HireWave. All rights reserved.</p>
          </div>
          <div>
            <p><span className='footer-items'>Privacy Policy</span> | <span className='footer-items'>Terms of Services</span></p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;