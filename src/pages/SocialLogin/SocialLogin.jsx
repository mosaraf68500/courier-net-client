import React from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContexHook from "../../Hooks/AuthContexHook";
import { Navigate, useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
    const {LoginWithGoogle}=AuthContexHook()
      const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
   
    const handleGoogleLogin=()=>{

        LoginWithGoogle()
       .then(result => {
            console.log("Google Login Success:", result);
            navigate(from)
        })
        .catch(error => {
            console.error("Google Login Failed:", error);
        });

    }
  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-400">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <button onClick={handleGoogleLogin}
        type="button"
        className="w-full cursor-pointer flex items-center justify-center gap-2 py-2 border rounded-md hover:bg-gray-50 transition"
      >
        <FcGoogle className="text-xl" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
