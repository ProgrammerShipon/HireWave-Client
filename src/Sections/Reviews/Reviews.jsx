
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Reviews.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Reviews = () => {
  const hiringRecommendations = [
    {
      _id: 1,
      companyName: "TechGlobe",
      recommenderName: "Alexandra Thompson",
      recommenderPosition: "Chief Executive Officer",
      comment: "We at TechGlobe have had the pleasure of working with the exceptional talents sourced by ExpertRecruit. Their dedication to finding the perfect fit for our technical team has greatly impressed us. If you're seeking top-tier candidates, ExpertRecruit is your ultimate hiring partner."
    },
    {
      _id: 2,
      companyName: "FashionFusion",
      recommenderName: "Michael Rodriguez",
      recommenderPosition: "Creative Director",
      comment: "In the fast-paced world of fashion, finding the right creative minds is crucial. That's where TalentCrafters comes in. Their understanding of our industry, combined with their keen eye for talent, has consistently delivered remarkable designers to our team. If you're looking for design stars, TalentCrafters is the agency to trust."
    },
    {
      _id: 3,
      companyName: "FoodMaster",
      recommenderName: "Emily Chen",
      recommenderPosition: "Head of Culinary Operations",
      comment: "At FoodMaster, we believe that the heart of our business lies in the culinary expertise we offer. Partnering with CulinaryConnections has been a game-changer. Their network of exceptional chefs and food specialists is unparalleled. For anyone searching for culinary brilliance, CulinaryConnections is the agency you need."
    },
    {
      _id: 4,
      companyName: "GreenSolutions",
      recommenderName: "Jonathan Parker",
      recommenderPosition: "Sustainability Director",
      comment: "As a company dedicated to environmental solutions, we need individuals who share our passion for a greener future. GreenTalent Agency has consistently presented us with candidates who align with our mission and possess the skills to drive change. If you're serious about sustainability, GreenTalent Agency is the partner to collaborate with."
    }
  ];

  console.log(hiringRecommendations);


  return (
    <div>
      <h1 className='text-center text-4xl mb-6 font-serif'>Backed by recognized brands and startups</h1>
      <div className='w-auto md:w-[720px] lg:w-[1000px] mx-auto'>
        <Swiper
           slidesPerView={2}
           spaceBetween={30}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper"
        >
          {
            hiringRecommendations.map(recommendation => <SwiperSlide key={recommendation._id} className='flex flex-col text-left px-5 md:px-16 py-3 md:py-5 bg-emerald-300 rounded-lg'>
              <h1 className='font-bold text-2xl md:text-3xl  mb-2 md:mb-5'>{recommendation.companyName}</h1>
              <p className='mb-3 text-[15px] md:text-base'>"{recommendation.comment}"</p>
              <p className='text-gray-500 mb-5 text-[14px] md:text-base'>{recommendation.recommenderName}, {recommendation.recommenderPosition}</p>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;


