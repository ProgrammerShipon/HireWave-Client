import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// react icons
import { HiOutlineExternalLink } from 'react-icons/hi';
import { BiMap, BiSolidStar } from "react-icons/bi";

const CandidateCard = ({ candidate, reviewData }) => {
    const { _id, name, email, category, image, active, location, skills } = candidate;
    const [rating, setRating] = useState([]);

    useEffect(() => {
        const getRating = reviewData.filter(rvl => rvl.email.toLowerCase() === email.toLowerCase());
        setRating(getRating)
    }, [reviewData.length])

    return (
        <div className="bg-white w-64 sm:w-full mx-auto relative rounded-md p-3 border border-purple group overflow-hidden hover:shadow-xl hover:shadow-purple/20 duration-300">
            <span
                className={` ${active
                    ? "text-green bg-green/10 px-3 text-sm py-[2px] rounded-md shadow-lg shadow-purple/10"
                    : "text-[#ea2b33] bg-[#ffeced] text-sm py-[2px] px-3 rounded-md"}`}
            >
                {active ? "Online" : "Offline"}
            </span>

            {/* image */}
            <div className="relative w-24 mx-auto">
                <div className="w-24 h-24 mx-auto relative rounded-full mt-2 group-hover:shadow-xl group-hover:shadow-purple/30 duration-300 overflow-hidden">
                    <img
                        className="w-full object-cover object-center"
                        src={image}
                        alt={name}
                    />
                </div>

                {/* rating */}
                <span className="absolute bottom-1 right-1 bg-white text-[#FDCC0D] text-sm w-7 group-hover:w-12 flex items-center justify-center gap-[2px] px-1 rounded-md shadow-xl duration-300">
                    {rating.length > 0 && rating[0].rating}  <BiSolidStar className="hidden group-hover:inline" />
                </span>
            </div>

            {/* content */}
            <div className="text-center mt-3">
                <Link to={`/candidate_details/${_id}`} className="text-dark text-3xl font-medium capitalize line-clamp-1">{name}</Link>

                <h3 className="text-lightGray text-lg">{category}</h3>
                <p className="text-gray text-sm flex items-center justify-center italic"><BiMap /> {location[0]}, {location[1]}</p>

                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 duration-300">
                    {skills.slice(0, 3).map((skill, index) => (
                        <p
                            key={index}
                            className="bg-purple/20 hover:bg-white text-purple px-2 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                        >{skill}</p>
                    ))}
                </div>
            </div>

            {/* button */}
            <Link state={candidate} to={`/candidate_details/${_id}`} className="bg-purple text-white inline-block p-3 rounded-md absolute top-1 right-1 md:-right-16 group-hover:right-1 duration-300 hover:bg-dark shadow-xl shadow-purple/20 hover:shadow-dark/20">
                <HiOutlineExternalLink size='20px' />
            </Link>
        </div>
    );
};

export default CandidateCard;