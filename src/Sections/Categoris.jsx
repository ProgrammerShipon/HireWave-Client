import React from 'react';
import useAllCategories from '../Hooks/useAllCategories';
import CategoryList from '../Components/CategoryList';

const Categoris = () => {
    const [allCategoriesData] = useAllCategories();
    console.log(allCategoriesData)
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

export default Categoris;