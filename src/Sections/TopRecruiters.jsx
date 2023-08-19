import RecruiterCard from "../Components/RecruiterCard";
import SectionTitle from "../Components/SectionTitle";
import useRecruiters from "../Hooks/useRecruiters";
import Marquee from "react-fast-marquee";
const TopRecruiters = () => {
    const [recruiterData] = useRecruiters();

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                {/* section title */}
                <SectionTitle title='Top Recruiters' para='Top Recruiters to hire' />

                {/* Marquee 1st row */}
                <Marquee pauseOnHover={true} speed={80}>
                <div className="flex gap-5 pl-5 mt-12 md:mt-16">
                    {recruiterData.map((recruiter) => (
                        <RecruiterCard key={recruiter.id} recruiter={recruiter} />
                    ))}
                </div>
                </Marquee>

                {/* Marquee 2nd row */}
                <Marquee pauseOnHover={true} direction="right" speed={80}>
                <div className="flex gap-5 pl-5 mt-12 md:mt-16">
                    {recruiterData.map((recruiter) => (
                        <RecruiterCard key={recruiter.id} recruiter={recruiter} />
                    ))}
                </div>
                </Marquee>
            </div>
        </section>
    );
};

export default TopRecruiters;
