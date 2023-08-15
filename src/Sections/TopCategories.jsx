import { useState } from "react";
import Button from "../Components/Button";
import SectionTitle from "../Components/SectionTitle";
import TopCategoryCard from "../Components/TopCategoryCard";
import useCategoriesData from "../Hooks/useCategoriesData";
import { SiFirefoxbrowser } from "react-icons/si";
import { Link } from "react-router-dom";

const TopCategories = () => {
  const [categoriesData] = useCategoriesData();
  const [allCategoris, setAllCategoris] = useState(false)

  return (
    <section className="bg-[#edf6f7] py-20 md:py-[120px]">
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
             <Link to="/allCategoris">
             <div className='bg-white w-[250px] md:w-full mx-auto py-6 flex flex-col items-center rounded-2xl shadow-xl hover:shadow-green/10 border border-white hover:border-green duration-300'>
                <div className=''>
                  <SiFirefoxbrowser className="text-7xl text-green/40"/>
                </div>

                <p  className="text-dark font-semibold mt-3 drop-shadow-lg line-clamp-1">
                 Browse More... 
                </p>
                <p className="text-gray">1000+jobs</p>

              </div>
             </Link>
            </div>
        }
        <button onClick={() => { setAllCategoris(!allCategoris) }} className="w-full text-center  mt-14">
          <Button>{allCategoris ? "See More" : "See Less"}</Button>
        </button>
      </div>
    </section>
  );
};

export default TopCategories;
