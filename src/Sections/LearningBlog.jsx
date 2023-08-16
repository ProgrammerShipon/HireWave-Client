import useLearning from "../Hooks/uselearning";
import LearningCard from "../Components/LearningCard";
import SectionTitle from "./../Components/SectionTitle";

export default function LearningBlog() {
  const [learning] = useLearning();

  return (
    <section className="container">
      {/* blog--post */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center py-20">
        {learning?.map((data) => (
          <LearningCard key={data.id} learning={data} />
        ))}
      </div>
    </section>
  );
}
