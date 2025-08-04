import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PiUserListFill } from "react-icons/pi";
import { MdEvent } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";

export const Dashbord = () => {
  const [data, setData] = useState();
  const token = sessionStorage.getItem("adminToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    }
  });

  const fetch = async () => {
    await axios
      .get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  console.log(data)

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="w-full flex">
      <div className="w-full max-w-[170px]">
        {" "}
        <div className=" space-y-5 pt-9 border-r-2">
          <div className="w-full bg-slate-200 h-0.5 "></div>
          <div className="space-y-5">
            <div className="w-full flex items-center space-x-3 ">
              <PiUserListFill className="ml-3" />
              <p
                className="text-xs font-semibold cursor-pointer"
                onClick={() => navigate("/admin")}
              >
                User List
              </p>
            </div>{" "}
            <div className="w-full flex items-center space-x-3">
              <MdEvent className="ml-3" />
              <p
                className="text-xs font-semibold cursor-pointer"
                onClick={() => navigate("/admin/addevent")}
              >
                Event Post
              </p>
            </div>
            <div className="w-full flex items-center space-x-3">
              <CiBookmarkPlus className="ml-3" />
              <p className="text-xs font-semibold">Book Events</p>
            </div>
            <div className="w-full flex items-center space-x-3">
              <MdCategory className="ml-3" />
              <p
                className="text-xs font-semibold cursor-pointer"
                onClick={() => navigate("/admin/category")}
              >
                Post Category
              </p>
            </div>
          </div>
          <div className="w-full bg-slate-200 h-0.5 "></div>

          <div className="space-y-4">
            <div className="flex justify-center w-full">
              <p className="text-xs text-gray-500">Authentication</p>
            </div>{" "}
            <div className="w-full flex items-center space-x-3">
              <MdOutlineLogout className="ml-3" />
              <p
                className="text-xs font-semibold cursor-pointer"
                onClick={() => {
                  sessionStorage.removeItem("adminToken");
                  navigate("/");
                  // window.location.reload();
                }}
              >
                Log Out
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full grid">
        <div className=" bg-blue-500 h-[70px]">
          <div
            onClick={() => navigate("/admin/profile")}
            className="w-full flex cursor-pointer"
          >
            <div className="w-full p-5">
              <p className="text-white text-md font-semibold ">Admin</p>
            </div>
            <div className="p-3 w-full flex justify-end ">
              {/* <FaBell className="text-white font-bold text-lg" w-full justify-end flex p-5/> */}
              <div className="h-12 rounded-full w-12 bg-white"></div>
              <div className="pl-2 text-white">
                <p>{data?.fullName}</p>
                <p>Admin</p>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className=" ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
