import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='flex items-center justify-center gap-3'>
            <button className='flex items-center justify-center gap-2 text-xl border border-green bg-white rounded-md w-full h-12 shadow-xl hover:shadow-green/20 duration-300'>
                <img className='w-8' src='https://i.ibb.co/0f4JQNf/google.png' alt="google" />
                Google
            </button>

            <button className='flex items-center justify-center gap-2 text-xl border border-green bg-white rounded-md w-full h-12 shadow-xl hover:shadow-green/20 duration-300'>
                <FaGithub size='30' />
                GitHub
            </button>
        </div>
    );
};

export default SocialLogin;