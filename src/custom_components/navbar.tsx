"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Ellipsis, User2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData, logout } from "@/app/redux/slices/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn_components/ui/avatar";
import { Button } from "@/shadcn_components/ui/button";
import { usePathname } from "next/navigation";
import { AppDispatch } from "@/app/redux/store";
import toast from "react-hot-toast";
import axios from "axios";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const currentPath = usePathname();
  const { isLoggedIn, userData, loading, token } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  console.log("TOKEN JO HAMARA REDUX STATE SE AAYA", token);

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/auth/logout", {
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(logout());
        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <header className="bg-[#040928] text-white p-4">
      <nav className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative">
        {/* Logo */}
        <div className="flex w-full md:w-auto justify-between items-center">
          <Link
            href="/"
            className="text-xl md:text-2xl font-PlayfairDisplay-Bold mb-4 md:mb-0"
          >
            Bharat Trips
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap items-center gap-2 md:gap-4">
          {currentPath === "/list-property" ? (
            <li>
              <Link href={"/"} className="text-sm md:text-base">
                Already a partner?
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href="/list-property"
                className="text-sm md:text-base hover:text-[#858589] transition-colors duration-200 "
              >
                List your property
              </Link>
            </li>
          )}

          {loading ? (
            <li>
              <User2 />
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
                  className="bg-white text-[#003580] hover:bg-gray-100 text-sm md:text-base px-4 py-2 rounded"
                  onClick={handleLogout}
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
                    className="bg-white text-[#003580] hover:bg-gray-100 text-sm md:text-base px-4 py-2 rounded"
                  >
                    Register
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-sm md:text-base bg-white text-[#003580] px-4 py-2 rounded font-medium"
                >
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul
            className="absolute top-full left-0 w-full bg-[#040928] flex flex-col items-center py-4 space-y-4 md:hidden z-50 shadow-lg"
            tabIndex={0}
            onBlur={() => setIsOpen(false)}
          >
            {currentPath === "/list-property" ? (
              <li>
                <span className="text-white font-semibold text-lg">
                  Already a partner?
                </span>
              </li>
            ) : (
              <li>
                <Link
                  href="/list-property"
                  className="text-white text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  List Your Property
                </Link>
              </li>
            )}
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
                    onClick={handleLogout}
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
    </header>
  );
}
