import React, { useEffect, useState } from "react";
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
      <SectionTitle title="Top Recruiters" para="top recruiters to hire" />

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-8">
        {data.map((recruiter) => (
          <Recruiters key={recruiter.id} recruiter={recruiter} />
        ))}
      </div>
    </section>
  );
}
