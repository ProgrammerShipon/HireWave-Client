import { createBrowserRouter } from "react-router-dom";
import JobDetails from "../Pages/JobDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Candidates from "../Pages/Candidates";
import AllCategoty from "../Pages/AllCategoty";

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
    ],
  },
]);

export default Router