import Button from "../Components/Button";
import RecruiterCard from "../Components/RecruiterCard";
import SectionTitle from "../Components/SectionTitle";
import useRecruiters from "../Hooks/useRecruiters";

const TopRecruiters = () => {
  const [recruiterData, loading, refetch] = useRecruiters()

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        {/* section title */}
        <SectionTitle title='Top Recruiters' para='Top Recruiters to hire' />

<<<<<<< HEAD
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,max-content))] gap-5 justify-center">
        {data.slice(1,10).map((recruiter) => (
          <Recruiters key={recruiter.id} recruiter={recruiter} />
        ))}
=======
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center mt-12 md:mt-16">
          {recruiterData.map((recruiter) => (
            <RecruiterCard key={recruiter.id} recruiter={recruiter} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button>View More</Button>
        </div>
>>>>>>> d7140c07ec67f2c2d7bf3bad8e919152b902c0cf
      </div>
    </section>
  );
};

export default TopRecruiters;
