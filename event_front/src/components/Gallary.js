import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const Gallary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="h-[45vh] p-16 bg-no-repeat "
        style={{
          backgroundImage: `url(${require("../images/breadcrumb/0.breadcrumb-bg.jpg")})`,
        }}
      >
        <div className=" grid  justify-center text-center text-white space-y-2">
          {" "}
          <p className="text-lg">HARMONI EVENTS</p>
          {/* <p className="text-lg">KNOW</p> */}
          <p className="text-yellow-500 text-3xl font-bold">HARMONI </p>
          <p className="text-3xl font-semibold">GALLARY</p>
          <div className="flex justify-center space-x-5 text-sm">
            <p className="font-bold cursor-pointer" onClick={() => navigate("/")}>Home </p>
            <div className="h-4  bg-white w-0.5"></div>
            <p>Harmoni Gallary</p>
          </div>
        </div>
      </div>
      <div className="flex place-items-center justify-center p-2 border-t-8 border-b-8 border-black">
        {" "}
        <p className="text-xs font-semibold">--------</p>
        <MdOutlineStar className="text-red-500 text-xl" />
        <MdOutlineStar className="text-red-500 text-xl" />
        <p className="text-sm">Our Gallary</p>
        <MdOutlineStar className="text-red-500 text-xl" />
        <MdOutlineStar className="text-red-500 text-xl" />
        <p className="text-xs font-semibold">--------</p>
      </div>
      <div className="flex w-full ">
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center  "
          style={{
            backgroundImage: `url(${require("../images/gallery/1.image.jpg")})`,
          }}
        >
          {" "}
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center  "
          style={{
            backgroundImage: `url(${require("../images/gallery/2.image.jpg")})`,
          }}
        >
          {" "}
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${require("../images/gallery/3.image.jpg")})`,
          }}
        >
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${require("../images/gallery/4.image.jpg")})`,
          }}
        >
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${require("../images/gallery/5.image.jpg")})`,
          }}
        >
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${require("../images/gallery/6.image.jpg")})`,
          }}
        >
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${require("../images/gallery/7.image.jpg")})`,
          }}
        >
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
        <div
          className=" w-full  h-[40vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${require("../images/gallery/8.image.jpg")})`,
          }}
        >
          <div className=" text-white bg-[#0c0c1d8d] my-48 h-16 content-center flex  items-center justify-between p-4">
            <div>
              {" "}
              <p className="text-base">hii there</p>
              <p className="text-xs">shell there</p>
            </div>{" "}
            <FcInfo className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex place-items-center justify-center p-4 ">
        {" "}
        <MdOutlineStar className=" text-xl" />
        <MdOutlineStar className=" text-xl" />
        <p className="text-xs text-gray-500 font-semibold">Your Location</p>
        <MdOutlineStar className=" text-xl" />
        <MdOutlineStar className=" text-xl" />
      </div>
      <div className="w-[98vw] overflow-hidden mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14685.811094216244!2d72.5086395!3d23.043856449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703838634390!5m2!1sen!2sin"
          className="w-[100vw]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="h-56 bg-orange-500 w-full items-center flex justify-center ">
        <p className="md:text-3xl font-bold ">
          30% Off In June~July For Birthday Events
        </p>
        <div className="">
          {" "}
          <button className=" bg-white text-xs  text-orange-500 font-semibold p-3.5 rounded-full">
            MAKE AN EVENT NOW
          </button>
        </div>{" "}
      </div>
    </div>
  );
};
