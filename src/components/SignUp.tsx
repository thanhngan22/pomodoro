

// classes and interfaces
import { CUserSetting } from "../interface";

// hooks
import { useEffect } from "react";

// icons
import checkIcon from "../assets/icons/check.png";
import googleLogo from "../assets/icons/g-logo.png";

import { Link } from "react-router-dom";

function SignUp() {
  const userData = localStorage.getItem("userData");

  // get background color
  const user: CUserSetting = userData
    ? new CUserSetting(JSON.parse(userData))
    : new CUserSetting();
  const bgColor = user ? user.mode.getBgColor() : "#397097";
  // console.log(bgColor);

  useEffect(() => {
    // set background color
    const signupContainer = document.querySelector(".signup__container");
    signupContainer?.setAttribute("style", `background-color: ${bgColor}`);
  }, []);

  return (
    <div
      className={
        "signup__container w-screen h-screen overflow-hidden flex justify-around items-center"
      }
    >
      <div>
        <Link to="/" className="signup__box-tittle flex my-5 justify-center">
          <div className="flex items-center">
            <img src={checkIcon} alt="check" className="w-8 h-8 mr-2 " />
          </div>
          <h2 className="text-white text-4xl opacity-90">Pomofocus</h2>
        </Link>
        <h3 className="signup__box-subTittle text-white font-semibold text-xl text-center opacity-80 ">
          Create Account
        </h3>
        <div className="signup__form-container my-10 border rounded-lg bg-white ">
          <div className="signup__form ">
            <div className="flex justify-center py-4">
            <button className="signup__google-btn flex items-center bg-slate-300 px-4 py-2 rounded-lg">
              <img src={googleLogo} alt="google" className="w-4 h-4 mr-1 rounded-full " />
              <span className="text-gray-600 font-semibold">Signup with Google</span>
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
             
              <div className="form__group flex justify-center mx-1">
                <button className="signup__button text-white bg-black opacity-80 font-semibold w-full py-2 rounded-lg my-5">Sign up with Email</button>
              </div>
          
            </div>
          </div>
        </div>
        <div className="signup__box-footer my-10 flex flex-col items-center">
          <span className="text-gray-800">Already have an account?</span>
          <span>
            <Link to="/login" className="text-blue-400 underline font-semibold">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
