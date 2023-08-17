import useAllCategories from '../Hooks/useAllCategories';
import CategoryList from '../Components/CategoryList';

const Categories = () => {
    const [allCategoriesData] = useAllCategories();

    return (
        <section>
            <div className='container'>
                <div className='grid grid-cols-1 pt-52'>
                    {
                        allCategoriesData?.map(allCategory =>
                            <CategoryList
                                key={allCategory.id}
                                allCategory={allCategory}
                            />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Categories;