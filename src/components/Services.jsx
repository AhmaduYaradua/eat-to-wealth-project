import React from "react";
import ServiceCard from "./card/ServiceCard";
import cardService from "../../constant/data";

const Services = () => {
  return (
    <div id="services" className="p-[10px] py-12 bg-[#F5F5F5]">
      <div className="flex flex-col gap-3 justify-center items-center mb-3">
        <h2 className=" text-3xl font-bold">Our Services</h2>
        <p className="text-center text-[16px] md:w-[75%] leading-6 md:m-auto mb-3">
          At Eattowealth, we provide a holistic approach to nutrition through a
          variety of services designed to meet your individual needs. Whether
          you're looking for personalized meal plans, expert coaching, or
          educational workshops, our team is dedicated to supporting you on your
          wellness journey.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center md:px-16">
        {cardService.map((service, index) => (
          <div className="flex md:w-[484px] md:h-[344px] justify-center">
            <ServiceCard
              key={index}
              name={service.name}
              bgColor={service.color}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
