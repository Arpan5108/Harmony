import axios from "axios";
import React, { useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { toast } from "react-toastify";
import { Changepass } from "./Changepass";
import { useNavigate } from "react-router-dom";

export const Forgotpassword = () => {
  const [mobile_no, setMobile_no] = useState();
  const [otp, setOtp] = useState();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [c_password, setC_Password] = useState();

  const navigate = useNavigate();

  const sendotp = async () => {
    const data = { mobile_no };
    await axios
      .post("http://localhost:3046/api/v1/users/sendotp", data)
      .then((res) => {
        if (res.data.success == true) {
          setShow(true);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  const verifyotp = async () => {
    const data = { mobile_no, otp };
    await axios
      .post("http://localhost:3046/api/v1/users/verifyotp", data)
      .then((res) => {
        if (res.data.success == true) {
          toast.success(res.data.message);
          setMobile_no("");
          setOtp("");
          setPassword("");
          setC_Password("");
          setId(res.data.Id);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  const pass = async () => {
    const data = { id, password };

    if (password == c_password) {
      await axios
        .post("http://localhost:3046/api/v1/users/forgotpassword", data)
        .then((res) => {
          if (res.data.success == true) {
            toast.success(res.data.message);
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => toast.error(err));
    } else {
      toast.warning("password doesn't match");
    }
  };

  if (id) {
    return (
      <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
        <div className="w-full"></div>
        <div className=" min-w-[380px] pt-10 bg-white ">
          <div className="w-full flex justify-center pt-9">
            <MdOutlineLock className="bg-purple-700 text-3xl  text-white rounded-full p-1.5  " />
          </div>
          <p className="font-normal grid text-center">Forgot password</p>
          <div className="p-5 space-y-4">
            <div className="grid space-y-4 ">
              <input
                className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password*"
              />
            </div>
            <div className="grid space-y-4 ">
              <input
                className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                type="password"
                value={c_password}
                onChange={(e) => setC_Password(e.target.value)}
                placeholder="conform password*"
              />
            </div>
            <button
              onClick={pass}
              className="w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs"
            >
              change
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
        <div className="w-full"></div>
        <div className=" min-w-[380px] pt-10 bg-white ">
          <div className="w-full flex justify-center pt-9">
            <MdOutlineLock className="bg-purple-700 text-3xl  text-white rounded-full p-1.5  " />
          </div>
          <p className="font-normal grid text-center">Forgot password</p>
          <div className="p-5 space-y-4">
            <div className="grid space-y-4 ">
              <input
                className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                type="text"
                value={mobile_no}
                onChange={(e) => setMobile_no(e.target.value)}
                placeholder="mobile number*"
              />
            </div>
            {show && (
              <div className="grid space-y-4 ">
                <input
                  className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="otp*"
                />
              </div>
            )}
            {show ? (
              <button
                onClick={verifyotp}
                className="w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs"
              >
                Verify Otp
              </button>
            ) : (
              <button
                onClick={sendotp}
                className="w-full bg-blue-600 hover:bg-green-600 text-white p-1.5 rounded font-semibold text-xs"
              >
                SEND OTP
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
};
