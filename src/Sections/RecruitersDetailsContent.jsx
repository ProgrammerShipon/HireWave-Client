import useRecruitersDetails from "./../Hooks/useRecruitersDetails";
import RecruitersDetailsSummary from "./../Components/RecruitersDetailsSummary";

export default function RecruitersDetailsContent() {
  const [RecruitersDetails] = useRecruitersDetails();

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        {RecruitersDetails.map((details) => (
          <RecruitersDetailsSummary
            key={details.id}
            recruiters={details}
          ></RecruitersDetailsSummary>
        ))}
      </div>
    </section>
  );
}
