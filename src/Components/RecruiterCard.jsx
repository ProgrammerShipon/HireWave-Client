import { Link, useLocation } from "react-router-dom";

// react icons
import { BiMap } from "react-icons/bi";

// react rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecruiterCard = ({ recruiter }) => {
	const { pathname } = useLocation();
	const { _id, company, logo, location, totalRating, rating, openJobs } = recruiter;

	// rating style
	const myStyles = {
		itemShapes: Star,
		activeFillColor: '#ffbd27',
		inactiveFillColor: '#d6c293'
	}
	return (
		<div className="w-64 sm:w-full mx-auto p-3 border border-purple hover:border-green cursor-pointer rounded-lg hover:shadow-xl hover:shadow-green/20 duration-300 group">
			<div className="flex items-center gap-3">
				{/* logo */}
				<Link to={`/recruiters_details/${_id}`}>
					<img
						className="w-14 h-14 rounded-lg shadow-xl shadow-purple/30"
						src={logo}
						alt={company}
					/>
				</Link>

				<div>
					{/* company name */}
					<Link to={`/recruiters_details/${_id}`} className="text-xl text-purple font-medium duration-300 hover:text-green mb-1 drop-shadow-lg line-clamp-1">
						{company}
					</Link>

					{/* company ratings */}
					<div className='flex items-center gap-1'>
						<Rating className='max-w-[80px]' readOnly value={rating} itemStyles={myStyles} />
						<span className="text-sm text-gray">({totalRating})</span>
					</div>
				</div>
			</div>

			{/* location */}
			<div className="flex items-center gap-1 mt-3 text-gray">
				<BiMap />
				<p className="">{location}</p>
			</div>


			{/* Number of Open Jobs */}
			{
				pathname === '/' ? <div className="text-right mt-1">
					<Link to={`/recruiters_details/${_id}`} className="text-gray">{openJobs} Open Jobs</Link>
				</div> : <div className="text-right mt-6 mb-2">
					<Link to={`/recruiters_details/${_id}`} className="text-gray group-hover:text-white px-5 py-2 rounded-md bg-purple/20 group-hover:bg-green duration-300 shadow-xl group-hover:shadow-green/20">{openJobs} Open Jobs</Link>
				</div>
			}
		</div>
	);
};

export default RecruiterCard;