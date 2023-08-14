import { useState } from "react";
import Button from "../Components/Button";
import SectionTitle from "../Components/SectionTitle";
import TopCategoryCard from "../Components/TopCategoryCard";
import useCategoriesData from "../Hooks/useCategoriesData";

const TopCategories = () => {
  const [categoriesData] = useCategoriesData();
  const [allCategoris, setAllCategoris] = useState(false)

  return (
    <section className="bg-[#edf6f7] py-16 md:py-20">
      <div className="container">
        {/* section title  */}
        <SectionTitle title="Top Category" para="All Top Category" />

        {/* categories  */}
        {
          allCategoris ?
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-12 md:pt-16">
              {categoriesData?.slice(0, 10).map((category) => (
                <TopCategoryCard key={category._id} category={category} />
              ))}
            </div> :
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-12 md:pt-16">
              {categoriesData?.map((category) => (
                <TopCategoryCard key={category._id} category={category} />
              ))}
            </div>
        }
        <button onClick={() => { setAllCategoris(!allCategoris) }} className="w-full text-center  mt-14">
          <Button>Know More</Button>
        </button>
      </div>
    </section>
  );
};

export default TopCategories;
