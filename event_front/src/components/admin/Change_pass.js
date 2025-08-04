import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const Change_pass = () => {
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  const update = async () => {
    const data = { password, newPassword, confirmpassword };
    if (newPassword == confirmpassword) {
      delete data.confirmpassword;
      await axios
        .post("http://localhost:3046/api/v1/admin/passwordChange", data, {
          headers: {
            Authorization: sessionStorage.getItem("adminToken"),
          },
        })
        .then((res) => {
          if (res.data.success == true) {
            toast.success(res.data.message);
            setPassword("");
            setConfirmpassword("");
            setNewPassword("");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.warn("password dosn't match");
    }
  };
  return (
    <div className="p-5">
      <div className="h-56 rounded-md  w-full bg-white">
        <p className="font-semibold p-5">Change Password </p>
        <div className="w-full flex p-5 space-x-8">
          <div className="space-y-2 ">
            <p className=""> Old Password:</p>
            <input
              className="border-2 border-gray-300 p-1 w-80 text-black rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2 ">
            <p className=""> New Password:</p>
            <input
              className="border-2 border-gray-300 p-1 w-80 text-black rounded-md"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2 ">
            <p className="">Conform New Password:</p>
            <input
              className="border-2 border-gray-300 p-1 w-80 text-black rounded-md"
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full justify-end flex pr-5">
          <button
            onClick={update}
            className="bg-blue-500 text-white rounded-md p-2 font-semibold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
