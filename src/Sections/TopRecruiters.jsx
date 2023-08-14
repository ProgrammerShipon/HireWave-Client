import { useEffect } from "react";
import Button from "../Components/Button";
import Recruiters from "../Components/Recruiters";
import SectionTitle from "../Components/SectionTitle";
import useRecruiters from "../Hooks/useRecruiters";

const TopRecruiters = () => {
  const [recruiterData, loading, refetch] = useRecruiters()

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        {/* section title */}
        <SectionTitle title='Top Recruiters' para='Top Recruiters to hire' />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center mt-12 md:mt-16">
          {recruiterData.map((recruiter) => (
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
