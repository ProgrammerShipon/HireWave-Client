// react icons
import { FaMapMarkerAlt } from "react-icons/fa";

// react rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecruiterCard = ({ recruiter }) => {
	const { company, logo, location, totalRating, rating, openJobs } = recruiter;

	// rating style
	const myStyles = {
		itemShapes: Star,
		activeFillColor: '#ffbd27',
		inactiveFillColor: '#d6c293'
	}

	return (
		<div className="w-64 sm:w-full mx-auto p-3 border border-purple cursor-pointer rounded-lg hover:shadow-4xl hover:shadow-purple/30 duration-300">
			<div className="flex items-center gap-3">
				{/* logo */}
				<img
					className="w-14 h-14 rounded-lg shadow-xl shadow-purple/30"
					src={logo}
					alt={company}
				/>

				<div>
					{/* company name */}
					<h3 className="text-xl text-purple font-medium duration-300 hover:text-green mb-1 drop-shadow-lg">
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
				<FaMapMarkerAlt />
				<p className="">{location}</p>
			</div>

			{/* Number of Open Jobs */}
			<div className="text-right mt-1">
				<p className="text-gray">{openJobs} Open Jobs</p>
			</div>
		</div>
	);
};

export default RecruiterCard;
