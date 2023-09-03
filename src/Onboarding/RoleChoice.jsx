import React from 'react';
import { useContext } from 'react';
import { BsPersonWorkspace, BsBuildings } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const RoleChoice = () => {
    const {logOut}= useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className='container flex flex-col justify-center items-center h-screen'>
            <h1 className='text-6xl text-green mb-2'>Welcome to HireWave</h1>
            <p className='text-xl'>Your Ultimate Hiring / Recruiting Destination</p>
            <p className='mt-12 mb-2'>Select your user identity</p>
            <div className='flex items-center gap-8 w-[480px] mb-10'>

                {/* Candidate div */}
                <Link to='/onboarding' className='border border-dark/60 hover:border-green px-10 py-5 rounded flex flex-col justify-center items-center cursor-pointer flex-1 group hover:shadow-4xl duration-300'>
                    <BsPersonWorkspace className='text-3xl group-hover:text-green' />
                    <p className='text-xl mt-3'>Candidate</p>
                </Link>

                {/* Recruiter Div */}
                <Link to='/employer_onboarding' className='border border-dark/60 hover:border-green px-10 py-5 rounded flex flex-col justify-center items-center cursor-pointer flex-1 group hover:shadow-4xl duration-300'>
                    <BsBuildings className='text-3xl group-hover:text-green'/>
                   <p className='text-xl mt-3'>Recruiter</p>
                </Link>
            </div>
            <div className='mb-40'>
                <p onClick={handleLogOut} className='font-semibold text-sm hover:underline cursor-pointer duration-300'>Logout and go to the website</p>
            </div>
       </div>
    );
};

export default RoleChoice;