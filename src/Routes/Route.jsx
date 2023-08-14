import { createBrowserRouter } from "react-router-dom";
import Job_Details from "../Components/Job_Details";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

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
]);

export default  Router