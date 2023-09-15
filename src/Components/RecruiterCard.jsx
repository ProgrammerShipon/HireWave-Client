import { Link, useLocation } from "react-router-dom";

// react icons
import { BiMap } from "react-icons/bi";

// react rating
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from "react";
import useReview from "../Hooks/useReview";

const RecruiterCard = ({ recruiter }) => {
	const [reviewData, loading] = useReview();
	const { pathname } = useLocation();
	const { _id, name, email, image, location } = recruiter;

	const [review, setReview] = useState([]);

	useEffect(() => {
		const getReview = reviewData.filter(rvw => rvw.email.toLowerCase() === email.toLowerCase());
		setReview(getReview)
	}, [reviewData.length])

	// rating style
	const myStyles = {
		itemShapes: Star,
		activeFillColor: '#ffbd27',
		inactiveFillColor: '#d6c293'
	}
	return (
		<div className="w-64 sm:w-full mx-auto p-3 border border-purple hover:border-green cursor-pointer rounded-lg hover:shadow-xl hover:shadow-green/20 duration-300 group">
			<div className="flex items-center gap-3">
				{/* image */}
				<Link to={`/recruiters_details/${_id}`}>
					<img
						className="w-14 h-14 rounded-lg shadow-xl shadow-purple/30"
						src={image}
						alt={name}
					/>
				</Link>

				<div>
					{/* company name */}
					<Link to={`/recruiters_details/${_id}`} className="text-xl text-purple font-medium duration-300 hover:text-green mb-1 drop-shadow-lg line-clamp-1">
						{name}
					</Link>

					{/* company ratings */}
					<div className='flex items-center gap-1'>
						<Rating className='max-w-[80px]' readOnly value={review.length > 0 && review[0].rating} itemStyles={myStyles} />
						<span className="text-sm text-gray">({review.length})</span>
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
					<Link to={`/recruiters_details/${_id}`} className="text-gray">20 Open Jobs</Link>
				</div> : <div className="text-right mt-6 mb-2">
					<Link to={`/recruiters_details/${_id}`} className="text-gray group-hover:text-white px-5 py-2 rounded-md bg-purple/20 group-hover:bg-green duration-300 shadow-xl group-hover:shadow-green/20">20 Open Jobs</Link>
				</div>
			}
		</div>
	);
};

export default RecruiterCard;