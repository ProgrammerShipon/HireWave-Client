import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import FindJobs from "../Sections/FindJobs";

const SearchResults = () => {
    const location = useLocation();
    const searchResults = location.state?.filteredData || [];

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Search Results - Hire Wave</title>
            </Helmet>

            <Breadcrumbs title={`Search Results 0${searchResults.length}`} />

            {/* section here */}
            <FindJobs allJobsData={searchResults} />
        </>
    );
};

export default SearchResults;