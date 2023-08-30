import { Link } from "react-router-dom";

const LearningCard = ({ learning }) => {
    return (
      learning && (
        <div className="p-3 rounded-lg hover:shadow-4xl hover:shadow-green/20 border border-transparent hover:border-green duration-300 group cursor-pointer">
          <div className="sm:h-[240px] rounded-lg overflow-hidden">
            <img
              className="object-cover object-center w-full"
              src={learning?.thumbnail}
              alt={learning?.videoTitle}
            />
          </div>
          <Link
            to="/"
            className="text-purple duration-300 group-hover:underline"
          >
            {learning?.category}
          </Link>
          <h3 className="text-2xl text-dark font-semibold line-clamp-2 drop-shadow-xl">
            {learning?.videoTitle}
          </h3>
          <p className="text-slate-950 text-lg line-clamp-3 mt-4">
            {learning?.description}
          </p>
        </div>
      )
    );
};

export default LearningCard;
