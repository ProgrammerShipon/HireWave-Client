
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Reviews.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [hiringRecommendations, setHiringRecommendations] = useState([])

  useEffect(() => {
    fetch('/reviews.json')
    .then(res=> res.json())
    .then(data=> setHiringRecommendations(data))
}, [])

  console.log(hiringRecommendations);


  return (
    <section>
      <div className='container'>
        <h1 className='text-center text-4xl mb-6 font-serif'>Backed by recognized brands and startups</h1>
        <div className='mx-auto'>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
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
            className="mySwiper"
          >
            {
              hiringRecommendations.map(recommendation => <SwiperSlide key={recommendation._id} className='h-[280px] md:h-[340px] lg:h-[280px] relative flex flex-col px-5 md:px-8 mb-12 py-6 border-2 border-black rounded-lg'>
                <div className='flex gap-3 pl-6'>
                  <img className='w-10 h-10' src={recommendation.companyImage} alt="" />
                  <h1 className='font-bold text-2xl md:text-3xl mb-5'>{recommendation.companyName}</h1>
                </div>
                {/* <img src={apostrophe} alt="" /> */}
                <p className='mb-3'>"{recommendation.comment}"</p>
                <div className='absolute bottom-3'>
                <Rating style={{ maxWidth: 100 }} value={Math.round(recommendation.rating || 0)} readOnly />
                <div className='flex gap-6 items-center mt-5'>
                  <img className='rounded-full w-14' src={recommendation.recommenderImage} alt="" />
                  <div className=''>
                    <p className='text-gray-500 '>{recommendation.recommenderName}</p>
                    <p className='text-gray-500 text-sm'>{recommendation.recommenderPosition}</p>
                  </div>
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


