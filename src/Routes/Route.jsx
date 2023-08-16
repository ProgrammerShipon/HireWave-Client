import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import AppliedCandidates from "../Pages/AppliedCandidates";
import BrowseJobs from "../Pages/BrowseJobs";
import Candidates from "../Pages/Candidates";
import FindTalents from "../Pages/FindTalents";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";
import Learning from "../Pages/Learning";
import Login from "../Pages/Login";
import PostJob from "../Pages/PostJob";
import RecruitersPage from "../Pages/RecruitersPage";
import SavedJobs from "../Pages/SavedJobs";
import SignUp from "../Pages/SignUp";
import Contact from "../Pages/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse_jobs",
        element: <BrowseJobs />,
      },
      {
        path: "/allCategoris",
        element: <AllCategoty />,
      },
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/job_details/:id",
        element: <JobDetails />,
      },
      {
        path: "/learning",
        element: <Learning />,
      },
      {
        path: "/saved_jobs",
        element: <SavedJobs />,
      },
      {
        path: "/find_talents",
        element: <FindTalents />,
      },
      {
        path: "/applied_candidates",
        element: <AppliedCandidates />,
      },
      {
        path: "/post_job",
        element: <PostJob />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
      {
        path: "/recruiters",
        element: <RecruitersPage />,
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
]);

export default Router
