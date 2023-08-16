import { Link } from "react-router-dom";

// react icons
import { HiOutlineExternalLink } from 'react-icons/hi';

const CandidateCard = ({ candidate }) => {
    const { name, category, images, active, skills } = candidate;

    return (
        <div className="bg-white w-64 sm:w-full mx-auto relative rounded-md p-3 border border-purple group overflow-hidden hover:shadow-xl hover:shadow-purple/20 duration-300">
            <span
                className={` ${active === "online"
                    ? "text-green bg-green/10 px-3 text-sm py-[2px] rounded-md shadow-lg shadow-purple/10"
                    : "text-[#ea2b33] bg-[#ffeced] text-sm py-[2px] px-3 rounded-md"}`}
            >
                {active === "online" ? "Online" : "Offline"}
            </span>

            {/* image */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mt-2 group-hover:shadow-xl group-hover:shadow-purple/30 duration-300">
                <img
                    className="w-full object-cover object-center"
                    src={images}
                    alt={name}
                />
            </div>

            {/* content */}
            <div className="text-center mt-3">
                <Link to={`/candidate_details/${name}`} className="text-dark text-2xl font-medium capitalize">{name}</Link>

                <h3 className="text-gray">{category}</h3>

                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 duration-300">
                    {skills.map((skill, index) => (
                        <p
                            key={index}
                            className="bg-purple/20 hover:bg-white text-purple px-2 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                        >{skill}</p>
                    ))}
                </div>
            </div>

            {/* button */}
            <Link to={`/candidate_details/${name}`} className="bg-purple text-white inline-block p-3 rounded-md absolute top-1 right-1 md:-right-16 group-hover:right-1 duration-300 hover:bg-dark shadow-xl shadow-purple/20 hover:shadow-dark/20">
                <HiOutlineExternalLink size='20px' />
            </Link>
        </div>
    );
};

export default CandidateCard;