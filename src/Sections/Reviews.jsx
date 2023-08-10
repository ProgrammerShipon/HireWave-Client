
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../Components/SectionTitle';

const Reviews = () => {
  const [hiringRecommendations, setHiringRecommendations] = useState([])
  // added json file
  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setHiringRecommendations(data))
  }, [])
  console.log(hiringRecommendations);

  return (
    <section className='container'>

        {/* Section title */}
        <SectionTitle title="Top Reviews" para="What they say about us" />

        {/* Whole Review part */}
        <div className='mx-auto mt-10'>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}

            // Responsive swiper
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
              hiringRecommendations.map(recommendation => <SwiperSlide key={recommendation._id} className='h-[300px] md:h-[340px] lg:h-[280px] relative flex flex-col px-5 md:px-8 mb-12 py-6 border-2 border-green rounded-lg'>

                {/* Company image and name */}
                <div className='flex gap-3 pl-6'>
                  <img className='w-10 h-10' src={recommendation.companyImage} alt="" />
                  <h1 className='font-bold text-2xl md:text-3xl mb-5'>{recommendation.companyName}</h1>
                </div>

                {/* Comment */}
                <p className='mb-3'>"{recommendation.comment}"</p>

                {/* rating and date */}
                <div className='w-full flex justify-between'>
                  <Rating style={{ maxWidth: 100 }} value={Math.round(recommendation.rating || 0)} readOnly />
                  <span className='text-sm mr-5'>{recommendation.date}</span>
                </div>

                {/* Recommender info (image, name and position) */}
                <div className='absolute bottom-3'>
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
    </section>
  );
};

export default Reviews;


