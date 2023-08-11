import Lottie from "lottie-react";
import { FaBusinessTime } from "react-icons/fa";
import { FiDownloadCloud, FiSettings } from "react-icons/fi";
import { MdOutlineBrowseGallery } from "react-icons/md";
import { SiRoamresearch } from "react-icons/si";
import Animation from "../../src/Assets/animation_ll40rvac.json";

const SpecialFeatures = () => {
  return (
    <section>
      <div className="container py-4 md:py-6 lg:py-8">
        <div className="grid items-center grid-cols-1 gap-5 md:grid-cols-3">
          {/*  Special Features Left side Data*/}
          <article className="space-y-12 text-end">
            <div className="flex items-center gap-8">
              <div>
                <h1 className="mb-2 text-2xl">Data Analysis </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, possimus?
                </p>
              </div>
              <span>
                <FiDownloadCloud className="h-16 w-[65px] text-4xl rounded-full  text-white bg-[#7C60D5] p-3" />
              </span>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <h1 className="mb-2 text-2xl">Business Analysis </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, possimus?
                </p>
              </div>
              <span>
                <FaBusinessTime className="h-16 w-[65px] text-4xl rounded-full  text-white bg-[#7C60D5] p-3" />
              </span>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <h1 className="mb-2 text-2xl">Research</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, possimus?
                </p>
              </div>
              <span>
                <SiRoamresearch className="h-16 w-[65px] text-4xl rounded-full  text-white bg-[#7C60D5] p-3" />
              </span>
            </div>
          </article>

          {/*  Special Features Animation */}
          <div>
            <Lottie animationData={Animation}></Lottie>
          </div>

          {/*  Special Features Right side Data */}
          <article className="space-y-12 text-start ">
            <div className="flex items-center gap-8 ">
              <span>
                <FiSettings className="h-16 w-[65px] text-4xl rounded-full  text-white bg-[#7C60D5] p-3" />
              </span>
              <div>
                <h1 className="text-2xl">Social Marketing</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quos, enim.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span>
                <MdOutlineBrowseGallery className="h-16 w-[65px] text-4xl rounded-full  text-white bg-[#7C60D5] p-3  " />
              </span>
              <div>
                <h1 className="text-2xl">PPC Marketing</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quos, enim.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span>
                <MdOutlineBrowseGallery className="h-16 w-[65px] text-4xl rounded-full  text-white bg-[#7C60D5] p-3  " />
              </span>
              <div>
                <h1 className="text-2xl">Social Marketing</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quos, enim.
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
