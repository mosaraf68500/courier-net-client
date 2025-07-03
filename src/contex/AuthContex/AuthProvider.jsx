import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
const GoogleProvider=new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const CreateUserWithEmailAndPassword = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUserWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LoginWithGoogle =()=>{

    return signInWithPopup(auth, GoogleProvider);
  }
  const SignOut=()=>{
    setLoading(true)
    return signOut(auth);
  }

  useEffect(()=>{
    const UnSubscribe=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        console.log('user in the onAuthStateChanged is ', currentUser);
        setLoading(false);
    })
    return UnSubscribe()
  },[])



  const AuthInfo = {
    user,
    loading,
    CreateUserWithEmailAndPassword,
    SignInUserWithEmailAndPassword,
    LoginWithGoogle,
    SignOut
  };

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
