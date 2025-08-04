import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [mobile_no, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const xyz = async () => {
    const data = { mobile_no, password };
    await axios
      .post("http://localhost:3046/api/v1/users/login", data)
      .then((res) => {
        console.log(res);
        if (res.data?.success == true) {
          Cookies.set("accessToken", res.data.accessToken);
          toast.success(res.data.message);
          navigate("/");
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
      <div className="w-full hidden md:block"></div>
      <div className="min-w-full md:min-w-[380px] bg-white ">
        <div className="w-full flex justify-center pt-9">
          <MdOutlineLock className="bg-purple-700 text-3xl  text-white rounded-full p-1.5  " />
        </div>
        <p className="font-normal grid text-center">Sign in</p>
        <div className="p-5 space-y-2">
          <div className="grid space-y-4 ">
            <input
              className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mobile number*"
            />
            <input
              className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password*"
            />
          </div>
          <div className="">
            <input className="pt-4 " type="checkbox" />
            <label className="text-xs font-medium"> Remember me</label>
          </div>
          <button
            onClick={xyz}
            className="w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs"
          >
            SIGN IN
          </button>
          <div className="w-full flex justify-between ">
            <p
              onClick={() => navigate("/forgot_password")}
              className="text-xs font-medium cursor-pointer"
            >
              Forgot password?
            </p>
            <p
              className="text-xs font-medium cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
