import { AiOutlineCalendar } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbLanguageHiragana } from "react-icons/tb";
import { GoBook } from "react-icons/go";
import { MdOutlineAvTimer } from "react-icons/md";
import { BsGenderAmbiguous, BsPersonWorkspace } from "react-icons/bs";
import { Link } from "react-router-dom";
const CandidateCurrentInfo = ({ candidateDetails }) => {
    const { experience, age, currentJob, currentSalary, expectedSalary, gender, skills, language, educationalLevel } = candidateDetails;
    return (
        <div className="space-y-5">

            {/* Candidate Current Information */}
            <div className="space-y-2 bg-slate-200 rounded-md  px-8 py-10">
                <div className="flex items-center gap-4">
                    <span>
                        <AiOutlineCalendar className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Experience :</p>
                        <p className="text-gray">{experience}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <MdOutlineAvTimer className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Age :</p>
                        <p className="text-gray">{age} year</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <BsPersonWorkspace className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Current Job:</p>
                        <p className="text-gray">{currentJob}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <GrMoney className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Current Salary:</p>
                        {
                            currentJob === "N/A" ? <p className="text-gray">{currentSalary}</p> : <p className="text-gray">{currentSalary} k</p>
                        }
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <GiTakeMyMoney className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Expected Salary:</p>
                        <p className="text-gray">{expectedSalary} k/month</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <BsGenderAmbiguous className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Gender :</p>
                        <p className="text-gray">{gender}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <TbLanguageHiragana className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Language :</p>
                        <p className="text-gray">{language}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        <GoBook className="text-2xl" />
                    </span>
                    <div>
                        <p className="text-lg opacity-90"> Education Level:</p>
                        <p className="text-gray">{educationalLevel}</p>
                    </div>
                </div>
            </div>
            {/* Candidate Language Skill*/}
            <div className=" bg-slate-200 rounded-md  px-8 py-10">
                <p className="text-2xl mb-3">Language</p>
                <div className="flex flex-wrap items-center  gap-2  duration-300">
                    {language.map((language, index) => (
                        <li
                            key={index}
                            className="  hover:bg-white text-purple px-2 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                        >{language}</li>
                    ))}
                </div>
            </div>
            {/* Candidate social Link */}
            <div className="flex justify-between items-center bg-slate-200 rounded-md  px-8 py-10">
                <p className="text-2xl ">Social media</p>
                <div className="flex gap-3">
                    <Link> <FaFacebook className="text-2xl text-[#207BF3]" /> </Link>
                    <Link><FaTwitter className="text-2xl text-[#249EF0]" /> </Link>
                    <Link><FaInstagram className="text-2xl text-[#FE1557]" /> </Link>
                </div>
            </div>
            {/* Candidate Professional Skills */}
            <div className="bg-slate-200 rounded-md  px-8 py-10">
                <h2 className="text-2xl mb-3">Professional Skills</h2>
                <div className="flex flex-wrap items-center  gap-2  duration-300">
                    {skills.map((skill, index) => (
                        <p
                            key={index}
                            className="bg-purple/20 hover:bg-white text-purple px-2 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                        >{skill}</p>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CandidateCurrentInfo;