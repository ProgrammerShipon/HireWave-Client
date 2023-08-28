import GetAgoTime from './GetAgoTime';

// react rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const RecentReviewSlider = ({ recentReview }) => {
    // rating style
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb33e',
        inactiveFillColor: '#a78f6d'
    }

    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
        >
            {
                recentReview.map((rvw, index) => <SwiperSlide key={index} className='p-3 border border-dashed border-green rounded-lg'>
                    <div className="flex items-start gap-3 mb-1">

                        {/* company logo */}
                        <div className="h-14 w-14 shadow-xl shadow-purple/30 overflow-hidden rounded-md">
                            <img className="w-full object-cover object-center" src={rvw.image} alt={rvw.name} />
                        </div>

                        {/* review content */}
                        <div>
                            <h3 className="text-dark font-medium text-lg">{rvw.name}</h3>
                            <p className="text-lightGray -mt-1">{rvw.location}</p>

                            {/* rating */}
                            <div className='md:flex items-center gap-2 text-gray hidden'>
                                <Rating className='max-w-[90px]' readOnly value={rvw.rating} itemStyles={myStyles} /> <span className='text-[#ffb33e]'>{rvw.rating}</span>

                                <span className='text-lightGray text-sm italic border-l border-gray/50 pl-1'><GetAgoTime datetime={rvw.date} /></span>
                            </div>
                        </div>
                    </div>

                    {/* rating */}
                    <div className='md:hidden flex items-center gap-2 text-gray'>
                        <Rating className='max-w-[90px]' readOnly value={rvw.rating} itemStyles={myStyles} /> <span className='text-[#ffb33e]'>{rvw.rating}</span>

                        <span className='text-lightGray text-sm italic border-l border-gray/50 pl-1'><GetAgoTime datetime={rvw.date} /></span>
                    </div>

                    {/* review */}
                    <p className="text-lightGray line-clamp-2 mt-2">{rvw.review}</p>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default RecentReviewSlider;