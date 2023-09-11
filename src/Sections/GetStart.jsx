import { Link } from 'react-router-dom';

// react icons
import { AiOutlineUserAdd } from "react-icons/ai";
import useAuth from '../Hooks/useAuth';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { BiFileFind } from 'react-icons/bi';

const GetStart = () => {
    const { user, currentUser } = useAuth();
    let role = currentUser.role;

    if (!user?.email) {
        role = "user"
    }

    let title
    let description
    let buttonText

    if (role === "user") {
        title = "Get Start Your New Job With Us !"
        description = "Ride the wave of success with Hire Wave, your dedicated partner in finding the perfect job match through our expert hiring services."
        buttonText = <><AiOutlineUserAdd /> Create an Account</>
    }

    if (role === 'recruiter') {
        title = "Post Your Job with Hire Wave and Find Your Ideal Candidate !";
        description = "Are you ready to make a splash in the world of recruitment? Dive into the future of hiring with Hire Wave, your trusted ally in connecting with the perfect candidates for your job openings.";
        buttonText = <><HiOutlineClipboardDocumentList /> Post A Job</>
    }
    if (role === 'candidate') {
        title = "Discover Your Dream Job with Hire Wave !";
        description = "Ready to embark on an exciting career journey? Let Hire Wave be your compass to navigate the vast sea of job opportunities. Explore, apply, and set sail towards your dream job today !";
        buttonText = <><BiFileFind /> Browse Job</>
    }
    return (
        <section className='bg-[url("https://i.ibb.co/Dg1bVQB/Breadcrumbs.jpg")] bg-fixed md:bg-right-top bg-no-repeat bg-cover xl:bg-center'>
            <div className='bg-green/70 py-20 md:py-24 duration-300'>
                <div className='container'>
                    <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                        <div className='max-w-[600px] text-center md:text-left'>
                            <h1 className='text-4xl md:text-3xl mb-5 text-white'>
                                {title}
                            </h1>

                            <p className='text-white font-light tracking-wide'>
                                {description}
                            </p>
                        </div>

                        <div className='mt-8 md:mt-0'>
                            <Link to={`${role === "user" && '/login' || role === "recruiter" && '/post_job' || role === "candidate" && '/browse_jobs'}`} className='text-lg bg-dark text-white hover:text-dark px-8 py-3 rounded-lg hover:bg-white duration-300 shadow-xl hover:shadow-white/30 flex items-center justify-center gap-1'>
                                {buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStart;