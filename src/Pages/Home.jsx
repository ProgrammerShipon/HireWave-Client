import React from "react";
import HeroBanner from "../Sections/HeroBanner";
import Job_Post from "../Sections/Job_Post";
import Special_Featurs from "../Sections/Special_Featurs";
import TopCategories from "../Sections/TopCategories";
import Reviews from "../Sections/Reviews/Reviews";
import TopEmployee from "../Sections/TopEmployee";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <TopCategories />

      <Job_Post />

      <Special_Featurs />

      <TopEmployee />

      {/*
      full bugs
       <TopRecruiters /> */}

      <Reviews />
    </>
  );
};

export default Home;
