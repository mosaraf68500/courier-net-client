import React from "react";
import { AuthContext } from "./AuthContex";


const AuthProvider = ({ children }) => {
  const AuthInfo = {
    name: "mosaraf",
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
