"use client";
import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="relative md:w-[384px] md:h-[344px] shadow overflow-clip">
      <div>
        <img
          className="w-fit h-fit "
          src={props.image}
          alt="service_card"
          width={100}
          height={100}
        />
      </div>
      <div
        className="absolute w-full bottom-0 pl-5 h-14 px-2 pb-2 text-white text-[20px] font-bold"
        style={{
          backgroundImage: `linear-gradient(to top, ${props.bgColor}, rgba(217, 217, 217, 0.1))`,
        }}
      >
        {props.name}
      </div>
    </div>
  );
};

export default ServiceCard;
