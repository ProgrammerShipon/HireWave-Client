import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
// import useCurrentUser from "../Hooks/useCurrentUser";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [axiosSecure] = useAxiosSecure();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // const [currentUser, userLoading, refetch] = useCurrentUser();
    //   console.log("current User -> ", currentUser, userLoading);

      // Loading
    //   if (userLoading) {
    //     return <PageLoader />;
    //   }

      // navigate
    //   const navigate = useNavigate();
    //   const location = useLocation();
    //   let from = location.state?.from?.pathname || "/";

    // auth initialize
    const auth = getAuth(app);

    // sign up user
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // email sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // update profile
    const profileUpdate = (currentUser, name, photoLink) => {
        setLoading(true);
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photoLink,
        });
    };

    // change password
    const changePassword = (newPassword) => {
        setLoading(true)
        const user = auth.currentUser;
        return updatePassword(user, newPassword);
    }

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // google sign in
    const gitHubSignIn = () => {
        setLoading(true);
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider);
    };

    // log out
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          setUser(authUser);
          setLoading(false);

          //   If the user role does not exist then this route will be taken
          //   if (!currentUser?.email && authUser.email) {
          //     from = "/select_role";
          //   }
          //   navigate(from, { replace: true });

          if (authUser) {
            axiosSecure(`/users/email/${user?.email}`)
              .then((hireWaveUser) => console.log(hireWaveUser))
              .catch((err) => console.log(err));

            // console.log('res');
            axiosSecure
              .post("/jwt", { email: authUser.email })
              .then((response) => {
                // console.log('res', response.data.token);
                localStorage.setItem("access-token", response.data.token);
              })
              .catch((error) => {
                console.log(error);
              });
          }
          localStorage.removeItem("access-token");
        });

        return () => {
            return unsubscribe();
        }
    }, [user]);

    const authInfo = {
        user,
        loading,
        signUpUser,
        signIn,
        profileUpdate,
        googleSignIn,
        gitHubSignIn,
        logOut,
        changePassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
