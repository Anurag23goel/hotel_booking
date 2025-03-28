"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, CircleHelp, LogOut, Ellipsis } from "lucide-react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "@/app/loginState/features/authSlice";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn_components/ui/avatar";
import { Button } from "@/shadcn_components/ui/button";
import { CircleUserRound } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { isLoggedIn, userData, loading } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  console.log("userData in the navbar is -> ", userData);
  console.log("isLoggedIn in the navbar is -> ", isLoggedIn);

  return (
    <nav className="flex w-full items-center justify-between lg:py-4 py-2 relative">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl text-white md:text-3xl font-PlayfairDisplay-Bold mb-4 md:mb-0"
      >
        Bharat Trips
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 items-center">
        <li>
          <Link
            href="/list-property"
            className="text-white text-xl md:text-1xl hover:text-[#858589] transition-colors duration-200 px-4 py-2 font-medium flex items-center gap-1"
          >
            <span>List your property</span>
          </Link>
        </li>

        {loading ? (
          <li>
            <Ellipsis size={24} />
          </li>
        ) : isLoggedIn ? (
          <>
            <li>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
            <li>
              <Button
                variant="outline"
                className="bg-white text-[#003580] hover:bg-gray-100"
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="bg-white text-[#003580] hover:bg-gray-100"
                >
                  Register
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <Button className="bg-[#003580] text-white hover:bg-[#002b6b]">
                  Sign In
                </Button>
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full bg-[#040928] flex flex-col items-center py-4 space-y-4 md:hidden z-50 shadow-lg"
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
          {loading ? (
            <li>
              <Ellipsis className="text-white animate-spin" size={24} />
            </li>
          ) : isLoggedIn ? (
            <>
              <li>
                <span className="text-white font-semibold text-lg">
                  {userData?.data?.email || "User"}
                </span>
              </li>
              <li>
                <Button
                  variant="outline"
                  className="bg-white text-[#003580] hover:bg-gray-100"
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="bg-white text-[#003580] hover:bg-gray-100"
                  >
                    Register
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button className="bg-[#003580] text-white hover:bg-[#002b6b]">
                    Sign In
                  </Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
