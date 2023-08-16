import React, { useState, useEffect } from "react";
import Recruiters from "../Components/Recruiters";
import SectionTitle from "../Components/SectionTitle";

export default function TopRecruiters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./recruiters.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="container py-10">
      {/* section title */}
      <SectionTitle title="Top Recruiters" para="Top Recruiters to hire" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,max-content))] gap-5 justify-center mt-12 md:mt-16">
        {data.map((recruiter) => (
          <Recruiters key={recruiter.id} recruiter={recruiter} />
        ))}
      </div>
    </section>
  );
}
