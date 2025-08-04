import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Changepass = () => {
  const navigate = useNavigate();
  const [password, serCurrentpass] = useState();
  const [newPassword, setNewpass] = useState();

  const xyz = async () => {
    const data = { password, newPassword };
    const token = Cookies.get("accessToken");
    await axios
      .post("http://localhost:3046/api/v1/users/passwordChange", data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        if ((res.data.success = true)) {
          toast.success(res.data.message);
          navigate("/");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div>
      <div
        className="h-[40vh] p-16 "
        style={{
          backgroundImage: `url(${require("../images/breadcrumb/0.breadcrumb-bg.jpg")})`,
        }}
      >
        <div className=" grid  justify-center text-center text-white space-y-2">
          {" "}
          <p className="text-lg">CONTECT US NOW</p>
          <div className="flex space-x-2">
            <p className="text-3xl font-semibold text-yellow-500">KEEP</p>
            <p className="text-3xl font-semibold ">IN TOUCH</p>
          </div>
          <div className="flex justify-center space-x-5 text-sm">
            <p
              className="font-bold cursor-pointer  "
              onClick={() => navigate("/")}
            >
              Home{" "}
            </p>
            <div className="h-4  bg-white w-0.5"></div>
            <p className="cursor-pointer" onClick={() => navigate("/contect")}>
              Contect Us
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div>
        <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
          <div className="w-full"></div>
          <div className=" min-w-[380px] bg-white ">
            <div className="w-full flex justify-center pt-3">
              <MdOutlineLock className="bg-purple-700 rounded-full text-3xl p-1.5 text-white " />
            </div>
            <p className=" grid text-center font-semibold">Change Password</p>
            <div className="p-5 space-y-2">
              <div className="grid space-y-4 ">
                <div className="grid">
                  <label className="text-sm font-semibold">
                    Current password
                  </label>
                  <input
                    className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                    type="text"
                    onChange={(e) => serCurrentpass(e.target.value)}
                    placeholder=" password *"
                  />
                </div>
                <div className="grid">
                  <label className="text-sm font-semibold">New Password</label>
                  <input
                    className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
                    type="email"
                    onChange={(e) => setNewpass(e.target.value)}
                    placeholder=" password *"
                  />
                </div>

                <button
                  onClick={xyz}
                  className=" w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs "
                >
                  CHANGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
