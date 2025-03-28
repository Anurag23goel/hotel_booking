"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CircleHelp } from "lucide-react"; // Icons
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between lg:py-1 py-2 relative">
      {/* Logo */}
      <h1
        className="font-PlayfairDisplay-Bold text-white lg:text-2xl text-xl
      cursor-pointer "
        onClick={() => router.push("/")}
      >
        Bharat Trips
      </h1>

      {/* Desktop Menu (Now showing on md screens and up) */}
      <ul className="hidden md:flex gap-6 items-center">
        <li>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/help"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Help
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About Us
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
          className="absolute top-full left-0 w-full bg-[#040928] flex flex-col items-center py-4 space-y-4 md:hidden z-50 shadow-lg"
          tabIndex={0}
          onBlur={() => setIsOpen(false)}
        >
          <li>
            <Link
              href="/contact"
              className="text-white font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/help"
              className="text-white font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Help
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
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
              Register
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
