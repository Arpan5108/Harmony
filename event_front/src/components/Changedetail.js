import React, { useEffect, useState } from "react";
// import React, { useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import { useNavigate } from "react-router-dom";
const token = Cookies.get("accessToken");
const Changedetail = () => {
  const [user, setUser] = useState();
  const [fullName, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setName(user?.fullName);
    setPhone(user?.mobile_no);
    setEmail(user?.email);
    setGender(user?.gender);
  }, [user]);

  const datafatch = async () => {
    await axios
      .get("http://localhost:3046/api/v1/users/getcurrentUser", {
        headers: { Authorization: token },
      })
      .then((res) => setUser(res.data.data))
      .catch((arr) => toast.error(arr));
  };
  useEffect(() => {
    datafatch();
  }, []);

  const update = async () => {
    const data = { fullName, email, gender };
    await axios
      .post("http://localhost:3046/api/v1/users/update", data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res)
        if (res.data.success == true) {
          toast.success(res.data.message)
          navigate("/account");
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((arr) => toast.error(arr));
  };
  return (
    <div>
      <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
        <div className="w-full"></div>
        <div className=" min-w-[380px] bg-white ">
          <div className="w-full flex justify-center pt-6">
            <MdOutlineLock className="bg-purple-700 rounded-full text-3xl p-1.5 text-white " />
          </div>
          <p className=" grid text-center font-semibold">Change User Detail</p>
          <div className="p-5 space-y-2">
            <div className="grid space-y-3.5 ">
              <label className="text-sm">Name</label>
              <input
                className=" pl-2  border border-gray-400 p-2 text-sm rounded   "
                type="text"
                value={fullName}
                onChange={(e) => setName(e.target.value)}
                placeholder="name *"
              />
              <label className="text-sm">Email</label>
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email *"
              />
              <label className="text-sm">Gender</label>
              <div className="text-xs flex items-center space-x-2 font-medium">
                <input
                  value="female"
                  //   onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="redio"
                />
                <label>Female</label>
                <input
                  value="male"
                  //   onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="redio"
                />
                <label>Male</label>
                <input
                  value="other"
                  //   onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="redio"
                />
                <label>Other</label>
              </div>
              <label className="text-sm">Phone Number</label>
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                disabled
                placeholder="phone Number *"
              />
              {/* <input
                className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
                type="password"
                // onChange={(e) => setPassword(e.target.value)}
                placeholder="Password *"
              />
              <input
                className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
                type="password"
                // onChange={(e) => setCpassword(e.target.value)}
                placeholder="Conform Password *"
              /> */}
              <div className="flex">
                <input className="flex items-center " type="checkbox" />
                <label className="text-xs font-medium pl-2"> Remember me</label>
              </div>
              <button
                onClick={update}
                className=" w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs "
              >
                CHANGE
              </button>
              <div className="w-full flex items-center text-xs text-gray-500 pt-6 pl-20 space-x-1 ">
                <p>Copyright</p>
                <FaRegCopyright />
                <p> Your Website 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changedetail;
