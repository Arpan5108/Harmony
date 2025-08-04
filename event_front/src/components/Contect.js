import axios from "axios";
import React, { useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Contect = () => {
  const [fullName, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile_no, setmobile] = useState();
  const [message, setmessage] = useState();

  const xyz = async () => {
    const data = { fullName, email, mobile_no, message };

    await axios
      .post("http://localhost:3046/api/v1/contact/sendmessage", data)
      .then((res) => {
        if (res.data.success == true) {
          toast.success(res.data.message);
          setName("");
          setEmail("");
          setmobile("");
          setmessage("");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };
  const navigate = useNavigate();
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
            <p className="cursor-pointer">Contect Us</p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div>
        <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
          <div className="w-full hidden md:block"></div>
          <div className="min-w-full md:min-w-[380px] bg-white ">
            <div className="w-full flex justify-center pt-3">
              <MdOutlineLock className="bg-purple-700 rounded-full text-3xl p-1.5 text-white " />
            </div>
            <p className=" grid text-center font-semibold">Contect Us</p>
            <div className="p-5 space-y-2">
              <div className="grid space-y-4 ">
                <input
                  className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                  type="text"
                  value={fullName}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name *"
                />
                <input
                  className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email *"
                />

                <input
                  className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
                  type="text"
                  value={mobile_no}
                  onChange={(e) => setmobile(e.target.value)}
                  placeholder="phone *"
                />
                <input
                  className="pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                  type="text"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  placeholder="message *"
                />

                <button
                  onClick={xyz}
                  className=" w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs "
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
