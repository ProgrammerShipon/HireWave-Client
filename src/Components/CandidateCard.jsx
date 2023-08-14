// React Icons
import { FaCircle, FaStar } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const CandidateCard = ({ candidate }) => {
    const { name, role, profile_photo, rating, status } = candidate;
    console.log(status)

    return (
        <div className=''>

            <div className=' relative border  border-green rounded-2xl p-5 hover:shadow-xl hover:shadow-green/20 duration-300 text-center shadow-2xl'>
                <div className='p-3 relative '>
                    <img src={profile_photo} className='w-32 h-32 mt-5 md:mt-0 mx-auto rounded-full  object-cover' alt="" />

                    <span className='absolute top-0 right-0 px-2 rounded-md  bg-green/40  text-gray flex items-center gap-1'><FaStar className='text-yellow-500' /> {rating}</span>

                    <span className={status === "online" ? 'absolute top-10  lg:top-5  right-6 md:right-20 lg:right-24 xl:right-16 text-green' : 'absolute top-10 lg:top-5  right-6 lg:right-24 xl:right-16 text-red-500'}  > <FaCircle className='w-3' /> </span>

                </div>
                <h3 className='text-2xl text-dark font-semibold mt-2'>{name}</h3>
                <h3 className=''>{role}</h3>
                <button className="bg-dark text-white px-6 py-2 mt-3 text-lg rounded-md">
                    View Details
                </button>
            </div>
        </div >
    );
};

export default CandidateCard;