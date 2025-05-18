// "use client";
// import React from "react";

// const ServiceCard = (props) => {
//   return (
//     <div className="relative flex w-[384px] flex-col shadow">
//       <div>
//         <img
//           className="w-full"
//           src={props.image}
//           alt="service_card"
//           width={100}
//           height={100}
//         />
//       </div>
//       <div
//         className={`absolute w-full bottom-0 bg-gradient-to-t from-[${props.bgColor}] to-[#D9D9D91A] pl-5 h-14 px-2 pb-2 text-white font-bold`}
//       >
//         {props.name}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

"use client";
import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="relative flex w-[384px] flex-col shadow">
      <div>
        <img
          className="w-full h-[344px]"
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
