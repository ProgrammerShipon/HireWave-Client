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
		<Link to={`recruiters_details/${_id}`} className="block w-64 sm:w-full mx-auto p-3 border border-purple hover:border-green cursor-pointer rounded-lg hover:shadow-xl hover:shadow-green/20 duration-300 group">
			<div className="flex items-center gap-3">
				{/* logo */}
				<img
					className="w-14 h-14 rounded-lg shadow-xl shadow-purple/30"
					src={logo}
					alt={company}
				/>

				<div>
					{/* company name */}
					<h3 className="text-xl text-purple font-medium duration-300 hover:text-green mb-1 drop-shadow-lg line-clamp-1">
						{company}
					</h3>

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
					<p className="text-gray">{openJobs} Open Jobs</p>
				</div> : <div className="text-right mt-6 mb-2">
					<Link to='/' className="text-gray group-hover:text-white px-5 py-2 rounded-md bg-purple/20 group-hover:bg-green duration-300 shadow-xl group-hover:shadow-green/20">{openJobs} Open Jobs</Link>
				</div>
			}
		</Link>
	);
};

export default RecruiterCard;