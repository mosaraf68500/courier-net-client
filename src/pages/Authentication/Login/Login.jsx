import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import SocialLogin from "../../SocialLogin/SocialLogin";
import AuthContexHook from "../../../Hooks/AuthContexHook";
import { CgLogOff } from "react-icons/cg";

const Login = () => {
  const {SignInUserWithEmailAndPassword}=AuthContexHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    SignInUserWithEmailAndPassword(data.email,data.password)
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
    
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-2">Login an Account</h2>
      <p className="text-sm text-gray-500 mb-6">Login with Courier-Net</p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {
        errors.password?.type==="required" &&<p className="text-red-500">password is required!</p>
        }
        {
            errors.password?.type==="minLength"&& <p className="text-red-500">password is minimum length 6</p>
        }

        <div className="text-sm text-right">
          <a href="#" className="text-green-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-lime-400 text-white rounded-md hover:bg-lime-500 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600">
          Do,t have an account?
          <span className="text-green-600 font-semibold cursor-pointer">
          <Link to="/register">  Register Now</Link>
          </span>
        </p>

        
       <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
