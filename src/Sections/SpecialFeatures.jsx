import Lottie from "lottie-react";
import Animation from "../../src/Assets/animation_ll40rvac.json";
import SectionTitle from "../Components/SectionTitle";

// react icons
import { FaFileContract } from "react-icons/fa";
import { RiGpsFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiThealgorithms, SiZwave } from "react-icons/si";

const SpecialFeatures = () => {
  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        {/* section title */}
        <SectionTitle title="Special Features" para="Our Special Features" />

        {/* Special Features content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5 mt-12 md:mt-16">
          {/*  Special Features Left side Data*/}
          <article className="text-end space-y-5 lg:space-y-12">
            <div className="flex items-center justify-end gap-4 border border-green rounded-lg md:border-white bg-white hover:border-green hover:rounded-lg hover:shadow-xl hover:shadow-green/20 px-2 py-3 duration-300">
              <div>
                <h1 className="text-xl md:text-2xl mb-2 text-dark drop-shadow-lg">
                  Job Posting and Search
                </h1>
                <p className="line-clamp-2 text-lightGray drop-shadow-lg">
                  A user-friendly interface for employers to create and post job
                  responsibilities
                </p>
              </div>

              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center border border-green bg-transparent shadow-xl shadow-green/20 hover:bg-purple hover:border-purple hover:shadow-purple/40 group duration-300">
                <BiSearchAlt
                  size="40px"
                  className="text-green group-hover:text-white w-[70px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 border border-green rounded-lg md:border-white bg-white hover:border-green hover:rounded-lg hover:shadow-xl hover:shadow-green/20 px-2 py-3 duration-300">
              <div>
                <h1 className="text-xl md:text-2xl mb-2 text-dark drop-shadow-lg">
                  Resume/CV Management
                </h1>
                <p className="line-clamp-2 text-lightGray drop-shadow-lg">
                  A feature for job seekers to upload and manage their resumes
                  or CVs.
                </p>
              </div>

              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center border border-green bg-transparent shadow-xl shadow-green/20 hover:bg-purple hover:border-purple hover:shadow-purple/40 group duration-300">
                <FaFileContract
                  size="40px"
                  className="text-green group-hover:text-white w-[70px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 border border-green rounded-lg md:border-white bg-white hover:border-green hover:rounded-lg hover:shadow-xl hover:shadow-green/20 px-2 py-3 duration-300">
              <div>
                <h1 className="text-xl md:text-2xl mb-2 text-dark drop-shadow-lg">
                  Matching Algorithm
                </h1>
                <p className="line-clamp-2 text-lightGray drop-shadow-lg">
                  An intelligent algorithm that analyzes the profiles of job
                  seekers for job recommendations
                </p>
              </div>

              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center border border-green bg-transparent shadow-xl shadow-green/20 hover:bg-purple hover:border-purple hover:shadow-purple/40 group duration-300">
                <SiThealgorithms
                  size="40px"
                  className="text-green group-hover:text-white w-[70px]"
                />
              </div>
            </div>
          </article>

          {/*  Special Features Animation */}
          <div>
            <Lottie animationData={Animation}></Lottie>
          </div>

          {/*  Special Features Right side Data */}
          <article className="text-start space-y-5 lg:space-y-12">
            <div className="flex items-center gap-4 border border-green rounded-lg md:border-white bg-white hover:border-green hover:rounded-lg hover:shadow-xl hover:shadow-green/20 px-2 py-3 duration-300">
              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center border border-green bg-transparent shadow-xl shadow-green/20 hover:bg-purple hover:border-purple hover:shadow-purple/40 group duration-300">
                <SiZwave
                  size="40px"
                  className="text-green group-hover:text-white w-[70px]"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl mb-2 text-dark drop-shadow-lg">
                  Communication Tools
                </h1>
                <p className="line-clamp-2 text-lightGray drop-shadow-lg">
                  Integrated communication tools like messaging, email
                  notifications, and interview scheduling to facilitate
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border border-green rounded-lg md:border-white bg-white hover:border-green hover:rounded-lg hover:shadow-xl hover:shadow-green/20 px-2 py-3 duration-300">
              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center border border-green bg-transparent shadow-xl shadow-green/20 hover:bg-purple hover:border-purple hover:shadow-purple/40 group duration-300">
                <RiGpsFill
                  size="40px"
                  className="text-green group-hover:text-white w-[70px]"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl mb-2 text-dark drop-shadow-lg">
                  Application Tracking System
                </h1>
                <p className="line-clamp-2 text-lightGray drop-shadow-lg">
                  An ATS helps employers manage and track the status of job
                  applications
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border border-green rounded-lg md:border-white bg-white hover:border-green hover:rounded-lg hover:shadow-xl hover:shadow-green/20 px-2 py-3 duration-300">
              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center border border-green bg-transparent shadow-xl shadow-green/20 hover:bg-purple hover:border-purple hover:shadow-purple/40 group duration-300">
                <DiGoogleAnalytics
                  size="40px"
                  className="text-green group-hover:text-white w-[70px]"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl mb-2 text-dark drop-shadow-lg">
                  Analytics and Reporting
                </h1>
                <p className="line-clamp-2 text-lightGray drop-shadow-lg">
                  IRobust data analytics and reporting features that provide
                  best performance
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
