import axios from "axios";
import React, { useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
  const [fullName, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [mobile_no, setMno] = useState();
  const [password, setPassword] = useState();
  const [c_password, setCpassword] = useState();
  const navigate = useNavigate();

  const abc = async () => {
    const data = { fullName, email, gender, mobile_no, password };
    if (password == c_password) {
      await axios
        .post("http://localhost:3046/api/v1/users/register", data)
        .then((res) => {
          console.log(res);
          if (res.data.success == true) {
            toast.success(res.data.message);
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => toast.error(err));
    } else {
      alert("password dosnt match");
    }
  };

  return (
    <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
      <div className="w-full hidden md:block"></div>
      <div className=" min-w-full md:min-w-[380px] bg-white ">
        <div className="w-full flex justify-center pt-3">
          <MdOutlineLock className="bg-purple-700 rounded-full text-3xl p-1.5 text-white " />
        </div>
        <p className="font-normal grid text-center">Sign Up</p>
        <div className="p-5 space-y-2">
          <div className="grid space-y-4 ">
            <input
              className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
              type="text"
              value={fullName}
              onChange={(e) => setName(e.target.value)}
              placeholder="fullname *"
            />
            <input
              className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email *"
            />
            <div className="text-xs flex items-center space-x-2 font-medium">
              <input
                value="female"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="redio"
              />
              <label>Female</label>
              <input
                value="male"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="redio"
              />
              <label>Male</label>
              <input
                value="other"
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="redio"
              />
              <label>Other</label>
            </div>
            <input
              className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
              type="text"
              onChange={(e) => setMno(e.target.value)}
              value={mobile_no}
              placeholder="phone Number *"
            />
            <input
              className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password *"
            />
            <input
              className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
              type="password"
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Conform Password *"
            />
            <div className="flex">
              <input className="flex items-center " type="checkbox" />
              <label className="text-xs font-medium pl-2"> Remember me</label>
            </div>
            <button
              onClick={abc}
              className=" w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs "
            >
              SIGN UP
            </button>
            <p className="text-xs  font-medium text-gray-500 cursor-pointer" onClick={() => navigate("/login")}>
              Already have an account? Sign In
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
