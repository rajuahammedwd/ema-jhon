import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.config';

const Login = () => {
  const [user,setUser] = useState(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
      const user = result.user;
      setUser(user)
    });
  };
    return (
      <div className="py-10 w-[450px]  border-4 mt-5 mx-auto space-y-5 rounded-md">
        <h2 className="text-4xl font-bold text-center">Login</h2>
        <form className="space-y-5">
          <label className="form-control block px-7">
            <span className="">Email</span>
            <br />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border py-3 mt-3 w-96 px-5 rounded"
            />
          </label>
          <label className="form-control block px-7">
            <span className="">Password</span>
            <br />
            <input
              type="text"
              placeholder="Enter Your Password"
              className="border py-3 mt-3 w-96 px-5 rounded"
            />
          </label>
          <input
            className="btn mx-auto w-96 p-3 rounded bg-[#FFE0B3] block"
            type="submit"
            value="Login"
          />
        </form>
        <div className="text-center mt-2">
          New to Ema-john?{" "}
          <Link className="text-[#FF9900]" to="/register">
            Create New Account
          </Link>
          <p className="py-3">Or</p>
          <button
            onClick={handleGoogleLogin}
            className="btn flex justify-center items-center gap-2 border py-3 w-96 mx-auto"
          >
            <FcGoogle className="text-3xl" />
            Continue with Google
          </button>
        </div>
      </div>
    );
};

export default Login;