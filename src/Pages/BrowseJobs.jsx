import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindJobs from '../Sections/FindJobs';
import GetStart from '../Sections/GetStart';
import useAllJobs from '../Hooks/useAllJobs';
import PageLoader from '../Components/PageLoader';

const BrowseJobs = () => {
  const [allJobsData, loading] = useAllJobs();

  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Browse Jobs - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Browse Jobs" />

      {/* sections */}
      {
        !loading ? <FindJobs allJobsData={allJobsData} /> : <PageLoader />
      }
    </>
  );
};

export default BrowseJobs;
