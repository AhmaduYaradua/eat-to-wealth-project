import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

function Footer() {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row bg-black border-b-white items-center justify-between md:items-end px-[50px] py-[20px] text-white">
        <div className="flex text-center items-center md:items-start md:text-left flex-col gap-3">
          <div className="flex gap-[10px] w-fit h-fit items-center  py-[10px]">
            <img
              src="logo.png"
              alt="logo"
              className="w-[28.59px] h-[30.23px]"
            />
            <h2 className="w-[98px] font-regular h-[22px] text-white">
              EattoWealth
            </h2>
          </div>
          <div>
            <h3 className="w-[250px]">
              EatoWealth aims to combat malnutrition through digital and
              personalized nutrition solutions.
            </h3>
          </div>
        </div>
        <div>
          <ul className="flex gap-[10px]">
            <li className="border rounded-full p-1 border-green-600">
              <Link href={"/"}>
                <Linkedin />
              </Link>
            </li>
            <li className="border rounded-full p-1 border-green-600 bg-green-600">
              <Link href={"/"}>
                <Facebook />
              </Link>
            </li>
            <li className="border rounded-full p-1 border-green-600">
              <Link
                href={
                  "/https://www.instagram.com/eating2wealth?igsh=MWk3MTNjYnNobXAzeQ=="
                }
              >
                <Instagram />
              </Link>
            </li>
            <li className="border rounded-full p-1 border-green-600">
              <Link href={"/"}>
                <Twitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-white border-t-2 pt-3 text-center">
        <h3 className="text-gray-400">
          © Copyright 2025, All Rights Reserved by
        </h3>
        <h3 className="text-gray-400">Eattowealth</h3>
      </div>
    </div>
  );
}
export default Footer;
