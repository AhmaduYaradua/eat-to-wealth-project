import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <section className="fixed flex bg-white justify-between px-[120px] items-center w-[1440px] h-[80px]">
      <div className="flex gap-[10px] w-fit h-fit items-center  py-[10px]">
        <img src="logo.png" alt="logo" className="w-[28.59px] h-[30.23px]" />
        <h2 className="w-[98px] font-regular h-[22px] text-black">
          EattoWealth
        </h2>
      </div>
      <ul className="flex gap-[39px] font-medium text-green-600 w-fit h-fit">
        <li>
          <Link className="hover:text-red-500" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/news"}>
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/news"}>
            Service
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/contact-us"}>
            Blog
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/about"}>
            Community
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/news"}>
            Pricing
          </Link>
        </li>
        <li className="flex gap-[20px] w-[211px] items-center h-[35px]">
          <button className="w-fit border-[1px] rounded-[5px] px-[22px] items-center py-[8px]">
            SignUp
          </button>
          <button className="w-fit border-amber-600 text-white bg-amber-600 rounded-[5px] px-[22px] items-center py-[8px]">
            LogIn
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
