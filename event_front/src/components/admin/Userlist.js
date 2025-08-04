import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Userlist = () => {
  const [data, setData] = useState();
  const [ref, setRef] = useState();
  const datafetch = async () => {
    await axios
      .get("http://localhost:3046/api/v1/admin/getalluser", {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),
        },
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  const a = async (id) => {
    const data = { _id: id };
    await axios
      .post("http://localhost:3046/api/v1/admin/blockandunblockuser", data, {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),
        },
      })
      .then((res) => {
        if (res.data.success == true) {
          setRef(Math.random());
          toast.success(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    datafetch();
  }, [ref]);

  // console.log(data);
  return (
    <div className="">
      <table className=" w-full">
        <thead className="">
          <tr className="bg-black text-xs text-white">
            <th className="px-4  py-3  ">No</th>
            <th className="px-4  py-3  ">Profile</th>
            <th className="px-4  py-3  ">Name</th>
            <th className="px-4  py-3 ">Email</th>
            <th className="px-4  py-3  ">Gender</th>
            <th className="px-4  py-3  ">Phone number</th>
            <th className="px-4  py-3  ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => {
            return (
              <tr
                key={i}
                className="border-2 text-center border-b-2 text-xs bg-gray-190"
              >
                <td className=" py-1 ">{i + 1}</td>
                <td className=" py-1 ">
                  <img
                    src={e.avatar}
                    className="w-14 mx-auto h-14 rounded-full"
                  />
                </td>
                <td className=" py-1 ">{e.fullName}</td>
                <td className=" py-1 ">{e.email}</td>
                <td className=" py-1 ">{e.gender}</td>
                <td className=" py-1 ">{e.mobile_no}</td>
                <td className=" py-1 ">
                  {e.block ? (
                    <button
                      onClick={() => a(e._id)}
                      className="bg-red-600 text-white p-2 rounded-lg font-bold cursor-pointer"
                    >
                      block
                    </button>
                  ) : (
                    <button
                      onClick={() => a(e._id)}
                      className="bg-green-600 text-white p-2 rounded-lg font-bold cursor-pointer"
                    >
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            );
          })}{" "}
        </tbody>
      </table>
    </div>
  );
};
