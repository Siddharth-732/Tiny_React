import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}= useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password});
  };

  return (
    <>
      <div className="flex flex-col items-center bg-slate-100">
        <div className="flex flex-col items-center justify-between mt-24 p-10 w-full max-w-md bg-white shadow-3xl rounded-3xl border border-gray-100">
          <h1 className="font-serif text-3xl font-extrabold text-gray-800 mb-8">
            Welcome Back
          </h1>

          <div className="flex flex-col gap-5 w-full">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            />

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 mt-4 bg-amber-400 text-amber-900 font-bold rounded-xl hover:bg-amber-500 active:scale-95 transition-transform"
            >
              Login
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Don't have an account?{" "}
            <span className="text-amber-600 font-semibold cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
