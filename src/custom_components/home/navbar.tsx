"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CircleHelp } from "lucide-react"; // Icons
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between lg:py-4 py-2 relative">
      {/* Logo */}
      <h1 className="font-semibold text-white lg:text-4xl text-xl">
        Booking.com
      </h1>
  
      {/* Desktop Menu (Now showing on md screens and up) */}
      <ul className="hidden md:flex gap-4 items-center">
        <li>
          <Tooltip title="Contact Customer Service" arrow>
            <IconButton>
              <CircleHelp color="white" />
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Link
            href="/list-property"
            className="text-white font-semibold text-xl"
          >
            List Your Property
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="text-[#057d23] px-3 py-2 font-semibold text-lg rounded-sm bg-white"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="text-[#057d23] px-3 py-2 font-semibold text-lg rounded-sm bg-white"
          >
            Sign In
          </Link>
        </li>
      </ul>
  
      {/* Mobile Menu Button (visible only below md screens) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
  
      {/* Mobile Dropdown Menu (visible only below md screens) */}
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full bg-[#057d23] flex flex-col items-center py-4 space-y-4 md:hidden z-50 shadow-lg"
          tabIndex={0}
          onBlur={() => setIsOpen(false)}
        >
          <li>
            <Link
              href="/list-property"
              className="text-white font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              List Your Property
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="text-[#057d23] px-4 py-2 text-sm rounded-md bg-white"
              onClick={() => setIsOpen(false)}
            >
              Anurag
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="text-[#057d23] px-4 py-2 text-sm rounded-md bg-white"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
  
}
