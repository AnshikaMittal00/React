import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { setInfo } from "../utils/userInfoslice";
const Input = ({ id, type, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={id} className="sr-only bg-pink-50 ">
      {placeholder}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
      placeholder={placeholder}
    />
  </div>
);

const AuthIcon = () => (
  <svg
    className="w-16 h-16 text-pink-500 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const LoginRegister = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [photo, setphoto] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loggedInUserName, setLoggedInUserName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      setphoto(user.photoURL);
      setLoggedInUserName(user.displayName || user.email);
      setLoginSuccess(true);
      dispatch(setInfo({name:user.displayName,url:user.photoURL}))
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userName = "";

    if (isLoginView) {
      console.log("Logging in with:", formData.email, formData.password);

      userName = formData.email.split("@")[0];
    } else {
      userName = formData.name;
    }
    dispatch(setInfo({name:userName,url:null}));

    setLoggedInUserName(userName);
    setLoginSuccess(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        {loginSuccess ? (
          <div className="text-center">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">
              {isLoginView
                ? `Welcome back, ${loggedInUserName}!`
                : "Account Created!"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLoginView &&
               (
                <>
                  Welcome,
                  {photo && (
                    <img
                      src={photo}
                      alt="User"
                      className="inline-block ml-1 h-6 w-6 rounded-full"
                    />
                  )}{" "}
                  {loggedInUserName}! Redirecting...
                </>
              )}
            </p>
          </div>
        ) : (
          <>
            <div className="text-center">
              <AuthIcon />
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                {isLoginView ? "Welcome Back!" : "Create an Account"}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {isLoginView
                  ? "Sign in to continue"
                  : "Get started with your new account"}
              </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {!isLoginView && (
                <Input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="flex ">
                <button
                  type="submit"
                  className="w-full py-3 px-4 mx-2 font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
                >
                  {isLoginView ? "Sign In" : "Create Account"}
                </button>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full py-3 px-4 font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
                >
                  Sign in with Google
                </button>
              </div>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLoginView
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="ml-2 font-semibold text-pink-600 hover:text-pink-500"
                >
                  {isLoginView ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
