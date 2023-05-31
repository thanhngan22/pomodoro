// classes and interfaces
import { CUserSetting } from "../interface";

// hooks
import { useEffect } from "react";

// icons
import checkIcon from "../assets/icons/check.png";
import googleLogo from "../assets/icons/g-logo.png";

import { Link } from "react-router-dom";

function Login() {
  const userData = localStorage.getItem("userData");

  // get background color
  const user: CUserSetting = userData
    ? new CUserSetting(JSON.parse(userData))
    : new CUserSetting();
  const bgColor = user ? user.mode.getBgColor() : "#397097";
  // console.log(bgColor);

  useEffect(() => {
    // set background color
    const loginContainer = document.querySelector(".login__container");
    loginContainer?.setAttribute("style", `background-color: ${bgColor}`);
  }, []);

  return (
    <div
      className={
        "login__container w-screen h-screen overflow-hidden flex justify-around items-center"
      }
    >
      <div>
        <div className="login__box-tittle flex my-5 justify-center">
          <div className="flex items-center">
            <img src={checkIcon} alt="check" className="w-8 h-8 mr-2 " />
          </div>
          <h2 className="text-white text-4xl opacity-90">Pomofocus</h2>
        </div>
        <h3 className="login__box-subTittle text-white font-semibold text-xl text-center opacity-80 ">
          Login
        </h3>
        <div className="login__form-container my-10 border rounded-lg bg-white ">
          <div className="login__form ">
            <div className="flex justify-center py-4">
            <button className="login__google-btn flex items-center bg-slate-300 px-12 py-2 rounded-2xl">
              <img src={googleLogo} alt="google" className="w-4 h-4 mr-1 rounded-full " />
              <span className="text-gray-600 font-semibold">Login with Google</span>
            </button>
            </div>
            <div className="flex justify-center">
                <div className="w-5/12">
                    <hr className="border-gray-300 mt-2" />
                </div>
              <span className="text-gray-500 mx-2 text-sm font-semibold" >or</span>
              <div className="w-5/12">
                    <hr className="border-gray-300 mt-2" />
              </div>
            </div>
            <div className="main__form mx-4 my-5">
              <div className="form__group">
            <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-400 font-semibold text-sm">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  id="email_input"
                  placeholder="Enter your email"
                  className="bg-gray-200 opacity-80  px-3 py-2 mt-3 mb-5 rounded-md text-sm outline-none"
                />
            </div>
              </div>
              <div className="form__group">
               <div className="flex flex-col">
               <label htmlFor="password" className="text-gray-400 font-semibold text-sm">PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  id="password_input"
                  placeholder="Enter your password"
                  className="bg-gray-200 opacity-80 px-3 py-2 mt-3 mb-5 rounded-md text-sm outline-none"
                />
               </div>
              </div>
              <div className="form__group flex justify-center mx-1">
                <button className="login__button text-white bg-black opacity-80 font-semibold w-full py-2 rounded-lg my-5">Login</button>
              </div>
              <div className="form__group justify-center flex">
                <span>
                    <Link to="/forgot-password" className="text-gray-400 font-semibold text-sm underline">Forgot Password?</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="login__box-footer my-10 flex flex-col items-center">
          <span className="text-gray-800">Don't have an account?</span>
          <span>
            <Link to="/signup" className="text-blue-400 underline">
              Create an account.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
