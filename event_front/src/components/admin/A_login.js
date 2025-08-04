import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const A_login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
  // console.log(data);

    await axios
      .post("http://localhost:3046/api/v1/admin/login", data)
      .then((res) => {
        if (res.data.success == true) {
          sessionStorage.setItem("adminToken", res.data.accessToken);
          navigate("/admin");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${require("../../images/1.testimonial-bg.jpg")})`,
        }}
      >
        <div className="h-screen place-items-center justify-center flex   ">
          <div className=" border-white border-2 px-8  py-6 space-y-3.5 w-full max-w-sm">
            <div className="w-full flex justify-center">
              <FaLock className="text-orange-400 text-sm" />{" "}
            </div>
            <div className="w-full flex justify-center  text-white  text-lg font-bold">
              LOGIN{" "}
            </div>
            <div className="w-full text-xs  ">
              <input
                className="p-2 rounded-sm w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="w-full text-xs    ">
              <input
                className="p-2 rounded-sm w-full max-w-sm  "
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
            </div>{" "}
            <div className="w-full flex space-x-2">
              <input className="rounded-sm" type="checkbox" />
              <p className=" text-xs text-gray-200">remember me ?</p>
            </div>
            <button
              onClick={login}
              className="text-white  rounded-sm text-sm p-0.5 bg-blue-600 border-white w-full"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
