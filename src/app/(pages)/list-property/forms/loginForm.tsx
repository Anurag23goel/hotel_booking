"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

interface LoginFormProps {
  setCurrentForm: (form: string) => void;
}

interface LoginFormData {
  email: string;
}

const LoginForm = ({ setCurrentForm }: LoginFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>();

  const emailValue = watch("email");

  const emailHandler = async (data: LoginFormData) => {
    try {
      const response = await axios.post("/api/auth/owner-login", data);
      console.log("this is response->", response.data);

      if (response.data.success) {
        toast.success("Email verified! OTP Sent!");
        setCurrentForm("otp");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-black font-semibold">
          Sign in to manage your property
        </h1>
        <p className="font-semibold text-black text-md">
          Welcome back! Please enter your details.
        </p>
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(emailHandler)}
      >
        <div className="relative mt-6 bg-white">
          <div className="relative border border-gray-300 rounded-md focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="email"
              {...register("email", {
                required: "Email is necessary",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full text-black p-3 bg-transparent rounded-md focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500 outline-none"
              placeholder="Enter your email address"
            />
            {emailValue && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            )}
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black ">
              Email Address
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Next
        </button>

        <div className="text-center text-sm">
          <p>Having trouble signing in?</p>
        </div>

        <button
          type="button"
          onClick={() => setCurrentForm("register")}
          className="w-full bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Create Your Partner Account
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
