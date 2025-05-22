"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section className="bg-white">
      <div className="w-[90%] py-6 pb-9 mx-auto px-[10px]">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-[40px]">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-[2.5rem] text-[#333] mb-[20px] font-semibold">
              Who We Are
            </h2>
            <p className="text-[1.25rem] text-[#333] max-w-[700px] mb-[25px] leading-[1.8]">
              <span className="text-[#2e8b57] font-bold">EatToWealth</span>, is
              a digital health nutrition based platform. We are passionate about
              promoting healthy lifestyle and wellness through evidence based
              nutrition advocacy.
            </p>
            <p className="text-[1.25rem] text-[#333] max-w-[700px] mb-[25px] leading-[1.8]">
              Our team are experts who are registered and specialize in various
              sectors of health, qualified to answer nutritional questions to
              help you achieve your nutrition goals.
            </p>

            <ul className="list-none mt-[30px] mb-[30px] space-y-3">
              <li className="flex items-center text-[1.15rem] text-[#333] leading-[1.5]">
                <span>
                  <FaCheckCircle
                    size={15}
                    className="text-[#2e8b57] mr-2 text-[1.2rem]"
                  />
                </span>
                <span className="flex-1">
                  Certified nutritionists and health coaches
                </span>
              </li>
              <li className="flex items-center text-[1.15rem] text-[#333] leading-[1.5]">
                <span>
                  <FaCheckCircle
                    size={15}
                    className="text-[#2e8b57] mr-2 text-[1.2rem]"
                  />
                </span>
                <span className="flex-1">
                  Join a supportive network where you can share your journey
                </span>
              </li>
              <li className="flex items-center text-[1.15rem] text-[#333] leading-[1.5]">
                <span>
                  <FaCheckCircle
                    size={15}
                    className="text-[#2e8b57] mr-2 text-[1.2rem]"
                  />
                </span>
                <span className="flex-1">
                  Tailored programs designed to fit your unique lifestyle
                </span>
              </li>
            </ul>

            <a
              href="#"
              className="inline-block mt-[10px] px-[20px] py-[10px] bg-[#f07731] text-white rounded-[7px] transition-colors duration-300 hover:bg-[#276f4b]"
            >
              Read More
            </a>
          </div>

          {/* Image Section */}
          <div className="flex-1 ">
            <img
              src="whoweare.png"
              alt="EatToWealth Team"
              className="  object-cover rounded-[8px] shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
