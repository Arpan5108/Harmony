import React, { useEffect, useRef, useState } from "react";
import { BsFire } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbArrowRotaryLastRight } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { IoPencilSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { IoIosCamera } from "react-icons/io";
import { toast } from "react-toastify";

export const Account = () => {
  const [avatar, setAvatar] = useState();
  const [ref, setRef] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const inputRef = useRef();
  const token = Cookies.get("accessToken");
  const data = new FormData();

  const datafatch = async () => {
    await axios
      .get("http://localhost:3046/api/v1/users/getcurrentUser", {
        headers: { Authorization: token },
      })
      .then((res) => setUser(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    datafatch();
  }, [ref]);

  const upadateavatar = async () => {
    data.append("avatar", avatar);
    await axios
      .post("http://localhost:3046/api/v1/users/avatar", data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setRef(res.data.success);
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    if (avatar) {
      upadateavatar();
      
    }
  }, [avatar]);
  // console.log(user);
  return (
    <div className="bg-[#0e0a21ec] w-full   text-white flex justify-center h-[88.8vh]">
      <div className="bg-[#312b8669] w-full max-w-xl">
        <div className="flex border-b border-gray-700 px-4 py-1 place-items-center">
          <BsFire className="text-orange-500 text-lg" />
          <p className="text-sm font-bold flex px-3">Account Details</p>
        </div>
        <div className="flex text-blue-600 p-3 justify-between ">
          <div className="flex cursor-pointer" onClick={() => navigate("/")}>
            {" "}
            <IoMdHome />
            <p className="text-lg font-semibold px-3 ">HOME</p>
          </div>
          <p
            className="text-lg font-semibold  cursor-pointer "
            onClick={() => navigate("/changepass")}
          >
            CHANGE PASSWORD
          </p>
        </div>

        <div className="bg-[#34409b84] mb-8">
          <p className="text-lg p-3"> Change Account Details</p>
          <div className="flex justify-center py-2 ">
            <input
              onChange={(e) => setAvatar(e.target.files[0])}
              className="hidden"
              ref={inputRef}
              type="file"
            />
            <div className="bg-white h-14 rounded-full w-14  border-4 border-black relative">
              <img
                onClick={() => inputRef.current.click()}
                className="object-cover w-14 h-12 rounded-full cursor-pointer "
                src={user?.avatar}
              />
              <IoIosCamera className="rounded-full p-0.5  bg-black text-xl mt-8 ml-6 absolute z-20 -bottom-0.5 -right-1.5" />
            </div>
          </div>
          <div className="">
            {" "}
            <div className="flex  text-lg px-3  py-1 justify-between">
              <div className="flex place-items-center space-x-2">
                {" "}
                <FaUserFriends className="" />
                <p className="font-semobold ">{user?.fullName}</p>
              </div>
              <IoPencilSharp
                className="cursor-pointer "
                onClick={() => navigate("/Changedetail")}
              />
            </div>
            <div className="flex justify-between text-lg px-3 py-1  ">
              <div className="flex place-items-center space-x-2">
                {" "}
                <IoMdMail className="" />
                <p className="font-semobold">{user?.email}</p>
              </div>
              <IoPencilSharp
                className="cursor-pointer  "
                onClick={() => navigate("/Changedetail")}
              />
            </div>
            <div className="flex justify-between text-lg px-3 py-1">
              <div className="flex place-items-center space-x-2">
                {" "}
                <TbArrowRotaryLastRight className="" />
                <p className="font-semobold">{user?.gender}</p>
              </div>{" "}
              <IoPencilSharp
                className=" cursor-pointer"
                onClick={() => navigate("/Changedetail")}
              />
            </div>
            <div className="flex justify-between text-lg px-3 py-1">
              <div className="flex place-items-center space-x-2">
                {" "}
                <MdContactPhone className="" />
                <p className="font-semobold">{user?.mobile_no}</p>
              </div>{" "}
              <IoPencilSharp
                className="cursor-pointer  "
                onClick={() => navigate("/Changedetail")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
