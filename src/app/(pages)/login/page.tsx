"use client";
import React, { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Navbar from "@/custom_components/registerSigninNavbar/navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login, setToken } from "@/app/redux/slices/authSlice";
import { Button } from "@/shadcn_components/ui/button";

interface loginData {
  email: string;
  password: string;
}

function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<loginData>();


  const emailValue = watch("email");

  const handleLoginSubmit = async (data: loginData) => {
    try {
      const response = await axios.post("/api/login", data, {
        withCredentials: true, // Important for handling cookies
      });

      // console.log(response.data.data.user);

      if (response.data.success) {
        dispatch(login(response.data.data.user));
        dispatch(setToken(Cookies.get("authToken")?.value));
        toast.success("Login successful");
        router.push("/");
      }
    } catch (error) {
      console.log("Login failed");
    }
  };

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}${digits.slice(3)}`;
    return `${digits.slice(0, 3)}${digits.slice(3, 6)}${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
    const digitsOnly = formattedNumber.replace(/\D/g, "");
    setIsValid(digitsOnly.length === 10);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#040928] w-full py-3">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-4 py-10">
        <div className="border-black shadow-xl w-full max-w-md bg-white p-6">
          <h2 className="text-2xl font-PlayfairDisplay-Bold">
            Sign in or create an account
          </h2>
          <p className="text-gray-600 mt-2">
            You can sign in using your Booking.com account to access our
            services.
          </p>

          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="mt-10 space-y-4"
          >
            <div className="relative ">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 bg-transparent rounded-md outline-none"
                  placeholder="Enter your email address"
                />
                {emailValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
                <label className="absolute -top-3 left-3 bg-white  px-1 text-sm font-medium text-black">
                  Email Address
                </label>
              </div>
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters",
                    },
                  })}
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black">
                  Password
                </label>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#040928] text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-black">or</span>
            </div>
          </div>

          <div className="flex justify-start">
            <Button variant="secondary">
              <Link href="/phoneLogin">Sign In Using Phone Number</Link>
            </Button>
          </div>

          <div className="border-t my-6"></div>

          <div className="text-center text-sm text-gray-600">
            <p>By signing in or creating an account, you agree with our</p>
            <p className="font-semibold text-black">
              Terms & Conditions and Privacy Statements
            </p>
          </div>

          <div className="text-center mt-4 text-gray-500 text-xs">
            <p>All rights reserved.</p>
            <p>Copyright (2006-2025) – Booking.com™</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
