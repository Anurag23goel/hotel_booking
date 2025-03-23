"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Navbar2 from "@/custom_components/navbar2";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

interface registerData {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerData>();

  const emailValue = watch("email");
  const nameValue = watch("name");

  const handleRegisterSubmit = async (data: registerData) => {
    try {
      const response = await axios.post("/api/register", data);

      if (response.data.success) {
        toast.success("Registration successful");
        router.push("/login");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "Registration failed. Please try again."
        );
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#040928] w-full py-3">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar2 />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-4 py-10">
        <div className="border-black shadow-xl w-full max-w-md bg-white p-6">
          <h2 className="text-2xl font-PlayfairDisplay-Bold">
            Create an account
          </h2>
          <p className="text-gray-600 mt-2">
            Sign up to start booking your perfect stays.
          </p>

          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="mt-6 space-y-4"
          >
            <div>
              <label className="block text-md font-medium text-black mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your full name"
                />
                {nameValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-black mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your email address"
                />
                {emailValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-black mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Create a password"
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
              </div>
              {errors.password && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-black mb-1">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#040928] text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create account
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-black">
                or use one of these options
              </span>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              Already have an account? Sign in
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 justify-center">
            <button className="border border-gray-200 py-3 rounded-md hover:outline hover:outline-blue-500 focus:ring-0">
              Google
            </button>
            <button className="border border-gray-200 py-3 rounded-md hover:outline hover:outline-blue-500 focus:ring-0">
              Apple
            </button>
            <button className="border border-gray-200 py-3 rounded-md hover:outline hover:outline-blue-500 focus:ring-0">
              Facebook
            </button>
          </div>

          <div className="border-t my-6"></div>

          <div className="text-center text-sm text-gray-600">
            <p>By creating an account, you agree with our</p>
            <p className="font-semibold text-black">
              Terms & Conditions and Privacy Statement
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
