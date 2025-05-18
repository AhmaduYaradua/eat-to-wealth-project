import React from "react";
import ServiceCard from "./card/ServiceCard";
import cardService from "../../constant/data";

const Services = () => {
  return (
    <div id="services" className="p-6 py-12 bg-[#F5F5F5]">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-[#0D9344] text-2xl font-bold">Our Services</h2>
        <p className="text-center text-[16px] md:w-[75%] md:m-auto">
          At Eattowealth, we provide a holistic approach to nutrition through a
          variety of services designed to meet your individual needs. Whether
          you're looking for personalized meal plans, expert coaching, or
          educational workshops, our team is dedicated to supporting you on your
          wellness journey.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 mt-10 lg:px-24 justify-center items-center">
        {cardService.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            bgColor={service.color}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
