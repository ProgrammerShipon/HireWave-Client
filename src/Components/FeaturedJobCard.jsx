import { Link } from "react-router-dom";

// react icons
import { FaRegHeart } from 'react-icons/fa';
import GetAgoTime from "./GetAgoTime";

const FeaturedJobCard = ({ job }) => {
    const { logo, title_description, company, post_date, location, duration, industry, salary, technology } = job;
    return (
        <div className="relative bg-white flex items-center justify-between border border-green lg:border-0 hover:shadow-3xl lg:hover:border-white rounded-lg lg:rounded-none hover:rounded-lg overflow-hidden lg:hover:scale-105 hover:z-20 p-5 lg:p-0 duration-300 group">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* company logo */}
                <div className="w-44 lg:w-56 pt-5 lg:p-6">
                    <img className="w-full h-28 lg:h-auto object-cover object-center" src={logo} alt={company} />
                </div>

                {/* card content */}
                <div>
                    <p className="text-green lg:text-purple bg-green/20 px-4 py-1 absolute lg:static top-2 left-2 rounded-md inline-block lg:mb-1 shadow-md shadow-green/10">{duration}</p>

                    <Link to='/' className="text-2xl text-dark group-hover:text-green duration-300 line-clamp-1 max-w-lg">{title_description}</Link>

                    <h5 className="mt-2 hidden lg:block duration-300">{company} - <span className="text-gray">
                        <GetAgoTime datetime={post_date} />
                    </span></h5>

                    <div className="flex flex-col lg:flex-row lg:items-center text-center lg:gap-8 mt-1 duration-300">
                        <p>location: <span className="text-gray">{location}</span></p>

                        <p className="hidden lg:block duration-300">Industry: <span className="text-gray">{industry}</span></p>

                        <p>Salary: <span className="text-gray">${salary}/month</span></p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4 lg:mt-2 duration-300">
                        {
                            technology?.map((item, index) => <p
                                key={index}
                                className="bg-green/20 hover:bg-white text-green px-3 py-[2px] shadow-lg shadow-green/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300"
                            >{item}</p>)
                        }
                    </div>
                </div>
            </div>

            {/* save button */}
            <button className="absolute lg:relative bg-green text-white p-3 lg:pl-3 lg:pr-5 lg:py-2 rounded-e-md lg:rounded-e-none rounded-s-md top-2 right-2 lg:top-auto lg:-right-14 shadow-lg shadow-green/30 group-hover:right-0 duration-300 delay-300">
                <FaRegHeart size='20px' />
            </button>
        </div>
    );
};

export default FeaturedJobCard;