"use client";
import React from "react";
import { useForm } from "react-hook-form";
// import { ChevronRight } from 'lucide-react';

const OtpPageForm = ({
  setCurrentForm,
}: {
  setCurrentForm: (form: string) => void;
}) => {
  const { register, handleSubmit } = useForm();

  const otpSubmit = async (data: any) => {
    console.log(data);
    setCurrentForm("newPassword");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold ">Enter OTP</h2>
      <p className="text-gray-600 mt-2">
        Enter the OTP sent to your email or phone number.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit(otpSubmit)}>
        <div>
          <label className="block text-md font-medium text-black mb-1">
            OTP
          </label>
          <div className="flex">
            <input
              className="border border-black w-full p-4"
              type="text"
              {...register("otp", { required: "otp is necessary" })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white rounded-md py-3 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default OtpPageForm;
