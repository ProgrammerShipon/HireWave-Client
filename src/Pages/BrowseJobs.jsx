import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import FindJobs from '../Sections/FindJobs';
import GetStart from '../Sections/GetStart';
import useAllJobs from '../Hooks/useAllJobs';
import PageLoader from '../Components/PageLoader';
import useCurrentCandidate from '../Hooks/useCurrentCandidate';

const BrowseJobs = () => {
  const [allJobsData, loading] = useAllJobs();
  const [currentCandidate] = useCurrentCandidate();
  let sortedData;

  // Sort digital marketing category jobs first
  if (currentCandidate.category !== null) {
    sortedData = allJobsData.sort((a, b) => {
      if (a.category === currentCandidate?.category && b.category !== currentCandidate?.category) {
        return -1;
      } else if (a.category !== currentCandidate?.category && b.category === currentCandidate?.category) {
        return 1;
      } else {
        return 0;
      }
    });
  }


  return (
    <>
      {/* page title */}
      <Helmet>
        <title>Browse Jobs - Hire Wave</title>
      </Helmet>

      <Breadcrumbs title="Browse Jobs" />

      {/* sections */}
      {
        !loading ? <FindJobs allJobsData={sortedData} /> : <PageLoader />
      }
    </>
  );
};

export default BrowseJobs;
