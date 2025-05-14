import React from "react";
import { Card, CardMeta } from "antd"; // Corrected import
import Image from "next/image";

const ServiceCard = (props) => {
  return (
    <div className="relative flex flex-col shadow">
      <div>
        <Image
          className="w-full"
          src={props.image}
          alt="service_card"
          width={100}
          height={100}
        />
      </div>
      <div
        className={`absolute w-full bottom-0 bg-gradient-to-t from-[${props.bgColor}] to-[#D9D9D91A] pl-5 h-14 px-2 pb-2 text-white font-bold`}
      >
        {props.name}
      </div>
    </div>
  );
};

export default ServiceCard;
