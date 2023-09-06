import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../Dashboard/AppliedJobs";
import CandidateList from "../Dashboard/CandidateList";
import ChangePassword from "../Dashboard/ChangePassword";
import DashboardHome from "../Dashboard/DashboardHome";
import ManageJobs from "../Dashboard/ManageJobs";
import ManageUsers from "../Dashboard/ManageUsers";
import Messages from "../Dashboard/Messages";
import MyProfile from "../Dashboard/MyProfile";
import PostedJobs from "../Dashboard/PostedJobs";
import RecruiterList from "../Dashboard/RecruiterList";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllCategories";
import AppliedCandidates from "../Pages/AppliedCandidates";
import ApplyJob from "../Pages/ApplyJob";
import BrowseJobs from "../Pages/BrowseJobs";
import CandidateDetails from "../Pages/CandidateDetails";
import Candidates from "../Pages/Candidates";
import Conference from "../Pages/Conference";
import Contact from "../Pages/Contact";
import EventDetails from "../Pages/EventDetails";
import Events from "../Pages/Events";
import FindTalents from "../Pages/FindTalents";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";
import Learning from "../Pages/Learning";
import Login from "../Pages/Login";
import PostJob from "../Pages/PostJob";
import Recruiters from "../Pages/Recruiters";
import SavedJobs from "../Pages/SavedJobs";
import SignUp from "../Pages/SignUp";
import CandidateSignUpForm from "../SignUpSteps/CandidateSignUpForm";
import RecruiterSignUpForm from "../SignUpSteps/RecruiterSignUpForm";
import SelectRole from "../SignUpSteps/SelectRole";
import RecruitersDetails from "./../Pages/RecruitersDetails";

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
        path: "room",
        element: <Conference />
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
  },
  {
    path: "select_role",
    element: <SelectRole />,
    errorElement: <ErrorPage />
  },
  {
    path: "candidate_sign_up",
    element: <CandidateSignUpForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "recruiter_sign_up",
    element: <RecruiterSignUpForm />,
    errorElement: <ErrorPage />
  }
]);

export default Router;
