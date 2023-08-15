import React, { useState, useEffect } from "react";
import Recruiters from "../Components/Recruiters";

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
      <div className="title text-center py-5">
        <h1 className="text-5xl font-bold">top recruiters to hire</h1>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,max-content))] gap-5 justify-center">
        {data.slice(1,10).map((recruiter) => (
          <Recruiters key={recruiter.id} recruiter={recruiter} />
        ))}
      </div>
    </section>
  );
}
