import { Helmet } from 'react-helmet';
import Divider from '../Components/Divider';
import FeaturedJobs from '../Sections/FeaturedJobs';
import HeroBanner from '../Sections/HeroBanner';
import JobByLocation from '../Sections/JobByLocation';
import Partners from '../Sections/Partners';
import Reviews from '../Sections/Reviews';
import SpecialFeatures from '../Sections/SpecialFeatures';
import TopCandidates from '../Sections/TopCandidates';
import TopCategories from '../Sections/TopCategories';
import TopRecruiters from '../Sections/TopRecruiters';
import GetStart from '../Sections/GetStart';

const Home = () => {
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Hire Wave - Hiring agency and communication platform</title>
            </Helmet>

            <HeroBanner />
            <TopCategories />
            <FeaturedJobs />
            {/* border */}
            <Divider />

            <SpecialFeatures />
            {/* border */}
            <Divider />

            <TopCandidates />
            {/* border */}
            <Divider />

            <TopRecruiters />
            {/* border */}
            <Divider />

            <JobByLocation />
            {/* border */}
            <Divider />

            <Partners />
            {/* border */}
            <Divider />

            <Reviews />
            <GetStart />
        </>
    );
};

export default Home;
