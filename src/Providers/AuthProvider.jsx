import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import useAxiosSecure from "../Hooks/useAxiosSecure";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [axiosSecure] = useAxiosSecure();
    const [user, setUser] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

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

    // github sign in
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
            setUser(authUser)
            if (authUser?.email) {
                axiosSecure(`/users/email/${authUser?.email}`)
                    .then((data) => {
                        setCurrentUser(data.data);
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.log(err)
                        setLoading(false);
                    });
            }
            if (authUser === null) {
                setLoading(false);
            }

            // if (authUser) {
            //     axiosSecure
            //         .post("/jwt", { email: authUser.email })
            //         .then((response) => {
            //             localStorage.setItem("access-token", response.data.token);
            //             setLoading(false);
            //         })
            //         .catch((error) => {
            //             console.log(error);
            //         });
            // }
            // localStorage.removeItem("access-token");
        });

        return () => {
            return unsubscribe();
        }
    }, []);


    const authInfo = {
        user,
        loading,
        currentUser,
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
