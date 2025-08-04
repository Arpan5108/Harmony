import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const P_datail = () => {
  const [data, setData] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
          headers: {
            Authorization: sessionStorage.getItem("adminToken"),
          },
        })
        .then((res) => setData(res.data.data))
        .catch((err) => console.log(err));
    })();
  }, []);

  useEffect(() => {
    if (data) {
      setFullName(data.fullName);
      setEmail(data.email);
    }
  }, [data]);

  const update = async () => {
    const data = { fullName, email };
    await axios
      .post("http://localhost:3046/api/v1/admin/update", data, {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),
        },
      })
      .then((res) => {
        if (res.data.success == true) {
          toast.success(res.data.message);
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-5">
      <div className="h-56 rounded-md  w-full bg-white   ">
        {" "}
        <p className="font-semibold p-5">Personal Details </p>
        <div className="w-full flex p-5 space-x-8">
          <div className="space-y-2 ">
            <p className="">Full Name:</p>
            <input
              className="border-2 border-gray-300 p-1 w-80 text-black rounded-md"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="space-y-2 ">
            <p className=""> Email Address:</p>
            <input
              className="border-2 border-gray-300 p-1 w-80 text-black rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        </div>{" "}
      </div>
    </div>
  );
};
