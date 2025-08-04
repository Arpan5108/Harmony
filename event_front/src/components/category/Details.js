import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillCalendar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
export const Details = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const data = { _id: id };
      await axios
        .post("http://localhost:3046/api/v1/admin/showevents", data)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  console.log(data);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, event_id) => {
    console.log(amount, event_id);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline");
      return;
    }

    const option = {
      key: "rzp_test_dEYhZg38SrkYMD",
      currency: "INR",
      amount: amount * 100,
      name: "data",
      description: "Thanks for buying products from the our website",
      image:
        "https://res.cloudinary.com/dtdlad1ud/image/upload/v1707733051/uhwydfqry5wqwkaazbbk.jpg",
      handler: async function (response) {
        await axios
          .post(
            "http://localhost:3046/api/v1/users/booking",
            { event_id },
            {
              headers: {
                Authorization: Cookies.get("accessToken"),
              },
            }
          )
          .then((res) => {
            toast.success(res.data.message)
            navigate("/mybooking")
          })
          .catch((err) => console.log(err));
      },
      prefill: {
        name: "hello",
      },
    };

    const paymentObject = new window.Razorpay(option);
    paymentObject.open();
  };

  return (
    <>
      {data &&
        <div className="flex flex-col mx-5 xl:mx-32 md:mx-10 mt-5 flex-grow">
          <div >
            <img src={`${data.image}`} className='rounded w-full h-96 object-cover aspect-16:9' />
          </div>

          <img src="../src/assets/paduru.png" alt="" className='rounded object-fill aspect-16:9' />
          {/* FIXME: This is a demo image after completing the create data function delete this */}

          <div className="flex justify-between mt-8 mx-2">
            <h1 className="text-3xl md:text-5xl font-extrabold">{data.title.toUpperCase()}</h1>
            <button onClick={() => displayRazorpay(data.price, data._id)} className="bg-blue-500 p-2 text-white rounded-md">Book Ticket</button>
          </div>
          <div className="mx-2">
            <h2 className="text-md md:text-xl font-bold mt-3 text-primarydark">₹{data.price}</h2>
          </div>
          <div className="mx-2 mt-5 text-md md:text-lg truncate-3-lines">
            {data.description}
          </div>
          <div className="mx-2 mt-5 grid gap-10">
            <h1 className="text-md md:text-xl font-extrabold">When and Where </h1>
            <div className="mt-6 grid md:flex flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <AiFillCalendar className="w-auto h-5 text-primarydark " />
                <div className="flex flex-col gap-1">

                  <h1 className="text-md md:text-lg font-extrabold">Date and Time</h1>
                  <div className="text-sm md:text-lg">
                    Start Date: {data.s_date} <br />Satrt Time: {data.s_time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AiFillCalendar className="w-auto h-5 text-primarydark " />
                <div className="flex flex-col gap-1">

                  <h1 className="text-md md:text-lg font-extrabold">Date and Time</h1>
                  <div className="text-sm md:text-lg">
                    End Date: {data.e_date} <br />End Time: {data.e_time}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-10">
              <MdLocationPin className="w-auto h-5 text-primarydark " />
              <div className="flex flex-col gap-1">

                <h1 className="text-md md:text-lg font-extrabold">Location</h1>
                <div className="text-sm md:text-lg">
                  {data.location}
                </div>
              </div>
            </div>
          </div>
        </div >}
    </>
  );
};
