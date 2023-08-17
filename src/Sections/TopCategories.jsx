import SectionTitle from "../Components/SectionTitle";
import TopCategoryCard from "../Components/TopCategoryCard";
import useCategoriesData from "../Hooks/useCategoriesData";
import { Link } from "react-router-dom";

const TopCategories = () => {
    const [categoriesData] = useCategoriesData();

    return (
        <section className="bg-[#edf6f7] py-20 md:py-[120px]">
            <div className="container">
                {/* section title  */}
                <SectionTitle title="Top Category" para="All Top Category" />

                {/* categories  */}
                {
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-12 md:pt-16">
                        {categoriesData?.slice(0, 10).map((category) => (
                            <TopCategoryCard key={category._id} category={category} />
                        ))}
                    </div>
                }

                <div className="text-center mt-16 md:mt-20">
                    <Link to="/all_categories" className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20">
                        All Category
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
