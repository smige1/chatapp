import Link from "next/link";
import React from "react";
import {IoLogoGoogle, IoLogoFacebook} from "react-icons/io"

import { auth } from "@/firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";


const Login = () => {

  




  return (
    <div className="h-[100vh] flex justify-center items-center bg-c1">
      <div className="flex items-center flex-col w-[600px]">
        <div className="text-center">
          <div className="test-4xl font-bold">Login to Your Account</div>
        
        <div className="mt-3 text-c3">
            Connect and chat with anyone, anywhere
        </div>
      </div>
      <div className="flex items-center gap-2 w-full mt-10 mb-5">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-14 rounded-md cursor-pointer p-[1px]">
          <div className="flex items-center justify-center gap-3 test-white font-semibold bg-c1 w-full h-full rounded-md">
            <IoLogoGoogle size={24} />
            <span>Login with Google</span>
          </div>
          </div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-14 rounded-md cursor-pointer p-[1px]">
          <div className="flex items-center justify-center gap-3 test-white font-semibold bg-c1 w-full h-full rounded-md">
            <IoLogoFacebook size={24} />
            <span>Login with Facebook</span>
          </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
        <span className="w-5 h-[1px] bg-c3"></span>
        <span className="text-c3 font-semibold">OR</span>
        <span className="w-5 h-[1px] bg-c3"></span>
          
        </div>


        <form className="flex flex-col items-center gap-3 w-[500px] mt-5">
          onSubmit={handleSubmit}

          <input 
          type="Email" 
          className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3"
          placeholder="Email Address"
          autoComplete="off"
          />
          <input 
          type="Password" 
          className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3"
          placeholder="password"
          autoComplete="off"
          />
          <div className="text-right w-full text-c3">
            <span className="cursor-pointer">Forget Password?</span>
          </div>
          <button className="mt-4 w-full h-14 rounded-xl outline-none test-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login to your account</button>
        </form>

        <div className="flex justify-center gap-1 text-c3 mt-5">
        <span>Not a Member yet?</span>
        <Link 
        href="/Register"
        className="font-semibold text-white underline underline-offset-2 cursor-pointer"
        >
          Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
