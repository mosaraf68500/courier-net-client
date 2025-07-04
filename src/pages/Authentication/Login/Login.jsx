import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../../SocialLogin/SocialLogin";
import AuthContexHook from "../../../Hooks/AuthContexHook";
import logo from "../../../assets/authImage.png"

const Login = () => {
  const { SignInUserWithEmailAndPassword } = AuthContexHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const onSubmit = (data) => {
    SignInUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        console.log(result)
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#f9fbf9]">
      {/* Left side: Login Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-16">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-600 mb-8">
            <span className="text-3xl">📦</span> Profast
          </h1>

          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-sm text-gray-500 mb-6">Login with Profast</p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <div className="text-sm text-right">
              <a href="#" className="text-green-600 hover:underline">
                Forget Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-lime-400 text-white font-semibold rounded-md hover:bg-lime-500 transition"
            >
              Continue
            </button>

            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to="/register" className="text-green-600 font-semibold">
                Register
              </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-sm text-gray-500">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Login */}
            <SocialLogin  />
          </form>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="hidden lg:flex items-center justify-center w-1/2 p-8 bg-[#f5faef]">
        <img
          src={logo}
          className="max-w-md w-full"
        />
      </div>
    </div>
  );
};

export default Login;
