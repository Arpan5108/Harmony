import React from "react";

export const Home = () => {
  return (
    <div>
      <div
        className="h-[90vh] bg-cover bg-center w-full flex p-4 md:p-16"
        style={{
          backgroundImage: `url(${require("../images/event/abstract-1846226.jpg")}`,
        }}
      >
        <div className="w-full max-w-md space-y-8 ">
          <div className="text-5xl font-semibold text-orange-300 ">
            One Stop Event Planet
          </div>
          <p className="text-[#e1e8e8a3]">
            Yet bad any for travelling assistance indulgence unpleasing. Not
            enough all excercise blessing.indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="text-[#e1e8e8a3]">Every evevnt shout be perfect.</p>
          <div className="flex rounded-md max-w-sm overflow-hidden">
            <input
              className="px-3 py-2 w-full bg-gray-800 text-white"
              placeholder="enter your email"
            />

            <button className="bg-orange-500 grid text-white text-xs px-6" >
              Get <span>Started</span>
            </button>
          </div>
          <div className="flex items-center">
            <img className="w-28" src={require("../images/people.png")}></img>
            <p className="text-white text-xs">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="w-full grid grid-cols-3 md:grid-cols-5 pt-10 gap-4 pl-10">
          <img className="" src={require("../images/google.png")}></img>
          <img className="" src={require("../images/slack.png")}></img>
          <img
            className=""
            src={require("../images/atlassian.png")}
          ></img>
          <img className="" src={require("../images/dropbox.png")}></img>
          <img className="" src={require("../images/shopify.png")}></img>
        </div>
        <div className="bg-blue-900 text-white m-4 md:m-16 p-4 md:p-10 space-y-10 ">
          <div className="w-full flex justify-between ">
            {/* <div className="bg-pink-300 h-0.5 w-7 "></div> */}
            <p className="text-base font-bold">
              What is Harmoni <span className="flex">Event</span>{" "}
            </p>{" "}
            <p className="text-xs ">
              We so opinion me message as delight.Whole front do of Plate heard
              oh ought. His defective nor convinced{" "}
              <span className="flex">
                recidence own.Connection has put impossile own apartments
                boisterous.At jointure ladyship an insisted
              </span>{" "}
              so humanity he.Friendly bechlour entrance to on by.{" "}
            </p>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-2xl text-orange-400 font-semibold">
              Your Evevnt Will be Beyond your{" "}
              <span className="flex">imagination</span>
            </p>
            <p className="text-sm text-orange-500">Explore the Library</p>
          </div>

          <div className="flex justify-between text-xs   text-[#f3f8f8a3] w-full">
            <div className="grid  w-full">
              <div className="bg-pink-300 h-0.5 w-7"></div>
              <p className="font-bold text-sm text-white -mt-3">Chatbots</p>
              <p>
                We so opinion friend me msj as delight.
                <span className="flex">
                  {" "}
                  Whole front do of Plate heard oh ought.
                </span>
              </p>
            </div>
            <div className="grid w-full">
              <div className="bg-pink-300 h-0.5 w-7"></div>
              <p className="font-bold text-sm text-white  pb-2 ">
                Knowdledgebase
              </p>
              <p>
                At jointure ladyship an insisted so humanity{" "}
                <span className="flex">
                  he.Friendly bechlour entrance to on by.As put
                </span>{" "}
                impossile ow apartments b
              </p>
            </div>
            <div className="grid w-full ">
              <div className="bg-pink-300 h-0.5 w-7"></div>
              <p className="font-bold text-sm text-white  pb-2 ">Education</p>
              <p>
                At jointure ladyship an insisted so{" "}
                <span className="flex">
                  he.Friendly bechlour entrance to on by.As put
                </span>{" "}
                impossile ow apartments b
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid  md:grid-cols-3 p-14">
          <div className="mx-auto w-full">
            <p className="text-2xl font-semibold text-pink-300">
              {" "}
              Harmony Event <span className="flex">Management firm &</span>{" "}
              Wedding Planner is a{" "}
              <span className="flex">group of creative minds</span> who would
              like to make<span className="flex"> weddings, birthday &</span>{" "}
              any kind of events
              <span className="flex"> courteous & a better</span> place for our
              clients to
              <span className="flex"> celibrate important</span> moment of their
              lives...
            </p>
            <p className="text-red-500 text-sm py-7">
              Request Early Access to get Started
            </p>
          </div>
          <div className="mx-auto font-bold text-sm text-white ">
            <div className="bg-pink-300 h-0.5 w-8 "></div>
            {/* <div className="space-y-10"> */}
            <p className="pb-12">Photography</p>
            <div className="bg-pink-300 h-0.5 w-8 "></div>

            <p className="pb-12">
              cinematography or
              <span className="flex "> Videography service</span>
            </p>
            <div className="bg-pink-300 h-0.5 w-8 "></div>

            <p className="pb-12">
              Full venue Decoration <span className="flex">Service</span>
            </p>
            <div className="bg-pink-300 h-0.5 w-8 "></div>

            <p className="pb-12">Home Decoration</p>
            {/* </div> */}
          </div>
          <div className="mx-auto  text-blue-400 text-sm space-y-14  ">
            <p>
              A Team of 3 talented Photographers are ready to snap the
              <span className="flex"> best moments of your ceremony</span>
            </p>
            <p>
              Creative full HD 1080p Video. a different space of your{" "}
              <span className="flex">ceremoney</span>{" "}
            </p>
            <p>
              A Blend of out-of-box ideas to decore your precious{" "}
              <span className="flex">date</span>
            </p>
            <p>just call us and get total event solution under one roof..</p>
          </div>
        </div>

        <div className="text-white p-6 max-w-xl mx-auto rounded-2xl  bg-pink-400 flex  ">
          <div className="w-full min-w-min space-y-4">
            <p className="text-xs">Request Early Access to get Started</p>
            <p className="text-lg font-semibold">Registered Today & start exploring the endless possibilities.</p>
          </div>
          <div className="pt-4">
            <button className="bg-black rounded-full text-xs w-[100px] h-8">GET STARTED</button>
          </div>
        </div>

      </div>
    </div>
  );
};
