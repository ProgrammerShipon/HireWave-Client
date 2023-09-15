import { createBrowserRouter } from "react-router-dom";
import AppliedApplicant from "../Dashboard/AppliedApplicant";
import CandidateList from "../Dashboard/CandidateList";
import ChangePassword from "../Dashboard/ChangePassword";
import Chat from "../Dashboard/Chat";
import DashboardHome from "../Dashboard/DashboardHome";
import ManageJobs from "../Dashboard/ManageJobs";
import ManageUsers from "../Dashboard/ManageUsers";
import MyApplications from "../Dashboard/MyApplications";
import MyProfile from "../Dashboard/MyProfile";
import PostedJobs from "../Dashboard/PostedJobs";
import RecruiterList from "../Dashboard/RecruiterList";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllCategories";
import ApplicationForm from "../Pages/ApplicationForm";
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
import LearningDetails from "../Pages/LearningDetails";
import Login from "../Pages/Login";
import PaymentFail from "../Pages/PaymentFail";
import PaymentSuccess from "../Pages/PaymentSuccess";
import PostJob from "../Pages/PostJob";
import Pricing from "../Pages/Pricing";
import Recruiters from "../Pages/Recruiters";
import RecruitersDetails from "../Pages/RecruitersDetails";
import SavedJobs from "../Pages/SavedJobs";
import SearchResults from "../Pages/SearchResults";
import SignUp from "../Pages/SignUp";
import ViewApplication from "../Pages/ViewApplication";
import CandidateSignUpForm from "../SignUpSteps/CandidateSignUpForm";
import RecruiterSignUpForm from "../SignUpSteps/RecruiterSignUpForm";
import SelectRole from "../SignUpSteps/SelectRole";
import PrivateRoute from "./PrivateRoute";

// const baseURL = 'https://hire-wave-server.vercel.app/api';
const baseURL = 'http://localhost:3030/api';

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
        path: "/all_categories",
        element: <AllCategories />,
      },
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/candidate_details/:id",
        element: <PrivateRoute><CandidateDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`${baseURL}/candidates/${params.id}`)
      },
      {
        path: "/application_form/:id",
        element: <PrivateRoute><ApplicationForm /></PrivateRoute>,
        loader: ({ params }) => fetch(`${baseURL}/appliedCandidate/id/${params.id}`)
      },
      {
        path: "/job_details/:id",
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`${baseURL}/allJobs/${params.id}`)
      },
      {
        path: "/search_results",
        element: <SearchResults />,
      },
      {
        path: "/apply_job/:id",
        element: <PrivateRoute><ApplyJob /></PrivateRoute>,
        loader: ({ params }) => fetch(`${baseURL}/allJobs/${params.id}`)
      },
      {
        path: "/view_application/:id",
        element: <PrivateRoute><ViewApplication /></PrivateRoute>,
        loader: ({ params }) => fetch(`${baseURL}/allJobs/${params.id}`)
      },
      {
        path: "/learning",
        element: <Learning />,
      },
      {
        path: "/learning/:id",
        element: <LearningDetails />,
        loader: async ({ params }) => await fetch(`${baseURL}/learning/${params.id}`),
      },
      {
        path: "/saved_jobs",
        element: <PrivateRoute><SavedJobs /></PrivateRoute>,
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
        path: "/pricing",
        element: <Pricing />,
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
        element: <PrivateRoute><RecruitersDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`${baseURL}/recruiters/${params.id}`)
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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      //Common Routes
      {
        path: "dashboardHome",
        element: <DashboardHome />,
      },
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "changePassword",
        element: <ChangePassword />,
      },

      // Candidate routes
      {
        path: "myApplications",
        element: <MyApplications />,
      },

      // Recruiter routes
      {
        path: "messages",
        element: < Chat />
      },
      {
        path: "messages/:id",
        element: < Chat />,
        loader: ({ params }) => fetch(`https://hire-wave-server.vercel.app/api/candidates/${params.id}`)
      },
      {
        path: "room",
        element: <Conference />,
      },
      {
        path: "postedJobs",
        element: <PostedJobs />,
      },
      {
        path: "applicant",
        element: <AppliedApplicant />,
      },
      {
        path: "payment/successful/:tran_id",
        element: <PaymentSuccess />,
      },
      {
        path: "payment/fail",
        element: <PaymentFail />,
      },

      //Admin Routes
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "manageJobs",
        element: <ManageJobs />,
      },
      {
        path: "candidateList",
        element: <CandidateList />,
      },
      {
        path: "recruiterList",
        element: <RecruiterList />,
      },
    ],
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
