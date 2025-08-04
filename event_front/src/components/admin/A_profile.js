import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const A_profile = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-gray-100 ">
      <div className="p-5 ">
        <div className="p-16 rounded-md  w-full bg-white  ">
          <div className="w-full grid justify-center items-center">
            <div className="h-16 rounded-full w-16 bg-gray-400"></div>
            <p></p>
          </div>{" "}
        </div>
      </div>{" "}
      <div className="space-x-3 pl-5">
        <button
          onClick={() => navigate("/admin/profile")}
          className="bg-black text-white p-2 rounded-md "
        >
          Personal Detail
        </button>
        <button
          onClick={() => navigate("/admin/profile/password")}
          className="bg-black text-white p-2 rounded-md"
        >
          Change Password
        </button>
      </div>
      <Outlet />
    </div>
  );
};
