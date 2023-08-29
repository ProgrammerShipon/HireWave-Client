import React from 'react';
import MyAccount from '../Sections/MyAccount';
import LanguageProficiency from '../Sections/LanguageProficiency';
import Education from '../Sections/Education';
import CandidateSkills from '../Sections/CandidateSkills';
import Portfolio from '../Sections/Portfolio';
import Experiences from '../Sections/Experiences';
import Button from '../Components/Button';
import { AiOutlineFileAdd } from 'react-icons/ai';
import TrainingsOrCourses from '../Sections/TrainingsOrCourses';
import Accomplishment from '../Sections/Accomplishment';
import Projects from '../Sections/Projects';

const MyProfile = () => {
    return (
        <section className='bg-green/10 py-10 px-5'>
            <h2 className='my-10 text-4xl text-green/80 font-semibold'>My Profile</h2>

            {/* My Account */}
            <MyAccount />

             {/* Skills */}
            <CandidateSkills />

            {/* Education */}
            <Education />

            {/* Experiences */}
            <Experiences />

            {/* Academics / Personal Projects */}
            <Projects />

            {/* Training and Courses */}
            <TrainingsOrCourses />

            {/* Accomplishment */}
            <Accomplishment />

            {/* Language Proficiency */}
            <LanguageProficiency />

            {/* Portfolio */}
            <Portfolio />  

            {/* Generate Resume Button */}
            <div>
                <Button> 
                    <div className='flex items-center gap-2'>
                        <AiOutlineFileAdd/> 
                        <p>Generate Resume</p>
                    </div>
                </Button>
            </div>
        </section>
    );
};

export default MyProfile;