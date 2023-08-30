import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

// online link
// const serverLink = "https://hire-wave-server.vercel.app/api";
const serverLink = "http://localhost:3030/api";

// use Axios Secure
const axiosSecure = axios.create({
  baseURL: serverLink,
});

const useAxios = () => {
  const { logOut } = useAuth();
	const navigate = useNavigate();

  useEffect(() => {
    // Axios Request api & send data
    axiosSecure.interceptors.request.use((config) => {
      // get local storage date
      const token = localStorage.getItem("hire-wave-token");

      // check access token
      token && (config.headers.Authorization = `Bearer ${token}`);

      // send server
      return config;
    });

    // Axios response api & received data
    axiosSecure.interceptors.response.use(
      (res) => {
        // data request success & return
        return res;
      },
      async (err) => {
        // error check & invalidate user
        if (
          err.response &&
          (err.response.status == 401 || err.response.status == 403)
        ) {
          // logout & go to login route
          await logOut();
          navigate("/login");
        }
      }
    );
  }, [logOut, navigate]);

  return { axiosSecure };
};

export default useAxios;
