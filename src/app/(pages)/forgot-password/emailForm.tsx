"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

interface dataInput {
  email: string;
}

const EmailForm = ({
  setCurrentForm,
}: {
  setCurrentForm: (form: string) => void;
}) => {
  const { register, watch, handleSubmit  } = useForm<dataInput>();

  const emailValue = watch("email");

  const emailHandler = async (data: dataInput) => {
    console.log(data);
    try {
      const response = await axios.post("/api/auth/forgot-password", data);

      console.log("this is response->", response.data);

      if (response.data.success) {
        toast.success("Email verified ! OTP Sent !");
        setCurrentForm("otp");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h2 className="text-2xl sm:text-1xl font-PlayfairDisplay-Bold ">
        Forgot your password ?{" "}
      </h2>
      <p className="text-black opacity-55 font-bold mt-2">
        Enter email address associated with your account.
      </p>

      <form onSubmit={handleSubmit(emailHandler)} className="mt-11 space-y-4">
        <div className="relative">
          <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="email"
              {...register("email", { required: "Email is necessary" })}
              className="w-full p-3 bg-transparent rounded-md outline-none"
              placeholder="Enter your email address"
            />
            {emailValue && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            )}
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-black">
              Email Address
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#06104d] text-white rounded-md py-3 hover:bg-black transition-colors flex items-center justify-center gap-2"
        >
          Next
        </button>
      </form>

      <div className="relative my-7 mb-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 text-gray-500">Or</span>
        </div>
      </div>

      <button
        onClick={() => setCurrentForm("phone")}
        className="p-4 mt-4 text-[#06104d] cursor-pointer hover:text-blue-600 hover:underline transition-colors flex items-center justify-center gap-2 text-1xl font-bold "
      >
        send via sms
      </button>
    </div>
  );
};

export default EmailForm;
