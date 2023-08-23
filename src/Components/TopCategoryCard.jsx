import { Link } from "react-router-dom";

const TopCategoryCard = ({ category }) => {
    return (
        <div className='bg-white w-full mx-auto px-2 py-6 flex flex-col items-center rounded-2xl shadow-xl hover:shadow-green/10 border border-white hover:border-green duration-300'>

            <div className='w-20 p-5 bg-green/10 rounded-full text-center shadow-lg shadow-dark/10'>
                <img className='w-full' src={category.img} alt="" />
            </div>

            <Link to='/' className="text-dark font-semibold mt-3 drop-shadow-lg line-clamp-1">
                {category.category_name}
            </Link>

            <p className="text-gray">{category.jobs.length} Jobs</p>
        </div>
    );
};

export default TopCategoryCard;