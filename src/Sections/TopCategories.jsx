import SectionTitle from "../Components/SectionTitle";
import TopCategoryCard from "../Components/TopCategoryCard";
import useCategoriesData from "../Hooks/useCategoriesData";
import Marquee from "react-fast-marquee";

const TopCategories = () => {
    const [categoriesData] = useCategoriesData();

    return (
        <section className="bg-[#edf6f7] py-20 md:py-[120px]">
            <div className="container">
                {/* section title  */}
                <SectionTitle title="Top Category" para="All Top Category" />

                {/* categories 1st row */}
                <Marquee className="-mb-16" pauseOnHover={true} speed={80}>
                    <div className="grid grid-cols-10 gap-5 pl-5 pt-12 md:pt-16 mb-10">
                        {categoriesData?.slice(0, 10).map((category) => (
                            <TopCategoryCard key={category._id} category={category} />
                        ))}
                    </div>
                </Marquee>

                {/* categories 2nd row */}
                <Marquee pauseOnHover={true} direction="right" speed={80}>
                    <div className="grid grid-cols-10 gap-5 pl-5 pt-16 md:pt-16 mb-4">
                        {categoriesData?.slice(10, 20).map((category) => (
                            <TopCategoryCard key={category._id} category={category} />
                        ))}
                    </div>
                </Marquee>

                {/* <div className="text-center mt-16 md:mt-20">
                    <Link to="/all_categories" className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20">
                        All Category
                    </Link>
                </div> */}
            </div>
        </section>
    );
};

export default TopCategories;
