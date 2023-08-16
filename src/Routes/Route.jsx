import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Job_Details from "../Components/Job_Details";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import FindJobs from "../Sections/FindJobs";

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
        path: "/jobdetails",
        element: <Job_Details />,
      },
    ],
  },

  {
    path: "/find_jobs",
    element: <FindJobs />,
    children: [{}],
  },
]);

export default Router;
