
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Reviews.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Autoplay, Navigation } from 'swiper/modules';

const Reviews = () => {
  const hiringRecommendations = [
    {
      _id: 1,
      companyName: "TechGlobe",
      recommenderImage: "https://i.ibb.co/6gPj1nr/customer-1.png",
      recommenderName: "Alexandra Thompson",
      recommenderPosition: "Chief Executive Officer",
      comment: "We at TechGlobe have had the pleasure of working with the exceptional talents sourced by ExpertRecruit. Their dedication to finding the perfect fit for our technical team has greatly impressed us. If you're seeking top-tier candidates, ExpertRecruit is your ultimate hiring partner.",
      rating: 4.7
    },
    {
      _id: 2,
      companyName: "FashionFusion",
      recommenderName: "Michael Rodriguez",
      recommenderImage: "https://i.ibb.co/C23DwmC/customer-2.png",
      recommenderPosition: "Creative Director",
      comment: "In the fast-paced world of fashion, finding the right creative minds is crucial. That's where TalentCrafters comes in. Their understanding of our industry, combined with their keen eye for talent, has consistently delivered remarkable designers to our team. If you're looking for design stars, TalentCrafters is the agency to trust.",
      rating: 4.2
    },
    {
      _id: 3,
      companyName: "FoodMaster",
      recommenderName: "Juan Chen",
      recommenderImage: "https://i.ibb.co/b32wRhT/customer-3.png",
      recommenderPosition: "Head of Culinary Operations",
      comment: "At FoodMaster, we believe that the heart of our business lies in the culinary expertise we offer. Partnering with CulinaryConnections has been a game-changer. Their network of exceptional chefs and food specialists is unparalleled. For anyone searching for culinary brilliance, CulinaryConnections is the agency you need.",
      rating: 4.1
    },
    {
      _id: 4,
      companyName: "GreenSolutions",
      recommenderName: "Jonathan Parker",
      recommenderImage: "https://i.ibb.co/QnB7nyK/customer-4.png",
      recommenderPosition: "Sustainability Director",
      comment: "As a company dedicated to environmental solutions, we need individuals who share our passion for a greener future. GreenTalent Agency has consistently presented us with candidates who align with our mission and possess the skills to drive change. If you're serious about sustainability, GreenTalent Agency is the partner to collaborate with.",
      rating: 4.9
    }
  ];

  console.log(hiringRecommendations);


  return (
    <div>
      <h1 className='text-center text-4xl mb-6 font-serif'>Backed by recognized brands and startups</h1>
      <div className='h-[460px] w-auto md:w-[720px] lg:w-[1000px] mx-auto'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {
            hiringRecommendations.map(recommendation => <SwiperSlide key={recommendation._id} className='flex flex-col text-left px-5 md:px-10 py-3 md:py-6 bg-emerald-300 rounded-sm shadow-lg'>
              <h1 className='font-bold text-2xl md:text-3xl  mb-2 md:mb-5'>{recommendation.companyName}</h1>
              <p className='mb-3'>"{recommendation.comment}"</p>
              <div className='flex gap-6 items-center'>
                <img className='rounded-full w-14' src={recommendation.recommenderImage} alt="" />
                <div className=''>
                  <p className='text-gray-500 '>{recommendation.recommenderName}</p>
                  <p className='text-gray-500 text-sm'>{recommendation.recommenderPosition}</p>
                </div>
              </div>
              <Rating style={{ maxWidth: 100 }} value={Math.round(recommendation.rating || 0)} readOnly />
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;


