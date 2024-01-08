import React from "react";
import loginSignupImage from "../assest/login-animation (1).gif";

const Signup = () => {
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">Sign up</h1> */}

        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img src={loginSignupImage} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
