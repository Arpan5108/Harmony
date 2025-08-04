import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../../loader/loader/Loader";

export const Category = () => {
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [data, setData] = useState();
  const [ref, setRef] = useState();
  const [Loading, setLoading] = useState(false);
  const adata = new FormData();

  const xyz = async () => {
    setLoading(true);
    adata.append("category_name", name);
    adata.append("URL", img);
    setName("");
    setImg(null);
    await axios
      .post("http://localhost:3046/api/v1/admin/addcategory", adata, {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),
        },
      })
      .then((res) => {
        if (res.data.success == true) {
          setRef(Math.random);
          setLoading(false);
          toast.success(res.data.message);
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const del = async (id) => {
    setLoading(true);
    await axios
      .delete(`http://localhost:3046/api/v1/admin/deletecategory/${id}`, {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),
        },
      })
      .then((res) => {
        if (res.data.success == true) {
          setRef(Math.random());
          setLoading(false);
          toast.success(res.data.message);
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await axios
        .get("http://localhost:3046/api/v1/admin/showcategory")
        .then((res) => {
          setData(res.data.message);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    fetch();
  }, [ref]);
  return (
    <>
      {Loading && <Loader />}
      <div className="flex justify-center place-items-center">
        <div className=" max-w-[400px] w-full  ">
          <div className="w-full flex justify-center">
            <MdOutlineLock className="bg-purple-700 text-3xl  text-white rounded-full p-1.5  " />
          </div>
          <p className="font-normal grid text-center">Post Category</p>
          <div className="p-5 space-y-8">
            <div className="w-full flex text-xs bg-blue-500   rounded-sm text-white">
              <div className="flex cente justify-items-center">
                <input
                  onChange={(e) => setImg(e.target.files[0])}
                  className="ml-4 p-2 text-center flex"
                  type="file"
                />
              </div>
              <div className="flex place-items-center ">
                <p className="text-end">CHOOSE PIC</p>
              </div>
            </div>
            <div className="grid space-y-4 ">
              <input
                className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category name*"
              />
            </div>

            <button
              onClick={xyz}
              className="w-full bg-blue-500 text-white p-1.5 rounded font-semibold text-xs"
            >
              POST
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <table className=" w-full">
          <thead className="">
            <tr className="bg-black text-xs text-white">
              <th className="px-4  py-3">No</th>
              <th className="px-4  py-3">image</th>
              <th className="px-4  py-3">Name</th>
              <th className="px-4  py-3">Action</th>
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
                      src={e.URL}
                      className="w-14 mx-auto h-14 rounded-full"
                    />
                  </td>
                  <td className=" py-1 ">{e.category_name}</td>
                  <td className=" py-1 flex justify-center items-center gap-8">
                    <abbr title="edit">
                      <FaEdit className="text-3xl" />
                    </abbr>
                    <div>
                      <MdDelete
                        onClick={() => del(e._id)}
                        className="text-3xl"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
