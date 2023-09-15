import { Link, useLocation } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { BiTimeFive } from "react-icons/bi";
const LearningCard = ({ learning }) => {
    const [axiosSecure] = useAxiosSecure();
    const { _id, category, thumbnail, title, description, readTime, authorName, authorEmail, authorImg } = learning;

    const increaseView = () => {
        axiosSecure.patch(`/learning/view/${_id}`)
            .then(res => {
            })
            .catch((err) => console.log(err));
    }

    const { pathname } = useLocation();
    return (
        <div className="flex flex-col justify-between p-3 rounded-lg hover:shadow-4xl hover:shadow-purple/20 border border-gray/40 hover:border-purple duration-300">
            {/* Thumbnail */}
            <div className="md:h-48 rounded-lg overflow-hidden shadow-lg shadow-gray/40 duration-300">
                <img
                    className="object-cover object-center w-full h-full"
                    src={thumbnail}
                    alt={title}
                />
            </div>

            {/* Title & Description */}
            <div className="pt-2 pb-5">
                <div className="flex justify-between items-center mb-3 px-2">
                    <div className="text-purple duration-300 hover:underline"> {category} </div>
                    <div className="flex items-center gap-1 text-lightGray"><BiTimeFive /><span>{readTime} min read</span></div>
                </div>
                <Link to={`/learning/${_id}`} onClick={() => increaseView(_id)} className="text-xl text-dark hover:text-purple font-medium line-clamp-2 drop-shadow-lg duration-300"> {title} </Link>
                <p className="text-lightGray font-thin line-clamp-3 mt-2">{description}</p>
            </div>
            <div className="flex-1"></div>

            {/* Author Details */}
            <div className="flex justify-between items-center gap-5 pt-3 border-t border-purple/50">
                {
                    pathname === '/learning' && <div className="flex items-center gap-3">

                        <div className="h-14 w-14 rounded-full overflow-hidden shadow-xl shadow-gray/40">
                            <img className="w-full h-full object-cover object-center" src={authorImg} alt={authorName} />
                        </div>
                        <div className="w-[150px] lg:w-auto">
                            <h3 className="lg:text-xl text-dark drop-shadow-lg line-clamp-1">{authorName}</h3>
                            <p className="text-sm text-lightGray line-clamp-1">{authorEmail}</p>
                        </div>
                    </div>
                }


                {/* Detail Button */}
                <Link to={`/learning/${_id}`} onClick={() => increaseView(_id)} className={`bg-purple text-white px-4 lg:px-5 py-2 rounded-md duration-300 hover:bg-dark shadow-xl shadow-purple/20 hover:shadow-dark/20 ${pathname !== '/learning' && 'w-full text-center'}`}>Explore</Link>
            </div>
        </div>
    );
};

export default LearningCard;
