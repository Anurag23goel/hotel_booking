"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import Navbar2 from "@/custom_components/navbar2";

function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const emailValue = watch("email");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#1e9609] w-full py-3">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar2 />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-4 py-10">
        <div className="w-full max-w-md bg-white p-6 ">
          <h2 className="text-2xl font-bold ">Sign in or create an account</h2>
          <p className="text-gray-600 mt-2">
            You can sign in using your Booking.com account to access our services.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-md font-medium text-black mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register("email", { required: "Email is necessary" })}
                  className="border border-gray-300 w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
                  placeholder="Enter your email address"
                />
                {emailValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white rounded-md py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              Continue with email
            </button>
          </form>

          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-black">or use one of these options</span>
            </div>
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
            <p>
              By signing in or creating an account, you agree with our
            </p>
            <p className="font-semibold text-black">Terms & Conditions and Privacy Statements</p>
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