import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Job_Details from "../Components/Job_Details";

 
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