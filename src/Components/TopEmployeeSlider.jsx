import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./TopEmployeeSlider.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import em1 from "../assets/Employe-img/em-1.jpg";
import em2 from "../assets/Employe-img/em-2.jpg";
import em3 from "../assets/Employe-img/em-3.jpg";
import em4 from "../assets/Employe-img/em-4.jpg";
import em5 from "../assets/Employe-img/em-5.jpg";
import em6 from "../assets/Employe-img/em-6.jpg";

import { FaCalendar, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div className="container grid grid-cols-[repeat(auto-fit,minmax(200px,max-content))] gap-5 ">
          <SwiperSlide>
            {/*===============employee card one===============*/}
            <div className="card border bg-white rounded-md p-5">
              <div className="card-header flex items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover "
                  src={em1}
                  alt="employee-images"
                />
                <article className="pl-4">
                  <h3 className="text-lg font-semibold">
                    <Link to="/">shipon</Link>
                  </h3>
                  <p className="text-slate-600">backend developer</p>
                </article>
              </div>

              <div className="card-body">
                <article>
                  <div className="summary pt-2 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="icon flex items-center  m-3">
                        <div className="icon">
                          <FaCalendar className="mb-2 text-slate-700" />
                          <FaBook className="text-slate-700" />
                        </div>

                        <div className="text pl-2">
                          <p className="text-slate-600"> experience </p>
                          <p className="text-slate-600">skill</p>
                        </div>
                      </div>

                      <div className="details font-bold ">
                        <p>8yr(s)</p>
                        <span>node.js 8 yr(s)</span>
                      </div>
                    </div>
                  </div>

                  <img
                    className=" max-md:w-[100%] rounded-md w-96 h-80 object-cover:"
                    src={em1}
                    alt="employee-images"
                  />
                </article>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*===============employee card two===============*/}
            <div className="card border bg-white rounded-md p-5">
              <div className="card-header flex items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover "
                  src={em2}
                  alt="employee-images"
                />
                <article className="pl-4">
                  <h3 className="text-lg font-semibold">
                    <Link to="/">riyad</Link>
                  </h3>
                  <p className="text-slate-600">front-end developer</p>
                </article>
              </div>

              <div className="card-body">
                <article>
                  <div className="summary pt-2 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="icon flex items-center  m-3">
                        <div className="icon">
                          <FaCalendar className="mb-2 text-slate-700" />
                          <FaBook className="text-slate-700" />
                        </div>

                        <div className="text pl-2">
                          <p className="text-slate-600"> experience </p>
                          <p className="text-slate-600">skill</p>
                        </div>
                      </div>

                      <div className="details font-bold ">
                        <p>3yr(s)</p>
                        <span>javascript 5 yr(s)</span>
                      </div>
                    </div>
                  </div>

                  <img
                    className=" max-md:w-[100%] rounded-md max-w-[100%] h-80 w-96  object-cover:"
                    src={em2}
                    alt="employee-images"
                  />
                </article>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*===============employee card three===============*/}
            <div className="card border bg-white rounded-md p-5">
              <div className="card-header flex items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover "
                  src={em3}
                  alt="employee-images"
                />
                <article className="pl-4">
                  <h3 className="text-lg font-semibold">
                    <Link to="/">shojol</Link>
                  </h3>
                  <p className="text-slate-600">mern-stack developer</p>
                </article>
              </div>

              <div className="card-body">
                <article>
                  <div className="summary pt-2 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="icon flex items-center  m-3">
                        <div className="icon">
                          <FaCalendar className="mb-2 text-slate-700" />
                          <FaBook className="text-slate-700" />
                        </div>

                        <div className="text pl-2">
                          <p className="text-slate-600"> experience </p>
                          <p className="text-slate-600">skill</p>
                        </div>
                      </div>

                      <div className="details font-bold ">
                        <p>3yr(s)</p>
                        <span>express.js 7 yr(s)</span>
                      </div>
                    </div>
                  </div>

                  <img
                    className=" max-md:w-[100%] rounded-md max-w-[100%] h-80 w-96  object-cover:"
                    src={em3}
                    alt="employee-images"
                  />
                </article>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/*===============employee card four===============*/}
            <div className="card border bg-white rounded-md p-5">
              <div className="card-header flex items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover "
                  src={em4}
                  alt="employee-images"
                />
                <article className="pl-4">
                  <h3 className="text-lg font-semibold">
                    <Link to="/">siam</Link>
                  </h3>
                  <p className="text-slate-600">front-end developer</p>
                </article>
              </div>

              <div className="card-body">
                <article>
                  <div className="summary pt-2 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="icon flex items-center  m-3">
                        <div className="icon">
                          <FaCalendar className="mb-2 text-slate-700" />
                          <FaBook className="text-slate-700" />
                        </div>

                        <div className="text pl-2">
                          <p className="text-slate-600"> experience </p>
                          <p className="text-slate-600">skill</p>
                        </div>
                      </div>

                      <div className="details font-bold ">
                        <p>3yr(s)</p>
                        <span>react.js 2 yr(s)</span>
                      </div>
                    </div>
                  </div>

                  <img
                    className=" max-md:w-[100%] rounded-md max-w-[100%] h-80 w-96  object-cover:"
                    src={em4}
                    alt="employee-images"
                  />
                </article>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*===============employee card five===============*/}
            <div className="card border bg-white rounded-md p-5">
              <div className="card-header flex items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover "
                  src={em5}
                  alt="employee-images"
                />
                <article className="pl-4">
                  <h3 className="text-lg font-semibold">
                    <Link to="/">ayesha</Link>
                  </h3>
                  <p className="text-slate-600">mern-stack developer</p>
                </article>
              </div>

              <div className="card-body">
                <article>
                  <div className="summary pt-2 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="icon flex items-center  m-3">
                        <div className="icon">
                          <FaCalendar className="mb-2 text-slate-700" />
                          <FaBook className="text-slate-700" />
                        </div>

                        <div className="text pl-2">
                          <p className="text-slate-600"> experience </p>
                          <p className="text-slate-600">skill</p>
                        </div>
                      </div>

                      <div className="details font-bold ">
                        <p>2yr(s)</p>
                        <span>express.js 6 yr(s)</span>
                      </div>
                    </div>
                  </div>

                  <img
                    className=" max-md:w-[100%] rounded-md max-w-[100%] h-80 w-96  object-cover:"
                    src={em5}
                    alt="employee-images"
                  />
                </article>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*===============employee card six===============*/}
            <div className="card border bg-white rounded-md p-5">
              <div className="card-header flex items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover "
                  src={em6}
                  alt="employee-images"
                />
                <article className="pl-4">
                  <h3 className="text-lg font-semibold">
                    <Link to="/">hasan</Link>
                  </h3>
                  <p className="text-slate-600">full-stack developer</p>
                </article>
              </div>

              <div className="card-body">
                <article>
                  <div className="summary pt-2 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="icon flex items-center  m-3">
                        <div className="icon">
                          <FaCalendar className="mb-2 text-slate-700" />
                          <FaBook className="text-slate-700" />
                        </div>

                        <div className="text pl-2">
                          <p className="text-slate-600"> experience </p>
                          <p className="text-slate-600">skill</p>
                        </div>
                      </div>

                      <div className="details font-bold ">
                        <p>1yr(s)</p>
                        <span>node.js 4 yr(s)</span>
                      </div>
                    </div>
                  </div>

                  <img
                    className=" max-md:w-[100%] rounded-md max-w-[100%] h-80 w-96  object-cover:"
                    src={em6}
                    alt="employee-images"
                  />
                </article>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
