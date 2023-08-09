import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./TopRecruitersSlider.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
} from "react-icons/fa";
import req1 from "../assets/Recruiters -img/req-1.jpg";
import req2 from "../assets/Recruiters -img/req-2.jpg";
import req3 from "../assets/Recruiters -img/req-3.jpg";
import req4 from "../assets/Recruiters -img/req-4.jpg";
import req5 from "../assets/Recruiters -img/req-5.jpg";
import req6 from "../assets/Recruiters -img/req-6.jpg";
export default function App() {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper container"
      >
        <div className="container grid grid-cols-[repeat(auto-fit,minmax(360px,max-content))] gap-5">
          <SwiperSlide>
            {/*===============Recruiters card one===============*/}
            <div className="card  border bg-white rounded-md py-5 px-2">
              <img
                className="object-cover   w-24 h-24 rounded-full"
                src={req1}
                alt="Recruiters-images"
              />
              <h3 className="text-lg py-4 px-1">john doea</h3>
              <div className="social flex ">
                <a href="#" className="px-1 text-lg">
                  <FaFacebook />
                </a>
                <a href="#" className="px-1 text-lg ">
                  <FaInstagram />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaTwitter />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaSnapchatGhost />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*===============Recruiters card two===============*/}
            <div className="card  border bg-white rounded-md py-5 px-2">
              <img
                className="object-cover   w-24 h-24 rounded-full"
                src={req2}
                alt="Recruiters-images"
              />
              <h3 className="text-lg py-4 px-1">radif</h3>
              <div className="social flex ">
                <a href="#" className="px-1 text-lg">
                  <FaFacebook />
                </a>
                <a href="#" className="px-1 text-lg ">
                  <FaInstagram />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaTwitter />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaSnapchatGhost />
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/*===============Recruiters card three===============*/}
            <div className="card  border bg-white rounded-md py-5 px-2">
              <img
                className="object-cover   w-24 h-24 rounded-full"
                src={req3}
                alt="Recruiters-images"
              />
              <h3 className="text-lg py-4 px-1">hossain</h3>
              <div className="social flex ">
                <a href="#" className="px-1 text-lg">
                  <FaFacebook />
                </a>
                <a href="#" className="px-1 text-lg ">
                  <FaInstagram />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaTwitter />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaSnapchatGhost />
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/*===============Recruiters card four===============*/}
            <div className="card  border bg-white rounded-md py-5 px-2">
              <img
                className="object-cover   w-24 h-24 rounded-full"
                src={req4}
                alt="Recruiters-images"
              />
              <h3 className="text-lg py-4 px-1">limon</h3>
              <div className="social flex ">
                <a href="#" className="px-1 text-lg">
                  <FaFacebook />
                </a>
                <a href="#" className="px-1 text-lg ">
                  <FaInstagram />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaTwitter />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaSnapchatGhost />
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/*===============Recruiters card five===============*/}
            <div className="card  border bg-white rounded-md py-5 px-2">
              <img
                className="object-cover   w-24 h-24 rounded-full"
                src={req5}
                alt="Recruiters-images"
              />
              <h3 className="text-lg py-4 px-1">yash</h3>
              <div className="social flex ">
                <a href="#" className="px-1 text-lg">
                  <FaFacebook />
                </a>
                <a href="#" className="px-1 text-lg ">
                  <FaInstagram />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaTwitter />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaSnapchatGhost />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/*===============Recruiters card six===============*/}

          <SwiperSlide>
            {/*===============Recruiters card three===============*/}
            <div className="card  border bg-white rounded-md py-5 px-2">
              <img
                className="object-cover   w-24 h-24 rounded-full"
                src={req6}
                alt="Recruiters-images"
              />
              <h3 className="text-lg py-4 px-1">anisul</h3>
              <div className="social flex ">
                <a href="#" className="px-1 text-lg">
                  <FaFacebook />
                </a>
                <a href="#" className="px-1 text-lg ">
                  <FaInstagram />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaTwitter />
                </a>
                <a href="#" className="px-1 text-lg">
                  <FaSnapchatGhost />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
