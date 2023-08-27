import LearningCard from "../Components/LearningCard";
import useLearningData from "../Hooks/useLearningData";

const LearningBlog = () => {
    const [learningData] = useLearningData();

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {learningData?.slice(0, 6).map((data) => (
                        <LearningCard key={data.id} learning={data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningBlog;