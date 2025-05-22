"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import DropdownArrow from "./hooks/DropdownArrow";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="fixed z-50 bg-white text-green-600 flex justify-between px-[20px] md:px-[120px] items-center w-full h-[80px] shadow-md">
      <div className="flex gap-2 items-center py-2">
        <img src="/logo.png" alt="logo" className="w-[28px] h-[30px]" />
        <h2 className="text-[18px] font-semibold">EatToWealth</h2>
      </div>

      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className="hidden md:flex items-center  gap-[39px] font-medium text-green-600">
        <li>
          <Link className="hover:text-amber-600" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-amber-600" href="/about">
            About Us
          </Link>
        </li>
        <li>
          <h1 className="hover:text-amber-600" href="#services">
            <DropdownArrow />
          </h1>
        </li>
        <li>
          <Link className="hover:text-amber-600" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="hover:text-amber-600" href="/community">
            Community
          </Link>
        </li>
        <li>
          <Link className="hover:text-amber-600" href="/pricing">
            Pricing
          </Link>
        </li>
        <li className="flex gap-4 items-center">
          <button className="border text-green-600 border-green-600 px-6 py-2 rounded-[10px] hover:bg-amber-600 hover:text-white hover:border-amber-600">
            SignUp
          </button>
          <button className="bg-amber-600 text-white rounded-[10px] px-6 py-2 hover:bg-green-600">
            LogIn
          </button>
        </li>
      </ul>

      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden px-6 py-4 z-40">
          <ul className="flex flex-col gap-4 text-green-600 font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Service
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/community" onClick={() => setMenuOpen(false)}>
                Community
              </Link>
            </li>
            <li>
              <Link href="/pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li className="flex flex-col gap-3 mt-2">
              <button className="border text-green-600 border-green-600 px-4 py-2 rounded hover:bg-amber-600 hover:text-white hover:border-amber-600">
                SignUp
              </button>
              <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-green-600">
                LogIn
              </button>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Navbar;
