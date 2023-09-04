import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser && currentUser?.email) {
        fetch("https://hire-wave-server.vercel.app/api/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: currentUser?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            const token = data?.token
            localStorage.setItem("hire-wave-token", token);
          });
      }

    });

    return () => {
      return unsubscribe();
    }
  }, []);


  useEffect(() => {
    fetch(`https://hire-wave-server.vercel.app/api/users/byEmail/${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data._id)
        setUserId(data)

      })
  }, [user]);
  
  const authInfo = {
    user,
    userId,
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
