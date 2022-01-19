import React, { useContext, useEffect, useState } from "react";
import "../firebase.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState();
  const [currentUser, setCurrentUser] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // google SignIn

  function handleGoogleLogIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        if (location.state?.from) {
          navigate(location.state.from);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }

  // logOut

  function logOut() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = { currentUser, logOut, handleGoogleLogIn };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
