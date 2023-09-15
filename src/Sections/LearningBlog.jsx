import LearningCard from "../Components/LearningCard";
import PageLoader from "../Components/PageLoader";
import useLearningData from "../Hooks/useLearningData";

const LearningBlog = () => {
    const { learningData } = useLearningData()

    if (!learningData.length > 0) {
        return <div className="h-screen flex items-center justify-center"><PageLoader /></div>
    }

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningData?.slice(0, 6).map((data) => (
                        <LearningCard key={data._id} learning={data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningBlog;