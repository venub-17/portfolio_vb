import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
const Signup = () => {
  const apiURL = import.meta.env.VITE_API_URL;

  const onSignuphandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData);
    console.log(formValue, "signup values", apiURL);
    axios.post(`${apiURL}/auth/signup`, formValue).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div className=" flex items-center justify-center mt-5">
        <div className="bg-[#4f596a] rounded text-black px-20 py-10 ">
          <h1 className="text-center text-4xl mb-5">Signup</h1>
          <form onSubmit={onSignuphandler}>
            <div className="flex gap-8 flex-col">
              <div className="flex gap-2  mb-2">
                <div className="flex gap-2 flex-col">
                  <label htmlFor="">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                  />
                </div>
                <div className="flex  gap-2 flex-col">
                  <label htmlFor="">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="text"
                  className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="text"
                  className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="text"
                  className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                />
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="rounded px-8 py-4 text-[#000000] bg-[#75BBF5]"
                >
                  Signup
                </button>
              </div>
            </div>

            <div className="text-center mt-4">
              <p>
                already logged in? <NavLink to={"/login"}>Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
