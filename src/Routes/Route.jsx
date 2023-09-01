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
import SavedJobs from "../Pages/SavedJobs";
import SignUp from "../Pages/SignUp";
import Contact from "../Pages/Contact";
import Recruiters from "../Pages/Recruiters";
import AllCategories from "../Pages/AllCategories";
import CandidateDetails from "../Pages/CandidateDetails";
import Events from "../Pages/Events";
import EventDetails from "../Pages/EventDetails";
import RecruitersDetails from "./../Pages/RecruitersDetails";
import Dashboard from "../Layout/Dashboard"
import DashboardHome from "../Dashboard/DashboardHome"
import ChangePassword from "../Dashboard/ChangePassword";
import AppliedJobs from "../Dashboard/AppliedJobs";
import MyProfile from "../Dashboard/MyProfile";
import Messages from "../Dashboard/Messages";
import PostedJobs from "../Dashboard/PostedJobs";
import ManageUsers from "../Dashboard/ManageUsers";
import ManageJobs from "../Dashboard/ManageJobs";
import CandidateList from "../Dashboard/CandidateList";
import RecruiterList from "../Dashboard/RecruiterList";
import ApplyJob from "../Pages/ApplyJob";

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
        path: "/apply_job/:title",
        element: <ApplyJob />
      },
      {
        path: "/all_categories",
        element: <AllCategories />,
      },
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/candidate_details/:id",
        element: <CandidateDetails />,
        loader: ({ params }) => fetch(`https://hire-wave-server.vercel.app/api/jobCandidates/${params.id}`)
      },
      {
        path: "/job_details/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`https://hire-wave-server.vercel.app/api/allJobs/${params.id}`)
      },
      {
        path: "/apply_job/:id",
        element: <ApplyJob />,
        loader: ({ params }) => fetch(`https://hire-wave-server.vercel.app/api/allJobs/${params.id}`)
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
        element: <Recruiters />,
      },
      {
        path: "/recruiters_details/:id",
        element: <RecruitersDetails />,
        loader: ({ params }) => fetch(`https://hire-wave-server.vercel.app/api/recruiters/${params.id}`)
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event_details/:name",
        element: <EventDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      //Common Routes
      {
        path: "dashboardHome",
        element: <DashboardHome />
      },
      {
        path: "myProfile",
        element: <MyProfile />
      },
      {
        path: "changePassword",
        element: <ChangePassword />
      },

      // Candidate routes
      {
        path: "appliedJobs",
        element: <AppliedJobs />
      },

      // Recruiter routes
      {
        path: "messages",
        element: <Messages />
      },
      {
        path: "postedJobs",
        element: <PostedJobs />
      },

      //Admin Routes
      {
        path: "manageUsers",
        element: <ManageUsers />
      },
      {
        path: "manageJobs",
        element: <ManageJobs />
      },
      {
        path: "candidateList",
        element: <CandidateList />
      },
      {
        path: "recruiterList",
        element: <RecruiterList />
      }

    ]
  }
]);

export default Router;
