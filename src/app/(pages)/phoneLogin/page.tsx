"use client";
import React, { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, Check, X } from "lucide-react";
import Link from "next/link";
import Navbar from "@/custom_components/registerSigninNavbar/navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "@/app/loginState/features/authSlice";
import { Button } from "@/shadcn_components/ui/button";

interface PhoneLoginData {
  phoneNumber: string;
}

function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneLoginData>();

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

  const handlePhoneLoginSubmit = async (data: PhoneLoginData) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "/api/login/phone",
        {
          phoneNumber: phoneNumber.replace(/\D/g, ""),
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        dispatch(setLoggedIn(true));
        toast.success("Login successful");
        router.push("/Assigment");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Phone login failed:", error);
    } finally {
      setIsSubmitting(false);
    }
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
            Sign in with Phone Number
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your phone number to sign in to your account.
          </p>

          <form
            onSubmit={handleSubmit(handlePhoneLoginSubmit)}
            className="mt-10 space-y-4"
          >
            <div className="relative">
              <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  +91
                </span>
                <input
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  })}
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`w-full p-3 pl-12 bg-transparent outline-none ${
                    isValid ? "border-green-500" : ""
                  }`}
                  placeholder="XXXXXXXXXX"
                  maxLength={12}
                />
                {phoneNumber && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isValid ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                )}
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black">
                  Phone Number
                </label>
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.phoneNumber.message as string}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full bg-[#040928] text-white hover:bg-black transition-colors"
            >
              {isSubmitting ? "Signing in..." : "Sign in with Phone"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
            >
              Sign in with Email instead
            </Link>
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
