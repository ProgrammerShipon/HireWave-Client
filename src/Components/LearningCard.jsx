import { Link } from "react-router-dom";
import { BsBookmarkStar } from "react-icons/bs"
const LearningCard = ({ learning }) => {
    const { _id, category, thumbnail, title, description, readTime, authorName, authorEmail, authorImg } = learning

    return (
        <div className="p-3 lg:p-5 rounded-lg hover:shadow-xl hover:shadow-green/20 border border-dark/40 hover:border-green duration-300">

            {/* Thumbnail */}
            <img
                className="object-cover object-center w-full rounded-lg"
                src={thumbnail}
                alt={title}
            />

            {/* Content */}
            <div className="flex flex-col justify-between px-2 mt-5 mb-2">
                {/* Title & Description */}
                <div>
                    <div className="flex justify-between items-center gap-5 mb-3">
                        <div className="text-purple duration-300 hover:underline"> {category} </div>
                        <div className="flex items-center gap-2 text-dark"><BsBookmarkStar /><span>{readTime} min read</span></div>
                    </div>
                    <h3 className="text-xl lg:text-2xl text-green font-semibold"> {title} </h3>
                    <p className="line-clamp-3 mt-2">{description}</p>
                </div>

                <div className="flex justify-between items-center gap-5 mt-3">
                    {/* Author Details */}
                    <div className="flex items-center gap-3">
                        <img className="rounded-full w-10" src={authorImg} alt="" />
                        <div>
                            <h3 className="lg:text-xl text-dark">{authorName}</h3>
                            <p className="text-sm">{authorEmail}</p>
                        </div>
                    </div>

                    {/* Detail Button */}
                    <Link to={`/learning/${_id}`} className="bg-purple text-white inline-block px-2 py-1 lg:px-3 lg:py-2 rounded-md duration-300 hover:bg-dark shadow-xl shadow-purple/20 hover:shadow-dark/20 mr-3 cursor-pointer">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default LearningCard;
