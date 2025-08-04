import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export const Cat_events = () => {
  const [data, setData] = useState();
  const { state } = useLocation();
  console.log(state , "state");
  console.log(data);

  useEffect(() => {
    const fetch = async () => {
      const data = { category_id: state._id };
      await axios
        .post("http://localhost:3046/api/v1/admin/showeventsbycategory", data)
        .then((res) => {
          console.log(res)
          setData(res.data.data)
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className=" bg-white grid grid-cols-4">
      {data?.map((e, i) => {
        return (
          <div
            key={i}
            className="w-full p-8"
          >
            <div className="rounded-lg overflow-hidden">
              <img className="  w-full h-44 object-center object-cover" src={e.image} />
              <div className="bg-black text-white p-0.5">
                {e.s_date} , {e.s_time}
              </div>
              <div className=" pt-3 space-y-1 bg-[#f2f2f1] p-2 grid gap-4">
                <p className="font-bold text-lg uppercase">{e.title}</p>
                <div className="flex justify-between">
                  <div className="text-orange-700">
                    <div>Location:</div>
                    <div className="text-xs capitalize">{e.location}</div>
                  </div>
                  <div className="text-orange-700 flex items-center gap-1">
                    <div>Rs.</div>
                    <div className="capitalize">{e.price}</div>
                  </div>
                </div>
                <div className="text-center">
                  <button onClick={() => navigate(`/details/${e._id}`)} className="bg-orange-400 cursor-pointer rounded p-[4px_8px] mx-auto flex items-center  gap-2 text-white font-medium">Book Ticket  <FaArrowRight /></button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
