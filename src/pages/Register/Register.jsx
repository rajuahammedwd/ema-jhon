import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';
const Register = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  }
  const handleOnchange = (event) => {
    console.log(event.target.value);
  }
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user; 
        console.log(user)
      })
  }


    return (
      <div className="py-10 w-[450px]  border-4 mt-5 mx-auto space-y-5 rounded-md">
        <h2 className="text-4xl font-bold text-center">Sign Up</h2>
        <form onClick={handleRegister} className="space-y-5">
          <label className="form-control block px-7">
            <span className="">Full Name</span>
            <br />
            <input
              type="text" name='fullName'
              placeholder="Enter Your Name"
              className="border py-3 mt-3 w-96 px-5 rounded"
            />
          </label>
          <label className="form-control block px-7">
            <span className="">Email</span>
            <br />
            <input onChange={handleOnchange}
              type="email" name='email'
              placeholder="Enter Your Email"
              className="border py-3 mt-3 w-96 px-5 rounded"
            />
          </label>
          <label className="form-control block px-7">
            <span className="">Password</span>
            <br />
            <input
              type="password" name='password'
              placeholder="Enter Your Password"
              className="border py-3 mt-3 w-96 px-5 rounded"
            />
          </label>
          <input
            className="btn mx-auto w-96 p-3 rounded bg-[#FFE0B3] block"
            type="submit"
            value="Register"
          />
        </form>
        <div className="text-center mt-2">
          Already have an account?{" "}
          <Link className="text-[#FF9900]" to="/login">
            Login
          </Link>
          <p className="py-3">Or</p>
          <button onClick={handleGoogle} className="btn flex justify-center items-center gap-2 border py-3 w-96 mx-auto">
            <FcGoogle className="text-3xl" />
            Continue with Google
          </button>
        </div>
      </div>
    );
};

export default Register;