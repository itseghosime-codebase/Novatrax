"use client";

import React, { useState } from "react";
import LogoMarked from "@/assets/Logo/Novatrax.svg";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-40 px-5 md:px-10 lg:px-12 pt-6 md:pt-8 flex items-center justify-between inset-x-0 top-0 bg-transparent">
      {/* Logo */}
      <Image
        src={LogoMarked}
        alt="Novatrax Logo"
        sizes="100%"
        className="h-10 md:h-14 w-auto"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-14">
        <ul className="flex items-center gap-7">
          {NavLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="font-mono font-normal text-lg lg:text-xl hover:text-[#CB6AFF] transition-colors ease-in duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={""}
          className="text-white hover:text-[#CB6AFF] transition-colors ease-in duration-300"
        >
          <FaDiscord size={25} />
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-dvh w-2/3 bg-black/40 backdrop-blur-3xl border-l border-[#5D5D5D]/50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-start px-6 py-10 gap-8`}
      >
        {/* Close button inside drawer */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={25} />
        </button>

        <ul className="flex flex-col gap-6 mt-10 text-left">
          {NavLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="font-mono font-normal text-lg hover:text-[#CB6AFF] transition-colors ease-in duration-300"
                onClick={() => setIsOpen(false)} // close on click
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={""}
          className="text-white hover:text-[#CB6AFF] transition-colors ease-in duration-300 mt-5"
        >
          <FaDiscord size={28} />
        </Link>
      </div>
    </nav>
  );
}

const NavLinks = [
  { label: "Home", href: "" },
  { label: "Game", href: "" },
  { label: "News", href: "" },
  { label: "Contact", href: "" },
];
