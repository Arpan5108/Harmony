import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cat = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:3046/api/v1/admin/showcategory")
        .then((res) => {
          console.log(res)
          setData(res.data.message)})
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  
  return (
    <div className="bg-black">
      <div className="flex w-full flex-wrap">
        {data?.map((e, i) => {
          return (
            <div
              onClick={() => navigate("/events/event", { state: e })}
              className="text-white w-full lg:max-w-[33%] md:max-w-[50%] max-w-max p-4"
            >
              <img
                className="w-full h-72 object-cover origin-center"
                src={e.URL}
              />
              <div className="bg-white flex justify-center items-center  h-8 rounded-b">
                <p className=" text-blue-400 text-sm  font-semibold">
                  {e.category_name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
