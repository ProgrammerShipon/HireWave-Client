import SectionTitle from '../Components/SectionTitle';
import useReview from '../Hooks/useReview';

// react rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
  // Review Date load
  const [reviewData] = useReview();

  // rating style
  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#33e2a0',
    inactiveFillColor: '#33e29f61'
  }
  return (
    <section className='py-20 md:py-[120px] duration-300'>
      <div className='container'>
        {/* section title */}
        <SectionTitle title='Our Reviews' para='Backed by recognized brands and startups' />

        <div className='mx-auto mt-12 md:mt-16'>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              }
            }}
            modules={[Autoplay, Pagination]}
          >
            {
              reviewData.map(review => <SwiperSlide key={review._id} className='p-4 border border-green rounded-lg mb-14'>
                {/* author */}
                <div className='flex gap-4 items-center'>
                  <div className='w-14 h-14 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src={review.authorImage} alt={review.authorName} />
                  </div>

                  <div>
                    <h3 className='text-dark text-xl drop-shadow-lg'>{review.authorName}</h3>
                    <p className='text-gray'>{review.title}</p>
                  </div>
                </div>

                <div className='flex items-center justify-end gap-2 mt-3'>
                  {/* rating */}
                  <Rating className='max-w-[90px]' readOnly value={review.rating} itemStyles={myStyles} />

                  - <span className='text-lightGray text-sm italic'>{review.date}</span>
                </div>

                {/* review */}
                <p className='mb-3 mt-1 text-dark line-clamp-3 lg:line-clamp-2'>"{review.comment}"</p>

                {/* company */}
                <div className='flex items-center gap-3 mt-3'>
                  <div className='w-16 h-16 overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src={review.image} alt={review.name} />
                  </div>
                  <div>
                    <h1 className='text-dark font-medium text-2xl'>{review.name}</h1>
                    <p className='text-gray'>{review.location}</p>
                  </div>
                </div>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;