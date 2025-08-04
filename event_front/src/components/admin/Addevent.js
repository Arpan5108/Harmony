import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { toast } from "react-toastify";
import Loader from "../../loader/loader/Loader";

export const Addevent = () => {
  const [category, setCategory] = useState();

  const [title, setTitle] = useState();
  const [s_date, setS_date] = useState();
  const [e_date, setE_date] = useState();
  const [s_time, setS_time] = useState();
  const [e_time, setE_time] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category_id, setCategory_id] = useState();
  const [image, setimage] = useState();
  const [Loading, setLoading] = useState(false);
  const [dis, setDis] = useState(false);

  const data = new FormData();
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      await axios
        .get("http://localhost:3046/api/v1/admin/showcategory")
        .then((res) => {
          setCategory(res.data.message);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    };
    fetch();
  }, []);

  const xyz = async () => {
    setLoading(true);
    data.append("title", title);
    data.append("s_date", s_date);
    data.append("e_date", e_date);
    data.append("s_time", s_time);
    data.append("e_time", e_time);
    data.append("location", location);
    data.append("price", price);
    data.append("description", description);
    data.append("category_id", category_id);
    data.append("image", image);

    setTitle("");
    setimage(null);
    setCategory_id("");
    setDescription("");
    setE_date("");
    setE_time("");
    setLocation("");
    setPrice("");
    setS_date("");
    setS_time("");

    setDis(true);

    await axios
      .post("http://localhost:3046/api/v1/admin/addevent", data, {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),
        },
      })
      .then((res) => {
        if (res.data.success == true) {
          setLoading(false);
          toast.success(res.data.message);
          setDis(false);
        } else {
          setLoading(false);
          toast.error(res.data.message);
          setDis(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {Loading && <Loader />}
      <div className=" flex justify-center place-items-center">
        <div className=" max-w-[400px] w-full  ">
          <div className="w-full flex justify-center">
            <MdOutlineLock className="bg-purple-700 text-3xl  text-white rounded-full p-1.5  " />
          </div>
          <p className="font-normal grid text-center">Post Event</p>
          <div className="p-2 space-y-2">
            <div className="w-full flex text-xs bg-blue-500  justify-between px-3 rounded-sm text-white">
              <div className="flex ">
                <input
                  onChange={(e) => setimage(e.target.files[0])}
                  className="text-center mx-auto p-2"
                  type="file"
                />
              </div>
              <div className="flex items-center ">
                <p className="text-end">CHOOSE PIC</p>
              </div>{" "}
            </div>
            <div className="grid space-y-2 ">
              <input
                className=" pl-2  border border-gray-400 p-2 text-sm rounded   "
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title*"
              />
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="date"
                onChange={(e) => setS_date(e.target.value)}
                placeholder="URL*"
                value={s_date}
              />
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="date"
                onChange={(e) => setE_date(e.target.value)}
                placeholder="URL*"
                value={e_date}
              />
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="time"
                onChange={(e) => setS_time(e.target.value)}
                placeholder="Start Time"
                value={s_time}
              />
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="time"
                onChange={(e) => setE_time(e.target.value)}
                placeholder="end Time"
                value={e_time}
              />
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                value={price}
              />
              <select
                value={category}
                onChange={(e) => setCategory_id(e.target.value)}
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
              >
                <option disabled={category_id}>Select Category</option>
                {category?.map((e, i) => {
                  return (
                    <option key={i} value={e._id}>
                      {e.category_name}
                    </option>
                  );
                })}
              </select>
              <input
                className="pl-2  border border-gray-400 p-2 text-sm rounded  "
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className=" text-gray-400 text-sm p-2 bg-gray-100 rounded-sm"
                rows={4}
                cols={40}
                value={description}
                placeholder="Description"
              />
            </div>

            <button
              onClick={xyz}
              disabled={dis}
              className="w-full bg-blue-500 text-white p-1.5 rounded font-semibold text-xs"
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </>
  );
};