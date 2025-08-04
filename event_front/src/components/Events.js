import React from "react";
import { Outlet } from "react-router-dom";

export const Events = () => {
  return (
    <div>
      <div
        className="h-[40vh] bg-cover p-16 "
        style={{
          backgroundImage: `url(${require("../images/breadcrumb/0.breadcrumb-bg.jpg")})`,
        }}
      ></div> 
      <Outlet />
    </div>
  );
};
