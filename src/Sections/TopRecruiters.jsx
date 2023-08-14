import { useState, useEffect } from "react";
import Recruiters from "../Components/Recruiters";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";

const TopRecruiters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./recruiters.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        {/* section title */}
        <SectionTitle title='Top Recruiters' para='Top Recruiters to hire' />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,max-content))] gap-5 justify-center mt-12 md:mt-16">
          {data.map((recruiter) => (
            <Recruiters key={recruiter.id} recruiter={recruiter} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button>View More</Button>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
