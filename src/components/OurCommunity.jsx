"use client";
import Link from "next/link";

export default function OurCommunity() {
  return (
    <section className="bg-white px-[10px] py-[30px] md:px-[60px]">
      <div className=" md:w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap items-start justify-between gap-[40px]">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-[32px] font-bold text-black mb-2">
              Join Our Community
            </h2>
            <p className="text-[16px] font-medium leading-[1.7] mb-[50px]">
              Connect with others to share, learn, and grow.
            </p>
            <p className="text-[16px] text-[#666] leading-[1.7] mb-[50px] max-w-[700px]">
              Be part of a vibrant community where you can join nutrition
              workshops,
              <br />
              swap recipes in forums, and support each other's health goals.
              <br />
              Together, we make wellness fun and sustainable.
            </p>

            <Link
              href="#"
              className="inline-flex items-center px-[20px] py-[10px] bg-[#f07731] text-white font-semibold text-[1.1rem] rounded-[8px] transition-all duration-300 hover:pl-[24px]"
            >
              Join Now
              <span className="ml-[8px] transition-all duration-300 group-hover:ml-[12px]">
                →
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="ourcommunity.png"
              alt="Join Our Community"
              width={600}
              height={400}
              className="w-full h-auto rounded-[20px] border md:border-none border-amber-600 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
