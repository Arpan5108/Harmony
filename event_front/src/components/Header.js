import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Header = () => {
  const [user, setUser] = useState();
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();

  const datafatch = async () => {
    await axios
      .get("http://localhost:3046/api/v1/users/getcurrentUser", {
        headers: { Authorization: token },
      })
      .then((res) => setUser(res.data.data))
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    if (token) {
      datafatch();
    }
  });

  return (
    <div className="w-full bg-black flex justify-between items-center p-4">
      <img className="hidden md:block w-36" src={require("../images/0.site-logo.png")}></img>
      <div className="flex items-center text-white text-xs md:text-sm space-x-2 md:space-x-4">
        <label onClick={() => navigate("/")} className="cursor-pointer">
          HOME
        </label>
        <label onClick={() => navigate("/about")} className="cursor-pointer">
          ABOUT
        </label>
        <label onClick={() => navigate("/events")} className="cursor-pointer">
          EVENTS
        </label>
        <label onClick={() => navigate("/gallary")} className="cursor-pointer">
          GALLARY
        </label>
        <label onClick={() => navigate("/Contect")} className="cursor-pointer">
          CONTECT
        </label>
      </div>
      <div className="flex items-center text-white space-x-4">
        {user ? (
          <div className=" cursor-pointer relative group">
            <div
              className="flex items-center space-x-2"
            >
              <img
                className="w-10 h-10 bg-white border-2 border-white rounded-full"
                src={user?.avatar}
              ></img>
              <div>{user ? user.fullName : null}</div>
            </div>
            <div className="bg-white absolute hidden group-hover:block w-[110px] right-0  text-black p-2 rounded-md">
              <ul className="">
                <li onClick={() => navigate("/account")}>Account</li>
                <li
                  onClick={() => {navigate("/mybooking")}}
                >
                  My booking
                </li>
                <li
                  onClick={() => {
                    Cookies.remove("accessToken");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <button
              className="border bg-orange-500 p-1.5 text-sm font-semibold rounded"
              onClick={() => navigate("/Login")}
            >
              LOGIN
            </button>
          </>
        )}
      </div>
    </div>
  );
};
