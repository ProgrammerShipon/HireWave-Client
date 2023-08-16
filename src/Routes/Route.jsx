import { createBrowserRouter } from "react-router-dom";
import JobDetails from "../Pages/JobDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import RecruitersPage from "../Pages/RecruitersPage";
import Candidates from "../Pages/Candidates";
import BrowseJobs from "../Pages/BrowseJobs";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Learning from "../Pages/Learning";
import SavedJobs from "../Pages/SavedJobs";
import FindTalents from "../Pages/FindTalents";
import AppliedCandidates from "../Pages/AppliedCandidates";
import PostJob from "../Pages/PostJob";

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
        element: <RecruitersPage/>,
      }
    ],
  },
]);

export default Router