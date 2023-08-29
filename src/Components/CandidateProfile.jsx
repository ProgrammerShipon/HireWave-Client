import { CiLocationOn } from "react-icons/ci";
import { LiaDollarSignSolid } from "react-icons/lia";
import { MdCircle, MdOutlineWatchLater } from "react-icons/md";
import Button from "./Button";
import { BsBookmarkPlus } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
const CandidateProfile = ({ candidateDetails }) => {
    const { name, images, location, workRate, joinSince, category, active } = candidateDetails
    return (
        <div className="p-20 md:p-12 bg-slate-200 rounded-md">
            <div>
                <div className="flex flex-col md:flex-row justify-center  items-end gap-12">
                    {/* Candidate Image */}
                    <div className='text-center space-y-2'>
                        <img src={images} className='w-36 h-36 rounded-full mx-auto' alt={name} />
                        <div>
                            <div className=" flex ">
                                <h3 className='text-2xl  font-medium '>{name}</h3>
                                <MdCircle className={` ${active === "online"
                                    ? " text-green animate-pulse" : "text-[#ea2b33] "}`} />
                            </div>
                            <h3 className='text-blue-700'>{category}</h3>
                        </div>
                    </div>

                    {/* Candidate Name */}
                    <div className="text-gray">
                        <div className="flex gap-2 ">
                            <GiTakeMyMoney className="text-xl " />
                            <p className="flex items-center"> Working Rate :
                                <LiaDollarSignSolid className="text-base -mr-1" />{workRate}/hour
                            </p>
                        </div>
                        <p className="flex items-center gap-1"> <CiLocationOn className="text-xl" /> {location} </p>

                        <p className="flex items-center gap-1 "><MdOutlineWatchLater className="text-xl" /> Member Since,{joinSince}</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 '>
                        <button className=" w-48  flex items-center gap-2 bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20">
                            Contact With Me <AiOutlineMessage className="text-2xl text-green" />
                        </button>
                        <button className=" w-48 bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"> Download Resume
                        </button>
                        <button className="w-48 flex items-center gap-2 bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20">Add to favourite <BsBookmarkPlus className="text-2xl text-green" />
                        </button>
                    </div>
                </div>

                {/* Candidate Location */}
                {/* <div className=' mt-5 gap-3'> */}
                {/* */}



                {/* </div> */}

            </div>






        </div>
    );
};

export default CandidateProfile;