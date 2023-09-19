import { Helmet } from 'react-helmet';
import Divider from '../Components/Divider';
import FeaturedJobs from '../Sections/FeaturedJobs';
import HeroBanner from '../Sections/HeroBanner';
import JobByLocation from '../Sections/JobByLocation';
import Partners from '../Sections/Partners';
import Reviews from '../Sections/Reviews';
import SpecialFeatures from '../Sections/SpecialFeatures';
import TopCandidates from '../Sections/TopCandidates';
import TopCategories from '../Sections/TopCategories';
import TopRecruiters from '../Sections/TopRecruiters';
import GetStart from '../Sections/GetStart';
import useAuth from '../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomModal from '../Components/CustomModal';

const Home = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const location = useLocation()
  console.log(location);

  //Use manual states and functions
  const [isCandidateManualOpen, setIsCandidateManualOpen] = useState(false);
  const [isRecruiterManualOpen, setIsRecruiterManualOpen] = useState(false);
  const handleCandidateManualModal = (e) => {
    if (e == "cancel") setIsCandidateManualOpen(false)
  }
  const handleRecruiterManualModal = (e) => {
    if (e == "cancel") setIsCandidateManualOpen(false)
  }

  useEffect(() => {
    const from = location.state?.from?.pathname;
    if (from == "/candidate_sign_up") {
      setIsCandidateManualOpen(true);
    }
    else if (from == "/recruiter_sign_up") {
      setIsRecruiterManualOpen(true);
    }
  }, []);

  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Hire Wave - Hiring agency and communication platform</title>
      </Helmet>

      <HeroBanner />
      <TopCategories />
      {
        currentUser.role !== 'recruiter' && <>
          <FeaturedJobs />
          {/* border */}
          <Divider />
        </>

      }

      <SpecialFeatures />
      {/* border */}
      <Divider />

      {
        currentUser.role !== 'candidate' &&
        <>
          <TopCandidates />
          {/* border */}
          <Divider />
        </>
      }

      {
        currentUser.role !== 'recruiter' &&
        <><TopRecruiters />
          {/* border */}
          <Divider />
        </>
      }

      {
        currentUser.role !== 'recruiter' &&
        <><JobByLocation />
          {/* border */}
          <Divider />
        </>
      }

      <Partners />
      {/* border */}
      <Divider />

      <Reviews />
      <GetStart />

      {
        isCandidateManualOpen &&
        <CustomModal
          isModalOpen={isCandidateManualOpen}
          setIsModalOpen={setIsCandidateManualOpen}
          handleModal={handleCandidateManualModal}
        >
          {/* Modal Heading */}
          <div className="overflow-y-hidden">
            <div className="pt-2 pb-2 flex flex-col gap-1 border-b border-dark/20 text-purple -mt-3">
              <h3 className="text-3xl">👋 Welcome to HireWave</h3>
              <p className='text-dark text-xl italic'>{currentUser?.name} </p>
            </div>

            {/* Modal content */}
            <h2 className="text-xl text-dark mb-2 mt-3">Overview:</h2>
            <p className="text-lightGray ">Overview:
              Describe Your Job Overview best ways. To create an impactful job overview,</p>

            <h2 className="text-xl mb-1 mt-3">Requirements:</h2>
            <ul className="list-disc pl-5 text-lightGray">
              <li className="list-disc">Proficiency in blockchain programming languages</li>
              <li className="list-disc">Experience with Ethereum and other blockchain platforms.</li>
            </ul>

            <h2 className="text-xl mb-1 mt-3">Skill & Experience:</h2>
            <ul className="list-disc pl-5 text-lightGray">
              <li className="list-disc">Conduct research on AI ethics and its impact on society.</li>
              <li className="list-disc">Analyze and address ethical dilemmas in AI development.</li>
            </ul>

            <h2 className="text-xl mb-1 mt-3">Benefits:</h2>
            <ul className="list-disc pl-5 text-lightGray">
              <li className="list-disc">Collaborative and innovative work environment.</li>
            </ul>
          </div>
        </CustomModal>
      }

      {
        isRecruiterManualOpen &&
        <CustomModal
          isModalOpen={isRecruiterManualOpen}
          setIsModalOpen={setIsRecruiterManualOpen}
          handleModal={handleRecruiterManualModal}
        >
          {/* Modal Heading */}
          <div className="overflow-y-hidden">
            <div className="pt-2 pb-2 flex flex-col gap-1 border-b border-dark/20 text-purple -mt-3">
              <h3 className="text-3xl">👋 Welcome to HireWave</h3>
              <p className='text-dark text-xl italic'>{currentUser?.name} </p>
            </div>

            {/* Modal content */}
            <h2 className="text-xl text-dark mb-2 mt-3">Overview:</h2>
            <p className="text-lightGray ">Overview:
              Describe Your Job Overview best ways. To create an impactful job overview,</p>

            <h2 className="text-xl mb-1 mt-3">Requirements:</h2>
            <ul className="list-disc pl-5 text-lightGray">
              <li className="list-disc">Proficiency in blockchain programming languages</li>
              <li className="list-disc">Experience with Ethereum and other blockchain platforms.</li>
            </ul>

            <h2 className="text-xl mb-1 mt-3">Skill & Experience:</h2>
            <ul className="list-disc pl-5 text-lightGray">
              <li className="list-disc">Conduct research on AI ethics and its impact on society.</li>
              <li className="list-disc">Analyze and address ethical dilemmas in AI development.</li>
            </ul>

            <h2 className="text-xl mb-1 mt-3">Benefits:</h2>
            <ul className="list-disc pl-5 text-lightGray">
              <li className="list-disc">Collaborative and innovative work environment.</li>
            </ul>
          </div>
        </CustomModal>
      }
    </>
  );
};

export default Home;
