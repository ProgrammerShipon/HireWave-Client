import { createBrowserRouter } from "react-router-dom";
import JobDetails from "../Pages/JobDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
<<<<<<< HEAD
import RecruitersPage from "../Pages/RecruitersPage";
=======
import Candidates from "../Pages/Candidates";
import AllCategoty from "../Pages/AllCategoty";
>>>>>>> d7140c07ec67f2c2d7bf3bad8e919152b902c0cf

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
        path: "/allCategoris",
        element: <AllCategoty />,
      },
      {
        path: "/jobdetails",
        element: <JobDetails />,
      },
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/recruiters",
        element: <RecruitersPage/>,
      }
    ],
  },
]);

export default Router